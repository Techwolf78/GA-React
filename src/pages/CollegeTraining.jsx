import  { useRef, useEffect } from "react";
import CourseSection from "../components/CollegeTraining/CourseSection"; 
import HeroCollege from "../components/CollegeTraining/HeroCollege"; 
import CollegeInfoSection from '../components/CollegeTraining/CollegeInfoSection'; 
import CollegeBox from "../components/CollegeTraining/CollegeBox"; 
import CollegeCourse from "../components/CollegeTraining/CollegeCourse"; 
import SlidingCollege from "../components/CollegeTraining/SlidingCollege";
import ContactFormClg from "../components/CollegeTraining/ContactFormClg";
import ConnectWithUs from "../components/CollegeTraining/ConnectWithUs";

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
