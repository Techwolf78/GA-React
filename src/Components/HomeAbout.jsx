import React from 'react';
import '../assets/CSS/homeAbout.css'; // Import specific styles for About Us

const HomeAbout = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-left">
          <h2>What We Do</h2>
          <p>
            At Gryphon Academy, we are dedicated to providing top-notch education and training that empowers individuals to achieve their full potential. Our team of experts is committed to delivering personalized and impactful learning experiences that drive success.
          </p>
        </div>
        <div className="about-right">
          <h3>Unlock Your Potential</h3>
          <p>
            Discover how our unique approach and resources can elevate your learning journey.
          </p>
          <a href="#" className="more-about-link">More About Us</a>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <i className="fas fa-users"></i>
          <h4>Better Audiences</h4>
          <p>Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h4>Better Analytics</h4>
          <p>Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-trophy"></i>
          <h4>Better Outcomes</h4>
          <p>Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
