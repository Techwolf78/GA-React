import React from "react";
import HeroPlacement from "./HeroPlacement";
import PartneredUniversities from "./PartneredUniversities";
import PartneredCollege from "./PartneredColllege"; // Fixed typo
import '../assets/CSS/Placement.css'; // You may not need this if using Tailwind for all styles
import IndustryOverview from "./IndustryOverview";
import CollegeAccreditation from "./CollegeAccreditation";
import Advisory from "./Advisory";
import RecruiterTestimonial from "./RecruiterTestimonial";
import SuccessfulDrives from "./SucessfulDrives";

const Placement = () => {
  const hookLineText = "ZERO COST INVOLVED During All Stages of Recruitment";
  const repeats = 10;

  return (
    <div>
      <HeroPlacement />
      <PartneredUniversities />
      
      {/* Infinite Hook Line Section */}
      <div className="hook-line-container">
        <div className="hook-line">
          {Array.from({ length: repeats }).map((_, index) => (
            <React.Fragment key={index}>
              <span>{hookLineText}</span>
              <span className="divider"> | </span>
            </React.Fragment>
          ))}
          {Array.from({ length: repeats }).map((_, index) => (
            <React.Fragment key={index + repeats}>
              <span>{hookLineText}</span>
              <span className="divider"> | </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <PartneredCollege />
      <CollegeAccreditation />

      {/* New Section: Simple Placement Process */}
      <div className="p-8 text-center bg-gradient-to-b from-white via-purple-50 to-purple-100">
      <p className="text-4xl font-bold mb-2 text-purple-700 unique-heading underline">
          We Follow Simple Placement Process
        </p>
        <div className="w-full max-w-5xl mx-auto">
          {/* Placeholder for the infographic */}
          <img 
            src="https://via.placeholder.com/1400x600" 
            alt="Infographic" 
            className="w-full h-auto"
          />
        </div>
      </div>
      <IndustryOverview />
      <Advisory />
      <SuccessfulDrives />
      <RecruiterTestimonial />
    </div>
  );
};

export default Placement;
