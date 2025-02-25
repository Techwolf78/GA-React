import React, { useState } from 'react';
 
const BrandPositioningWhyChoose = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
 
  // Data for the blocks
  const blocks = [
    {
      image: 'journey/focus.png',
      title: 'Specialized Focus',
      description: 'We understand the unique challenges and opportunities in the education sector.',
    },
    {
      image: 'journey/apptry.png',
      title: 'Comprehensive Approach',
      description: 'From social media management to event promotion, we cover all digital touchpoints.',
    },
    {
      image: 'journey/datadriven.png',
      title: 'Data-Driven Strategies',
      description: 'Our campaigns are backed by analytics, ensuring measurable results.',
    },
    {
      image: 'journey/creat.png',
      title: 'Creative Excellence',
      description: 'We blend creativity with technology to make your institution stand out.',
    },
    {
      image: 'journey/aud.png',
      title: 'Targeted Audience Segmentation',
      description: 'Leveraging data analytics for personalized messaging and higher engagement across campaigns.',
    },
    {
      image: 'journey/int.png',
      title: 'Seamless Integration',
      description: 'Our digital efforts complement your offline marketing for maximum impact.',
    },
  ];
 
  return (
    <div className="bg-[#1e3a8a] h-auto py-4 md:py-8 px-6 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
          Why Choose Gryphon Academy for Your Digital Marketing Needs?
        </h2>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-300 mx-auto">
          Proven expertise in delivering exceptional results for clients across diverse industries.
        </p>
 
        {/* Icons and Content Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Card Blocks */}
          {blocks.map((block, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center bg-[#01224F] transform transition-all duration-300 hover:bg-[#1A237E] hover:text-white hover:shadow-[0px_10px_30px_rgba(0,0,0,1)] hover:-translate-y-4 p-6 rounded-lg"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}
            >
              {/* Shine effect */}
              {hoveredIndex === index && (
                <div className="shine-effect shine-animation" />
              )}
              <div className="mb-4">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl leading-6 font-medium text-white">{block.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
 
      <style>
        {`
          .shine-effect {
            position: absolute;
            top: 0;
            left: -150%;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 75%);
            transform: skewX(-45deg);
            opacity: 0;
            pointer-events: none;
            z-index: 1;
          }
 
          @keyframes shineMove {
            0% {
              left: -150%;
            }
            100% {
              left: 150%;
            }
          }
 
          .shine-animation {
            animation: shineMove 0.9s linear forwards;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};
 
export default BrandPositioningWhyChoose;