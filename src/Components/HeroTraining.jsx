import React from "react";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa"; // Import new icons

const HeroTraining = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-[#091327]">
      {/* Left Section: Heading, Paragraph, and Button */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 text-[#ffffff] -mt-8">
            Better <span className="text-[#FFC80E]">Learning Future</span> Starts With Us
          </h1>
          <img
            src="/Hero-bg.png"
            alt="Placeholder"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto mb-2 -mt-4 border-0 shadow-none md:hidden"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#ffffff] mb-4 font-light">
            It is a long established fact that reader will be distracted readable content of a page when.
          </p>

          <a
            href="#explore-courses"
            className="btn-know-more relative inline-flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap"
          >
            <span className="relative z-10">Explore Our Trainings</span>
            <svg
              className="ml-2 w-4 h-4 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#000000]"
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
          </a>
        </div>
      </div>
      {/* Right Section: Image and Floating Stat Boxes */}
      <div className="relative flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
          <img
            src="/Hero-bg.png"
            alt="Placeholder"
            className="w-full h-auto border-0 shadow-none"
          />
          {/* Stat boxes */}
          <div className="absolute top-4 left-4 bg-[#003073] p-2 sm:p-3 md:p-4 rounded-2xl shadow-md flex items-center space-x-2 sm:space-x-3">
            <FaTools className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
            <div className="text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">Customized Trainings</h3>
              <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">Tailored to your needs</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-[#003073] p-2 sm:p-3 md:p-4 rounded-2xl shadow-md flex items-center space-x-2 sm:space-x-3">
            <FaChalkboardTeacher className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
            <div className="text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">Expert Trainers</h3>
              <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">Learn from industry experts</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-know-more {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-weight: bold;
          padding: 10px 20px;
          font-size: 1rem;
          background-color: transparent;
          border: 0.5px solid #ffffff;
          text-decoration: none;
          overflow: hidden;
          transition: color 0.3s ease;
        }
        .btn-know-more::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-color: #FFC80E;
          transition: left 0.3s ease;
          z-index: 0;
        }
        .btn-know-more:hover::before {
          left: 0;
        }
        .btn-know-more:hover {
          color: #000000;
          transform: translateY(-3px);
        }
        .btn-know-more span {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default HeroTraining;
