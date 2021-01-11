import React, { Component } from 'react';
import ListTodoComponent from './ListTodoComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoComponent from './TodoComponent';
import TodoNavBar from './TodoNavBar';
import { Card } from 'react-bootstrap';
class TodoApp extends Component {
    render() {
        return (<>
            
             <div>
             <Card>
                 <Card.Body>
                
                </Card.Body>
            </Card>
                 <TodoNavBar/>
             </div>
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