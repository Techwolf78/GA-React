import React, { useState, useEffect } from 'react';
import DmHookLine from './DmHookLine';

const VideoBackground = () => {
  const [isAtBottom, setIsAtBottom] = useState(false); // State to control position
  const [scrollDirection, setScrollDirection] = useState('left'); // State to control scroll direction

  let lastScrollY = 0; // To store the last scroll position

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('right'); // Scroll down
      } else {
        setScrollDirection('left'); // Scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="journey/1.mp4" type="video/mp4" />
        <source src="journey/1.mp4" type="video/webm" />
      </video>

      {/* Content inside the page */}
      <div className="relative z-10 text-center w-full h-full bg-black bg-opacity-5">
        <div className="text-white text-3xl font-semibold pt-96">
          {/* <p>Here is some text on top of the video background.</p> */}
        </div>
      </div>

      {/* HookLine */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isAtBottom ? 'bottom-20' : 'top-3/4'
        }`} // Set the bottom position to 20 (or 80% from the bottom of the screen)
        onClick={() => setIsAtBottom((prev) => !prev)} // Toggle position on click
      >
        <DmHookLine scrollDirection={scrollDirection} />
      </div>
    </div>
  );
};

export default VideoBackground;
