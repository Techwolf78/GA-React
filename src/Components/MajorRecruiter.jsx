import React, { useEffect, useState } from 'react';

const MajorRecruiter = () => {
  const [reverse, setReverse] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const logos = [
    'TopRecruiters/40.jpg',
    'TopRecruiters/1.png',
    'TopRecruiters/2.png',
    'TopRecruiters/3.png',
    'TopRecruiters/4.png',
    'TopRecruiters/5.png',
    'TopRecruiters/6.png',
    'TopRecruiters/7.png',
    'TopRecruiters/8.png',
    'TopRecruiters/9.png',
    'TopRecruiters/10.png',
    'TopRecruiters/11.png',
    'TopRecruiters/12.png',
    'TopRecruiters/13.png',
    'TopRecruiters/14.png',
    'TopRecruiters/15.png',
    'TopRecruiters/16.png',
    'TopRecruiters/17.png',
    'TopRecruiters/18.png',
    'TopRecruiters/19.png',
    'TopRecruiters/20.png',
  ].map((src, index) => (
    <div key={`first-${index}`} className="logo-slider-item flex-none mx-4 my-2">
      <img
        src={src}
        alt="College Logo"
        className="h-12 sm:h-16 md:h-20 max-w-full object-contain"
      />
    </div>
  ));

  const duplicatedLogos = logos.map((logo, index) => 
    React.cloneElement(logo, { key: `second-${index}` })
  );

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === (isMobile ? 'scroll-mobile' : 'scroll')) {
        setReverse(true);
      } else if (e.animationName === 'reverseScroll') {
        setReverse(false);
      }
    };

    const logoSlider = document.querySelector('.logo-slider-track');
    logoSlider.addEventListener('animationend', handleAnimationEnd);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      logoSlider.removeEventListener('animationend', handleAnimationEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="logo-slider-section bg-[#003073] roboto-regular relative">
      {/* Big box on the top left side of the slider */}
      {!isMobile && (
        <div className="info-box absolute top-0 left-0 bg-white p-4 shadow-lg flex items-center h-full">
          <h2 className="text-[16px] text-[#ffff]">OUR TOP RECRUITERS</h2>
        </div>
      )}

      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${reverse ? 'reverse' : (isMobile ? 'animate-scroll-mobile' : 'animate-scroll')}`}>
          {/* Render both sets of logos */}
          {[...logos, ...duplicatedLogos]}
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>
        {`
          .logo-slider-section {
            padding: 0;
            margin: 0;
            position: relative;
          }

          .info-box {
            z-index: 10;
            width: 130px;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 16px;
            background-color: #003073;
          }

          @media (max-width: 768px) {
            .info-box {
              display: none; /* Hide info box on mobile */
            }
          }

          .logo-slider {
            width: 100%;
          }

          .logo-slider-track {
            display: flex;
            width: calc(120px * 35); /* Adjust based on the number of logos */
          }

          .animate-scroll {
            animation: scroll 15s linear forwards; /* Original animation */
          }

          .animate-scroll-mobile {
            animation: scroll-mobile 15s linear forwards; /* Fast animation for mobile */
          }

          .reverse {
            animation: reverseScroll 5s linear forwards; /* Reverse animation for mobile */
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-120px * 35)); } /* Scroll all logos */
          }

          @keyframes scroll-mobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-120px * 20)); } /* Adjust for total logos */
          }

          @keyframes reverseScroll {
            0% { transform: translateX(calc(-120px * 20)); }
            100% { transform: translateX(0); } /* Go back to start */
          }

          .logo-slider-track:hover {
            animation-play-state: paused;
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
