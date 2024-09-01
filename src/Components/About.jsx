import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">
          Detailed information about the organization goes here.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
