import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, Offcanvas } from 'react-bootstrap';
import '../styles/ShopProducts.css';

// Sample product data - in a real app, this would come from an API
const productData = [
  {
    id: 1,
    name: 'LED Bulb - 9W',
    category: 'Lighting',
    price: 899,
    image: 'https://assets.nikshanonline.com/wp-content/uploads/2023/10/Havells-LHLDEUEEML8R009-9W-LED-Bulb-White-B22-Pack-of-1-1.png',
    description: 'Energy-efficient LED bulb with 9W power consumption. Equivalent to 60W traditional bulb.',
    inStock: true,
    rating: 4.5,
    reviews: 128,
    discount: 10
  },
  {
    id: 2,
    name: 'Circuit Breaker - 30A',
    category: 'Safety',
    price: 1899,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JfPoOxcTE_AWHjFLqmEukLQin2Ew63yFZyJnnf2sfd36z2Iq56Ay-pJwoQmGhPby45g&usqp=CAU',
    description: '30 Amp circuit breaker for residential electrical panels. Provides overload protection.',
    inStock: true,
    rating: 4.8,
    reviews: 56,
    discount: 0
  },
  {
    id: 3,
    name: 'Electrical Wire - 14 AWG (50ft)',
    category: 'Wiring',
    price: 1450,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6KvBwXQRZDRRRSJ80z4a9sPkhAQlosIhg1MUXMinngUEdqcV_eUc69y6yoXqhUOOZ-g&usqp=CAU',
    description: '14 gauge copper electrical wire. 50 feet length. Suitable for home electrical projects.',
    inStock: true
  },
  {
    id: 4,
    name: 'Wall Socket - Dual USB',
    category: 'Outlets',
    price: 15.99,
    image: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/002582114II00/image.jpg?x=400&y=400&format=jpg&ex=400&ey=400&align=center',
    description: 'Modern wall socket with dual USB charging ports and standard electrical outlets.',
    inStock: false
  },
  {
    id: 5,
    name: 'Smart Light Switch',
    category: 'Smart Home',
    price: 29.99,
    image: 'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy81MzYzNjA0MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc2MjEwNDMzNn0.nejFmmXYO5zHuGM4ipRbM9ycfyYPM5spZCrGyoeUAz0/img.jpg?width=1200&height=800&quality=85&coordinates=103%2C0%2C103%2C0',
    description: 'WiFi-enabled smart light switch. Control your lights from your smartphone or voice assistant.',
    inStock: true
  },
  {
    id: 6,
    name: 'Ceiling Fan - 52"',
    category: 'Fans',
    price: 89.99,
    image: 'https://m.media-amazon.com/images/I/71MzcZp5NVL.jpg',
    description: '52-inch ceiling fan with remote control. Energy efficient with multiple speed settings.',
    inStock: true
  },
  {
    id: 7,
    name: 'Multimeter',
    category: 'Tools',
    price: 34.99,
    image: 'https://goodwill.in/pub/media/catalog/product/cache/572bd9c9d88464400730b4ab84fcb211/f/l/fluke-110-4.jpg',
    description: 'Digital multimeter for measuring voltage, current, and resistance. Essential for electrical work.',
    inStock: true
  },
  {
    id: 8,
    name: 'Extension Cord - 25ft',
    category: 'Accessories',
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqR0_8WbLZ9skODtLCKqqokIXzU5y_LGUPFjq-HEjeF4Nv44j3AXy6Lct72l7a-38qGRc&usqp=CAU',
    description: '25-foot heavy-duty extension cord with multiple outlets. Perfect for power tools and outdoor use.',
    inStock: true
  }
];

// Categories for filtering
const categories = ['All', 'Lighting', 'Safety', 'Wiring', 'Outlets', 'Smart Home', 'Fans', 'Tools', 'Accessories'];

function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [specialOffers, setSpecialOffers] = useState([]);

  // Initialize products and special offers
  useEffect(() => {
    setProducts(productData);
    setFilteredProducts(productData);
    
    // Set special offers (products with discount)
    setSpecialOffers(productData.filter(product => product.discount > 0));
  }, []);

  // Filter products by category and search term
  useEffect(() => {
    let result = products;
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm, products]);

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    alert(`${product.name} added to cart!`);
  };

  // Calculate total cart items
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate total cart price
  const totalCartPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Handle cart close
  const handleCloseCart = () => setShowCart(false);
  
  // Handle cart show
  const handleShowCart = () => setShowCart(true);
  
  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Render star ratings
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star text-warning"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt text-warning"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
    }
    
    return stars;
  };

  return (
    <div className="shop-page">
      {/* Shop Hero Section */}
      <section className="shop-hero">
        <div className="hero-overlay">
          <Container>
            <h1>Electrical Shop</h1>
            <p>Quality electrical products for your home and business</p>
            <Button variant="primary" className="mt-3 cart-button" onClick={handleShowCart}>
              <i className="fas fa-shopping-cart me-2"></i>
              Cart ({totalCartItems})
            </Button>
          </Container>
        </div>
      </section>

      {/* Special Offers Section */}
      {specialOffers.length > 0 && (
        <section className="special-offers py-4 bg-light">
          <Container>
            <h2 className="mb-4">Special Offers</h2>
            <Row>
              {specialOffers.map(product => (
                <Col lg={3} md={4} sm={6} className="mb-4" key={`offer-${product.id}`}>
                  <Card className="product-card h-100 offer-card">
                    <div className="product-img-container">
                      <Badge bg="danger" className="discount-badge">{product.discount}% OFF</Badge>
                      <Card.Img 
                        variant="top" 
                        src={product.image} 
                        className="product-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <span className="product-category text-muted">{product.category}</span>
                      <Card.Title>{product.name}</Card.Title>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
                          <Button 
                            variant="primary" 
                            size="sm"
                            className="ms-2"
                            disabled={!product.inStock}
                            onClick={() => addToCart(product)}
                          >
                            <i className="fas fa-cart-plus"></i>
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Shop Content */}
      <section className="shop-content py-5">
        <Container>
          {/* Search and Filter */}
          <Row className="mb-4">
            <Col md={6} className="mb-3 mb-md-0">
              <InputGroup>
                <Form.Control
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-primary">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Col>
            <Col md={6}>
              <div className="category-filters d-flex flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "primary" : "outline-primary"}
                    className="me-2 mb-2"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Fans Section */}
          {filteredProducts.filter(product => product.category === 'Fans').length > 0 && activeCategory === 'All' && (
            <section className="fans-section">
              <Container>
                <h3>Featured Fans Collection</h3>
                <Row>
                  {filteredProducts
                    .filter(product => product.category === 'Fans')
                    .map(product => (
                      <Col lg={3} md={4} sm={6} className="mb-4" key={`fan-${product.id}`}>
                        <Card className="product-card h-100" data-category="Fans">
                          <div className="product-img-container">
                            {product.discount > 0 && (
                              <Badge bg="danger" className="discount-badge">{product.discount}% OFF</Badge>
                            )}
                            <Card.Img 
                              variant="top" 
                              src={product.image} 
                              className="product-img"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://via.placeholder.com/300x200?text=Fan+Image';
                              }}
                            />
                          </div>
                          <Card.Body className="d-flex flex-column">
                            <span className="product-category text-muted">{product.category}</span>
                            <Card.Title>{product.name}</Card.Title>
                            
                            {/* Rating Stars */}
                            <div className="product-rating mb-2">
                              {renderStarRating(product.rating)}
                              <span className="ms-2 text-muted small">({product.reviews})</span>
                            </div>
                            
                            <Card.Text className="flex-grow-1">
                              {product.description.substring(0, 80)}...
                            </Card.Text>
                            
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <span className="product-price">{product.price.toLocaleString('en-IN')}</span>
                              <Button 
                                variant="primary" 
                                disabled={!product.inStock}
                                onClick={() => addToCart(product)}
                              >
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </section>
          )}

          {/* Products Grid */}
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <Col lg={3} md={4} sm={6} className="mb-4" key={product.id}>
                  <Card className="product-card h-100" data-category={product.category}>
                    <div className="product-img-container">
                      {product.discount > 0 && (
                        <Badge bg="danger" className="discount-badge">{product.discount}% OFF</Badge>
                      )}
                      <Card.Img 
                        variant="top" 
                        src={product.image} 
                        className="product-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
                        }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <span className="product-category text-muted">{product.category}</span>
                      <Card.Title>{product.name}</Card.Title>
                      
                      {/* Rating Stars */}
                      <div className="product-rating mb-2">
                        {renderStarRating(product.rating)}
                        <span className="ms-2 text-muted small">({product.reviews})</span>
                      </div>
                      
                      <Card.Text className="flex-grow-1">
                        {product.description.substring(0, 80)}...
                      </Card.Text>
                      
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="price-container">
                          {product.discount > 0 && (
                            <span className="product-original-price">
                              ₹{Math.round(product.price * (100 / (100 - product.discount))).toLocaleString('en-IN')}
                            </span>
                          )}
                          <span className="product-price">{product.price.toLocaleString('en-IN')}</span>
                        </div>
                        <Button 
                          variant={product.inStock ? "primary" : "secondary"} 
                          disabled={!product.inStock}
                          onClick={() => addToCart(product)}
                          className="add-to-cart-btn"
                        >
                          {product.inStock ? (
                            <>
                              <i className="fas fa-shopping-cart me-2"></i>
                              Add
                            </>
                          ) : 'Out of Stock'}
                        </Button>
                      </div>
                      {product.inStock && product.discount > 0 && (
                        <div className="sale-badge">SALE</div>
                      )}
                      <span className="price-discount">{product.discount}% off</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <h3>No products found</h3>
                <p>Try changing your search criteria or browse all products.</p>
                <Button variant="primary" onClick={() => {setActiveCategory('All'); setSearchTerm('');}}>
                  View All Products
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Shopping Cart Offcanvas */}
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-shopping-cart fa-3x mb-3 text-muted"></i>
              <p>Your cart is empty</p>
              <Button variant="primary" onClick={handleCloseCart}>Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item mb-3 p-2 border-bottom">
                    <div className="d-flex">
                      <div className="cart-item-img me-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/50x50?text=Product';
                          }}
                        />
                      </div>
                      <div className="cart-item-details flex-grow-1">
                        <h6>{item.name}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="quantity-control">
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          <span className="cart-item-price">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                      <Button 
                        variant="link" 
                        className="text-danger p-0 ms-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary mt-4">
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal:</span>
                  <span className="fw-bold">₹{totalCartPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Total:</span>
                  <span className="fw-bold fs-5">₹{totalCartPrice.toLocaleString('en-IN')}</span>
                </div>
                <Button variant="primary" className="w-100 mt-3">Proceed to Checkout</Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Bulk Orders Section */}
      <section className="bulk-orders py-5 bg-light">
        <Container className="text-center">
          <h2 className="mb-4">Need Bulk Orders?</h2>
          <p className="lead mb-4">We offer special pricing for contractors and businesses. Contact us for a custom quote.</p>
          <Button variant="primary" size="lg" href="/contact">Request a Quote</Button>
        </Container>
      </section>

      {/* Store Information Section */}
      <section className="store-info py-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="store-address">
                <h3 className="mb-4">Visit Our Store</h3>
                <div className="address-card p-4">
                  <h4><i className="fas fa-map-marker-alt text-primary me-2"></i> Sonu Electrical</h4>
                  <p className="mb-2">Main Road, Near Bus Stand</p>
                  <p className="mb-2">Bhadrawati, Maharashtra 442902</p>
                  <p className="mb-2"><i className="fas fa-phone-alt me-2"></i> +91 9876543210</p>
                  <p className="mb-4"><i className="fas fa-envelope me-2"></i> info@sonuelectrical.com</p>
                  <div className="store-hours mt-3">
                    <h5 className="mb-3">Store Hours</h5>
                    <p className="mb-1"><strong>Monday - Saturday:</strong> 9:00 AM - 8:00 PM</p>
                    <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="map-container">
                <h3 className="mb-4">Location</h3>
                <div className="map-placeholder">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29859.99740928498!2d79.09057371562499!3d20.10500999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2c0f0c9c90d93%3A0x37541c6b7f89acb7!2sBhadravati%2C%20Maharashtra%20442902!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sonu Electrical Location"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ShopProducts;