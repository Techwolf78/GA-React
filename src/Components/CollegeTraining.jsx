import React from "react";
import CourseSection from "./CourseSection"; 
import HeroCollege from "./HeroCollege"; 
import CollegeBox from "./CollegeBox"; 
import CollegeCourse from "./CollegeCourse"; 
import SlidingCollege from "./SlidingCollege";
import GetInTouch from "./GetInTouch"; // Import the new component

const CollegeTraining = () => {
  return (
    <div>
      <HeroCollege />
      <CollegeBox />
      <CollegeCourse />
      <CourseSection />
      <SlidingCollege />
      
      {/* Call the GetInTouch component */}
      <GetInTouch />
    </div>
  );
};

export default CollegeTraining;
