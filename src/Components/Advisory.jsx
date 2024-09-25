import React from 'react';
import { Typography } from "@material-tailwind/react";

// Image List
const HORIZONTAL_IMAGES = [
  "Advisory/Advisory 1.png",
  "Advisory/Advisory 2.png",
  "Advisory/Advisory 3.png",
  "Advisory/Advisory 4.png",
  "Advisory/Advisory 5.png",
  "Advisory/Advisory 6.png",
  "Advisory/Advisory 7.png",
  "Advisory/Advisory 8.png",
];

// Function to create duplicated images for seamless scrolling
const getDuplicatedImages = (images) => [...images, ...images];

const Advisory = () => {
  // Create duplicated image list
  const duplicatedImages = getDuplicatedImages(HORIZONTAL_IMAGES);

  return (
    <div className="p-8 bg-[#091327] roboto-regular"> {/* Dark background */}
      {/* Horizontal Images Section */}
      <div className="mb-12">
        <h2 className="text-center mb-6 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#ffc700]">
          OUR ADVISORY BOARD
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 advisory-scroll">
            {duplicatedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Highlight ${index + 1}`}
                className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-contain rounded-lg" // Responsive width for larger devices
                style={{ opacity: 0.8 }} // Adjust opacity as needed
              />
            ))}
          </div>
          {/* Animation Style */}
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .advisory-scroll {
                display: flex;
                align-items: center;
                animation: scroll 10s linear infinite;
                white-space: nowrap; /* Prevent images from wrapping to the next line */
              }

              .overflow-hidden {
                width: 100%;
                overflow: hidden;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
