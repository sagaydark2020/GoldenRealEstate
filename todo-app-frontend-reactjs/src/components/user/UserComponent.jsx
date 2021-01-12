import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserListServices from '../../service/UserListServices';

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
            errors.userName = 'Enter a user name'
        } else if (!values.userEmail.length ) {
            errors.description = 'Enter a valid email of the user'
        } 

        return errors

    }

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
        console.log(this.state)
       
        return (
            <div>
                <h3> Add New User </h3>
                <div className="container">
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
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="userName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>UserEmail</label>
                                        <Field className="form-control" type="text" name="userEmail" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
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