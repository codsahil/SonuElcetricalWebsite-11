import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import '../styles/Products.css';

function Products() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'LED Bulb - 9W',
      category: 'lighting',
      price: 899,
      image: 'https://assets.nikshanonline.com/wp-content/uploads/2023/10/Havells-LHLDEUEEML8R009-9W-LED-Bulb-White-B22-Pack-of-1-1.png',
      description: 'Energy-efficient LED bulb with warm white light. Long-lasting and eco-friendly.'
    },
    {
      id: 2,
      name: 'Circuit Breaker - 30A',
      category: 'safety',
      price: 1899,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JfPoOxcTE_AWHjFLqmEukLQin2Ew63yFZyJnnf2sfd36z2Iq56Ay-pJwoQmGhPby45g&usqp=CAU',
      description: 'High-quality circuit breaker for residential electrical panels. Reliable protection against overloads.'
    },
    {
      id: 3,
      name: 'Electrical Wire - 14 AWG',
      category: 'wiring',
      price: 59,
      image: 'https://m.media-amazon.com/images/I/71M7sIg1vLL.jpg',
      description: 'Copper electrical wire for residential and commercial applications. Sold per foot.'
    },
    {
      id: 4,
      name: 'Smart Light Switch',
      category: 'smart',
      price: 2999,
      image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy81MzYzNjA0MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc2MjEwNDMzNn0.nejFmmXYO5zHuGM4ipRbM9ycfyYPM5spZCrGyoeUAz0/img.jpg?width=1200&height=800&quality=85&coordinates=103%2C0%2C103%2C0',
      description: 'Wi-Fi enabled smart light switch. Control your lights from anywhere using your smartphone.'
    },
    {
      id: 5,
      name: 'Ceiling Fan - 52"',
      category: 'appliances',
      price: 9999,
      image: 'https://m.media-amazon.com/images/I/71MzcZp5NVL.jpg',
      description: 'Modern ceiling fan with LED light kit. Energy-efficient with remote control operation.'
    },
    {
      id: 6,
      name: 'Outlet Receptacle',
      category: 'outlets',
      price: 4.99,
      image: 'https://media.istockphoto.com/id/186726351/photo/inserting-power-cord-receptacle-in-wall-outlet.jpg?s=612x612&w=0&k=20&c=8Rn9whyNTpfaMIPmrAY8EI8HJLaKNVlMqgthgw9gPqU=',
      description: 'Standard 15A electrical outlet. Durable construction with tamper-resistant design.'
    },
    {
      id: 7,
      name: 'LED Floodlight - 500w',
      category: 'lighting',
      price: 49.99,
      image: 'https://images-cdn.ubuy.co.in/6351dffb1d0c181deb701569-led-flood-light-10w-500w-outdoor-garden.jpg',
      description: 'Outdoor LED floodlight with motion sensor. Weather-resistant and energy-efficient.'
    },
    {
      id: 8,
      name: 'Electrical Panel - 200A',
      category: 'safety',
      price: 299.99,
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/8/445424231/OH/EY/LL/228226150/whatsapp-image-2024-08-24-at-2-09-19-pm-500x500.jpeg',
      description: 'Complete electrical panel for residential use. Includes main breaker and space for circuit breakers.'
    },
    {
      id: 9,
      name: 'Smart Thermostat',
      category: 'smart',
      price: 149.99,
      image: 'https://media.istockphoto.com/id/1291537122/photo/man-is-adjusting-a-temperature-using-a-tablet-with-smart-home-app-in-modern-living-room.jpg?s=612x612&w=0&k=20&c=rtvjjmITPNkPVfHrjBSQgOldD0wWmXc2cqQFm72zono=',
      description: 'Wi-Fi enabled smart thermostat. Learn your preferences and save energy automatically.'
    }
  ];

  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Products Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay">
          <Container>
            <h1>Our Electrical Products</h1>
            <p>Quality electrical products for all your needs</p>
          </Container>
        </div>
      </section>

      {/* Products Filter Section */}
      <section className="products-filter py-4 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <div className="category-filters mb-3 mb-md-0">
                <Button 
                  variant={filter === 'all' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('all')}
                  className="me-2 mb-2"
                >
                  All Products
                </Button>
                <Button 
                  variant={filter === 'lighting' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('lighting')}
                  className="me-2 mb-2"
                >
                  Lighting
                </Button>
                <Button 
                  variant={filter === 'safety' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('safety')}
                  className="me-2 mb-2"
                >
                  Safety
                </Button>
                <Button 
                  variant={filter === 'wiring' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('wiring')}
                  className="me-2 mb-2"
                >
                  Wiring
                </Button>
                <Button 
                  variant={filter === 'smart' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('smart')}
                  className="me-2 mb-2"
                >
                  Smart Home
                </Button>
                <Button 
                  variant={filter === 'appliances' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('appliances')}
                  className="me-2 mb-2"
                >
                  Appliances
                </Button>
                <Button 
                  variant={filter === 'outlets' ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter('outlets')}
                  className="me-2 mb-2"
                >
                  Outlets & Switches
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <InputGroup>
                <Form.Control
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-secondary">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Display Section */}
      <section className="products-display py-5">
        <Container>
          <h2 className="text-center mb-5">Browse Our Products</h2>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <h4>No products found matching your criteria.</h4>
              <Button variant="primary" onClick={() => {setFilter('all'); setSearchTerm('');}}>
                View All Products
              </Button>
            </div>
          ) : (
            <Row>
              {filteredProducts.map(product => (
                <Col lg={4} md={6} className="mb-4" key={product.id}>
                  <Card className="product-card h-100">
                    <div className="product-img-container">
                      <Card.Img 
                        variant="top" 
                        src={product.image} 
                        className="product-img"
                        onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "200px";}}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <div className="product-category mb-2">
                        <span className={`badge bg-${getCategoryColor(product.category)}`}>
                          {getCategoryName(product.category)}
                        </span>
                      </div>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                      <span className="product-price">₹{product.price.toFixed(2)}</span>
                      <Button variant="primary" size="sm">
                        <i className="fas fa-info-circle me-1"></i> Details
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Product Categories Section */}
      <section className="product-categories py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Product Categories</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="category-card text-center p-4 h-100">
                <div className="category-icon mb-3">
                  <i className="fas fa-lightbulb fa-3x"></i>
                </div>
                <h4>Lighting Solutions</h4>
                <p>Explore our range of energy-efficient lighting products for residential and commercial use.</p>
                <Button 
                  variant="outline-primary" 
                  onClick={() => setFilter('lighting')}
                  className="mt-2"
                >
                  View Lighting Products
                </Button>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="category-card text-center p-4 h-100">
                <div className="category-icon mb-3">
                  <i className="fas fa-shield-alt fa-3x"></i>
                </div>
                <h4>Safety & Protection</h4>
                <p>Ensure electrical safety with our range of circuit breakers, surge protectors, and more.</p>
                <Button 
                  variant="outline-primary" 
                  onClick={() => setFilter('safety')}
                  className="mt-2"
                >
                  View Safety Products
                </Button>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="category-card text-center p-4 h-100">
                <div className="category-icon mb-3">
                  <i className="fas fa-home fa-3x"></i>
                </div>
                <h4>Smart Home</h4>
                <p>Transform your home with our smart electrical products for modern living.</p>
                <Button 
                  variant="outline-primary" 
                  onClick={() => setFilter('smart')}
                  className="mt-2"
                >
                  View Smart Home Products
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bulk Orders Section */}
      <section className="bulk-orders py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Need Products in Bulk?</h2>
              <p>We offer special pricing for contractors, businesses, and bulk orders. Contact our sales team for personalized quotes and product recommendations.</p>
              <Button variant="primary" href="/contact">Contact Sales Team</Button>
            </Col>
            <Col md={6}>
              <img 
                src="https://content.jdmagicbox.com/v2/comp/bangalore/b5/080pxx80.xx80.211103120705.f5b5/catalogue/mathaji-electrical-jp-nagar-bangalore-electricians-ru4zxjsaf4.jpg" 
                alt="Bulk Orders" 
                className="img-fluid rounded"
                onError={(e) => {e.target.onerror = null; e.target.style.backgroundColor = "#f8f9fa"; e.target.style.height = "300px"; e.target.style.width = "100%";}}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

// Helper functions
function getCategoryColor(category) {
  switch(category) {
    case 'lighting': return 'info';
    case 'safety': return 'danger';
    case 'wiring': return 'warning';
    case 'smart': return 'success';
    case 'appliances': return 'primary';
    case 'outlets': return 'secondary';
    default: return 'dark';
  }
}

function getCategoryName(category) {
  switch(category) {
    case 'lighting': return 'Lighting';
    case 'safety': return 'Safety';
    case 'wiring': return 'Wiring';
    case 'smart': return 'Smart Home';
    case 'appliances': return 'Appliances';
    case 'outlets': return 'Outlets & Switches';
    default: return category;
  }
}

export default Products;