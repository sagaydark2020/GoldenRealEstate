import React, { Component } from 'react';
import ListTodoComponent from './ListTodoComponent';

class TodoApp extends Component {
    render() {
        return (<>
              <h1>ToDo Application</h1>
              <ListTodoComponent/>
              </>
        )
    }
}

export default TodoApp