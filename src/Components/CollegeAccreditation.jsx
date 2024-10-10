import React from 'react';

function CollegeAccreditation() {
  return (
    <div className="relative p-0 bg-gradient-to-b from-[#003073] to-[#091327] text-white roboto-regular">
      <div className="container mx-auto px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16">
        <p 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] mb-4 text-center"
          style={{ marginTop: '2rem' }} // Adjust the value as needed
        >
          PARTNERED COLLEGES ACCREDITATION
        </p>
        <div className="w-full overflow-hidden">
          <img 
            src="LandingImage/College Accriditation-3.PNG" // Replace with your image path
            alt="Accreditation Overview"
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>
    </div>
  );
}

export default CollegeAccreditation;
