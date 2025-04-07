import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 const CodeMindTutorial = () =>{
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

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>HTML</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
<Button variant="primary">Go To Details</Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>JavaScript</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
<Button variant="primary">Go To Details</Button>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>React JS</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
<Button variant="primary">Go To Details</Button>
</Card.Body>
</Card>
        </div>
    )
 }
 export default CodeMindTutorial;