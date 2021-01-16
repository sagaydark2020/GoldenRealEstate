import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserListServices from '../../service/UserListServices';
import { Row , Col} from 'react-bootstrap'
class UserComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            userName: '' ,
            userEmail: ''
        }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        UserListServices.retrieveUser(this.state.id)
            .then(response => this.setState({
                userName: response.data.userName,
                userEmail: response.data.userEmail
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.userName) {
            errors.userName = 'Enter User Name'
        } else if (!values.userEmail ) {
            errors.description = 'Enter valid email for the User'
        } 

        return errors

    }

     handleReset = (resetForm) => {
        if (window.confirm('Reset?')) {
          resetForm();
        }
      };

    onSubmit(values) {

        let users = {
            id: this.state.id,
            userName: values.userName,
            userEmail: values.userEmail
        }

        if (this.state.id === -1) {
            UserListServices.createUser(users)
                .then(() => this.props.history.push('/user/-1'))
        } else {
            UserListServices.updateUser(this.state.id, users)
                .then(() => this.props.history.push('/user'))
        }

        console.log(values);
    }

    render() {

        let { userName, userEmail, id } = this.state
        let stateCondition = this.state.id == -1 ? "Add User" : "Edit User"
        return (
            <div className="container">
                <h4> {stateCondition} </h4> 
                <div className="containerForm">
                    <Formik
                        initialValues={{ id, userName, userEmail }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                           
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="id" hidden />
                                    </fieldset>
                                    <fieldset className="form-group">
                                    <Row>
                                        <Col>
                                        <label>Username</label>
                                        </Col><Col>
                                        <Field className="form-control" type="text" name="userName" />
                                        </Col>
                                        </Row>
                                    </fieldset>
                                    <fieldset className="form-group">
                                    <Row>
                                        <Col>
                                        <label>UserEmail</label>
                                        </Col><Col>
                                        <Field className="form-control" type="text" name="userEmail" />
                                        </Col></Row>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                    &nbsp;  
                                     <button  className="btn btn-warning"  type="reset"
                                    onClick={this.handleReset.bind(null, props.resetForm)}
                                    type="button"
                                  >
                                    Reset
                                  </button>
                                </Form>
                              
                            )
                        }
                    </Formik>
                   
                </div>
                
            </div>
        )
    }       
}

export default UserComponent