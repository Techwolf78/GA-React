import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CorporateTraining = () => {
  return (
    <div>
      <Navbar />
      <div className="corporate-training-content">
        <h1>Corporate Training Programs</h1>
        {/* Your content here */}
      </div>
      <Footer />
    </div>
  );
};

export default CorporateTraining;
