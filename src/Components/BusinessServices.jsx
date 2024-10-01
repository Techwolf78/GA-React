import React from 'react';

const BusinessServices = () => {
  return (
    <div className="bg-yellow-400 h-screen flex flex-col items-center overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          body {
            font-family: 'Roboto', sans-serif;
          }
          *, *::before, *::after {
            box-sizing: border-box; /* Ensures padding and borders are included in width/height */
          }
        `}
      </style>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-black text-center mt-16 mb-10">
        WE HELP BUSINESSES IN
      </h2>

      {/* Icons and Content Section */}
      <div className="flex-grow grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 items-center justify-items-center">
        
        {/* Block 1: SEO */}
        <div className="flex flex-col items-center text-center h-full">
          <img src="journey/SEO.png" alt="SEO Icon" className="h-16 sm:h-20 md:h-24 w-auto mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-black">
            SEO
          </h3>
        </div>
        
        {/* Block 2: Paid Ads */}
        <div className="flex flex-col items-center text-center h-full">
          <img src="journey/Paid-Ads.png" alt="Paid Ads Icon" className="h-16 sm:h-20 md:h-24 w-auto mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-black">
            Paid Ads
          </h3>
        </div>

        {/* Block 3: Performance Marketing */}
        <div className="flex flex-col items-center text-center h-full">
          <img src="journey/Performance-Marketing.png" alt="Performance Marketing Icon" className="h-16 sm:h-20 md:h-24 w-auto mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-black">
            Performance Marketing
          </h3>
        </div>

        {/* Block 4: Lead Generation */}
        <div className="flex flex-col items-center text-center h-full">
          <img src="journey/Lead-Generation.png" alt="Lead Generation Icon" className="h-16 sm:h-20 md:h-24 w-auto mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-black">
            Lead Generation
          </h3>
        </div>

        {/* Block 5: Social Media Marketing */}
        <div className="flex flex-col items-center text-center h-full">
          <img src="journey/Social-Media-Marketing.png" alt="Social Media Marketing Icon" className="h-16 sm:h-20 md:h-24 w-auto mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-black">
            Social Media Marketing
          </h3>
        </div>

        {/* Block 6: Website Design and Development */}
        <div className="flex flex-col items-center text-center h-full">
          <img src="journey/Website-Design-and-Development.png" alt="Website Design and Development Icon" className="h-16 sm:h-20 md:h-24 w-auto mb-4" />
          <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-black">
            Website Design and Development
          </h3>
        </div>

      </div>

      {/* Enquire Now Button */}
      <button className="mt-10 mb-16 bg-blue-800 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
        ENQUIRE NOW
      </button>
      
    </div>
  );
};

export default BusinessServices;
