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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For top positioning of heading in large screens
  const headingStyle = isMobile
    ? {}
    : {
        marginTop: "10vh", // This ensures the heading starts 10% from the top of the screen on larger screens
      };

  return (
    <div className="bg-[#091327] relative roboto-regular">
      <div
        ref={ref}
        className={`flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${
          isMobile ? "bg-[#01224F] h-auto" : "bg-cover lg:bg-cover h-[50vh] lg:h-screen"
        } mx-auto px-8 sm:px-8 md:px-16 lg:px-16`}
        style={{
          backgroundImage: isMobile ? "none" : "url('TrainHero.png')",
          backgroundPosition: "center center",  // Ensure the image is centered properly
          backgroundSize: isMobile ? "auto" : "cover", // 'cover' for large screens, 'auto' for mobile
        }}
      >
        <div
          className={`flex ${
            isMobile ? "flex-col items-center justify-center h-full" : ""
          } text-center ${isMobile ? "mt-10" : "md:text-left mt-20 lg:mt-32 lg:ml-14"}`}
          style={headingStyle}
        >
          <h1
            className={`text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-bold mb-2 ${
              isMobile ? "text-white" : "text-[#000000]"
            } ${fadeInStyle} ${!isMobile ? "hidden" : ""}`}
          >
            <span
              className={`${
                isMobile ? "text-[#FFC80E] text-[1.5rem]" : "text-[#003073] text-[1.5rem] md:text-[3rem]"
              } font-bold`}
            >
              THE LEARNING TRINITY:
            </span>
            <br />
            <span
              className={`text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] font-bold mb-2 ${
                isMobile ? "text-white" : "text-[#000000]"
              }`}
            >
              Where <span className={`${isMobile ? "text-[#FFC80E]" : ""}`}>Academia</span> Meets{" "}
              <span className={`${isMobile ? "text-[#FFC80E]" : ""}`}>Industry</span>
            </span>
          </h1>
        </div>

        <div className={`text-left mb-0 ${isMobile ? "text-center" : "mt-10"}`} style={fadeInStyle}>
          <p className="text-[0.875rem] mb-4 sm:text-[1rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem] text-[#ffffff] font-light lg:text-white lg:mt-6">
            The Tri-Force of Excellence: Powering Education, Faculty, and Industry
          </p>

          <button
            onClick={handleScroll}
            className="btn-know-more relative inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 text-[0.75rem] sm:text-[0.875rem] md:text-[0.875rem] lg:text-[1rem] font-semibold text-[#ffffff] group whitespace-nowrap lg:inline-flex mt-4 lg:mt-6"
          >
            <span className="relative z-10 text-[0.75rem] sm:text-[0.875rem] md:text-[0.875rem] lg:text-[1rem]">
              Explore Our Trainings
            </span>
            <svg
              className="ml-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#000000]"
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
