import React, { Component } from 'react';
import ListTodoComponent from './ListTodoComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TodoComponent from './TodoComponent';
import TodoNavBar from './TodoNavBar';
import { Card, Row, Col } from 'react-bootstrap';
class TodoApp extends Component {
    render() {
        return (<>
             <div className="bodyContainer">
                 <Row> 
                     <Col>
                      <Card>
                            <Card.Body>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>
                <Row>
                        <Col>
                 <TodoNavBar/>
                         </Col>
                 </Row>
                 <Row>
                     <Col> <div className="container fluid"> </div></Col>
                     <Col> <div className="containerTrans">
                     <Router>
                    <Switch>
                        <Route path="/" exact component={ListTodoComponent} />
                        <Route path="/todo" exact component={ListTodoComponent} />
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