import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const electricalShopImages = [
    'https://content.jdmagicbox.com/v2/comp/hyderabad/v5/040pxx40.xx40.221019153726.e1v5/catalogue/laxmi-electrical-and-sanitary-shaikpet-hyderabad-electrical-shops-sss9fjh2fj.jpg',
    'https://content.jdmagicbox.com/comp/ramanathapuram/j7/9999p4567.4567.230913123608.b3j7/catalogue/everest-traders-aranmanai-salai-ramanathapuram-hardware-shops-ef8ozjv4vc.jpg',
    'https://content.jdmagicbox.com/v2/comp/vadodara/k2/0265px265.x265.190824184346.z5k2/catalogue/gopal-agro-and-electricals-vadodara-electrical-shops-3c9ge2nw2i.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % electricalShopImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div className="slider-container">
          {electricalShopImages.map((img, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="slide-overlay">
            <Container className="text-center text-white">
              <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
                Welcome to Sonu Electrical
              </h1>
              <p className="lead mb-5 animate__animated animate__fadeInUp">
                Your trusted partner for quality electrical solutions
              </p>
              <div className="animate__animated animate__fadeInUp animate__delay-1s">
                <Link to="/services" className="btn btn-primary btn-lg me-3">
                  Our Services
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Contact Us
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Rest of your Home component */}
      {/* ... */}
    </div>
  );
}

export default Home;