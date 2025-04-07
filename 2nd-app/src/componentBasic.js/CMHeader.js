import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CMHeader = () =>{
    return(
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#home">CodeMind-Tutorial</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">HTML</Nav.Link>
        <Nav.Link href="#link">JavaScript</Nav.Link>
        <Nav.Link href="#link">React</Nav.Link>
        <NavDropdown title="Other" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Java</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Python
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">.Net</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Angular
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}
export default CMHeader;