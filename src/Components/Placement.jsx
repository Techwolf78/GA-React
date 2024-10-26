// Placement.js
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
import PlacementProfiles from "./PlacementProfiles";

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

      {/* New Section: TRAINING EVALUATION JOURNEY */}
<div className="p-0 text-center roboto-regular relative">
  <div className="w-full h-auto bg-[#ffffff] relative">
    <img 
      src="placement-bg/road map.png" 
      alt="Infographic" 
      className="w-full h-auto block px-1 py-1"
    />
  <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs md:text-4xl font-bold text-[#003073] bg-[#ffffff] py-4 px-2 whitespace-nowrap">
  TRAINING EVALUATION JOURNEY
</p>

  </div>
</div>

      
     <PlacementKnowMore />
     <PlacementProfiles />
      <Advisory />
      <SuccessfulDrives />
      <RecruiterTestimonial />
      <ConnectWithUs />
    </div>
  );
};

export default Placement;
