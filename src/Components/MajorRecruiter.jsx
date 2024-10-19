import React, { useEffect, useState } from 'react';

const MajorRecruiter = () => {
  const [reverse, setReverse] = useState(false);
  
  // Manually define the array of logo paths
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
    <div key={index} className="logo-slider-item flex-none mx-4 my-2">
      <img
        src={src}
        alt="College Logo"
        className="h-12 sm:h-16 md:h-20 max-w-full object-contain"
      />
    </div>
  ));

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === 'scroll') {
        setReverse(true);
      } else if (e.animationName === 'reverseScroll') {
        setReverse(false);
      }
    };

    const logoSlider = document.querySelector('.logo-slider-track');
    logoSlider.addEventListener('animationend', handleAnimationEnd);

    return () => {
      logoSlider.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="logo-slider-section bg-[#003073] roboto-regular relative">
      {/* Big box on the top left side of the slider */}
      <div className="info-box absolute top-0 left-0 bg-white p-4 shadow-lg flex items-center h-full">
        <h2 className="text-[16px] text-[#ffff]">OUR TOP RECRUITERS</h2>
      </div>

      <div className="logo-slider relative overflow-hidden w-full">
        <div className={`logo-slider-track flex ${reverse ? 'reverse' : 'animate-scroll'}`}>
          {/* Duplicate the logos for smooth scroll effect */}
          {[...logos, ...logos]}
        </div>
      </div>

      {/* Inline styles for custom CSS */}
      <style>
        {`
          .logo-slider-section {
            padding: 0; /* Remove padding */
            margin: 0; /* Remove margin */
            position: relative; /* For absolute positioning of the info box */
          }

          .info-box {
            z-index: 10; /* Ensure it appears above the slider */
            width: 130px; /* Set the width of the box for large screens */
            height: 100%; /* Match height with the slider */
            display: flex; /* Flexbox to arrange content */
            align-items: center; /* Center content vertically */
            padding: 16px; /* Adjust padding as needed for large screens */
            background-color: #003073; /* Background color */
          }

          @media (max-width: 768px) {
            .info-box {
              width: 110px; /* Set the width of the box for small screens */
              padding: 8px; /* Adjust padding for small screens */
            }
          }

          .logo-slider {
            width: 100%; /* Ensure full width */
          }

          .logo-slider-track {
            display: flex; /* Ensure the logos are in a row */
            width: calc(120px * 35); /* Adjust based on the number of logos */
          }

          .animate-scroll {
            animation: scroll 15s linear forwards; /* Start animation */
          }

          .reverse {
            animation: reverseScroll 5s linear forwards; /* Reverse animation */
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-120px * 35)); } /* Scroll all logos */
          }

          @keyframes reverseScroll {
            0% { transform: translateX(calc(-120px * 20)); }
            100% { transform: translateX(0); } /* Scroll back to start */
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
