import React from 'react';

function AcrossIndia() {
  return (
    <div className="p-8 bg-[#091327] flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#FFC80E] text-center mb-4">
        OUR TRAININGS ACROSS INDIA
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        {/* India Map Image */}
        <img
          src="Pan India.png" // Replace with the actual path to your map image
          alt="India Map"
          className="w-full h-80 object-contain"
        />
      </div>
    </div>
  );
}

export default AcrossIndia;
