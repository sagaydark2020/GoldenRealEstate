import React, { Component } from 'react';
import TodoNavBar from './TodoNavBar';
import { Card, Row, Col, Navbar } from 'react-bootstrap';
import ListTodoComponent from './todo/ListTodoComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoComponent from './todo/TodoComponent';
import ListUserComponent from './user/ListUserComponent';
import UserComponent from './user/UserComponent';
import BuildingComponent from './buildings/BuildingComponent';
import ListBuildingsComponent from './buildings/ListBuildingsComponent';

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
                                <Route path="/user" exact  component={ListUserComponent} />
                                <Route path="/user/:id" component={UserComponent} />
                                <Route path="/buildings" exact  component={ListBuildingsComponent} />
                                <Route path="/buildings/:id" component={BuildingComponent} />
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