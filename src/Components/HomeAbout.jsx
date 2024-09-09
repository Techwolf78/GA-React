import React, { useEffect } from "react";
import WebFont from "webfontloader";
import "../assets/CSS/homeAbout.css"; // Import specific styles for About Us

const HomeAbout = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Varela"],
      },
    });
  }, []);

  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-left">
          <p className="about-head">WHAT WE DO</p>
          <h1
            className="about-text"
            style={{ fontFamily: "Varela, sans-serif" }}
          >
            We provide a 360<sup>°</sup> Approach.
          </h1>
        </div>
        <div className="about-right">
          <p>
            As India's premier non-ed-tech organization, we are committed to
            bridging the gap between industry and academia. We provide
            customized training solutions as per the Industry-centric needs
            which helps your students to be industry ready and help your
            academic institution to facilitate smooth transition into the
            industry with ease.
          </p>
          <a href="/contact" className="more-about-link">
            GET IN TOUCH WITH US 
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
            <h4 className="feature-header-link">Better Audiences</h4>{" "}
            {/* Add class here */}
          </div>
          <p>
            Our proprietary solution leverages an in-house database of 260M+
            customers and 2,000+ custom variables to build custom predictive
            models to drive business growth — from only the best customers.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h4 className="feature-header-link">Better Analytics</h4>{" "}
            {/* Add class here */}
          </div>
          <p>
            Our proprietary solution leverages an in-house database of 260M+
            customers and 2,000+ custom variables to build custom predictive
            models to drive business growth — from only the best customers.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h4 className="feature-header-link">Better Outcomes</h4>{" "}
            {/* Add class here */}
          </div>
          <p>
            Our proprietary solution leverages an in-house database of 260M+
            customers and 2,000+ custom variables to build custom predictive
            models to drive business growth — from only the best customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
