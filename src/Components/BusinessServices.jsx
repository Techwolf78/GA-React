import React, { useState } from 'react';

const BusinessServices = () => {
  const [isHovered, setIsHovered] = useState(null); // Track hover state for each card

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const cardStyle = {
    width: '100%',
    height: 'auto',
    backgroundColor: '#FFC80E',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 600ms ease-in-out, box-shadow 300ms ease-in-out',
    transformStyle: 'preserve-3d',
    boxShadow: 'none', // Default state without shadow
  };

  const hoverStyle = {
    transform: 'rotateX(20deg)',
    boxShadow: '0 20px 20px rgba(50, 50, 50, .2)', // Shadow applied only on hover
  };

  const cardImageStyle = {
    height: '80px',
    maxWidth: '100%',
    objectFit: 'contain',
    marginBottom: '1rem',
  };

  return (
    <div className="bg-[#FFC80E] flex flex-col items-center overflow-hidden  py-8 lg:py-12">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          body {
            font-family: 'Roboto', sans-serif;
          }
          *, *::before, *::after {
            box-sizing: border-box;
          }
        `}
      </style>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-extrabold text-black text-center  mb-6 sm:mb-8">
        WE HELP BUSINESSES IN
      </h2>

      {/* Icons and Content Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 items-center justify-items-center">
        {/* SEO Card */}
        <div
          className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
          style={{
            ...cardStyle,
            ...(isHovered === 0 ? hoverStyle : {}), // Only apply hover style when hovered
          }}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <img src="journey/SEO.png" alt="SEO Icon" style={cardImageStyle} />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">SEO</h3>
        </div>

        {/* Paid Ads Card */}
        <div
          className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
          style={{
            ...cardStyle,
            ...(isHovered === 1 ? hoverStyle : {}),
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src="journey/Paid-Ads.png" alt="Paid Ads Icon" style={cardImageStyle} />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">Paid Ads</h3>
        </div>

        {/* Performance Marketing Card */}
        <div
          className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
          style={{
            ...cardStyle,
            ...(isHovered === 2 ? hoverStyle : {}),
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img src="journey/Performance-Marketing.png" alt="Performance Marketing Icon" style={cardImageStyle} />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">Performance Marketing</h3>
        </div>

        {/* Lead Generation Card */}
        <div
          className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
          style={{
            ...cardStyle,
            ...(isHovered === 3 ? hoverStyle : {}),
          }}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img src="journey/Lead-Generation.png" alt="Lead Generation Icon" style={cardImageStyle} />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">Lead Generation</h3>
        </div>

        {/* Social Media Marketing Card */}
        <div
          className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
          style={{
            ...cardStyle,
            ...(isHovered === 4 ? hoverStyle : {}),
          }}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <img src="journey/Social-Media-Marketing.png" alt="Social Media Marketing Icon" style={cardImageStyle} />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">Social Media Marketing</h3>
        </div>

        {/* Website Design and Development Card */}
        <div
          className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
          style={{
            ...cardStyle,
            ...(isHovered === 5 ? hoverStyle : {}),
          }}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <img src="journey/Website-Design-and-Development.png" alt="Website Design and Development Icon" style={cardImageStyle} />
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">
            Website Design and Development
          </h3>
        </div>
      </div>

      {/* Enquire Now Button */}
      <button className="mt-8 mb-6 sm:mt-10 sm:mb-8 bg-blue-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
        ENQUIRE NOW
      </button>
    </div>
  );
};

export default BusinessServices;
