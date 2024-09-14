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
              <i className="fas fa-graduation-cap"></i>
            </div>
            {/* Changed icon to graduation cap */}
            <h4 className="feature-header-link">Customized Training Solutions</h4>{" "}
          </div>
          <p>
            We provide customized training solutions as per the Industry-centric needs which helps your students to be industry ready and help your academic institution to facilitate smooth transition into the industry with ease.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-handshake"></i>
            </div>
            {/* Changed icon to handshake */}
            <h4 className="feature-header-link">Industry-Academia Collaboration</h4>{" "}
          </div>
          <p>
            We are committed to bridging the gap between industry and academia by providing customized training solutions that help your students be industry-ready and facilitate a smooth transition into the industry.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            {/* Changed icon to briefcase */}
            <h4 className="feature-header-link">Industry-Ready Graduates</h4>{" "}
          </div>
          <p>
            Our customized training solutions help your students develop the necessary skills and knowledge to be successful in their chosen industry, ensuring they are well-prepared for their future careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;