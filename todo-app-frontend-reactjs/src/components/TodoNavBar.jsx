
import React, { Component } from 'react';
import { Navbar , Nav, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router , Link} from 'react-router-dom'


class TodoNavBar extends Component {
    render() {
        return (<> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="##"> Golden Real Estate </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Properties" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Add Property </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">View Property</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title=" User Management" id="collasible-nav-dropdown">
                    <Link to="/todo/-1">
                     <NavDropdown.Item href="/todo/-1">Add User </NavDropdown.Item>
                    </Link>
                    <Link to="/todo/">
                     <NavDropdown.Item href="#action/3.2">View Users</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <NavDropdown title="Todo" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/todo/:id">Add Todo </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Assign Todo</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">View Todo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Todo By Person</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Todo By Buildings</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
           
              </>
        )
    }
}

export default TodoNavBar