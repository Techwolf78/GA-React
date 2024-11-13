import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showFullForms, setShowFullForms] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullForms(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds a smooth scroll effect
    });
  };

  return (
    <div className="bg-[#01224F] text-white py-12 px-4 md:py-20 md:px-8 lg:px-24">
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .float {
            animation: float 5s ease-in-out infinite; /* Changed to 5s */
          }
        `}
      </style>
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0">
        {/* Left Content - F D P */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-8 lg:pl-16 xl:pl-32">
          <div className="definitions flex flex-col mb-6">
            {['F', 'D', 'P'].map((letter, index) => (
              <div key={index} className="flex items-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FFC80E] mb-2">
                <span>{letter}</span>
                {showFullForms && (
                  <span className="ml-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    {index === 0 ? ' - FACILITATING GROWTH' : index === 1 ? ' - DIVERSE SKILLSETS' : ' - PROFESSIONAL ADVANCEMENT'}
                  </span>
                )}
              </div>
            ))}
          </div>
      
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-lg">
            Our comprehensive programs focus on enhancing teaching skills, integrating modern pedagogical strategies, and fostering a culture of continuous professional growth. By addressing these critical challenges, we help transform your college into a vibrant hub of educational excellence.
          </p>
          <Link to="/contact">
            <button
              onClick={scrollToTop} // Add scrollToTop function here
              className="btn-know-more relative inline-flex px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap lg:inline-flex"
            >
              <span className="relative z-10">Get in touch today</span>
              <svg
                className="ml-2 w-4 h-4 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#01224F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <div className="relative max-w-xs sm:max-w-md lg:max-w-lg">
            <img
              src="Training Page/FDP new.png" // Replace this with your actual image path
              alt="Train Hire Deploy"
              className="w-full h-auto object-contain float" // Added float class
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
