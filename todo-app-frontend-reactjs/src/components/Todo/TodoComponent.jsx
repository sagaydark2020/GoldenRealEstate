import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import TodoListServices from '../../service/TodoListServices';
import {  Row, Col } from 'react-bootstrap';
import BuildingListServices from '../../service/BuildingListServices';
import UserListServices from '../../service/UserListServices';
class TodoComponent extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            buildings: [] , 
            users: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
            
        let buildings = [];
        BuildingListServices.retrieveAllBuildings()//HARDCODED
        .then(
            response => {
                console.log(response);
                this.setState({ buildings: response.data })
            }
        )
        UserListServices.retrieveAllUsers()//HARDCODED
        .then(
            response => {
                console.log(response);
                this.setState({ users: response.data })
            }
        )
        
        if (this.state.id == -1) {
        
       
            return
        }
        TodoListServices.retrieveTodo(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                description: response.data.description,
                buildings : [response.data.building],
                users : [response.data.user]
            }))

    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.description = 'Enter a Project Name'
        } else if (!values.description) {
            errors.description = 'Enter Project Description'
        }

        return errors

    }

    onSubmit(values) {
        
        let todo = {
            id: this.state.id,
            name: values.name,
            description: values.description,
            buildingId : values.buildingName,
            userId : values.userName
        }

        if (this.state.id === -1) {
            TodoListServices.createTodo(todo)
                .then(() => this.props.history.push('/todo/-1'))
        } else {
            TodoListServices.updateTodo(this.state.id, todo)
                .then(() => this.props.history.push('/todo'))
        }

        
    }

    render() {

        let { description, name, id, buildingName, buildingId, userId} = this.state
        let stateCondition = this.state.id == -1 ? "Add Project" : "Edit Project"
        this.state.buildings.map((building) => buildingId=building.id)
        this.state.users.map((user) =>userId=user.id)
        console.log(userId)
        console.log(buildingId)
        return (
            <div className="container">
                 <h4> {stateCondition}</h4>
                <div className="containerForm">
                    <Formik
                        initialValues={{ id, name, description,buildingName, buildingName:buildingId, userName:userId }}
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
                                        <Field className="form-control" type="text" name="id2" hidden />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Row>
                                        <Col>
                                        <label>Project Name</label>
                                        </Col> <Col>
                                        <Field className="form-control" type="text" name="name" />
                                        </Col>
                                        </Row>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Row>
                                        <Col>
                                        <label>Project Description</label>
                                        </Col> <Col>
                                        <Field className="form-control" type="text" name="description" />
                                        </Col>
                                        </Row>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Row>
                                        <Col>
                                        <label htmlFor="building">Building Name</label>
                                        </Col> <Col>
                                          <Field className="form-control"
                                                component="select"
                                                id="buildingName"
                                                name="buildingName"
                                                multiple={false}
                                            >
                                            {this.state.buildings.map((building) => <option key={building.id}  value={building.id} >{building.buildingName}</option>)}
                                             </Field>
                                        </Col>
                                        </Row>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Row>
                                        <Col>
                                        <label htmlFor="assigned">Assigned to</label>
                                        </Col> <Col>
                                          <Field className="form-control"
                                                component="select"
                                                id="userName"
                                                name="userName"
                                                multiple={false}
                                            >
                                            {this.state.users.map((user) => <option key={user.id} value={user.id} >{user.userName}</option>)}
                                            
                                             </Field>
                                        </Col>
                                        </Row>
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

export default TodoComponent