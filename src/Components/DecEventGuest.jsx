import React from 'react';

const ImageComponent = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center text-white">Confirmed Guest</h2>

      {/* Image Containers (2 columns in grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
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
      </div>
    </div>
  );
};

export default ImageComponent;
