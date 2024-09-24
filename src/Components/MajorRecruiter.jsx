import React from 'react';

const MajorRecruiter = () => {
  return (
    <div className="logo-slider-section bg-[#091327] py-8 px-4 sm:px-6 lg:px-8 roboto-regular">
      <div className="container mx-auto px-4">
        <p className="section-heading text-[#FFC80E] text-center text-4xl font-bold mb-4">
        OUR MAJOR RECRUITERS
        </p>
        <div className="logo-slider relative overflow-hidden w-full">
  <div className="logo-slider-track flex animate-scroll">
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/1.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/2.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/3.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/4.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/5.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/6.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/7.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/8.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/9.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/10.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/11.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    <div className="logo-slider-item flex-none mx-5">
      <img src="Logos/12.jpg" alt="College Logo" className="h-24 max-w-[150px] object-contain" />
    </div>
    {/* Add more logo items as needed */}
  </div>
</div>

      </div>

      {/* Inline styles for custom CSS */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default MajorRecruiter;
