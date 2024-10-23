import React, { useState } from 'react';

const awardsData = [
  {
    image: 'About/award1.svg',
    description: 'Awarded by Ministry of Skills Development (Govt. of India) For Bridging the Gap Between Industry & Academia.',
  },
  {
    image: 'About/award2.webp',
    description: 'Awarded as The Start Up of the Year at World HRD Congress, 2023',
  },
];

function AboutAwards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awardsData.length) % awardsData.length);
  };

  const buttonStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB', // gray-200
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // default shadow
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.7)', // stronger shadow on hover
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white w-full max-w-9xl mx-auto px-8 md:px-12">
      <button 
        style={buttonStyle} 
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
        onMouseLeave={(e) => { 
          e.currentTarget.style.transform = 'scale(1)'; 
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)'; // reset shadow on leave
        }}
        onClick={handlePrev}
      >
        <span className="text-3xl text-gray-700">←</span>
      </button>
      
      <div 
        className="flex flex-col md:flex-row items-center justify-center flex-1 mx-6 my-4 md:my-0 md:gap-12 gap-2" 
        style={{ height: '400px' }}
      >
        <img 
          src={awardsData[currentIndex].image} 
          alt={`Award ${currentIndex + 1}`} 
          className="max-w-full h-full object-contain rounded-lg shadow-md transition-transform transform hover:scale-105 md:w-1/2 lg:w-1/3"
        />
        <div className="flex-1 max-w-lg">
          <p className="text-2xl font-semibold text-gray-800 mb-4">{awardsData[currentIndex].description}</p>
        </div>
      </div>
      
      <button 
        style={buttonStyle} 
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
        onMouseLeave={(e) => { 
          e.currentTarget.style.transform = 'scale(1)'; 
          e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)'; // reset shadow on leave
        }}
        onClick={handleNext}
      >
        <span className="text-3xl text-gray-700">→</span>
      </button>
    </div>
  );
}

export default AboutAwards;
