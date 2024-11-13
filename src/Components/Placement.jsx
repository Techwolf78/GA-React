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
    <div className="bg-[#01224F]">
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
      src="placement-bg/evatrain.png" 
      alt="Infographic" 
      className="w-full h-auto block mx-auto"
    />
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
