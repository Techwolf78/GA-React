import React from 'react';

function PlacementProcess() {
  return (
    <div className="p-0 text-center roboto-regular">
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] bg-[#003073] py-4">
        WE FOLLOW SIMPLE PLACEMENT PROCESS
      </p>
      <div className="relative w-full h-auto bg-[#003073]">
        {/* Background Image */}
        <img 
          src="placement-bg/GA - placement ProcessNew.PNG" 
          alt="Infographic" 
          className="w-full h-auto block"
        />
        
        {/* Know More Button */}
        <button
          className="absolute bg-[#FFC80E] text-[#003073] rounded-2xl 
                     text-xs sm:text-sm py-1 px-1 sm:py-2 sm:px-4"
          style={{ left: '35%', bottom: '10%', transform: 'translateX(-50%)' }} // Position below the second section
        >
          Know More
        </button>
      </div>
    </div>
  );
}

export default PlacementProcess;
