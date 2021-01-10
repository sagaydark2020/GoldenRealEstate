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

    render() {
        return (
            <div className="container">
                <h3>All Todos</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Todo Name</th>
                                <th>Todo Description</th>
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