import React, { Component } from 'react';
import TodoNavBar from './TodoNavBar';
import { Card, Row, Col, Navbar } from 'react-bootstrap';
import ListTodoComponent from './ListTodoComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoComponent from './TodoComponent';
class TodoApp extends Component {

    render() {
        return (<>
             <div className="bodyContainer">
                 <Row> 
                     <Col>
                      <Card className="headerLayout">
                            <Card.Body>
                            </Card.Body>
                        </Card> 
                    </Col>
                 </Row>
                 <Row>
                       <Col> <div className="container">
                        <Router>
                            <TodoNavBar/>
                            <Switch>
                                <Route path="/" exact component={ListTodoComponent} />
                                <Route path="/todo" exact  component={ListTodoComponent} />
                                <Route path="/todo/:id" component={TodoComponent} />
                            </Switch>
                        </Router>
                </div></Col>
                 </Row>
             </div>
              
              </>
        )
    }
}

export default TodoApp