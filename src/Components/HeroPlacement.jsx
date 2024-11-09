import React, { useState, useEffect } from 'react';

const headings = [
  "Access A Diverse Pool Of Ready-To-Work Candidates",
  "Your Premier Partner For Recruiting Fresh Talent",
  "Find Passionate Ready Talent To Elevate Your Brand"
];



const HeroPlacement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Determine interval duration based on current heading index
    const intervalDuration = currentIndex === 0 ? 3000 : 4000;

    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
        setIsExiting(false);
      }, 500); // Duration of the slide-out animation
    }, intervalDuration);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]); // Dependency on currentIndex

  return (
    <div className="relative bg-[#01224F] z-10 w-full roboto-regular lg:max-h-[80vh] lg:h-[80vh]">
      <style>
        {`
          @keyframes slide-in {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-out {
            0% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-100%);
              opacity: 0;
            }
          }

          .slide-enter {
            animation: slide-in 0.5s forwards;
          }

          .slide-exit {
            animation: slide-out 0.5s forwards;
          }

          h1 {
            word-spacing: 0.3rem;
            line-height: 1.2;
            padding: 0 1rem; /* Added padding for smaller screens */
          }

          /* Responsive Styles */
          @media (max-width: 640px) { /* Small devices */
  h1 {
    font-size: 1rem; /* Adjust font size for small screens */
  }
}

@media (min-width: 640px) and (max-width: 1024px) { /* Medium devices */
  h1 {
    font-size: 2rem; /* Adjust font size for medium screens */
  }
}

@media (min-width: 1024px) { /* Large devices */
  h1 {
    font-size: 3rem; /* Adjust font size for large screens */
  }
}

@media (min-width: 1280px) { /* Extra large devices */
  h1 {
    font-size: 3rem; /* Adjust font size for extra large screens */
  }
}


          /* Adjust banner image */
          img {
            max-width: 100%;
            height: auto; /* Maintain aspect ratio */
          }
        `}
      </style>

      {/* Image Section */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Original image */}
        <img
          src="Clgimage/Heroplace.webp"
          className="w-full h-full object-cover opacity-100" 
          alt="A vibrant scene representing recruitment solutions"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#01224F] opacity-85" />

        {/* Stacked Text and Banner */}
        <div className="absolute flex flex-col items-center justify-center h-full">
          <h1
            className={`text-white font-bold text-center mb-2 ${
              isExiting ? 'slide-exit' : 'slide-enter'
            }`}
          >
            {headings[currentIndex]}
          </h1>

          {/* Banner Image Below the Heading */}
          <div className="w-full flex justify-center">
            <img
              src="placement-bg/BannerNew1.avif" // Update with your banner image path
              className="w-auto" // Adjust width or height as needed
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlacement;
