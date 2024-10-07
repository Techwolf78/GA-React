import React from "react";
import CourseSection from "./CourseSection"; 
import HeroCollege from "./HeroCollege"; 
import CollegeBox from "./CollegeBox"; 
import CollegeCourse from "./CollegeCourse"; 
import SlidingCollege from "./SlidingCollege";
import ContactFormClg from "./ContactFormClg";
import ConnectWithUs from "./ConnectWithUs";

const CollegeTraining = () => {
  return (
    <div>
      <HeroCollege />
      <CollegeBox />
      <CollegeCourse />
      <CourseSection />
      <SlidingCollege />
      <ContactFormClg />
      <ConnectWithUs />
      {/* Call the GetInTouch component */}
      {/* <GetInTouch /> */}
    </div>
  );
};

export default CollegeTraining;
