// LoadingSpinner.js
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LoadingSpinner = () => {
  const animationPath = "/LandingImage/animation-loading.json"; // Path to your JSON file in the public folder

  return (
    <div className="flex items-center justify-center h-screen">
      <Player
        autoplay
        loop
        src={animationPath}
        style={{ height: '400px', width: '400px' }} // Increased size
      />
    </div>
  );
};

export default LoadingSpinner;
