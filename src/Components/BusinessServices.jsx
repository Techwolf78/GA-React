import React, { useState, useEffect } from 'react';
import { FaBullhorn, FaCalendarAlt, FaUsers, FaLaptopCode } from 'react-icons/fa'; // Import React Icons

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
    justifyContent: 'flex-start', // Ensure content starts at the top
    cursor: 'pointer',
    transition: 'transform 600ms ease-in-out, box-shadow 300ms ease-in-out',
    transformStyle: 'preserve-3d',
    boxShadow: 'none', // Default state without shadow
    position: 'relative', // To position the icon in the top-left corner
  };

  const hoverStyle = {
    transform: 'rotateX(20deg)',
    boxShadow: '0 20px 20px rgba(50, 50, 50, .2)', // Shadow applied only on hover
  };

  const iconStyle = {
    position: 'absolute', // Absolute positioning to place the icon in the top-left corner
    top: '10px', // Adjust as necessary
    left: '10px', // Adjust as necessary
    fontSize: '48px', // Adjust size of the icon
    color: '#ffc80f', // Icon color
  };

  const cardImageStyle = {
    height: '80px',
    maxWidth: '100%',
    objectFit: 'contain',
    marginBottom: '1rem',
  };

  useEffect(() => {
    // Initialize any necessary animations (like AOS) here if required
  }, []);

  return (
    <div className="bg-[#FFC80E] px-4 sm:px-8 md:px-16 flex flex-col items-center overflow-hidden py-8 lg:py-12">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-extrabold text-black mb-6 sm:mb-8">
          WE CREATE IMPACTFUL EVENTS FOR COLLEGES
        </h2>
        <p className="text-lg sm:text-xl font-medium text-black mb-12">
          Memorable Moments, Seamless Execution
        </p>

        {/* Single line display with no wrapping and distinct light color boxes */}
        <div className="flex flex-wrap justify-center sm:justify-between items-stretch gap-6 sm:gap-8 mb-12">
          {/* HR Events Card with Icon at the Top */}
          <div className="flex-1 text-left bg-[#1a237e] p-4 rounded-lg shadow-lg relative sm:w-1/2 md:w-1/4">
            <FaBullhorn style={iconStyle} />
            <div className="pt-12">
              <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2">HR Events</h3>
              <p className="font-medium text-sm sm:text-base text-gray-300">
                Empower students with industry-focused HR conclaves and workshops.
              </p>
            </div>
          </div>

          {/* Annual Events Card with Icon at the Top */}
          <div className="flex-1 text-left bg-[#1a237e] p-4 rounded-lg shadow-lg relative sm:w-1/2 md:w-1/4">
            <FaCalendarAlt style={iconStyle} />
            <div className="pt-12">
              <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2">Annual Events</h3>
              <p className="font-medium text-sm sm:text-base text-gray-300">
                From cultural fests to annual celebrations, we make them extraordinary.
              </p>
            </div>
          </div>

          {/* Placement Drives Card with Icon at the Top */}
          <div className="flex-1 text-left bg-[#1a237e] p-4 rounded-lg shadow-lg relative sm:w-1/2 md:w-1/4">
            <FaUsers style={iconStyle} />
            <div className="pt-12">
              <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2">Placement Drives</h3>
              <p className="font-medium text-sm sm:text-base text-gray-300">
                Tailored events to connect students with top recruiters.
              </p>
            </div>
          </div>

          {/* Student Development Programs Card with Icon at the Top */}
          <div className="flex-1 text-left bg-[#1a237e] p-4 rounded-lg shadow-lg relative sm:w-1/2 md:w-1/4">
            <FaLaptopCode style={iconStyle} />
            <div className="pt-12">
              <h3 className="font-extrabold text-xl sm:text-2xl text-white mb-2">Student Development Programs</h3>
              <p className="font-medium text-sm sm:text-base text-gray-300">
                Organize engaging sessions to enhance student skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content for Corporates */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-extrabold text-black mb-6 sm:mb-8">
          WE HELP BUSINESSES GROW DIGITALLY
        </h2>
        <p className="text-lg sm:text-xl font-medium text-black mb-12">
          Complete Digital Marketing Solutions
        </p>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 items-center justify-items-center">
  {/* Cards for digital marketing services */}
  {['Paid Ads', 'Performance Marketing', 'Lead Generation', 'Social Media Marketing', 'Website Design & Development'].map((title, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center bg-[#FFC80E] p-6 shadow-lg w-full"
      style={{
        ...cardStyle,
        ...(isHovered === index + 4 ? hoverStyle : {}),
      }}
      onMouseEnter={() => handleMouseEnter(index + 4)}
      onMouseLeave={handleMouseLeave}
    >
      <img
        // Manually map titles to correct image paths
        src={
          title === 'Social Media Marketing'
            ? 'journey/Social-Media-Marketing.png'
            : title === 'Website Design & Development'
            ? 'journey/Website-Design-and-Development.png'
            : `journey/${title.replace(' ', '-')}.png`
        }
        alt={`${title} Icon`}
        style={cardImageStyle}
      />
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-6 font-medium text-black">{title}</h3>
    </div>
  ))}
</div>

      </div>

      {/* Enquire Now Button */}
      <a href="/contact">
        <button className="mt-8 mb-6 sm:mt-10 sm:mb-8 bg-blue-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          ENQUIRE NOW
        </button>
      </a>
    </div>
  );
};

export default BusinessServices;
