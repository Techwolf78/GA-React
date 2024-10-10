import React from 'react';

const HeroPlacement = () => {
  return (
    <div className="relative bg-[#003073] z-10 w-full roboto-regular lg:max-h-[80vh] lg:h-[80vh]">
      {/* Image Section */}
      <div className="relative w-full h-full">
        {/* Original image */}
        <img
          src="Clgimage/Heroplace.png"
          className="w-full h-full object-cover opacity-100" 
          alt="A vibrant scene representing recruitment solutions"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003073] opacity-90" />

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center px-6 uppercase"
            style={{ wordSpacing: '0.5rem', lineHeight: '1.2' }}
          >
            One Stop Commercial Free Solution to Recruiter’s Complete Fresher’s Hiring Needs
          </h1>
        </div>
      </div>

      {/* Loader Style (CSS) */}
      <style>
        {`
          @keyframes slideIn {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 2s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default HeroPlacement;
