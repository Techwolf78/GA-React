import React, { useState, useEffect } from 'react';

const backgroundImage = "/Corporate Training Page Zip/Corporate Training.png"; // Static image

const content = [
  "Delivering tailored solutions that drive measurable success and enhance organizational readiness within the learning technology ecosystem",
  "Seamless execution, digital transformation, talent retention strength, Drive Sales ROI"
];

const corporateTrainingParagraph = "Our customized corporate training programmes are specifically designed to meet your organization’s unique needs. In a rapidly evolving corporate landscape, we address critical challenges that hinder growth and productivity. By focusing on essential skills such as communication, negotiation, critical thinking, Operational Resilience and Adaptability, Workforce Management and Engagement & leadership, we empower teams to overcome obstacles and enhance collaboration.";

function HeroCorporate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const intervalDuration = currentIndex === 0 ? 6000 : 4000; // 6 seconds for the first heading, 4 seconds for others

    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        setIsExiting(false);
      }, 500); // Duration of the slide-out animation
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden box-border">
      {/* Background Image */}
      <img
        src={backgroundImage}
        className="w-full h-auto object-cover max-h-screen" // Limit height to max screen height
        alt="Corporate training illustration"
      />

      {/* Overlay for Heading Section */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div> {/* Adjusted opacity */}

      {/* Heading Section */}
      <div className="absolute top-2 left-0 right-0 text-center z-10 px-4 md:px-8 lg:px-16 xl:px-32 py-2 md:top-1/4">
        <h1
          className={`text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-1 leading-tight md:leading-normal text-yellow-400 ${
            isExiting ? 'slide-exit' : 'slide-enter'
          }`}
        >
          {content[currentIndex]}
        </h1>
      </div>

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
        `}
      </style>

      {/* New Corporate Training Section */}
      <div className="bg-gray-100 py-8 shadow-md relative z-10">
      
        <p className="mx-auto lg:text-2xl md:text-xl sm:text-lg text-center px-8 sm:px-16 text-gray-500">
          {corporateTrainingParagraph}
        </p>
      </div>
    </div>
  );
}

export default HeroCorporate;
