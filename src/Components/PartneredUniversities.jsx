import React from 'react';

const PartneredUniversities = () => {
  return (
    <div className="relative px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16 py-6 bg-[#091327] text-white roboto-regular">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 text-[#FFC80E]">
        Partnered with 60+ Colleges/Universities
      </h1>
    
      <div className="w-full flex justify-center items-center overflow-hidden mb-6">
        <img 
          src="placement-bg/PlacementBG.png" 
          alt="Background showing partnered colleges and universities" 
          className="w-full h-auto object-cover" 
        />
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFC80E] mb-4">
          Gender Distribution of Students
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center">
            <img 
              src="placement-bg/man.png" 
              alt="Male Icon"
              className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-3" 
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold">55% MALE STUDENTS</span>
          </div>
          <div className="flex items-center">
            <img 
              src="placement-bg/woman.png" 
              alt="Female Icon"
              className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-3" 
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold">45% FEMALE STUDENTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredUniversities;
