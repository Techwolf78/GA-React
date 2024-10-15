import React from 'react';

const MajorRecruiter = () => {
  const logos = [...Array(12)].map((_, index) => (
    <div key={index} className="logo-slider-item flex-none mx-4 my-2">
      <img
        src={`Logos/${index + 1}.jpg`}
        alt="College Logo"
        className="h-12 sm:h-16 md:h-20 max-w-full object-contain"
      />
    </div>
  ));

  return (
    <div className="logo-slider-section bg-[#003073] roboto-regular relative">
      {/* Big box on the top left side of the slider */}
      <div className="info-box absolute top-0 left-0 bg-white p-4 shadow-lg flex items-center h-full">
        <h2 className="text-[16px]  text-[#ffff]">OUR TOP RECRUITERS</h2>
      </div>

      <div className="logo-slider relative overflow-hidden w-full">
        <div className="logo-slider-track flex animate-scroll">
          {/* Duplicate the logos for infinite scroll effect */}
          {[...logos, ...logos]}
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>
        {`
          .logo-slider-section {
            padding: 0; /* Remove padding */
            margin: 0; /* Remove margin */
            position: relative; /* For absolute positioning of the info box */
          }

          .info-box {
            z-index: 10; /* Ensure it appears above the slider */
            width: 130px; /* Set the width of the box */
            height: 100%; /* Match height with the slider */
            display: flex; /* Flexbox to arrange content */
            align-items: center; /* Center content vertically */
            padding: 16px; /* Adjust padding as needed */
            background-color: #003073; /* White background */
          }

          .logo-slider {
            width: 100%; /* Ensure full width */
          }

          .logo-slider-track {
            display: flex; /* Ensure the logos are in a row */
            width: calc(120px * 12); /* Adjust based on the reduced logo size */
            animation: scroll 5s linear infinite;
          }

          @media (min-width: 768px) {
            .logo-slider-track {
              animation: scroll 10s linear infinite;
            }
          }

          .logo-slider-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-120px * 12)); } /* Adjust based on the total number of logos */
          }

          @media (max-width: 640px) {
            .logo-slider-track {
              width: calc(100%); /* Make it responsive on small screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default MajorRecruiter;
