// Placement.js
import React from "react";
import HeroPlacement from "./HeroPlacement";
import PartneredUniversities from "./PartneredUniversities";
import PartneredCollege from "./PartneredCollege";
import '../assets/CSS/Placement.css';

import CollegeAccreditation from "./CollegeAccreditation";
import Advisory from "./Advisory";
import RecruiterTestimonial from "./RecruiterTestimonial";
import SuccessfulDrives from "./SuccessfulDrives";
import MajorRecruiter from "./MajorRecruiter";
import ConnectWithUs from "./ConnectWithUs";
import HookLine from "./HookLine"; // Import the new component
import PlacementKnowMore from "./PlacementKnowMore";

const Placement = () => {
  return (
    <div className="bg-[#091327]">
      <HeroPlacement />
      <MajorRecruiter />
      <PartneredUniversities />
      <CollegeAccreditation />
      
      {/* Use the new HookLine component */}
      <HookLine />

      <PartneredCollege />

      {/* New Section: Simple Placement Process */}
      <div className="p-0 text-center roboto-regular">
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] bg-[#003073] py-4">
          WE FOLLOW SIMPLE PLACEMENT PROCESS
        </p>
        <div className="w-full h-auto bg-[#003073]">
          <img 
            src="placement-bg/GA - placement ProcessNew.PNG" 
            alt="Infographic" 
            className="w-full h-auto block px-1 py-1"
          />
        </div>
      </div>
      
     <PlacementKnowMore />
      <Advisory />
      <SuccessfulDrives />
      <RecruiterTestimonial />
      <ConnectWithUs />
    </div>
  );
};

export default Placement;
