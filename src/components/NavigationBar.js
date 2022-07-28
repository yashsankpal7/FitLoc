import React from 'react';
import { Nav, Navbar, Container, Button ,Collapse} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tabss from './Tabs_';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: white;
    }
  }
  `;

const NavigationBar = () =>{

  const [open, setOpen] = useState(false);
  return(
    <>
    <Navbar  collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
      <Container fluid> 
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
          className="bg-dark btn-outline-dark"
          type="button"
          >
          <span className="navbar-toggler-icon"/>
        </Button>
        <Navbar.Brand href="/home" className="ms-1">FitLoc</Navbar.Brand>
        <Navbar.Toggle aria-controls="justify-content-end"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-0">
            <Nav.Item>
              <Nav.Link href="/">
                  Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup">
                SignUp
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Tabss open={open}/>
    </>
)
} 

export default NavigationBar