import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : ''}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default ScrollToTop;