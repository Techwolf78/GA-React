import React from 'react';

const HeroPlacement = () => {
  return (
    <div className="relative bg-[#003073] z-10 w-full roboto-regular lg:max-h-[80vh] lg:h-[80vh]">
      {/* Image Section */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Original image */}
        <img
          src="Clgimage/Heroplace.png"
          className="w-full h-full object-cover opacity-100" 
          alt="A vibrant scene representing recruitment solutions"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#003073] opacity-85" />

        {/* Stacked Text and Banner */}
        <div className="absolute flex flex-col items-center justify-center h-full">
          <h1
            className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center px-6 uppercase mb-2"
            style={{ wordSpacing: '0.5rem', lineHeight: '1.2' }}
          >
            One Stop Commercial Free Solution to Recruiter’s Complete Fresher’s Hiring Needs
          </h1>

          {/* Banner Image Below the Heading */}
          <div className="w-full flex justify-center">
            <img
              src="placement-bg/heroPlacement1.PNG" // Update with your banner image path
              className="w-auto" // Adjust width or height as needed
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlacement;
