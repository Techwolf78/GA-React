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
import PlacementProcess from "./PlacementProcess";

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

    <PlacementProcess />
      
     
      <Advisory />
      <SuccessfulDrives />
      <RecruiterTestimonial />
      <ConnectWithUs />
    </div>
  );
};

export default Placement;
