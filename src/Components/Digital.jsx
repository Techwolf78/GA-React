import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Digital = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Brand Positioning</h1>
        <p className="text-xl">
          Detailed information about Brand Positioning goes here.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Digital;
