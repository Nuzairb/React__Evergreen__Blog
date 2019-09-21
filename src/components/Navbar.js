import React, { Component } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';


class Navigation extends Component {
  render() {
    return (
      <Container>
        <Navbar  fixed="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-uppercase font-weight-bold">
              <Nav.Link className="mx-2 text-dark" href="#home">Home</Nav.Link>
              <Nav.Link className="mx-2 text-dark" href="#newest">Newest</Nav.Link>
              <Nav.Link className="mx-2 text-dark" href="#about">About</Nav.Link>
              <Nav.Link className="mx-2 text-dark" href="#blog">Blog</Nav.Link>
              <Nav.Link className="mx-2 text-dark" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>  
      </Container>
    );
  }
}

export default Navigation;
