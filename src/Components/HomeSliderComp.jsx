import React from 'react';

const HomeSliderComp = () => {
  const logos = [
    "Logos/1.jpg",
    "Logos/2.jpg",
    "Logos/3.jpg",
    "Logos/4.jpg",
    "Logos/5.jpg",
    "Logos/6.jpg",
    "Logos/7.jpg",
    "Logos/8.jpg",
    "Logos/9.jpg",
    "Logos/10.jpg",
    "Logos/11.jpg",
    "Logos/12.jpg",
  ];

  return (
    <div className="home-slider-section bg-[#01224f] py-4 roboto-regular">
<div className="text-center mb-4">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">Our <span className='text-[#FFC80E]'> Trusted </span> Partners</h2>
</div>
      <div className="home-slider relative overflow-hidden w-full">
        <div className="home-slider-track flex animate-scroll-left">
          {logos.map((logo, index) => (
            <div key={index} className="home-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="home-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .home-slider-track {
          width: calc(120px * ${logos.length * 2});
          animation: scroll-left 20s linear infinite;
        }

      

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-120px * ${logos.length})); }
        }
      `}</style>
    </div>
  );
};

export default HomeSliderComp;
