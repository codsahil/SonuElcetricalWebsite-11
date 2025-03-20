import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Here you would typically send the form data to your backend
      alert('Thank you for your message. We will get back to you soon!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }

    setValidated(true);
  };

  return (
    <div className="contact-page">
      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <Container>
            <h1>Contact Us</h1>
            <p>Get in touch with our team for all your electrical needs</p>
          </Container>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info py-5">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-map-marker-alt fa-3x"></i>
                  </div>
                  <Card.Title>Visit Us</Card.Title>
                  <p>123 Electrical Street<br />City, State 12345</p>
                  <p className="text-muted">Mon-Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-phone fa-3x"></i>
                  </div>
                  <Card.Title>Call Us</Card.Title>
                  <p>Main: (123) 456-7890<br />Support: (123) 456-7891</p>
                  <p className="text-muted">Emergency Service:<br />(123) 456-7899</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} className="mb-4">
              <Card className="contact-card h-100">
                <Card.Body className="text-center">
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope fa-3x"></i>
                  </div>
                  <Card.Title>Email Us</Card.Title>
                  <p>General Inquiries:<br />info@sonuelectrical.com</p>
                  <p className="text-muted">Customer Support:<br />support@sonuelectrical.com</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="text-center mb-4">Send Us a Message</h2>
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formName">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formEmail">
                          <Form.Label>Email Address</Form.Label>
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
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formPhone">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="formSubject">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter subject"
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a subject.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your message"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a message.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-center mt-4">
                      <Button variant="primary" type="submit" size="lg">
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h3 className="mb-4">Our Location</h3>
          <div className="map-placeholder">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14929.997409284985!2d79.09057371562499!3d20.105009999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2c0f0c9c90d93%3A0x37541c6b7f89acb7!2sBhadravati%2C%20Maharashtra%20442902!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sonu Electrical Location"
            ></iframe>
            <div className="map-address-overlay">
              <h5>Sonu Electrical</h5>
              <p>Main Road, Near Bus Stand, Bhadrawati, Maharashtra 442902</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="accordion" id="contactFaq">
                <div className="accordion-item mb-3">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How quickly can I expect a response to my inquiry?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#contactFaq">
                    <div className="accordion-body">
                      We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our emergency service number.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Do you provide services outside your listed service areas?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#contactFaq">
                    <div className="accordion-body">
                      Yes, we can provide services outside our primary service areas for larger projects. Please contact us with your specific location and requirements for more information.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How can I request a quote for my electrical project?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#contactFaq">
                    <div className="accordion-body">
                      You can request a quote by filling out our contact form, calling our main number, or sending an email with details of your project. For more accurate quotes, please provide as much information as possible about your requirements.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Do you offer emergency electrical services?
                    </button>
                  </h3>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#contactFaq">
                    <div className="accordion-body">
                      Yes, we offer 24/7 emergency electrical services. For urgent electrical issues, please call our emergency service number: (123) 456-7899.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-4">Contact us today for a free consultation and quote on your electrical project.</p>
          <Row className="justify-content-center">
            <Col md={4} className="mb-3 mb-md-0">
              <div className="cta-box p-3 bg-white text-dark rounded">
                <i className="fas fa-phone fa-2x mb-3 text-primary"></i>
                <h4>Call Us</h4>
                <p className="mb-0">9656646646</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="cta-box p-3 bg-white text-dark rounded">
                <i className="fas fa-envelope fa-2x mb-3 text-primary"></i>
                <h4>Email Us</h4>
                <p className="mb-0">sonuElectrical@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Address Section */}
      <section className="footer-address py-4 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt fa-2x me-3 text-primary"></i>
                <div>
                  <h5 className="mb-1">Sonu Electrical</h5>
                  <p className="mb-0">Main Road, Near Bus Stand, Bhadrawati, Maharashtra 442902</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-md-end">
                <div className="social-icons">
                  <a href="#" className="me-3 text-white"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="me-3 text-white"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="me-3 text-white"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <p className="small mb-0">© 2023 Sonu Electrical. All rights reserved.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Contact;