import React from 'react';

const MajorRecruiter = () => {
  const logos = [...Array(12)].map((_, index) => (
    <div key={index} className="logo-slider-item flex-none mx-2">
      <img
        src={`Logos/${index + 1}.jpg`}
        alt="College Logo"
        className="h-16 sm:h-20 md:h-24 max-w-full object-contain" // Responsive height
      />
    </div>
  ));

  return (
    <div className="logo-slider-section bg-[#091327] py-0 px-0 roboto-regular">
      <div className="container mx-auto">
        <p className="section-heading text-[#FFC80E] text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-2">
          OUR MAJOR RECRUITERS
        </p>
        <div className="logo-slider relative overflow-hidden w-full">
          <div className="logo-slider-track flex animate-scroll">
            {/* Duplicate the logos for infinite scroll effect */}
            {[...logos, ...logos]}
          </div>
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>
        {`
          .logo-slider-track {
            display: flex; /* Ensure the logos are in a row */
            width: calc(150px * 12); /* Adjust based on the number of logos */
            animation: scroll 20s linear infinite;
          }

          .logo-slider-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-150px * 12)); } /* Adjust based on the total number of logos */
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
