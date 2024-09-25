import React from 'react';

const MajorRecruiter = () => {
  return (
    <div className="logo-slider-section bg-[#091327] py-8 px-4 sm:px-6 lg:px-8 roboto-regular">
      <div className="container mx-auto">
        <p className="section-heading text-[#FFC80E] text-center text-3xl sm:text-4xl font-bold mb-4">
          OUR MAJOR RECRUITERS
        </p>
        <div className="logo-slider relative overflow-hidden w-full">
          <div className="logo-slider-track flex animate-scroll">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="logo-slider-item flex-none mx-5">
                <img
                  src={`Logos/${index + 1}.jpg`}
                  alt="College Logo"
                  className="h-20 sm:h-24 max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>
        {`
          .logo-slider-track {
            width: calc(150px * 12); /* Adjust based on the number of logos */
            animation: scroll 20s linear infinite;
          }

          .logo-slider-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-150px * 6)); } /* Adjust based on the number of logos */
          }
        `}
      </style>
    </div>
  );
};

export default MajorRecruiter;
