import React, { Component } from 'react';
import ListTodoComponent from './ListTodoComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoComponent from './TodoComponent';

class TodoApp extends Component {
    render() {
        return (<>
              <h1>ToDo Application</h1>
              <Router>
                    <Switch>
                        <Route path="/" exact component={ListTodoComponent} />
                        <Route path="/todo" exact component={ListTodoComponent} />
                        <Route path="/todo/:id" component={TodoComponent} />
                    </Switch>
                </Router>
              </>
        )
    }
}

export default TodoApp