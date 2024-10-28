import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const HeroTraining = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 1,
      behavior: "smooth",
    });
  };

  const fadeInStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  };

  // State to track window size
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#091327] relative roboto-regular">
      <div
        ref={ref}
        className={`flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 ${
          isMobile
            ? "bg-[#003073] h-auto"
            : "bg-cover lg:bg-right h-[50vh] lg:h-screen"
        }`}
        style={
          isMobile
            ? {}
            : {
                backgroundImage: "url('Training 1 1.png')",
                backgroundPosition: "calc(100% - 10%) center",
              }
        }
      >
  <div className={`flex ${isMobile ? 'flex-col items-center justify-center h-full' : ''} text-center ${isMobile ? 'mt-10' : 'md:text-left mt-20 lg:mt-28 lg:ml-14'}`}>
  <h1 className={`text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold mb-2 ${isMobile ? 'text-white' : 'text-[#000000]'} ${fadeInStyle}`}>
    <span className={`${isMobile ? 'text-[#FFC80E] text-2xl' : 'text-[#003073] text-2xl md:text-3xl'} font-bold`}>THE LEARNING TRINITY:</span>
    <br />
    <span className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 ${isMobile ? 'text-white' : 'text-[#000000]'}`}>
      WHERE <span className={`${isMobile ? 'text-[#FFC80E]' : ''}`}>ACADEMIA</span> MEETS <span className={`${isMobile ? 'text-[#FFC80E]' : ''}`}>INDUSTRY</span>
    </span>
  </h1>
</div>



        <div
          className={`text-left mb-4 ${isMobile ? "text-center" : ""}`}
          style={fadeInStyle}
        >
          <p className="text-xs mb-6 sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#ffffff] font-light lg:text-white">
            The Tri-Force of Excellence: Powering Education, Faculty, and
            Industry
          </p>

          <button
            onClick={handleScroll}
            className="btn-know-more relative inline-flex items-center px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-[#ffffff] group whitespace-nowrap lg:inline-flex"
          >
            <span className="relative z-10 text-xs sm:text-sm md:text-lg">
              Explore Our Trainings
            </span>
            <svg
              className="ml-1 w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#000000]"
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
        </div>

        {isMobile && (
          <div className="mt-4">
            <img
              src="Training Page/successful-career.svg"
              alt="Vector Illustration"
              className="mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroTraining;
