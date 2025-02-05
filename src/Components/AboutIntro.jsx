import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleNavigate = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 bg-[#fdfdfd]">
      <div className="flex flex-col lg:flex-row justify-between mx-auto">
        {/* Left Side (Text and Button) - 30% width on large screens */}
        <div className="lg:w-[40%] w-full text-left mb-4 sm:mb-6" data-aos="fade-up">
          <p className="text-lg sm:text-xl text-[#FFC80E] font-extralight mb-2">
            WHAT WE DO
          </p>
          <h1
            className="text-2xl sm:text-3xl md:text-5xl text-[#000000] font-bold whitespace-nowrap"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We Provide <span className="text-[#FFC80E]">360<sup className="text-[#FFC80E]">0</sup></span>
            <br className="hidden md:block" /> Approach
          </h1>

          {/* Bottom-left text and button */}
          <div className="mt-8 sm:mt-12">
            <p className="text-base sm:text-lg text-black mb-0">
              As India’s premier non-ed-tech
              organization, we are committed to bridging the gap between industry
              and academia. We provide customized training solutions as per the
              Industry-centric needs which helps your students to be
              industry-ready and help your academic institution facilitate smooth
              transition into the industry with ease.
            </p>
            <button
              onClick={handleNavigate}
              className="inline-block text-base font-bold mt-4 sm:mt-6 mb-4 sm:mb-6 border-2 border-[#1e3a8a] hover:border-[#000] rounded-lg py-2 px-2 transition duration-300 ease-in-out transform hover:bg-[#1e3a8a] hover:text-[#ffffff] hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              GET IN TOUCH WITH US
            </button>
          </div>
        </div>

        {/* Right Side (Image) - 70% width on large screens */}
        <div
          className="lg:w-[60%] w-full flex justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="About/4pointers.png" // Replace with your image URL or path
            alt="About Us"
            className="w-full object-cover rotate-infinite" // Add the rotate-infinite class here
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;