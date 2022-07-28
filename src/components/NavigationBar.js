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
        <Navbar.Brand href="/home" className="ms-1 fs-5">FitLoc</Navbar.Brand>
        <Navbar.Toggle aria-controls="justify-content-end"/>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-0 fs-5">
            <Nav.Item>
              <Nav.Link >
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link >
                <Link to="/signup" className="text-decoration-none text-white">
                  SignUp
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/login" className="text-decoration-none text-white">
                  Login
                </Link>
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