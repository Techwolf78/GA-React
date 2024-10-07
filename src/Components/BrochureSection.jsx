import React from 'react';

const vectorImage = './Training Page/brochureVector.png'; // Path for vector image
const brochurePDF = './Training Page/Gryphon-Academy-Brochure.pdf'; // Path for PDF

const BrochureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Style tag for background image */}
      <style>
        {`
          .bg-brochure {
            background-image: url('./Training Page/brobg.png'); /* Adjust the path as needed */
            background-size: cover;
            background-position: center;
          }
        `}
      </style>

      {/* Add background class to the div */}
      <div className="bg-brochure flex flex-col md:flex-row items-center justify-between h-full w-full rounded-3xl shadow-3xl p-6">
        {/* Left Side - Vector Image in a Yellow Circle (only for large screens) */}
        <div className="flex-none w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
          <div className="bg-[#FFC80E] rounded-full h-16 w-16 flex items-center justify-center">
            <img src={vectorImage} alt="Vector" className="h-10 max-h-16" />
          </div>
        </div>

        {/* Right Side - Text and Button */}
        <div className="flex-none w-full md:w-2/3 flex flex-col items-center md:items-end text-white">
          <div className="flex flex-col items-center justify-center h-full text-center md:text-right">
            <h2 className="text-xl md:text-2xl font-bold mb-2 break-words">
              Download Brochure for More Information
            </h2>
            <a
  href={brochurePDF}
  download
  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400"
>
  {/* Download Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12V4m0 8l-4-4m4 4l4-4"
    />
  </svg>
  Download Brochure
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureSection;
