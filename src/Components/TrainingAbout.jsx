import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../assets/CSS/TrainingAbout.css";

const TrainingAbout = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-left">
          <p className="about-head">BRIDGING ALL GAPS</p>
          <h1 className="about-text" style={{ fontFamily: "Varela, sans-serif" }}>
            Our 360<sup>°</sup> Approach to Skill Development
          </h1>
        </div>
        <div className="about-right">
          <p>
            Gryphon specializes in tailored training solutions across three key sectors: educational institutions, corporates, and faculty development. We bridge the gap between academia and industry, equipping students with practical skills, while our corporate programs enhance employee capabilities and drive organizational growth. Our faculty development initiatives empower educators with advanced methodologies and industry insights. With a dynamic, industry-aligned approach, we craft each program to address unique client needs, catalyzing transformation and fostering excellence in diverse learning environments.
          </p>
          <p className="underline-effect">
            OUR TRI-SECTOR TRAINING APPROACH
          </p>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h4 className="feature-header-link">College Trainings</h4>
          </div>
          <p>
            Bridging the campus-to-career gap.
          </p>
          <Link to="/collegeTraining" className="more-about-link mt-2">
            LEARN MORE
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h4 className="feature-header-link">Faculty Programme</h4>
          </div>
          <p>
            Reshaping education for the digital age.
          </p>
          <Link to="/facultyTraining" className="more-about-link mt-2">
            LEARN MORE
          </Link>
        </div>

        <div className="feature-card">
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4 className="feature-header-link">Corporate Trainings</h4>
          </div>
          <p>
            Elevating workforce potential, one skill at a time.
          </p>
          <Link to="/corporateTraining" className="more-about-link mt-2">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingAbout;
