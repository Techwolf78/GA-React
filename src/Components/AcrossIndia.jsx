import React from 'react';

function AcrossIndia() {
  return (
    <div className="p-8 bg-[#091327] flex flex-col items-center roboto-regular">
      <h1 className="heading">
        OUR TRAININGS ACROSS INDIA
      </h1>

      <div className="w-full max-w-4xl mx-auto">
        {/* India Map Image */}
        <img
          src="Pan India 1.png" // Replace with the actual path to your map image
          alt="India Map"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default AcrossIndia;
