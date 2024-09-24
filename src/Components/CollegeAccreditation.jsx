import React from 'react';

function CollegeAccreditation() {
  return (
    <div className="relative p-0 bg-[#003073] text-white">
      <p className="text-1xl sm:text-1xl md:text-3xl lg:text-4xl font-bold text-[#FFC80E] mb-4 text-center">
        PARTNERED COLLEGES ACCREDITATION
      </p>
      <div className="w-full overflow-hidden">
        <img 
          src="LandingImage/CollegeAccriditation.png" // Replace with your image path
          alt="Accreditation Overview"
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
}

export default CollegeAccreditation;
