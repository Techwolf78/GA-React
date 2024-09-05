import React from 'react';
import '../assets/CSS/Services.css'; // Import the CSS file for styling
import { FaRocket, FaRegStar, FaCog, FaChartLine } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FaRocket />
            </div>
            <h3 className="service-title">Innovation</h3>
            <p className="service-description">
              Driving the future with cutting-edge technology and innovative solutions.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaRegStar />
            </div>
            <h3 className="service-title">Excellence</h3>
            <p className="service-description">
              Committed to delivering top-notch quality and unparalleled customer satisfaction.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <FaCog />
            </div>
            <h3 className="service-title">Customization</h3>
            <p className="service-description">
              Tailoring solutions to fit your unique needs and goals with precision.
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
