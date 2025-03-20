import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Improved login handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    try {
      // Set login status
      localStorage.setItem('isLoggedIn', 'true');
      
      // Force a page reload to ensure all components recognize the login state
      window.location.href = '/home';
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="login-card shadow">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="login-image-container">
                    <Image 
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92d63fd2-c769-4812-9710-0a5b091a83b9.png" 
                      alt="Electrical Logo" 
                      className="login-logo"
                      roundedCircle
                    />
                  </div>
                  <h2 className="login-title">Sonu Electrical</h2>
                  <p className="text-muted">Sign in to continue</p>
                </div>
                
                <div className="login-image-container mb-4">
                  <Image 
                    src="https://content.jdmagicbox.com/v2/comp/hyderabad/v5/040pxx40.xx40.221019153726.e1v5/catalogue/laxmi-electrical-and-sanitary-shaikpet-hyderabad-electrical-shops-sss9fjh2fj.jpg" 
                    alt="Electrical Work" 
                    className="login-image"
                  />
                </div>
                
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg">
                      Sign In
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;