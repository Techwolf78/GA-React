// CollegeInfoSection.js
import React from 'react';

const CollegeInfoSection = () => {
  return (
    <section className="bg-[#122949] text-white mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex items-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl space-x-2">
          <img src="Clgimage/tick2.png" alt="Tick" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <span>Complete offline mode</span>
        </div>
        <div className="flex items-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl space-x-2">
          <img src="Clgimage/tick2.png" alt="Tick" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <span>Content approved by  the Industry  & then delivered</span>
        </div>
        <div className="flex items-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl space-x-2">
          <img src="Clgimage/tick2.png" alt="Tick" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <span>Real – Scenario based learning</span>
        </div>
      </div>
    </section>
  );
};

export default CollegeInfoSection;
