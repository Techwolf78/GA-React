import { useEffect, useState } from 'react';

const HeroCollege = () => {
  const [showClassroom, setShowClassroom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClassroom(true);
    }, 2000); // Show "CLASSROOM" after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`relative flex items-center justify-center bg-[#003073] h-screen overflow-hidden`}>
      {/* Hero Section */}
      <div
        className="hero-section absolute inset-0"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dcjmaapvi/image/upload/v1729941974/clgmain_uyozlj.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Responsive spacing for small screens only */}
        <div className="h-[2vh] sm:h-[5vh] lg:h-[10vh]"></div>

        {/* Heading Container */}
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2">
            A JOURNEY FROM  
            <span className="text-[#FFC80E] inline-flex flex-col h-auto">
              <ul className={`block ${showClassroom ? 'animate-text-slide-stop' : 'animate-text-slide'} leading-tight`}>
                <li className="transition-opacity duration-1000">{!showClassroom && 'COLLEGE'}</li>
                <li className={`transition-opacity duration-1000 ${showClassroom ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="mx-2">CLASSROOM</span>
                </li>
              </ul>
            </span>
            TO CORPORATE
          </h1>
          <p className="text-lg sm:text-xl text-white mt-1">
            Preparing your students for the industry with our customized <br /> Industry Specific Training and Placement Solutions
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroCollege;
