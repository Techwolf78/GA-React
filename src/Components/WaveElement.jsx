// WaveElement.jsx
import React from 'react';

const WaveElement = () => {
  return (
    <div>
    <div className="absolute top-10 left-10 w-20 h-auto md:w-24 z-30">
      <img
        src="/LandingImage/curve-lines.svg"  // Path from the public directory
        alt="Wave Design"
        className="w-full h-full"
        
      />
    </div>
    <div className="absolute top-1/2  right-10 w-20 h-auto md:w-24 z-30">
      <img
        src="/LandingImage/curve-lines.svg"  // Path from the public directory
        alt="Wave Design"
        className="w-full h-full mt-12"
      />
    </div>
    <div className="absolute top-1/2  left-6 w-10 h-16 md:w-24 z-30">
      <img
        src="/LandingImage/union-design-img.svg"  // Path from the public directory
        alt="Wave Design"        // Ummi mam traingle image 
        className="w-full h-full "
        style={{
          margin: "10px",
          animation: "spin 3s linear infinite",
        }}
      />
    </div>
    <div className="absolute top-10  right-10 w-10 h-16 md:w-24 z-30"> 
      <img
        src="/LandingImage/union-design-img.svg"  // Path from the public directory
        alt="Wave Design"     // SB Sir traingle image 
        className="w-full h-full"
        style={{
          margin: "10px",
          animation: "spin 3s linear infinite",
        }}
      />
    </div>
    </div>
  );
};

export default WaveElement;
