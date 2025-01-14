import React, { Suspense, useState, useEffect } from "react";
import "../assets/CSS/Placement.css"; // Optional, for other custom styles

// Dynamically import components
const HeroPlacement = React.lazy(() => import("./HeroPlacement"));
const PartneredUniversities = React.lazy(() => import("./PartneredUniversities"));
const PartneredCollege = React.lazy(() => import("./PartneredCollege"));
const CollegeAccreditation = React.lazy(() => import("./CollegeAccreditation"));
const Advisory = React.lazy(() => import("./Advisory"));
const RecruiterTestimonial = React.lazy(() => import("./RecruiterTestimonial"));
const SuccessfulDrives = React.lazy(() => import("./SuccessfulDrives"));
const MajorRecruiter = React.lazy(() => import("./MajorRecruiter"));
const ConnectWithUs = React.lazy(() => import("./ConnectWithUs"));
const HookLine = React.lazy(() => import("./HookLine"));
const PlacementKnowMore = React.lazy(() => import("./PlacementKnowMore"));
const PlacementProfiles = React.lazy(() => import("./PlacementProfiles"));

const Placement = () => {
  // State to manage the loading percentage
  const [loadingPercent, setLoadingPercent] = useState(0);

  // This effect will simulate the loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prevPercent) => {
        // If it's already 100%, stop the interval
        if (prevPercent >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment the loading percentage by a random value
        return Math.min(prevPercent + Math.random() * 5, 100); // Increment by a random value to simulate loading
      });
    }, 300); // Update every 300ms

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#01224F]">
      <Suspense
        fallback={
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center z-50"
            style={{
              animation: "fadeIn 0.5s ease-in-out",
            }}
          >
            {/* Loading Spinner */}
            <div
              className="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full"
              style={{
                borderTopColor: "#3498db", // Spinner color
                animation: "spin 2s linear infinite", // Inline spin animation
              }}
            />
            {/* Text and dynamic percentage */}
            <div className="text-white mt-4 text-lg">
              <p>Loading... {Math.round(loadingPercent)}%</p>
            </div>

            {/* Inline keyframes for the animations */}
            <style>
              {`
                @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
                @keyframes fadeIn {
                  0% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
              `}
            </style>
          </div>
        }
      >
        {/* The rest of the page content */}
        <HeroPlacement />
        <MajorRecruiter />
        <PartneredUniversities />
        <CollegeAccreditation />

        <HookLine />

        <PartneredCollege />

        {/* New Section: TRAINING EVALUATION JOURNEY */}
        <div className="p-0 text-center roboto-regular relative">
          <div className="w-full h-auto bg-[#ffffff] relative">
            <img
              src="placement-bg/evatrain.avif"
              alt="Infographic"
              className="w-full h-auto block mx-auto"
            />
          </div>
        </div>

        <PlacementKnowMore />
        <PlacementProfiles />
        <Advisory />
        <SuccessfulDrives />
        <RecruiterTestimonial />
        <ConnectWithUs />
      </Suspense>
    </div>
  );
};

export default Placement;
