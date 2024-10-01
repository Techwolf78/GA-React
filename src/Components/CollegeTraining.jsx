import React from "react";
import CourseSection from "./CourseSection"; 
import HeroCollege from "./HeroCollege"; 
import CollegeBox from "./CollegeBox"; 
import CollegeCourse from "./CollegeCourse"; 
import SlidingCollege from "./SlidingCollege";
import GetInTouch from "./GetInTouch"; // Import the new component
import ContactForm from "./ContactForm";
import ConnectWithUs from "./ConnectWithUs";

const CollegeTraining = () => {
  return (
    <div>
      <HeroCollege />
      <CollegeBox />
      <CollegeCourse />
      <CourseSection />
      <SlidingCollege />
      <ContactForm />
      <ConnectWithUs />
      {/* Call the GetInTouch component */}
      {/* <GetInTouch /> */}
    </div>
  );
};

export default CollegeTraining;
