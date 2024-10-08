import React from 'react';
import ElevateYourWorkforce from './ElevateYourWorkforce'; // Adjust the path as needed

const backgroundImage = "/Corporate Training Page Zip/Corporate Training.png"; // Static image
const vectorImage = "/path/to/your/vector-image.png"; // Vector image for mobile

function HeroCorporate() {
  return (
    <div>
      {/* Heading Section */}
      <div className="relative w-full p-6 roboto-regular">
        {/* Mobile and smaller screens */}
        <div className="text-center lg:hidden">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFC80E] uppercase" style={{ wordSpacing: '0.05em' }}>
            Invest in Your Employees, Invest in Your Organization’s Future: Gryphon Academy Corporate Training
          </h1>
        </div>
        {/* Larger screens */}
        <div className="hidden lg:flex flex-col items-start absolute top-36 left-12 z-20 max-w-[50%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003073] break-words uppercase" style={{ wordSpacing: '0.1em' }}>
            Invest in Your Employees, Invest in Your Organization’s Future :
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#003073] mt-2">
            Gryphon Academy Corporate Training
          </h2>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={backgroundImage}
          className="w-full h-auto object-contain opacity-100"
          alt="Background"
        />
      </div>

      {/* Vector Image Section for Mobile */}
      <div className="lg:hidden relative w-full">
        <img
          src={vectorImage}
          className="w-full h-auto"
          alt=""
        />
      </div>

      {/* New Section */}
      <ElevateYourWorkforce />
    </div>
  );
}

export default HeroCorporate;
