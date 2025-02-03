import React, { useState, useEffect } from 'react';
import DmHookLine from './DmHookLine'; // Assuming this component is in the same directory
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DigitalHero = () => {
  const [isAtBottom, setIsAtBottom] = useState(false); // HookLine position state
  const [scrollDirection, setScrollDirection] = useState('left'); // Initial scroll direction (default to 'left')

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection('right');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('left');
    }

    setLastScrollY(currentScrollY);
  };

  const handleLearnMoreClick = () => {
    // Scroll to 40vh (viewport height)
    window.scrollTo({
      top: window.innerHeight * 0.6, // 40% of the viewport height
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="relative w-full h-[70vh] md:h-[62vh] lg:h-[92vh] flex flex-col md:flex-row bg-[#e6ebf2]">
      {/* Left Side: Text Overlay */}
      <div className="w-full md:w-1/2 flex flex-col mt-10 md:mt-24 px-8 md:px-16 text-black z-10">
        <h1 className="text-2xl md:text-[42px] leading-tight">
          Innovative media strategies for breakthrough growth
        </h1>
        <p className="text-2xl md:text-[42px] text-[#817b95] leading-tight">
          Our data-centric approach ensures every decision delivers measurable results.
        </p>

        {/* Button Container */}
        <div className="flex space-x-6 mt-6">
          <Link to="/contact">
            <button className="hidden md:block px-8 py-4 bg-[#01224F] text-white rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#0A2C57] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Contact Us
            </button>
          </Link>
          <button
            onClick={handleLearnMoreClick} // Add onClick handler to scroll
            className="hidden md:block px-8 py-4 bg-gray-300 text-black rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-[#01224F] hover:text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 h-full px-8 md:px-16 relative">
        <img
          src="journey/digitaldm.png" // flower petal image
          alt="Digital Innovation"
          className="object-contain object-top mt-2 md:mt-10 w-full h-full" // Cover the full right side of the screen
        />
      </div>

      {/* HookLine */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isAtBottom ? 'bottom-10' : 'bottom-10'}`}
        onClick={() => setIsAtBottom(!isAtBottom)}
      >
        <DmHookLine scrollDirection={scrollDirection} />
      </div>
    </div>
  );
};

export default DigitalHero;
