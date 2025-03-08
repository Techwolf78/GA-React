import React, { useRef, useEffect } from "react";
import CourseSection from "./CourseSection"; 
import HeroCollege from "./HeroCollege"; 
import CollegeInfoSection from './CollegeInfoSection'; 
import CollegeBox from "./CollegeBox"; 
import CollegeCourse from "./CollegeCourse"; 
import SlidingCollege from "./SlidingCollege";
import ContactFormClg from "./ContactFormClg";
import ConnectWithUs from "./ConnectWithUs";

const CollegeTraining = () => {
  // Create a reference for the CourseSection
  const courseSectionRef = useRef(null);

  useEffect(() => {
    // Check if the URL hash is #course-section
    if (window.location.hash === '#course-section') {
      // If hash is present, scroll to the CourseSection
      courseSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      <HeroCollege />
      <CollegeInfoSection />
      <CollegeBox />
      <CollegeCourse />
      
      {/* Scrollable section, scroll to it if hash is present */}
      <div ref={courseSectionRef}>
        <CourseSection />
      </div>
      
      <SlidingCollege />
      <ContactFormClg />
      <ConnectWithUs />
    </div>
  );
};

export default CollegeTraining;
