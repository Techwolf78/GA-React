import React, { useState, useEffect } from 'react';

const HeroPlacement = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'Clgimage/Heroplace.png';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative bg-[#003073] z-10 w-full roboto-regular">
      {/* Image Section */}
      <div className={`relative w-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {!imageLoaded && (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Loading...</span>
          </div>
        )}
        <img
          src="Clgimage/Heroplace.png"
          className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          alt="A vibrant scene representing recruitment solutions"
        />

        {/* Overlay */}
        {imageLoaded && (
          <div className="absolute inset-0 bg-[#003073] opacity-90" />
        )}
        
        {/* Text Section */}
        {imageLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1
              className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center px-6 uppercase"
              style={{ wordSpacing: '0.5rem', lineHeight: '1.2' }}  // Add line height for more space
            >
              One Stop Commercial Free Solution to Recruiter’s Complete Fresher’s Hiring Needs
            </h1>
          </div>
        )}
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
