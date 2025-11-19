import React from 'react';

const PartneredUniversities = () => {
  return (
    <div className="relative px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16 pt-6 bg-[#01224F] text-white roboto-regular">
      <h1 className="text-xl md:text-4xl font-bold text-center mb-4 text-[#FFC80E]">
        Partnered with 60+ College/Universities
      </h1>
      
      {/* Background image for medium and large screens */}
      <div className="w-full hidden md:block mb-6">
        <img 
          src="placement-bg/PANIndiaNew.avif" 
          alt="Background showing partnered colleges and universities" 
          className="w-full h-full object-fit" 
          style={{ margin: 0 }} 
        />
      </div>

      {/* Background image for small screens only */}
      <div className="w-full block md:hidden mb-6">
        <img 
          src="placement-bg/PlacementBG1.avif" 
          alt="Background for small screens showing partnered colleges and universities" 
          className="w-full h-auto object-cover" 
          style={{ margin: 0 }} 
        />
      </div>

      <div className="text-center pb-6">
        <h3 className=" sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#FFC80E] mb-4">
          Diversification of Students
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
  <div className="flex items-center">
    <img 
      src="placement-bg/man.png" 
      alt="Male Icon"
      className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-3" 
    />
    <span className="text-sm sm:text-lg md:text-xl lg:text-2xl">55% Male</span>
  </div>
  <div className="flex items-center">
    <img 
      src="placement-bg/woman.png" 
      alt="Female Icon"
      className="w-12 h-12 sm:w-16 sm:h-16 mr-2 sm:mr-3" 
    />
    <span className="text-sm sm:text-lg md:text-xl lg:text-2xl">45% Female </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default PartneredUniversities;
