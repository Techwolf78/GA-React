import React from "react";
import { Link } from "react-router-dom";

// TrainingAbout Component
const TrainingAbout = () => {
  return (
    <div className="training-overview-container roboto-regular">
      <style>{`
        /* Training Overview Section Styles */
        .training-overview-container {
          background: #091327;
          padding: 1rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .training-content-wrapper {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .training-left-section {
          flex: 1;
          padding-right: 1rem;
          text-align: left;
        }

        .training-title-heading {
          font-size: 2.5rem;
          color: #FFC80E;
          max-width: 800px;
          font-weight: bold;
        }

        .training-right-section {
          flex: 1;
          padding-left: 1rem;
          text-align: left;
        }

        .training-description-paragraph {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .training-highlighted-text {
          position: relative;
          color: #FFC80E;
          font-size: 1.25rem;
          font-weight: bold;
          display: inline-block;
        }

        .training-highlighted-text::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background-color: #FFC80E;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .training-highlighted-text:hover::after {
          transform: scaleX(1);
        }

        .training-features-list {
          display: flex;
          justify-content: center; /* Center the cards */
          align-items: stretch;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto; /* Center the list */
          padding: 1rem 0; /* Added padding */
        }

        .training-feature-card {
          background: #003073;
          border-radius: 40px; /* Reduced border radius */
          padding: 2rem; /* Reduced padding */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
          flex: 1 1 210px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 350px;
          min-height: 180px; /* Reduced height for small screens */
          margin: 1rem; /* Added margin for spacing */
        }

        .training-feature-card:hover {
          transform: translateY(-10px); /* Slightly reduced hover effect */
          border: 2px solid rgba(255, 200, 0, 1);
          box-shadow: 0 0 20px rgba(255, 200, 0, 0.8), 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .training-feature-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          width: 100%;
        }

        .training-feature-title {
          font-size: 1.1rem;
          color: #FFC80E;
          margin-bottom: 0;
        }

        .training-feature-description {
          font-size: 0.9rem; /* Adjusted for better readability */
          color: #ffffff;
          flex: 1; /* Allow description to grow and take available space */
        }

        .training-learn-more-link {
          display: inline-block;
          font-size: 0.9rem; /* Adjusted for small screens */
          color: #FFC80E;
          text-decoration: none;
          font-weight: bold;
          position: relative;
        }

        .training-learn-more-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: #FFC80E;
          left: 0;
          bottom: -2px;
          transition: width 1s ease;
        }

        .training-learn-more-link:hover::after {
          width: 100%;
          background: #FFC80E;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .training-content-wrapper {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
          }

          .training-left-section, .training-right-section {
            padding: 0;
            margin-bottom: 1rem;
          }

          .training-title-heading {
            font-size: 2rem;
          }

          .training-description-paragraph {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .training-content-wrapper {
            flex-direction: column;
            text-align: center;
            padding: 0.5rem;
          }

          .training-title-heading {
            font-size: 1.6rem;
          }

          .training-description-paragraph {
            font-size: 0.8rem;
            margin-bottom: 0.5rem;
          }

          .training-features-list {
            flex-direction: column;
            align-items: center;
          }

          .training-feature-card {
            width: 100%; /* Full width on small screens */
            max-width: none; /* Remove max width to use full width */
            min-height: 150px; /* Further reduced height for small screens */
            padding: 1rem; /* Adjusted padding */
            margin: 1rem 0; /* Vertical margin for spacing */
          }
        }

        /* Increase card width for larger screens */
        @media (min-width: 1025px) {
          .training-feature-card {
            flex: 1 1 250px; /* Adjust the flex basis */
            max-width: 400px; /* Increase max width */
            padding: 2rem 1.5rem; /* Adjust padding for better text flow */
          }
        }
      `}</style>

      <div className="training-content-wrapper">
        <div className="training-left-section">
          <h1 className="training-title-heading roboto-regular">
            OUR 360<sup>°</sup> APPROACH TO SKILL DEVELOPMENT
          </h1>
        </div>

        <div className="training-right-section">
          <p className="training-description-paragraph">
            Gryphon Academy specializes in delivering customized training solutions across three key sectors. Our mission is to effectively bridge the skill gap within each sector, ensuring a focused approach that leaves no room for deficiencies.
          </p>
          <p className="training-highlighted-text">OUR TRI-SECTOR TRAINING APPROACH</p>
        </div>
      </div>

      <div className="training-features-list">
        <div className="training-feature-card">
          <div className="training-feature-card-header">
            <div className="training-feature-icon flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
              <i className="fas fa-graduation-cap text-gray-800 text-2xl"></i>
            </div>
            <h4 className="training-feature-title">COLLEGE TRAININGS</h4>
          </div>
          <p className="training-feature-description">Bridging the campus-to-career gap. Transforming students into industry-ready professionals.</p>
          <Link to="/collegeTraining" className="training-learn-more-link mt-2">
            LEARN MORE
          </Link>
        </div>

        <div className="training-feature-card">
          <div className="training-feature-card-header">
            <div className="training-feature-icon flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
              <i className="fas fa-briefcase text-gray-800 text-2xl"></i>
            </div>
            <h4 className="training-feature-title">CORPORATE TRAININGS</h4>
          </div>
          <p className="training-feature-description">Elevating workforce potential, one skill at a time. Custom solutions for tomorrow's business challenges.</p>
          <Link to="/corporateTraining" className="training-learn-more-link mt-2">
            LEARN MORE
          </Link>
        </div>

        <div className="training-feature-card">
          <div className="training-feature-card-header">
            <div className="training-feature-icon flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
              <i className="fas fa-chalkboard-teacher text-gray-800 text-2xl"></i>
            </div>
            <h4 className="training-feature-title">FACULTY <br /> DEVELOPMENT PROGRAMME</h4>
          </div>
          <p className="training-feature-description">Reshaping education for the digital age. Equipping educators to inspire the next generation.</p>
          <Link to="/facultyTraining" className="training-learn-more-link mt-2">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingAbout;
