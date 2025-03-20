import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services-page">
      {/* Services Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay">
          <Container>
            <h1>Our Electrical Services</h1>
            <p>Professional electrical solutions for residential and commercial needs</p>
          </Container>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services py-5">
        <Container>
          <h2 className="text-center mb-5">Comprehensive Electrical Services</h2>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src="https://media.istockphoto.com/id/937114374/photo/electrician-technician-at-work-with-safety-equipment-on-a-residential-electrical-system.jpg?s=612x612&w=0&k=20&c=To_85epzEmg6reJyWhJZvC4i0FKCgY9FDFvLMv9wNJg=" onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}} />
                <Card.Body>
                  <Card.Title>Residential Services</Card.Title>
                  <Card.Text>
                    Complete electrical solutions for your home, from installation to maintenance.
                  </Card.Text>
                  <ul className="service-list">
                    <li>Home wiring and rewiring</li>
                    <li>Electrical panel upgrades</li>
                    <li>Lighting installation</li>
                    <li>Ceiling fan installation</li>
                    <li>Outlet and switch installation</li>
                    <li>Home safety inspections</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src="https://starneselectricllc.com/wp-content/uploads/Powering-Up-Your-Business-Hiring-a-Commercial-Electrician.webp" onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}} />
                <Card.Body>
                  <Card.Title>Commercial Services</Card.Title>
                  <Card.Text>
                    Reliable electrical services for businesses of all sizes.
                  </Card.Text>
                  <ul className="service-list">
                    <li>Commercial wiring</li>
                    <li>Lighting systems</li>
                    <li>Power distribution</li>
                    <li>Emergency backup systems</li>
                    <li>Energy efficiency solutions</li>
                    <li>Code compliance updates</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/050/680/934/small/worker-focused-on-machinery-operations-inside-a-large-manufacturing-facility-during-daytime-work-hours-photo.jpg" onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}} />
                <Card.Body>
                  <Card.Title>Industrial Services</Card.Title>
                  <Card.Text>
                    Heavy-duty electrical solutions for industrial facilities.
                  </Card.Text>
                  <ul className="service-list">
                    <li>Industrial power systems</li>
                    <li>Machine wiring</li>
                    <li>Control panel installation</li>
                    <li>Motor controls</li>
                    <li>Preventive maintenance</li>
                    <li>Troubleshooting and repair</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src="https://4.imimg.com/data4/GN/LD/MY-28033661/0-500x500.jpg" onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}} />
                <Card.Body>
                  <Card.Title>Emergency Services</Card.Title>
                  <Card.Text>
                    24/7 emergency electrical services when you need them most.
                  </Card.Text>
                  <ul className="service-list">
                    <li>Power outage response</li>
                    <li>Electrical fire safety</li>
                    <li>Circuit breaker issues</li>
                    <li>Electrical hazard elimination</li>
                    <li>Emergency lighting</li>
                    <li>Rapid response team</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src="https://harithatech.com/wp-content/uploads/2023/08/Premium-Photo-_-Smart-home-interface-with-augmented-realty-of-iot-object-interior-design.jpg" onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}} />
                <Card.Body>
                  <Card.Title>Smart Home Solutions</Card.Title>
                  <Card.Text>
                    Modern electrical solutions for the connected home.
                  </Card.Text>
                  <ul className="service-list">
                    <li>Smart lighting installation</li>
                    <li>Home automation systems</li>
                    <li>Security system wiring</li>
                    <li>Smart thermostat installation</li>
                    <li>Voice-controlled electrical systems</li>
                    <li>Energy monitoring solutions</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card h-100">
                <Card.Img variant="top" src="https://media.licdn.com/dms/image/v2/D5612AQGFno1czt_LcQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1734016545042?e=2147483647&v=beta&t=DWpmrIyTna4meN4SdI6enE2xxWBj4IOKggjtDMRqWBs" onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}} />
                <Card.Body>
                  <Card.Title>Energy Efficiency</Card.Title>
                  <Card.Text>
                    Solutions to reduce energy consumption and costs.
                  </Card.Text>
                  <ul className="service-list">
                    <li>Energy audits</li>
                    <li>LED lighting upgrades</li>
                    <li>Energy-efficient wiring</li>
                    <li>Power factor correction</li>
                    <li>Solar panel installation</li>
                    <li>Energy management systems</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Process Section */}
      <section className="service-process py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Our Service Process</h2>
          <Row className="process-timeline">
            <Col md={3} className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
              <p>We discuss your electrical needs and provide expert advice.</p>
            </Col>
            <Col md={3} className="process-step">
              <div className="step-number">2</div>
              <h4>Assessment</h4>
              <p>Our technicians assess the site and identify requirements.</p>
            </Col>
            <Col md={3} className="process-step">
              <div className="step-number">3</div>
              <h4>Implementation</h4>
              <p>We perform the electrical work with precision and care.</p>
            </Col>
            <Col md={3} className="process-step">
              <div className="step-number">4</div>
              <h4>Quality Check</h4>
              <p>Final inspection to ensure everything meets our high standards.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section py-5">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How quickly can you respond to an emergency?</Accordion.Header>
              <Accordion.Body>
                We offer 24/7 emergency services and typically respond within 1-2 hours for urgent situations, depending on your location and the current demand.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Are your electricians licensed and insured?</Accordion.Header>
              <Accordion.Body>
                Yes, all our electricians are fully licensed, insured, and certified. We maintain strict standards for our team to ensure the highest quality of service.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Do you provide free estimates?</Accordion.Header>
              <Accordion.Body>
                Yes, we provide free estimates for most electrical projects. Contact us to schedule an assessment, and we'll provide a detailed quote before any work begins.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>What warranties do you offer on your work?</Accordion.Header>
              <Accordion.Body>
                We stand behind our work with a comprehensive warranty. Most of our electrical services come with a 1-year warranty on labor, while parts are covered by manufacturer warranties.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How can I reduce my electrical bills?</Accordion.Header>
              <Accordion.Body>
                We offer energy efficiency assessments and can recommend several solutions such as LED lighting upgrades, smart home systems, improved wiring, and energy-efficient appliances to help reduce your electrical consumption.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </div>
  );
}

export default Services;