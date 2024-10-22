import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  "journey/Campus 11.png",
  "journey/Campus 7.png",
  "journey/Campus 9.png",
  "journey/Campus 3.png",
  "journey/Campus 5.png",
  "journey/Campus 8.png",
  "journey/Campus 10.png",
  "journey/Campus 6.png",
  "journey/Campus 11.png",
  "journey/Campus 7.png",
  "journey/Campus 9.png",
  "journey/Campus 3.png",
  "journey/Campus 5.png",
  "journey/Campus 8.png",
  "journey/Campus 10.png",
  "journey/Campus 6.png"
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const imageGroups = [];
  for (let i = 0; i < images.length; i += 4) {
    imageGroups.push(images.slice(i, i + 4));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageGroups.length);
        setFade(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageGroups.length]);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageGroups.length);
      setFade(false);
    }, 1000);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageGroups.length) % imageGroups.length);
      setFade(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white roboto-regular">
    <div className="flex w-full mb-8 items-center">
      {/* Heading */}
      <div className="flex w-1/2 pr-4 items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#091327] leading-tight">
            Team
          </h1>
          <h2 className="text-5xl font-semibold text-[#003073] lg:ml-80">
            Galleries
          </h2>
        </div>
      </div>

        {/* First Image Container */}
        <div className={`gallery-img-wrap transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"} w-1/4 px-2`}>
          <div className="w-4/5 h-56 overflow-hidden">
            <img src={imageGroups[currentIndex][0]} alt={`Gallery 1`} className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Second Image Container */}
        <div className={`gallery-img-wrap transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"} w-1/4 px-2`}>
          <div className="w-4/5 h-56 overflow-hidden">
            <img src={imageGroups[currentIndex][1]} alt={`Gallery 2`} className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="flex w-full mb-8">
        {/* Empty First Part */}
        <div className="w-1/4"></div>

        {/* Third Image Container */}
        <div className={`gallery-img-wrap transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"} w-1/4 px-2`}>
          <div className="w-4/5 h-56 overflow-hidden">
            <img src={imageGroups[currentIndex][2]} alt={`Gallery 3`} className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Fourth Image Container */}
        <div className={`gallery-img-wrap transition-opacity duration-1000 ${fade ? "opacity-0" : "opacity-100"} w-1/4 px-2`}>
          <div className="w-4/5 h-56 overflow-hidden">
            <img src={imageGroups[currentIndex][3]} alt={`Gallery 4`} className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>

        {/* Empty Last Part */}
        <div className="w-1/4"></div>
      </div>

      {/* Arrow Controls */}
      <div className="flex justify-center items-center mt-6">
        <button onClick={handlePrev} className="p-3 bg-blue-600 text-white rounded-full mx-4 hover:bg-blue-700 transition-colors shadow-lg">
          <FiChevronLeft size={24} />
        </button>

        <button onClick={handleNext} className="p-3 bg-blue-600 text-white rounded-full mx-4 hover:bg-blue-700 transition-colors shadow-lg">
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
