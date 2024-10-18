import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Revolution = () => {
  const [currentYear, setCurrentYear] = useState(2004);
  const [currentDescription, setCurrentDescription] = useState(
    "Management consulting practice created within Infosys"
  );

  const yearData = {
    2004: "Management consulting practice created within Infosys",
    2012: "Expansion into new markets and services.",
    2014: "Acquisition of key firms to enhance capabilities.",
    2015: "Launch of innovative digital solutions.",
    2018: "Recognition as a leader in consulting services."
  };

  const handleDotClick = (year) => {
    setCurrentYear(year);
    setCurrentDescription(yearData[year]);
  };

  const animationProps = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('placement-bg/plac-new.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center">
          {/* Animated Year */}
          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentYear} 
              className="text-6xl font-bold" 
              {...animationProps}
            >
              {currentYear}
            </motion.h1>
          </AnimatePresence>

          {/* Animated Description */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentDescription} 
              className="text-xl mt-4" 
              {...animationProps}
            >
              {currentDescription}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Timeline */}
      <div className="absolute bottom-0 left-0 right-0 mb-8">
        <div className="flex justify-center items-center space-x-6">
          {Object.keys(yearData).map((year) => (
            <div 
              key={year} 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleDotClick(year)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') handleDotClick(year); }}
            >
              <span className="text-sm text-white">{year}</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-125">
                <span className="text-xs text-black">{year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Revolution;
