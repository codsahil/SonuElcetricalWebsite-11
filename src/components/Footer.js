import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <h5 className="mb-4">About Sonu Electrical</h5>
            <p>
              Providing quality electrical services and products since 2010. We are committed to excellence and customer satisfaction.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="mb-4">Our Services</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/services">Residential Electrical</Link></li>
              <li><Link to="/services">Commercial Electrical</Link></li>
              <li><Link to="/services">Industrial Solutions</Link></li>
              <li><Link to="/services">Electrical Maintenance</Link></li>
              <li><Link to="/services">Emergency Services</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                Main Road, Near Bus Stand, Bhadrawati, Maharashtra 442902             
               </li>
              <li>
                <i className="fas fa-phone"></i>
                (123) 456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                info@sonuelectrical.com
              </li>
              <li>
                <i className="fas fa-clock"></i>
                Mon-Sat: 9:00 AM - 7:00 PM
              </li>
            </ul>
          </Col>
          
          <Col md={3} sm={6}>
            <h5>Connect With Us</h5>
            <SocialIcons className="footer-social-icons" />
            <p className="mt-3">Follow us on social media for updates, tips, and special offers.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Sonu Electrical. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;