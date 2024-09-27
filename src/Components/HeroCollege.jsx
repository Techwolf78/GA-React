import { useEffect, useState } from 'react';
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
    img.src = '/Clgimage/clgmain.png'; // Preload background image
    img.onload = () => {
      setImageLoaded(true);
      setBackgroundImage(img.src); // Set the loaded image as background
    };
  }, []);

  return (
    <main className={`relative roboto-regular flex flex-col justify-center bg-[#f0f4f8] overflow-hidden ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Blue Background Layer */}
      <div className="absolute inset-0 bg-[#003073] z-0"></div>

      <div
        className="hero-section"
        style={{
          backgroundImage: imageLoaded ? `url('${backgroundImage}')` : 'none',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {/* Heading Container */}
        <div className="heading-container absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center z-10 roboto-regular px-8 sm:px-16">

          {imageLoaded && (
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-r text-white">
              A JOURNEY FROM <span></span>
              <span className="text-[#FFC80E] inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className={`block ${showClassroom ? 'animate-text-slide-stop' : 'animate-text-slide'} text-left leading-tight`}>
                  <li className="transition-opacity duration-1000">{!showClassroom && 'COLLEGE'}</li>
                  <li className={`transition-opacity duration-1000 ${showClassroom ? 'opacity-100' : 'opacity-0'}`}>CLASSROOM</li>
                </ul>
              </span> TO CORPORATE
            </div>
          )}
          {imageLoaded && (
            <p className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mt-2">Get Industry-Ready with Gryphon</p>
          )}
        </div>

        <div className="hero-overlay"></div>

        {/* Text Information at the Bottom */}
        <div className="text-info absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full p-4 text-gray-800 z-2 flex flex-col sm:flex-row items-center sm:justify-around">
          <div className="flex items-center mb-2 font-bold text-[#ffffff] text-lg">
            <span className="check-icon-wrapper">
              <FaCheck className="check-icon" />
            </span>
            Content approved by the Industry
          </div>
          <div className="flex items-center sm:mb-0 font-bold text-[#ffffff] text-lg">
            <span className="check-icon-wrapper">
              <FaCheck className="check-icon" />
            </span>
            Then delivered by us to the students
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          color: white;
        }

        .heading-container {
          width: 100%;
        }

        .hero-overlay {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .text-info {
          padding: 0 1rem; /* Adjust padding if necessary */
          z-index: 2;
          margin-top: 20px; /* Spacing from the bottom */
        }

        .check-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background-color: #34D399;
          border-radius: 50%;
          margin-right: 12px;
        }

        .check-icon {
          color: white;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
};

export default HeroCollege;
