import React from 'react';

function CollegeAccreditation() {
  return (
    <div className="relative p-2 md:p-4 lg:p-6 bg-gradient-to-b from-[#003073] to-[#091327] text-white roboto-regular">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <p 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] mb-2 text-center"
        >
          PARTNERED COLLEGES ACCREDITATION
        </p>

        {/* Background image for medium and large screens */}
        <div className="w-full hidden md:block overflow-hidden ">
          <img 
            src="LandingImage/College Accriditation-3.PNG" // Replace with your image path
            alt="Accreditation Overview"
            className="w-full h-auto object-cover" 
            style={{ margin: 0 }} 
          />
        </div>

        {/* Background image for small screens only */}
        <div className="w-full block md:hidden overflow-hidden mb-6">
          <img 
            src="LandingImage/CollegeAccriditation.png" // Replace with your small screen image path
            alt="Accreditation Overview for Small Screens"
            className="w-full h-auto object-cover" 
            style={{ margin: 0 }} 
          />
        </div>
      </div>
    </div>
  );
}

export default CollegeAccreditation;
