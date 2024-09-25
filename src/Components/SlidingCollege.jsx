import React from 'react';

const SlidingCollege = () => {
  return (
    <div className="logo-slider-section bg-[#091327] py-8 px-4 sm:px-6 lg:px-8 roboto-regular">
      <div className="container mx-auto px-4">
        <p className="section-heading text-[#FFC80E] text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          OUR COLLEGE PARTNERS
        </p>
        <div className="logo-slider relative overflow-hidden w-full">
          <div className="logo-slider-track flex animate-scroll">
            {/** College logos go here */}
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/1-1.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/13-1.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/14-1.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/15-1.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/16-1.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/6-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/7-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/8-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/9-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/10-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/11-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            <div className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src="Clgimage/12-2.png" alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
            {/* Add more logo items as needed */}
          </div>
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>{`
        .logo-slider-track {
          width: calc(120px * 12); /* Adjust based on the number of logos */
          animation: scroll 20s linear infinite;
        }

        .logo-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-120px * 6)); } /* Adjust based on the number of logos */
        }
      `}</style>
    </div>
  );
};

export default SlidingCollege;
