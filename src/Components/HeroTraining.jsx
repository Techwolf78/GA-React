import React from "react";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa"; // Import new icons

const HeroTraining = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#091327]">
      {/* Left Section: Heading, Paragraph, and Button */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 order-2 md:order-1">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-[#ffc700]">
            Better <span className="text-[#ffc700]">Learning Future</span> Starts With Us
          </h1>
          <img
            src="/Hero-bg.png"
            alt="Placeholder"
            className="w-full max-w-[500px] mx-auto mb-8 border-0 shadow-none md:hidden" // Hide image on larger screens
          />
          <p className="text-lg md:text-xl lg:text-2xl text-[#ffffff] mb-8">
            It is a long established fact that reader will be distracted readable content of a page when.
          </p>
          <a
            href="#explore-courses"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-[#f1f1f1] bg-[#ffc700] border border-[#ffc700] rounded-full overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <span className="relative z-10">Explore Our Trainings</span>
            <svg
              className="ml-3 w-5 h-5 text-[#ffffff] relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span className="absolute inset-0 bg-[#091327] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0"></span>
          </a>
        </div>
      </div>
      {/* Right Section: Image and Floating Stat Boxes */}
      <div className="relative flex-1 flex items-center justify-center p-8 order-1 md:order-2">
        {/* For larger screens, show the image in the right section */}
        <img
          src="/Hero-bg.png"
          alt="Placeholder"
          className="hidden md:block w-full max-w-[500px] h-auto border-0 shadow-none" // Show image on larger screens
        />
        {/* Stat boxes */}
        <div className="absolute bottom-10 right-10 bg-[#2e4d80] p-4 rounded-3xl shadow-lg flex items-center space-x-4 hidden md:flex">
          <FaChalkboardTeacher className="text-[#ffc700] text-3xl" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#ffc700]">Expert Trainers</h3>
            <span className="text-[#ffffff] block">Learn from industry experts</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 bg-[#2e4d80] p-4 rounded-3xl shadow-lg flex items-center space-x-4 hidden md:flex">
          <FaTools className="text-[#ffc700] text-3xl" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#ffc700]">Customized Trainings</h3>
            <span className="text-[#ffffff] block">Tailored to your needs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTraining;
