import React from 'react';
import '../assets/CSS/Services.css'; // Import the CSS file for styling
import { FaRocket, FaUserGraduate, FaCog, FaChartLine } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Our Values</h2>
        <div className="services-grid">
        <div className="service-card">
  <div className="service-icon">
    <FaRocket />
  </div>
  <h3 className="service-title">Campus Hiring</h3>
  <p className="service-description">
    Providing top talent to organizations through our campus hiring solutions.
  </p>
</div>
<div className="service-card">
  <div className="service-icon">
    <FaUserGraduate />
  </div>
  <h3 className="service-title">Orientation and Counselling</h3>
  <p className="service-description">
    Guiding students and professionals to make informed decisions about their careers.
  </p>
</div>
<div className="service-card">
  <div className="service-icon">
    <FaCog />
  </div>
  <h3 className="service-title">Cross Brand Positioning</h3>
  <p className="service-description">
    Positioning your brand in a way that it stands out from the competition.
  </p>
</div>
<div className="service-card">
  <div className="service-icon">
    <FaChartLine />
  </div>
  <h3 className="service-title">Growth</h3>
  <p className="service-description">
    Empowering your business with strategies to achieve significant growth and success.
  </p>
</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
