import React from "react";
import CourseSection from "./CourseSection"; // Adjust the import path as needed

const CollegeTraining = () => {
  return (
    <div>
      <div className="college-training-content">
        <h1 className="text-4xl font-bold text-center my-8">College Training Programs</h1>
        {/* Render the CourseSection component here */}
        <CourseSection />
      </div>
    </div>
  );
};

export default CollegeTraining;
