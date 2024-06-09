import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: 'Black' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'white' }}>Profile</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white' }}>Diplomes & Certification</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
