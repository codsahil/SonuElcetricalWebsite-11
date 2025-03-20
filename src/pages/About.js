import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <Container>
            <h1>About Sonu Electrical</h1>
            <p>Your trusted partner for quality electrical solutions since 2010</p>
          </Container>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2>Our Story</h2>
              <p className="lead">Founded in 2010, Sonu Electrical has grown from a small local business to a trusted name in the electrical industry.</p>
              <p>
                What started as a one-person operation has evolved into a team of skilled professionals dedicated to providing top-quality electrical services and products. Our journey has been defined by a commitment to excellence, safety, and customer satisfaction.
              </p>
              <p>
                Over the years, we've expanded our services to meet the growing needs of our clients, embracing new technologies and innovative solutions while maintaining our core values of integrity, quality, and reliability.
              </p>
              <p>
                Today, Sonu Electrical serves residential, commercial, and industrial clients with a comprehensive range of electrical services and products, continuing our mission to be the most trusted electrical partner in the region.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://content.jdmagicbox.com/v2/comp/hyderabad/v5/040pxx40.xx40.221019153726.e1v5/catalogue/laxmi-electrical-and-sanitary-shaikpet-hyderabad-electrical-shops-sss9fjh2fj.jpg" 
                alt="Our Story" 
                className="img-fluid rounded shadow"
                onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "400px"; e.target.style.width = "100%";}}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission py-5 bg-light">
        <Container className="text-center">
          <h2 className="mb-4">Our Mission</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <p className="lead">
                To provide exceptional electrical services and products that exceed customer expectations, prioritize safety, and embrace innovation.
              </p>
              <div className="mission-values mt-5">
                <Row>
                  <Col md={4} className="mb-4">
                    <div className="value-icon mb-3">
                      <i className="fas fa-medal fa-3x"></i>
                    </div>
                    <h4>Excellence</h4>
                    <p>We strive for excellence in every project, no matter the size.</p>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="value-icon mb-3">
                      <i className="fas fa-shield-alt fa-3x"></i>
                    </div>
                    <h4>Safety</h4>
                    <p>Safety is our top priority in all our services and products.</p>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="value-icon mb-3">
                      <i className="fas fa-handshake fa-3x"></i>
                    </div>
                    <h4>Integrity</h4>
                    <p>We conduct our business with honesty and transparency.</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="our-team py-5">
        <Container>
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="team-card h-100">
                <Card.Img 
                  variant="top" 
                  src="/images/team/ceo.jpg" 
                  onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "250px";}}
                />
                <Card.Body className="text-center">
                  <Card.Title>Sonu Bonagiri</Card.Title>
                  <p className="team-position">Founder & CEO</p>
                  <p className="team-bio">
                    With over 20 years of experience in the electrical industry, Sonu leads our company with vision and expertise.
                  </p>
                  <div className="social-icons">
                    <a href="#" className="me-2"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="team-card h-100">
                <Card.Img 
                  variant="top" 
                  src="/images/team/operations.jpg" 
                  onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "250px";}}
                />
                <Card.Body className="text-center">
                  <Card.Title>Ashok Bonagiri</Card.Title>
                  <p className="team-position">Operations Manager</p>
                  <p className="team-bio">
                    Priya ensures our day-to-day operations run smoothly and efficiently to deliver the best service.
                  </p>
                  <div className="social-icons">
                    <a href="#" className="me-2"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="team-card h-100">
                <Card.Img 
                  variant="top" 
                  src="/images/team/technical.jpg" 
                  onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "250px";}}
                />
                <Card.Body className="text-center">
                  <Card.Title>Sonu</Card.Title>
                  <p className="team-position">Technical Director</p>
                  <p className="team-bio">
                    Rajesh brings technical expertise and innovation to all our electrical projects and solutions.
                  </p>
                  <div className="social-icons">
                    <a href="#" className="me-2"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="team-card h-100">
                <Card.Img 
                  variant="top" 
                  src="/images/team/customer.jpg" 
                  onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "250px";}}
                />
                <Card.Body className="text-center">
                  <Card.Title>Sonu Bonagiri</Card.Title>
                  <p className="team-position">Customer Relations</p>
                  <p className="team-bio">
                    Anita ensures our clients receive exceptional service and support throughout their journey with us.
                  </p>
                  <div className="social-icons">
                    <a href="#" className="me-2"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications Section */}
      <section className="certifications py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Certifications</h2>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="certification-logos text-center">
                <Row>
                  <Col xs={6} md={3} className="mb-4">
                    <div className="certification-logo p-3 bg-white rounded shadow-sm">
                      <img 
                        src="https://www.eliteelectrical.co.uk/wp-content/uploads/2022/10/NICEIC-Enrolment-Certificate-page-001-scaled.jpg" 
                        alt="Electrical Safety Certification" 
                        className="img-fluid"
                        onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "100px"; e.target.style.width = "100%";}}
                      />
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="mb-4">
                    <div className="certification-logo p-3 bg-white rounded shadow-sm">
                      <img 
                        src="https://do1jvmih5t6vs.cloudfront.net/userfiles/images/staticpage/iso.jpg" 
                        alt="Quality Management" 
                        className="img-fluid"
                        onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "100px"; e.target.style.width = "100%";}}
                      />
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="mb-4">
                    <div className="certification-logo p-3 bg-white rounded shadow-sm">
                      <img 
                        src="https://pdf.ac/17WBVW" 
                        alt="Professional Association" 
                        className="img-fluid"
                        onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "100px"; e.target.style.width = "100%";}}
                      />
                    </div>
                  </Col>
                  <Col xs={6} md={3} className="mb-4">
                    <div className="certification-logo p-3 bg-white rounded shadow-sm">
                      <img 
                        src="/images/certifications/cert4.png" 
                        alt="Environmental Compliance" 
                        className="img-fluid"
                        onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "100px"; e.target.style.width = "100%";}}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <p className="text-center mt-4">
                Our team maintains the highest industry certifications and standards to ensure quality and safety in all our work.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Milestones Section */}
      <section className="milestones py-5">
        <Container>
          <h2 className="text-center mb-5">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2010</h4>
                <p>Sonu Electrical was founded as a small residential electrical service provider.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2013</h4>
                <p>Expanded services to include commercial electrical solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2015</h4>
                <p>Opened our first retail store for electrical products.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2017</h4>
                <p>Added industrial electrical services to our portfolio.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2019</h4>
                <p>Launched our smart home electrical solutions division.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Expanded to multiple locations and launched our online store.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Today</h4>
                <p>Continuing to grow and innovate while maintaining our commitment to quality and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;