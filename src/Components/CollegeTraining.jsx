import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CollegeTraining = () => {
  return (
    <div>
      <Navbar />
      <div className="college-training-content">
        <h1>College Training Programs</h1>
        {/* Your content here */}
      </div>
      <Footer />
    </div>
  );
};

export default CollegeTraining;
