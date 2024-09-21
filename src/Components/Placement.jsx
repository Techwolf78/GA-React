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
    <div className="bg-[#091327]">
      <HeroPlacement />
      <PartneredUniversities />
      
      {/* Infinite Hook Line Section */}
      <div className="hook-line-container py-6 bg-[#2e4d80]">
        <div className="hook-line text-[#FFC80E] text-2xl flex items-center justify-center space-x-4">
          {Array.from({ length: repeats }).map((_, index) => (
            <React.Fragment key={index}>
              <span>{hookLineText}</span>
              <span className="divider text-[#2e4d80]"> | </span>
            </React.Fragment>
          ))}
          {Array.from({ length: repeats }).map((_, index) => (
            <React.Fragment key={index + repeats}>
              <span>{hookLineText}</span>
              <span className="divider text-[#2e4d80]"> | </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <PartneredCollege />
      <CollegeAccreditation />

      {/* New Section: Simple Placement Process */}
      <div className="p-8 text-center bg-[#091327]">
        <p className="text-4xl font-bold mb-2 text-[#FFC80E]  ">
          WE FOLLOW SIMPLE PLACEMENT PROCESS
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
