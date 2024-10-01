import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../assets/CSS/Connect.css';

const ConnectWithUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={ref}
      className={`app-container roboto-regular ${inView ? 'fade-in' : ''}`}
    >
      <Link 
        to="/contact" 
        className="neon-link-button" 
        aria-label="Contact Us"
        onClick={handleScrollToTop} // Scroll to top on click
      >
        Cont<span>a</span>ct Us
      </Link>
    </div>
  );
};

export default ConnectWithUs;
