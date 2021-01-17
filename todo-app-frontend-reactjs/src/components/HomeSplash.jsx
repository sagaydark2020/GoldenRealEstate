import React, { Component } from 'react';
import {Button, Card} from 'react-bootstrap';
import image1 from '../img/AddManageProjects.png'
import image2 from '../img/FilterProjectsMini.png'
import image3 from '../img/ManagePropertiesMini.png'
import image4 from '../img/ManageUsersMini.png'
import image5 from '../img/ValidationsMini.png'
class HomeSplash extends Component {
    render() {
        return ( 
       
          <div className="container">
               <h4>Welcome </h4>
               <h5>Manage Projects across Buildings Easily</h5>
                <Card bg="warning" style={{ width: '28rem' , padding: '5px' }}>
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                    <Card.Title>Projects</Card.Title>
                      Manage Projects, Assign per user per property.
                      Keep Track of everything that matters.
                  </Card.Body>
                </Card>
                &nbsp;
                <Card bg="primary" style={{ width: '28rem' , padding: '5px'}}>
                  <Card.Img variant="top" src={image2} />
                  <Card.Body>
                    <Card.Title>Projects::Filter</Card.Title>
                      Performed quick search on various filters on project status, property or user
                  </Card.Body>
                </Card>
                &nbsp;
                <Card bg="success" style={{ width: '28rem' , padding: '5px'}}>
                  <Card.Img variant="top" src={image3} />
                  <Card.Body>
                    <Card.Title>Properties</Card.Title>
                      Manage Properties across various locations
                  </Card.Body>
                </Card>
                &nbsp;
                <Card bg="info" style={{ width: '28rem' , padding: '5px'}}>
                  <Card.Img variant="top" src={image4} />
                  <Card.Body>
                    <Card.Title>Users</Card.Title>
                       Manage Users who perform the projects assigned to them
                  </Card.Body>
                </Card>
                &nbsp;
                <Card bg="danger" style={{ width: '28rem' , padding: '5px'}}>
                  <Card.Img variant="top" src={image5} />
                  <Card.Body>
                    <Card.Title>Validations</Card.Title>
                      Validations are appropriately inplace for ease of use and data integrity
                  </Card.Body>
                </Card>
          </div>
        )
    }
}

export default HomeSplash