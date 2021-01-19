import React, { Component } from 'react';
import TodoListServices from '../../service/TodoListServices';
import {  Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BuildingListServices from '../../service/BuildingListServices';
import UserListServices from '../../service/UserListServices';
class ListTodoComponent extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            todos: [],
            showfilter:'',
            message: null
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.btnFilterClicked = this.btnFilterClicked.bind(this)
        this.btnFilterSearchSubmit = this.btnFilterSearchSubmit.bind(this)
    }

    componentDidMount() {
        this.refreshTodos();
        this.fetchDependencies();
    }

    
    fetchDependencies() {
        let buildings = [];
        BuildingListServices.retrieveAllBuildings() //HARDCODED
            .then(
                response => {
                    console.log("Response from Retrieve Buildings : {} ", response.data);
                    this.setState({ buildings: response.data });
                }
            );
        UserListServices.retrieveAllUsers() //HARDCODED
            .then(
                response => {
                    console.log("Response from Retrieve Users : {} ", response.data);
                    this.setState({ users: response.data });
                }
            );
    }

    refreshTodos() {
        TodoListServices.retrieveAllTodos()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ todos: response.data })
                }
            )
    }

    btnFilterClicked() {
        this.state.showfilter=!this.state.showfilter
        let todo = {
        }
        TodoListServices.filterByCriteria(todo)//HARDCODED
        .then(
            response => {
                console.log(response);
                this.setState({ todos: response.data })
            }
        )
    }

    
    btnFilterSearchSubmit(values) {
        
        let todo = { 
            buildingId : values.buildingName,
            userId : values.userName,
            projectProgress : values.projectProgress
        }
        if (values.buildingName==-1) {
            delete todo['buildingId']
        } 
        if (values.userName==-1) {
            delete todo['userId']
        } 
        if (values.projectProgress==-1) {
            delete todo['projectProgress']
        } 
        TodoListServices.filterByCriteria(todo)//HARDCODED
        .then(
            response => {
                console.log(response);
                this.setState({ todos: response.data })
            }
        )

    }
    
    deleteTodoClicked(id, name) {
        TodoListServices.deleteTodo(id)
            .then(
                response => {
                    this.setState({ message: `Delete of Todo ${name} Successful` })
                    this.refreshTodos()
                }
            )    
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todo/${id}`)
    }

    addTodoClicked() {
        this.props.history.push(`/todo/-1`)
    }

    render() {
        
        let btnDescription = this.state.showfilter == '' ? "Show Filters" : "Hide Filters"
        return (
            <div className="container">
                    <h4> Projects </h4>
                    <div className="container">
                        <button className="btn btn-primary" onClick={this.addTodoClicked}>Add Project</button>&nbsp;
                        <button className="btn btn-primary" onClick={this.btnFilterClicked}>{btnDescription}</button>&nbsp;
                        {this.state.showfilter && (
                    <div className="containerSearchForm">
                              <Formik
                        initialValues={{}}
                        //initialValues={{ id, name, description,buildingName}}
                        onSubmit={this.btnFilterSearchSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                        
                    >
                        {
                           
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                   <Row>
                                    <fieldset className="form-group">
                                        <Field className="form-control" type="text" name="id" hidden />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Col>
                                        <label htmlFor="building">&nbsp;Property</label>
                                        </Col> <Col>
                                          <Field className="form-control"
                                                component="select"
                                                id="buildingName"
                                                name="buildingName"
                                                multiple={false}
                                            >

                                            <option value="-1" selectedOption>Filter By Property</option>
                                            {this.state.buildings.map((building) => <option key={building.id}  value={building.id} >{building.buildingName}</option>)}
                                          
                                             </Field>
                                        </Col>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Col>
                                        <label htmlFor="assigned">&nbsp;People</label>
                                        </Col> <Col>
                                          <Field className="form-control"
                                                component="select"
                                                id="userName"
                                                name="userName"
                                                multiple={false}
                                            >
                                            <option value="-1" selectedOption>Filter By User</option>
                                            {this.state.users.map((user) => <option key={user.id} value={user.id} >{user.userName}</option>)}
                                            
                                             </Field>
                                        </Col>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Col>
                                        <label htmlFor="status">&nbsp;Status</label>
                                        </Col> <Col>
                                          <Field className="form-control"
                                                component="select"
                                                id="projectProgress"
                                                name="projectProgress"
                                                multiple={false}
                                                selectedOption="INPROGRESS"
                                            >
                                             <option value="-1"  selectedOption>Filter By Status</option>
                                             <option  key="NEW"  value="NEW" >New</option>
                                             <option  key="INPROGRESS" value="INPROGRESS" >In Progress</option>
                                             <option key="COMPLETED" value="COMPLETED" >Completed</option>
                                            
                                             </Field>
                                        </Col>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <Col>
                                         Search
                                        </Col> <Col>
                                        <button className="btn btn-secondary btn-lg" type="submit">Filter</button>
                                        </Col>
                                    </fieldset>
                                    </Row>
                                   
                                </Form>
                            )
                        }
                    </Formik>

          
                          </div>
                        )}
                    </div>
                    <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Project Name</th>
                                <th>Project Description</th>
                                <th>Building</th>
                                <th>Assigned</th>
                                <th>Status</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.name}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.building.buildingName}</td>
                                            <td>{todo.user.userName}</td>
                                            <td>{todo.projectProgress}</td>
                                            <td><button className="btn btn-warning btn-xs" onClick={() => this.deleteTodoClicked(todo.id , todo.name)}>Delete</button></td>
                                            <td><button className="btn btn-success btn-xs" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>} 
            </div>
        )
    }
}

export default ListTodoComponent