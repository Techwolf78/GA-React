import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

const NotFound = () => {
  const animationData = "/About/404.json"; // URL of the Lottie JSON file

  const defaultOptions = {
    loop: true,
    autoplay: true, // animation will play as soon as it's loaded
    path: animationData, // Use the URL directly
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Optionally preserve aspect ratio
    },
  };

  return (
    <div className="flex items-center justify-center h-[50vh] md:h-[60vh] lg:h-screen w-auto mx-auto  bg-gradient-to-r from-indigo-500 to-blue-600 relative overflow-hidden">
      {/* Lottie Animation */}
      <Lottie
        options={defaultOptions}
        className="w-1/2"
        style={{ pointerEvents: "none" }} // Prevent Lottie animation from being clickable
      />

      <motion.a
        href="/"
        className="absolute top-6 left-6 px-4 py-2 text-sm sm:text-lg font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition sm:px-6 sm:py-3 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        Go to Home
      </motion.a>
    </div>
  );
};

export default NotFound;
