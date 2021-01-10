import React, { Component } from 'react';
import TodoListServices from '../service/TodoListServices';
class ListTodoComponent extends Component {

    constructor(props) {
        super(props)
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
                                <th>Todo Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Learn Full stack with Spring Boot and Angular</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent