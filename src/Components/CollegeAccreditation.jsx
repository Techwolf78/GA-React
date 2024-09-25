import React from 'react';

function CollegeAccreditation() {
  return (
    <div className="relative p-0 bg-gradient-to-b from-[#003073] to-[#091327] text-white roboto-regular">
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFC80E] mb-4 text-center">
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
