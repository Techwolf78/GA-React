import React from 'react';
import { Link } from 'react-router-dom'; 

const vectorImage = './Training Page/BrochureBook.png'; 
const trainingPageLink = '/collegetraining#course-section'; 
const arrowImage = './placement-bg/arrow.png'; 

const BrochureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4 bg-[#003073]">
      <style>
        {`
          .bg-brochure {
            background-image: url('./placement-bg/knowMore.webp'); /* Background for medium and larger screens */
            background-size: cover;
            background-position: center;
          }
          .bg-brochure-small {
            background-image: url('./placement-bg/knowMore.webp'); /* Background for small screens */
            background-size: cover;
            background-position: center;
          }
        `}
      </style>

      {/* Responsive Layout */}
      <div className="bg-brochure hidden md:flex flex-col md:flex-row items-center justify-between h-full w-full rounded-3xl shadow-3xl p-6">
        {/* Horizontal Layout for Medium and Large Screens */}
        <div className="flex-none w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
          <div className="flex items-center justify-center">
            <img src={vectorImage} alt="Vector" className="h-20 max-h-20" />
          </div>
        </div>
        <div className="flex-none w-full md:w-2/3 flex flex-col items-center md:items-end text-white">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-0 text-center">
              Know what trained resources you are hiring
            </h2>
            <Link // Use Link instead of a
              to={trainingPageLink}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400 ml-4 whitespace-nowrap"
            >
              Know More 
              <img src={arrowImage} alt="Arrow" className="h-5 w-5 ml-10" />
            </Link>
          </div>
        </div>
      </div>

      {/* Vertical Layout for Small Screens */}
      <div className="bg-brochure-small flex md:hidden flex-col items-center justify-center h-full w-full rounded-3xl shadow-3xl p-6">
        <div className="flex-none w-full flex justify-center mb-4">
          <div className="flex items-center justify-center">
            <img src={vectorImage} alt="Vector" className="h-20 max-h-20" />
          </div>
        </div>
        <div className="flex-none w-full flex flex-col items-center text-white">
          <h2 className="text-xl font-bold mb-4 text-center">
            Know what trained resources you are hiring
          </h2>
          <Link // Use Link instead of a
            to={trainingPageLink}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400 whitespace-nowrap"
          >
            Know More 
            <img src={arrowImage} alt="Arrow" className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;