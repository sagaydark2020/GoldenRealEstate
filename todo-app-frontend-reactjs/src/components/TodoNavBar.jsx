
import React, { Component } from 'react';
import { Navbar , Nav, NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router , Link} from 'react-router-dom'


class TodoNavBar extends Component {
    render() {
        return (<> 
        <Navbar collapseOnSelect expand="lg" bg="dark" className="customNavBar" variant="dark">
            <Navbar.Brand href="##"> Golden Real Estate </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Properties" id="collasible-nav-dropdown">
                    <Link to="/buildings/-1">
                        <NavDropdown.Item href="/buildings/-1">Add Property </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/buildings/">
                        <NavDropdown.Item href="/buildings/">View Property</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <NavDropdown title=" User Management" id="collasible-nav-dropdown">
                    <Link to="/user/-1">
                        <NavDropdown.Item href="/user/-1">Add User </NavDropdown.Item>
                    </Link>
                    <Link to="/user/">
                        <NavDropdown.Item href="/user/">View Users</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                <NavDropdown title="Project" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/todo/-1">Add Todo </NavDropdown.Item>
                    <NavDropdown.Item href="/todo/">View Todo</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
           
              </>
        )
    }
}

export default TodoNavBar