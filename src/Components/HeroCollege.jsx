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
    <main className={`relative  roboto-regular flex flex-col justify-center bg-[#003073] overflow-hidden ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
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
            <p className="text-xl sm:text-xl lg:text-xl xl:text-2xl text-white mt-2 mx-8">
              Preparing your students for the industry with our customized <br /> Industry Specific Training and Placement Solutions
            </p>
          )}
        </div>
      </div>

      {/* New Horizontal Section with Text Information */}
      <section className="bg-[#122949] text-white py-8 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex items-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl space-x-2">
            <img src="Clgimage/tick2.png" alt="Tick" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span>Complete offline mode</span>
          </div>
          <div className="flex items-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl space-x-2">
            <img src="Clgimage/tick2.png" alt="Tick" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span>Content approved by the Industry <br /> & then delivered</span>
          </div>
          <div className="flex items-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl space-x-2">
            <img src="Clgimage/tick2.png" alt="Tick" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span>Real – Scenario based learning</span>
          </div>
        </div>
      </section>

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

        section {
          width: 100%;
          max-width: 100%;
          text-align: center;
        }
      `}</style>
    </main>
  );
};

export default HeroCollege;
