import { useEffect, useState } from 'react';

const HomeSliderClg = () => {
  const [isVisible, setIsVisible] = useState(true);
  
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

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="logo-slider-section bg-[#01224f] py-4 roboto-regular">
      <div className="text-center mb-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-white">
          <span className="text-[#FFC80E]">Trusted</span> Partners
        </h2>
      </div>
      
      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${isVisible ? 'animate' : ''}`}>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img 
                src={logo} 
                alt={`College Logo ${index + 1}`} 
                className="h-16 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slide flex-none mx-3 sm:mx-4 md:mx-5">
              <img 
                src={logo} 
                alt={`College Logo ${index + 1}`} 
                className="h-16 sm:h-20 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#01224f] to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#01224f] to-transparent z-10" />
      </div>

      <style>{`
        .logo-slider {
          position: relative;
          padding: 0 20px;
        }

        .logo-slider-track {
          display: flex;
          width: fit-content;
        }

        .logo-slider-track.animate {
          animation: slide 40s linear infinite;
        }

        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation when user hovers */
        .logo-slider:hover .logo-slider-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .logo-slider-track.animate {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSliderClg;