import React, { Component } from 'react';
import {  Row, Col, Nav, Navbar } from 'react-bootstrap';
import ListTodoComponent from './todo/ListTodoComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoComponent from './todo/TodoComponent';
import ListUserComponent from './user/ListUserComponent';
import UserComponent from './user/UserComponent';
import BuildingComponent from './buildings/BuildingComponent';
import ListBuildingsComponent from './buildings/ListBuildingsComponent';
import AppFooter from './utilities/AppFooter';
import HomeSplash from './HomeSplash';

class TodoApp extends Component {

  componentDidMount() {
    document.title = 'Golden Real Estate - Project Planning ';
  }

    render() {
        return (<>
                <div className="containerOuterGiantGlass">  
                  <div className="containerOuterGlass">
                      <div className="bodyContainer2">
                        <div className="headerLayout"> </div> 
                        <div className="bodyContainer3">
                          <Navbar bg="primary" variant="light">
                          <Navbar.Brand></Navbar.Brand>
                        </Navbar>
                        </div> 
                        <div className="bodyContainer">
                            <Router>
                                <Row>
                                    <Col xs lg="2">
                                      <div className="menu-container">
                                        <Nav defaultActiveKey="/" className="flex-column">
                                            <Nav.Link href="/"> Home </Nav.Link>
                                            <Nav.Link href="/todo/"> Project </Nav.Link>
                                            <Nav.Link href="/buildings/"> Property </Nav.Link>
                                            <Nav.Link href="/user/"> People </Nav.Link>
                                          </Nav>
                                      </div>                           
                                    </Col>
                                      <Col>  
                                          <div className="content-container">
                                              <Switch>
                                                <Route path="/" exact component={HomeSplash} />
                                                <Route path="/todo" exact  component={ListTodoComponent} />
                                                <Route path="/todo/:id" component={TodoComponent} />
                                                <Route path="/user" exact  component={ListUserComponent} />
                                                <Route path="/user/:id" component={UserComponent} />
                                                <Route path="/buildings" exact  component={ListBuildingsComponent} />
                                                <Route path="/buildings/:id" component={BuildingComponent} />
                                            </Switch>
                                          </div>
                                      </Col>
                                </Row>        
                            </Router>  
                        </div>
                        <Row>
                            <Col> 
                                <AppFooter/>
                               </Col>
                        </Row>
                      </div>
                  </div>
                </div>
              </>
        )
    }
}

export default TodoApp