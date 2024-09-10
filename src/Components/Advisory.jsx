import React from 'react';
import { Typography } from "@material-tailwind/react";

// Image List
const HORIZONTAL_IMAGES = [
  "Clgimage/Dr.K .S Sagngwan.png",
  "Clgimage/Mr. Mohan Patel.png",
  "Clgimage/Dr.K .S Sagngwan.png",
  "Clgimage/Dr.K .S Sagngwan.png",
  "Clgimage/Dr.K .S Sagngwan.png",
  "Clgimage/Dr.K .S Sagngwan.png",
  "Clgimage/Dr.K .S Sagngwan.png",
  "Clgimage/Dr.K .S Sagngwan.png",
];

// Function to create duplicated images for seamless scrolling
const getDuplicatedImages = (images) => [...images, ...images];

const Advisory = () => {
  // Create duplicated image list
  const duplicatedImages = getDuplicatedImages(HORIZONTAL_IMAGES);

  return (
    <div className="p-8 bg-[#e9e5ff]">
      {/* Horizontal Images Section */}
      <div className="mb-12">
        <Typography variant="h2" color="blue-gray" className="text-center mb-6 font-semibold">
          OUR ADVISORY BOARD
        </Typography>
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 advisory-scroll">
            {duplicatedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Highlight ${index + 1}`}
                className="w-96 h-96 object-contain rounded-lg border-4 border-blue-gray-300 shadow-lg"
              />
            ))}
          </div>
          <style jsx>{`
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
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
