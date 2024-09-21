import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const HeroCollege = () => {
  const [showClassroom, setShowClassroom] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClassroom(true);
    }, 2000); // Show "CLASSROOM" after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/Clgimage/clg-new-3.png'; // Preload background image
    img.onload = () => {
      setImageLoaded(true);
      setBackgroundImage(img.src); // Set the loaded image as background
    };
  }, []);

  return (
    <main className={`relative flex flex-col justify-center bg-[#f0f4f8] overflow-hidden ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <div
        className="hero-section"
        style={{
          backgroundImage: imageLoaded ? `url('${backgroundImage}')` : 'none',
          opacity: imageLoaded ? 1 : 0, // Fade effect based on image loading
          transition: 'opacity 1s ease-in-out', // Smooth transition
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 text-center relative z-10">
          {/* Sliding Text animation */}
          {imageLoaded && (
            <div className="font-extrabold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r text-white">
              A JOURNEY FROM <span></span>
              <span className="text-[#FFC80E] inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className={`block ${showClassroom ? 'animate-text-slide-stop' : 'animate-text-slide'} text-left leading-tight`}>
                  <li className="transition-opacity duration-1000">{!showClassroom && 'COLLEGE'}</li>
                  <li className={`transition-opacity duration-1000 ${showClassroom ? 'opacity-100' : 'opacity-0'}`}>CLASSROOM</li>
                </ul>
              </span> TO CORPORATE
            </div>
          )}
          {/* End: Sliding Text animation */}
          <br />
          {imageLoaded && <p className="text-3xl text-[#]">Get Industry-Ready with Gryphon</p>}
        </div>
        <div className="hero-overlay"></div>
        
        {/* Full-width Rectangle with Content */}
        <div className="info-rectangle absolute bottom-0 left-0 w-full p-6 text-gray-800 rounded-lg shadow-lg bg-transparent">
          <ul className="list-disc pl-4 custom-list">
            <li className="flex items-center mb-4 font-bold text-[#FFC80E] text-lg">
              <span className="check-icon-wrapper">
                <FaCheck className="check-icon" />
              </span>
              Content approved by the Industry
            </li>
            <li className="flex items-center font-bold text-[#FFC80E] text-lg">
              <span className="check-icon-wrapper">
                <FaCheck className="check-icon" />
              </span>
              Then delivered by us to the students
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background-size: cover;
          background-position: center;
          height: 60vh; /* Adjusted height to 60% of viewport height */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          color: white;
        }

        .hero-overlay {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1; /* Ensures overlay is above the background but below the text */
        }

        /* Additional styles unchanged */

        .info-rectangle {
          padding: 24px;
          background: rgba(255, 255, 255, 0); /* Fully transparent background */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2; /* Ensure it’s above the hero-overlay */
          max-width: 100%; /* Ensure it spans full width */
          box-sizing: border-box; /* Include padding and border in the element’s total width and height */
        }

        @media (min-width: 1024px) { /* For laptop and larger devices */
          .info-rectangle {
            max-width: 50%; /* Adjust to fit 50% width of the viewport if needed */
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }

        .check-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background-color: #34D399; /* Tailwind green-400 */
          border-radius: 50%;
          margin-right: 12px;
        }

        .check-icon {
          color: white;
          font-size: 16px;
        }

        .custom-list {
          padding-left: 2rem; /* Shift the list to the right */
          padding-bottom: 1rem; /* Add padding below the list */
        }
      `}</style>
    </main>
  );
};

export default HeroCollege;
