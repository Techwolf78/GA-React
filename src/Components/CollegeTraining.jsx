import { useRef, useEffect } from "react";
import CourseSection from "./CourseSection"; 
import HeroCollege from "./HeroCollege"; 
import CollegeInfoSection from './CollegeInfoSection'; 
import CollegeBox from "./CollegeBox"; 
import CollegeCourse from "./CollegeCourse"; 
import SlidingCollege from "./SlidingCollege";
import ContactFormClg from "./ContactFormClg";
import ConnectWithUs from "./ConnectWithUs";

const CollegeTraining = () => {
  const courseSectionRef = useRef(null);

  useEffect(() => {
    // Scroll to CourseSection if the hash is present
    if (window.location.hash === '#course-section') {
      courseSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <HeroCollege />
      <CollegeInfoSection />
      <CollegeBox />
      <CollegeCourse />
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
