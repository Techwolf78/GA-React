import React from 'react';

const ImageComponent = () => {
  return (
    <div className="flex flex-col items-center space-y-4 bg-[#5A2E11]">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-white my-2">Confirmed Guest</h2>

      {/* Image Containers (2 columns in grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-1 w-full">
        {/* Image Container 1 */}
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest1.png" 
            alt="Guest 1"
            className="object-contain w-full"
          />
        </div>

        {/* Image Container 2 */}
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest2.png" 
            alt="Guest 2"
            className="object-contain w-full"
          />
        </div>

        {/* Image Container 3 */}
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest3.png" 
            alt="Guest 3"
            className="object-contain w-full"
          />
        </div>

        {/* Image Container 4 */}
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest4.png" 
            alt="Guest 4"
            className="object-contain w-full"
          />
        </div>

        {/* Image Container 5 */}
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest5.png" 
            alt="Guest 5"
            className="object-contain w-full"
          />
        </div>

        {/* Image Container 6 */}   
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest6.png" 
            alt="Guest 6"
            className="object-contain w-full"
          />
        </div>

        {/* Image Container 7 */}
        <div className="w-full bg-gray-100 flex justify-center items-center overflow-hidden">
          <img 
            src="Event/guest7.png" 
            alt="Guest 7"
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
