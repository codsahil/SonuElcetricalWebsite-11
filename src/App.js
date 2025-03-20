import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ShopProducts from './pages/ShopProducts';
import Login from './components/Login';
import './App.css';

function App() {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Function to require authentication for routes
  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <Home />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          {/* Other routes with authentication */}
          <Route path="/home" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <Home />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          <Route path="/about" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <About />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          <Route path="/services" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <Services />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          <Route path="/products" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <Products />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          <Route path="/shop" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <ShopProducts />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          <Route path="/contact" element={
            <RequireAuth>
              <>
                <Header />
                <div className="main-content">
                  <Contact />
                </div>
                <Footer />
              </>
            </RequireAuth>
          } />
          
          {/* Redirect to login if no route matches */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;