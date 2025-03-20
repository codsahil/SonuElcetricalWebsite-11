import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function AppNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="navbar-custom py-3" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="fas fa-bolt text-primary me-2"></i>
          Sonu Electrical
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
            <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Link to="/login" className="btn btn-outline-primary login-button ms-2">
              <i className="fas fa-user me-2"></i>Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;