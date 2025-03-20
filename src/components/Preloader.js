import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="preloader">
      <div className="spinner">
        <i className="fas fa-bolt fa-spin"></i>
      </div>
      <p>Loading Sonu Electrical...</p>
    </div>
  ) : null;
}

export default Preloader;