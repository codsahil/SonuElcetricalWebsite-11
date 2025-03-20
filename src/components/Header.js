import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check login status when component mounts or location changes
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, [location]);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };
  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong>Sonu Electrical</strong>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/')}
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about')}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={isActive('/services')}
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/products" 
              className={isActive('/products')}
              onClick={() => setExpanded(false)}
            >
              Products
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/shop" 
              className={isActive('/shop')}
              onClick={() => setExpanded(false)}
            >
              Shop
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact')}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            
            {isLoggedIn ? (
              <Button 
                variant="outline-danger" 
                size="sm" 
                className="ms-lg-3 mt-2 mt-lg-0"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="ms-lg-3 mt-2 mt-lg-0"
                onClick={handleLogin}
              >
                Sign In
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;