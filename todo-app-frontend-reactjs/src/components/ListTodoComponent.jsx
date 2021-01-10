import React, { Component } from 'react';
import TodoListServices from '../service/TodoListServices';
class ListTodoComponent extends Component {

    constructor(props) {
        super(props)        
        this.state = {
            todos: [],
            message: null
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
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

    deleteTodoClicked(id) {
        TodoListServices.deleteTodo(id)
            .then(
                response => {
                    this.setState({ message: `Delete of Todo ${id} Successful` })
                    this.refreshTodos()
                }
            )
    
    }

    render() {
        return (
            <div className="container">
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Todo</th>
                                <th>Details</th>
                                <th>Delete</th>
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
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent