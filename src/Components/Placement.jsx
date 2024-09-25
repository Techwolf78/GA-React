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
import MajorRecruiter from "./MajorRecruiter";

const Placement = () => {
  const hookLineText = (
    <span>
      <strong className="font-semibold">ZERO COST INVOLVED</strong> During All Stages of Recruitment
    </span>
  );
  const repeats = 10;

  return (
    <div className="bg-[#091327]">
      <HeroPlacement />
      <PartneredUniversities />
      
      {/* Infinite Hook Line Section */}
      <div className="hook-line-container py-6 bg-[#DFF1FD]">
        <div className="hook-line text-[#000000] text-xl sm:text-2xl md:text-3xl flex items-center justify-center space-x-4">
          {Array.from({ length: repeats }).map((_, index) => (
            <React.Fragment key={index}>
              {hookLineText}
              <span className="divider text-[#DFF1FD]"> | </span>
            </React.Fragment>
          ))}
          {Array.from({ length: repeats }).map((_, index) => (
            <React.Fragment key={index + repeats}>
              {hookLineText}
              <span className="divider text-[#DFF1FD]"> | </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <PartneredCollege />
      <CollegeAccreditation />

      {/* New Section: Simple Placement Process */}
      <div className="p-8 text-center bg-[#091327]">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#FFC80E]">
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
      <MajorRecruiter />
      <RecruiterTestimonial />
    </div>
  );
};

export default Placement;
