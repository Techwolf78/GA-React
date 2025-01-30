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
    <div className="relative overflow-hidden px-4 md:px-8 lg:px-16 py-12 bg-[#fdfdfd]">
      <div className="relative z-10 flex flex-col md:flex-row justify-between mx-auto">
        <div className="flex-1 text-left mb-4 md:mb-0" data-aos="fade-up">
          <p className="text-lg md:text-xl text-[#1e3a8a] font-extralight mb-2">
            WHAT WE DO 
          </p>
          <h1
            className="text-3xl md:text-5xl text-[#000000] font-bold whitespace-nowrap"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We Provide <span className="text-[#1e3a8a]">360<sup>0</sup></span>
            <br className="hidden md:block" /> Approach
          </h1>
        </div>
        <div
          className="flex-1 text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-base text-black mb-0">
            As India’s premier non-ed-tech
            organization, we are committed to bridging the gap between industry
            and academia. We provide customized training solutions as per the
            Industry-centric needs which helps your students to be
            industry-ready and help your academic institution facilitate smooth
            transition into the industry with ease.
          </p>
          <button
            onClick={handleNavigate}
            className="inline-block text-base font-bold mt-4 mb-4 border-2 border-[#1e3a8a] rounded-lg py-2 px-4 transition duration-300 ease-in-out transform hover:bg-[#1e3a8a] hover:text-[#ffffff] hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            GET IN TOUCH WITH US
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch lg:gap-12 gap-4 mx-auto mt-4">
      {[
  {
    icon: "handshake",
    title: "Industry Needs Analysis",
    description:
      "We reach out to industries to understand requirements & bridge the gap between corporate needs and academic offerings through direct interactions and partnership building.",
  },
  {
    icon: "book",
    title: "Academic Integration",
    description:
      "We integrate identified industry requirements into academic curriculum through customized training programs and skill development modules.",
  },
  {
    icon: "users",
    title: "Placement Preparation",
    description:
      "Industry-ready students undergo rigorous company processes: Group Discussions, Personal Interviews, and Technical Rounds simulation training.",
  },
  {
    icon: "briefcase",
    title: "Final Placement",
    description:
      "Facilitate final transitions through industry interactions, college empanelment programs, and incubation center support for startups.",
  },
].map((item, index) => (
  <div
    key={index}
    data-aos="zoom-in-up"
    data-aos-delay={index * 200}
    className="bg-[#f3f9fc] hover:bg-[#1e3a8a] p-6 border-2 hover:border-dashed hover:border-[#FFC80E] shadow-lg flex flex-col items-center rounded-[20px] flex-1 mb-4 md:mb-0 text-[#000000] hover:text-[#ffffff]"
    style={{
      margin: "0 10px",
      transition: "all 0.3s ease-in-out",
      transitionDelay: "0.1s",
    }}
  >
    <div className="flex justify-center items-center w-16 h-16 bg-[#FFC80E] rounded-full mb-2 shadow-lg">
      <i className={`fas fa-${item.icon} text-[#1e3a8a] text-3xl`}></i>
    </div>
    <h4 className="text-lg md:text-xl font-bold mb-2 text-center">{item.title}</h4> {/* Added text-center */}
    <p className="text-base text-center">{item.description}</p> {/* Added text-center */}
  </div>
))}

      </div>
    </div>
  );
};

export default AboutIntro;
