import React, { useEffect, useRef, useState } from "react";
import CourseSection from "./CourseSection"; // Adjust the import path as needed
import HeroCollege from "./HeroCollege"; // Adjust the import path as needed
import CollegeBox from "./CollegeBox"; // Adjust the import path as needed
import CollegeCourse from "./CollegeCourse"; // Adjust the import path as needed
import SlidingCollege from "./SlidingCollege";
import { Link } from "react-router-dom";

const CollegeTraining = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div>
      <HeroCollege />
      <CollegeBox />
      <CollegeCourse />
      <CourseSection />
      <SlidingCollege />

      {/* New Section with Updated Contact Us Button */}
      <div
        ref={ref}
        className={`relative bg-[#003073] text-white py-12 px-6 sm:px-12 shadow-lg transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#FFC80E]">
            Get in Touch
          </p>
          <p className="text-lg sm:text-xl mb-8">
            We would love to hear from you. Feel free to reach out with any questions or inquiries.
          </p>
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-[#ffffff] bg-transparent border border-[#ffffff] rounded-none overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <span className="relative z-10 group-hover:text-[#003073]">Contact Us</span>
            <span className="absolute inset-0 bg-[#FFC80E] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeTraining;
