import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes - in a real app, you'd validate with a backend
      if (formData.email === 'admin@sonuelectrical.com' && formData.password === 'password123') {
        // Success - would redirect or set auth state in a real app
        window.location.href = '/';
      } else {
        setError('Invalid email or password. Please try again.');
      }
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="login-page">
      <section className="login-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="login-card">
                <Card.Body className="p-4 p-md-5">
                  <div className="text-center mb-4">
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="text-muted">Sign in to your Sonu Electrical account</p>
                  </div>
                  
                  {error && <Alert variant="danger">{error}</Alert>}
                  
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        label="Remember me"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                    </div>
                    
                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 login-btn" 
                      disabled={loading}
                    >
                      {loading ? 'Signing in...' : 'Sign In'}
                    </Button>
                    
                    <div className="text-center mt-4">
                      <p className="mb-0">Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              
              <div className="text-center mt-4">
                <Link to="/" className="back-to-home">
                  <i className="fas fa-arrow-left me-2"></i>Back to Home
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Login;