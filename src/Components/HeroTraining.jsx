import React from "react";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa"; // Import new icons

const HeroTraining = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-[#091327]">
      {/* Left Section: Heading, Paragraph, and Button */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-[#ffffff]">
            Better <span className="text-[#ffc700]">Learning Future</span> Starts With Us
          </h1>
          <img
            src="/Hero-bg.png"
            alt="Placeholder"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto mb-6 border-0 shadow-none md:hidden"
          />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#ffffff] mb-6">
            It is a long established fact that reader will be distracted readable content of a page when.
          </p>
          <a
  href="#explore-courses"
  className="relative inline-flex items-center justify-center px-4 sm:px-3 md:px-3 lg:px-3 xl:px-3 py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-semibold text-[#f1f1f1] bg-[#ffc700] border border-[#ffc700] rounded-full overflow-hidden group transition-all duration-300 ease-in-out"
>
  <span className="relative z-10">Explore Our Trainings</span>
  <svg
    className="ml-2 sm:ml-3 w-4 sm:w-5 h-4 sm:h-5 text-[#ffffff] relative z-10"
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
      <div className="relative flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        {/* For larger screens, show the image in the right section */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
          <img
            src="/Hero-bg.png"
            alt="Placeholder"
            className="w-full h-auto border-0 shadow-none"
          />
          {/* Stat boxes */}
          <div className="absolute top-4 left-4 bg-[#2e4d80] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 rounded-3xl shadow-lg flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <FaTools className="text-[#ffc700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-[#ffc700]">Customized Trainings</h3>
              <span className="text-[#ffffff] block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">Tailored to your needs</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-[#2e4d80] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 rounded-3xl shadow-lg flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <FaChalkboardTeacher className="text-[#ffc700] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" />
            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold text-[#ffc700]">Expert Trainers</h3>
              <span className="text-[#ffffff] block text-sm sm:text-base md:text-base lg:text-lg xl:text-lg">Learn from industry experts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTraining;
