import  { useRef, useEffect } from "react";
import CourseSection from "../Components/CollegeTraining/CourseSection"; 
import HeroCollege from "../Components/CollegeTraining/HeroCollege"; 
import CollegeInfoSection from '../Components/CollegeTraining/CollegeInfoSection'; 
import CollegeBox from "../Components/CollegeTraining/CollegeBox"; 
import CollegeCourse from "../Components/CollegeTraining/CollegeCourse"; 
import SlidingCollege from "../Components/CollegeTraining/SlidingCollege";
import ContactFormClg from "../Components/CollegeTraining/ContactFormClg";
import ConnectWithUs from "../Components/CollegeTraining/ConnectWithUs";

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
