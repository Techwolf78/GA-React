import  { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const backgroundImage = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1729943835/Corporate_Training_1_eaeb56.avif"; // Static image

const content = [
  "Delivering Tailored Solutions That Drive Measurable Success and Enhance Organizational Readiness Within the Learning Technology Ecosystem",
  "Seamless Execution, Digital Transformation, Talent Retention Strength, Drive Sales ROI"
];

function HeroCorporate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS

    const intervalDuration = currentIndex === 0 ? 6000 : 4000; // 6 seconds for the first heading, 4 seconds for others

    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        setIsExiting(false);
      }, 500); // Duration of the slide-out animation
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with load event */}
      <img
        src={backgroundImage}
        className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0 transition-opacity duration-1000'}`}
        alt="Corporate training illustration"
        onLoad={handleImageLoad}
      />
      
      {/* Overlay for Heading Section */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Sliding Heading Text */}
      <div className="absolute inset-0 flex justify-center items-center z-10 px-4 md:px-8 lg:px-16 xl:px-32 text-center">
        <h1
          className={`text-sm sm:text-xl tracking-wide md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white ${isExiting ? 'slide-exit' : 'slide-enter'}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {content[currentIndex]}
        </h1>
      </div>

      <style>
        {`
          /* Slide-in and slide-out animations */
          @keyframes slide-in {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slide-out {
            0% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-100%);
              opacity: 0;
            }
          }

          .slide-enter {
            animation: slide-in 0.5s ease-in-out forwards;
          }

          .slide-exit {
            animation: slide-out 0.5s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default HeroCorporate;
