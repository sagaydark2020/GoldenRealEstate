import React, { Component } from 'react';
import TodoListServices from '../../service/TodoListServices';
import { Row , Col, NavDropdown} from 'react-bootstrap'
class ListTodoComponent extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            todos: [],
            message: null
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTodos();
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
        return (
            
            <div className="container">
                  <h2> View Projects </h2>
                    <div className="container ">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Todo</th>
                                <th>Details</th>
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
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id , todo.name)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add Todo</button>
                    </div>
                    
                </div>
              
            </div>
        )
    }
}

export default ListTodoComponent