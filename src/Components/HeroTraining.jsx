import React from "react";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa";

const HeroTraining = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 1, // Scrolls to 90% of the viewport height
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#091327] relative">
      {/* Full-Width Section: Background Image for Large Screens */}
      <div
        className="hidden lg:flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('Training 1 1.png')" }}
      >
        {/* Heading at the top */}
        <div className="text-center md:text-left mt-28 ml-14">
          <h1 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-[#000000]">
            <span className="text-[#FFC80E] ">The Learning Trinity:</span> <br />
            <span className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 text-[#000000]">
              Where Academia Meets Industry Expertise
            </span>
          </h1>
        </div>

        {/* Paragraph and Button in the bottom-left corner */}
        <div className="absolute bottom-8 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 text-left">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#ffffff] mb-4 font-light">
            It is a long established fact that reader will be distracted by readable content of a page when.
          </p>

          <button
            onClick={handleScroll}
            className="btn-know-more relative inline-flex px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap"
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
          </button>
        </div>

        {/* Stat boxes positioned in corners with padding and margin */}
        <div className="absolute top-36 right-4 p-2">
          <div className="bg-[#003073] p-3 rounded-2xl shadow-md flex items-center space-x-2">
            <FaTools className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
            <div className="text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">Customized Trainings</h3>
              <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">Tailored to your needs</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-4 p-2">
          <div className="bg-[#003073] p-3 rounded-2xl shadow-md flex items-center space-x-2">
            <FaChalkboardTeacher className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
            <div className="text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">Expert Trainers</h3>
              <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">Learn from industry experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background for Medium and Small Screens */}
      <div className="lg:hidden flex flex-col justify-center items-center bg-cover bg-center p-4"
        style={{ backgroundImage: "url('Training 1 1.png')" }} // Add a smaller image here
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#FFC80E] mb-4">
            The Learning Trinity: Where Academia Meets Industry Expertise
          </h1>
          <p className="text-base text-[#ffffff] mb-6">
            It is a long established fact that reader will be distracted by readable content of a page when.
          </p>
          
        </div>
        
        {/* Stat Boxes for Smaller Screens */}
        <div className="flex flex-row space-x-4 p-4">
          <div className="bg-[#003073] p-3 rounded-2xl shadow-md flex items-center">
            <FaTools className="text-[#FFC80E] text-xl sm:text-2xl" />
            <div className="text-center ml-2">
              <h3 className="text-sm sm:text-base font-bold text-[#FFC80E]">Customized Trainings</h3>
              <span className="text-[#ffffff] block text-xs sm:text-sm">Tailored to your needs</span>
            </div>
          </div>

          <div className="bg-[#003073] p-3 rounded-2xl shadow-md flex items-center">
            <FaChalkboardTeacher className="text-[#FFC80E] text-xl sm:text-2xl" />
            <div className="text-center ml-2">
              <h3 className="text-sm sm:text-base font-bold text-[#FFC80E]">Expert Trainers</h3>
              <span className="text-[#ffffff] block text-xs sm:text-sm">Learn from industry experts</span>
            </div>
          </div>
        
        </div>
        <button
            onClick={handleScroll}
            className="btn-know-more relative inline-flex px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap mb-4"
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
          </button>
      </div>

      <style>{`
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
