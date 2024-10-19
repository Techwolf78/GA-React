import React from "react";
import { FaChalkboardTeacher, FaTools } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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

  return (
    <div className="bg-[#091327] relative roboto-regular">
<div
  ref={ref}
  className="lg:flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-cover lg:bg-right h-[50vh] lg:h-screen"
  style={{
    backgroundImage: "url('Training 1 1.png')",
    backgroundPosition: "calc(100% - 10%) center", // Shifted 10% from the right
  }}
>



        <div className="text-center md:text-left mt-20 lg:mt-28  lg:ml-14">
          <h1
            className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold mb-2 text-[#000000]"
            style={fadeInStyle}
          >
            <span className="text-[#003073] font-bold">
              THE LEARNING TRINITY:
            </span>{" "}
            <br />
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 text-[#000000]">
              WHERE ACADEMIA MEETS INDUSTRY EXPERTISE
            </span>
          </h1>
        </div>

        <div
          className="absolute bottom-12 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 text-left"
          style={fadeInStyle}
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#ffffff] mb-4 font-light lg:text-white">
            The Tri-Force of Excellence: Powering Education, Faculty, and
            Industry
          </p>

          <button
            onClick={handleScroll}
            className="btn-know-more relative inline-flex px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap hidden lg:inline-flex"
          >
            <span className="relative z-10">Explore Our Trainings</span>
            <svg
              className="ml-2 w-4 h-4 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#000000]"
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

        {/* Stat boxes positioned at 50% from the left, hidden on small screens */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 hidden lg:flex"
          style={fadeInStyle}
        >
          <div className="relative stat-box">
            <div className="p-2 bg-[#003073] shadow-md flex items-center space-x-2 transition duration-300 hover:bg-[#002060]">
              <FaTools className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">
                  Customized Trainings
                </h3>
                <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">
                  Tailored to your needs
                </span>
              </div>
            </div>
            <div className="border-2 border-[#FFC80E] absolute inset-0 pointer-events-none"></div>
          </div>

          <div className="relative stat-box">
            <div className="p-2 bg-[#003073] shadow-md flex items-center space-x-2 transition duration-300 hover:bg-[#002060]">
              <FaChalkboardTeacher className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">
                  Expert Trainers
                </h3>
                <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">
                  Learn from industry experts
                </span>
              </div>
            </div>
            <div className="border-2 border-[#FFC80E] absolute inset-0 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTraining;
