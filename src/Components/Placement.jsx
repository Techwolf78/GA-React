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
import ConnectWithUs from "./ConnectWithUs";

const Placement = () => {
  const hookLineText = (
    <span>
      <strong className="font-semibold roboto-regular">ZERO COST INVOLVED</strong> During All Stages of Recruitment
    </span>
  );
  const repeats = 10;

  return (
    <div className="bg-[#091327]">
      <HeroPlacement />
      <MajorRecruiter />
      <PartneredUniversities />
      <CollegeAccreditation />
      
      {/* Infinite Hook Line Section */}
      <div className="hook-line-container py-2   bg-[#DFF1FD] roboto-regular">
        <div className="hook-line text-[#000000] text-xl sm:text-2xl lg:text-3xl xl:text-4xl flex items-center justify-center space-x-4">
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
      

      {/* New Section: Simple Placement Process */}
      <div className="p-0 text-center roboto-regular"> {/* Changed padding to 0 */}
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold  text-[#FFC80E] bg-[#003073] py-4">
          WE FOLLOW SIMPLE PLACEMENT PROCESS
        </p>
        <div className="w-full h-auto bg-[#003073]">
          {/* Placeholder for the infographic */}
          <img 
            src="placement-bg/GA - placement Process.png" 
            alt="Infographic" 
            className="w-full h-auto block px-1 py-1" // Ensures full width with no spaces
          />
        </div>
      </div>
      <IndustryOverview />
      <Advisory />
      <SuccessfulDrives />
   
      <RecruiterTestimonial />
      <div > <ConnectWithUs /></div>
     
    </div>
  );
};

export default Placement;
