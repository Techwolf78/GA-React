import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import '../assets/CSS/homeAbout.css'; // Import specific styles for About Us

const HomeAbout = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Varela'],
      },
    });
  }, []);

  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-left">
          <p className="about-head">WHAT WE DO</p>
          <h1 className="about-text" style={{ fontFamily: 'Varela, sans-serif' }}>
            We Bridge the Gap
          </h1>
        </div>
        <div className="about-right">
          <p>
          Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.
          </p>
          <a href="#" className="more-about-link">
            MORE ABOUT US 
          </a>
        </div>
      </div>

      {/* Wrap feature cards inside the "features" div */}
      <div className="features">
      <div className="feature-card">
  <div className="feature-card-header">
    <div className="feature-card-icon">
      <i className="fas fa-users"></i>
    </div>
    <h4 className="feature-header-link">Better Audiences</h4> {/* Add class here */}
  </div>
  <p>
    Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+
    custom variables to build custom predictive models to drive business growth — from only
    the best customers.
  </p>
</div>

<div className="feature-card">
  <div className="feature-card-header">
    <div className="feature-card-icon">
      <i className="fas fa-chart-line"></i>
    </div>
    <h4 className="feature-header-link">Better Analytics</h4> {/* Add class here */}
  </div>
  <p>
    Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+
    custom variables to build custom predictive models to drive business growth — from only
    the best customers.
  </p>
</div>

<div className="feature-card">
  <div className="feature-card-header">
    <div className="feature-card-icon">
      <i className="fas fa-trophy"></i>
    </div>
    <h4 className="feature-header-link">Better Outcomes</h4> {/* Add class here */}
  </div>
  <p>
    Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+
    custom variables to build custom predictive models to drive business growth — from only
    the best customers.
  </p>
</div>

      </div>
    </div>
  );
};

export default HomeAbout;
