import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineGroups } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";

const features = [
  {
    icon: (
      <HiOutlineSpeakerphone className="text-[#00A59F] w-10 h-10 mx-auto" />
    ),
    title: "Keynote Insights",
    description:
      "Gain powerful insights from business leaders and IIM dignitaries driving real-world change.",
  },
  {
    icon: <MdOutlineGroups className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: "Future-Ready Dialogues",
    description:
      "Thought-provoking debates and actionable insights from panels shaping the future of talent and technology.",
  },
  {
    icon: <RiTeamLine className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: "Cross-Sector Networking",
    description:
      "A dynamic platform to connect academic minds and corporate powerhouses under one roof.",
  },
  {
    icon: <GiGraduateCap className="text-[#00A59F] w-10 h-10 mx-auto" />,
    title: "Vision for Campus Hiring 5.0",
    description:
      "Strategies and insights shaping the next wave of placements and student readiness.",
  },
];

const Highlights = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 60,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white py-4 md:py-8 px-4 md:px-16">
      <h2
        className="text-3xl md:text-4xl text-[#000000] font-bold mb-6 relative inline-block leading-snug"
        data-aos="fade-up"
      >
        <span className="relative inline-block">
          Masterclass
          <span className="absolute left-0 bottom-[-4px] h-1 w-12 bg-[#00A59F] my-2 rounded-full translate-y-2"></span>
        </span>{" "}
        3.0 Highlights
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="grid space-x-0 md:space-x-12 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-lg border-2 border-solid border-[#00BFA6] 
              bg-gradient-to-br from-white via-[#F0FBFA] to-[#E6FAF8] backdrop-blur-sm
              shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.09)]
              transition duration-300 transform-gpu hover:-translate-y-2 hover:scale-[1.02] hover:rotate-x-2 hover:rotate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {feature.title}
              </h3>
              <p className="text-[#027093] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
