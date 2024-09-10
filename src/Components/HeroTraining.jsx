import React from "react";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa"; // Import new icons

const HeroTraining = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-400 to-red-100">
      {/* Left Section: Heading, Paragraph, and Button */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-white">
            Better <span className="text-purple-800">Learning Future</span> Starts With Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8">
            It is a long established fact that reader will be distracted readable content of a page when.
          </p>
          <a
            href="#explore-courses"
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-transparent border border-purple-600 rounded-full overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <span className="relative z-10">Explore Our Trainings</span>
            <svg
              className="ml-3 w-5 h-5 text-white relative z-10"
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
            <span className="absolute inset-0 bg-purple-600 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0"></span>
          </a>
        </div>
      </div>
      {/* Right Section: Image and Floating Stat Boxes */}
      <div className="relative flex-1 flex items-center justify-center p-8">
        <img
          src="/Hero-bg.png"
          alt="Placeholder"
          className="max-w-full h-auto border-0 shadow-none" // Ensure no border or shadow
        />
        {/* Expert Trainers Box */}
        <div className="absolute bottom-100 right-10 bg-white p-4 mb-10 rounded-3xl shadow-lg flex items-center space-x-4">
          <FaChalkboardTeacher className="text-red-400 text-3xl" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Expert Trainers</h3>
            <span className="text-gray-600 block">Learn from industry experts</span>
          </div>
        </div>
        {/* Customized Trainings Box */}
        <div className="absolute top-2/3 left-1/4 transform -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-3xl shadow-lg flex items-center space-x-4">
          <FaTools className="text-green-500 text-3xl" />
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Customized Trainings</h3>
            <span className="text-gray-600 block">Tailored to your needs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTraining;
