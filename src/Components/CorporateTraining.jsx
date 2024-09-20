import React from "react";
import HeroCorporate from "./HeroCorporate"; // Adjust the import path as needed
import CorporateChallenge from "./CorporateChallenge"; // Adjust the import path as needed
import CorporateAppoarch from "./CorporateAppoarch";

const CorporateTraining = () => {
  return (
    <div>
      <HeroCorporate />
      <CorporateChallenge />
      <CorporateAppoarch />

      {/* New Section with Updated Contact Us Button */}
      <div className="bg-[#003073] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[#ffc700] mb-4 ">Get in Touch</h1>
          <p className="text-2xl text-[#ffffff] mb-8">
            We would love to hear from you. Feel free to reach out with any questions or inquiries.
          </p>
          <a
            href="/contact"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-[#ffffff] bg-transparent border border-[#ffffff] rounded-none overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-[#091327] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CorporateTraining;
