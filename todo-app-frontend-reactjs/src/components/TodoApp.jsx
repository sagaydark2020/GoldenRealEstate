import React, { Component } from 'react';
import TodoNavBar from './TodoNavBar';
import { Card, Row, Col } from 'react-bootstrap';
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
                        <Col>
                 <TodoNavBar/>
                         </Col>
                 </Row>
                 <Row>
                     <Col> <div className="container  "> 
                     &nbsp;
                     <div class="row">
    <div class="col-sm-6">
        <div class="card text-white bg-primary mb-4">
            <div class="card-body">
                <h5 class="card-title"> Open Todo </h5>
                <p class="card-text">  5 </p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card text-white bg-secondary mb-4">
            <div class="card-body">
                <h5 class="card-title"> Closed </h5>
                <p class="card-text"> 150 </p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card text-white bg-success mb-4">
            <div class="card-body">
                <h5 class="card-title"> UnAssigned Todo </h5>
                <p class="card-text"> 30 </p>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="card text-white bg-danger mb-4">
            <div class="card-body">
                <h5 class="card-title"> UnAssigned People </h5>
                <p class="card-text"> 3 </p>
            </div>
        </div>
    </div>
   
</div>
    </div>
    </Col>
                     <Col> <div className="containerTrans">
                   
                </div></Col>
                 </Row>
                 
             </div>
              
              </>
        )
    }
}

export default TodoApp