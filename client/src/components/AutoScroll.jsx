import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust scroll speed here (500 is the duration in ms)
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // Adjust interval time here (lower values will be smoother but may impact performance)
  };

  useEffect(() => {
    // Scroll to the top of the page on each navigation
    scrollToTop();
  }, [pathname]);

  return null; // This component doesn't render anything, so return null
}

export default ScrollToTopOnNavigate;
