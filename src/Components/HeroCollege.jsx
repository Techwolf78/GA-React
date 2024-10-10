import { useEffect, useState } from 'react';

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
    <main className={`relative flex items-center justify-center bg-[#003073] h-screen overflow-hidden ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <div
        className="hero-section absolute inset-0"
        style={{
          backgroundImage: imageLoaded ? `url('${backgroundImage}')` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {/* Empty space at the top */}
        <div className="h-[10vh]"></div>

        {/* Heading Container */}
        <div className="text-center z-10 px-4">
          {imageLoaded && (
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">
              A JOURNEY FROM 
              <span className="text-[#FFC80E] inline-flex flex-col h-auto">
                <ul className={`block ${showClassroom ? 'animate-text-slide-stop' : 'animate-text-slide'} leading-tight`}>
                  <li className="transition-opacity duration-1000">{!showClassroom && 'COLLEGE'}</li>
                  <li className={`transition-opacity duration-1000 ${showClassroom ? 'opacity-100' : 'opacity-0'}`}>CLASSROOM</li>
                </ul>
              </span>
              TO CORPORATE
            </h1>
          )}
          {imageLoaded && (
            <p className="text-lg sm:text-xl text-white mt-2">
              Preparing your students for the industry with our customized <br /> Industry Specific Training and Placement Solutions
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default HeroCollege;