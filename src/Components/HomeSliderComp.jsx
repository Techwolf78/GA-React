import React from 'react';

const HomeSliderComp = () => {
  const logos = [
    "TopRecruiters/1.png",
    "TopRecruiters/2.png",
    "TopRecruiters/3.png",
    "TopRecruiters/4.png",
    "TopRecruiters/5.png",
    "TopRecruiters/6.png",
    "TopRecruiters/7.png",
    "TopRecruiters/8.png",
    "TopRecruiters/9.png",
    "TopRecruiters/10.png",
    "TopRecruiters/11.png",
    "TopRecruiters/12.png",
    "TopRecruiters/13.png",
    "TopRecruiters/14.png",
    "TopRecruiters/15.png",
    "TopRecruiters/16.png",
    "TopRecruiters/17.png",
    "TopRecruiters/18.png",
    "TopRecruiters/19.png",
    "TopRecruiters/20.png",
  ];

  return (
    <div className="home-slider-section bg-[#01224f] py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
          <span className='text-[#FFC80E]'> TRUSTED </span> PARTNERS
        </h2>
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
