import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import QuotesSVG from "/About/qts.png"; // Adjust the path as needed
import WaveElement from "./WaveElement"; // Import the wave component

const MeetTheLeaders = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const founder = {
    designation: "Founder",
    name: "Mr. Shashi Bhat",
    message:
      "At Gryphon Academy, our mission is to bridge the gap between Industry and academia by creating an industry-ready workforce within the walls of educational institutions. Through customized learning programmes tailored for professional courses, we ensure students are equipped with the practical skills to contribute from day one. With over 15 years of expertise in academia and corporate relations, we’ve built strong partnerships with top recruiters, opening exceptional career opportunities for students. Gryphon Academy's vast network of industry leaders reflects our commitment to aligning education with real-world demands and shaping the future of professional growth. ",
    profilePic: "/About/foun.PNG", // Replace with actual image path
  };

  const coFounder = {
    designation: "Co-Founder",
    name: "Ms. Ummeaiman Ansari",
    message:
      "At Gryphon Academy, we envision a transformative approach towards education that bridges the gap between academia and industry. Drawing from my 15 years of enriching experience in industry, I have witnessed the challenges firsthand that industries faces in finding and nurturing talent equipped for real-world complexities. This approach of ours drives our mission to create an industry-ready workforce within the walls of campuses. What sets Gryphon apart is our focus on practical and application based customization of our training programmes. We begin by engaging directly with industry leaders to understand their unique challenges, skill requirements, and future goals. These insights form the foundation of our curriculum, ensuring it is tailored to meet specific industrial demands, from technical expertise to behavioral skills, we design every training module with precision and outcome based purpose. ",
    profilePic: "/About/cf.PNG", // Replace with actual image path
  };

  return (
    <div
      className="flex flex-col items-center mx-auto bg-slate-900 relative py-6 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/About/lead.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]"></div>
      </div>

      {/* The wave element */}
      <WaveElement />

      <div className="relative z-20 text-center mb-10">
        <h2
          className="text-3xl md:text-4xl  text-white font-extrabold tracking-tight"
          data-aos="fade-down"
          data-aos-once="true"
        >
          Meet the Leaders
        </h2>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Desktop version */}
      <div className="hidden md:block w-full max-w-6xl px-8">
        {/* Founder Section */}
        <div
          className="flex flex-col md:flex-row mb-16 items-center gap-10 relative z-20"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <div className="w-full md:w-1/4 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-xl"></div>
            <div className="relative">
              <img
                src={founder.profilePic}
                alt={founder.name}
                className="rounded-2xl shadow-2xl w-full h-64 md:h-72 object-cover object-top border-2 border-white/10"
                loading="lazy"
              />
              <div className="absolute -bottom-3 right-2 bg-blue-600 text-white px-4 py-1 rounded-lg font-bold shadow-xl text-sm transform group-hover:translate-y-[-3px] transition-transform duration-300">
                {founder.designation}
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative">
            <img src={QuotesSVG} alt="" className="absolute -top-4 -left-4 w-8 h-8 opacity-50 invert" />
            <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
            <p className="text-slate-300 leading-relaxed text-base italic">
              &quot;{founder.message}&quot;
            </p>
          </div>
        </div>

        {/* Co-Founder Section */}
        <div
          className="flex flex-col md:flex-row-reverse mb-6 items-center gap-10 relative z-20"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <div className="w-full md:w-1/4 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-xl"></div>
            <div className="relative">
              <img
                src={coFounder.profilePic}
                alt={coFounder.name}
                className="rounded-2xl shadow-2xl w-full h-64 md:h-72 object-cover object-top border-2 border-white/10"
                loading="lazy"
              />
              <div className="absolute -bottom-3 left-2 bg-blue-600 text-white px-4 py-1 rounded-lg font-bold shadow-xl text-sm transform group-hover:translate-y-[-3px] transition-transform duration-300">
                {coFounder.designation}
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative">
            <img src={QuotesSVG} alt="" className="absolute -top-4 -right-4 w-8 h-8 opacity-50 invert rotate-180" />
            <h3 className="text-2xl font-bold text-white mb-2">{coFounder.name}</h3>
            <p className="text-slate-300 leading-relaxed text-base italic text-right">
              &quot;{coFounder.message}&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden px-6 space-y-10">
        {/* Founder Mobile */}
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="relative w-40 mb-6">
            <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-lg"></div>
            <img src={founder.profilePic} alt={founder.name} className="relative rounded-2xl border-2 border-white/10 shadow-xl w-full h-56 object-cover object-top" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-lg">
              {founder.designation}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl text-center">
            <h3 className="text-lg font-bold text-white mb-2">{founder.name}</h3>
            <p className="text-slate-300 text-xs leading-relaxed italic">
              &quot;{founder.message}&quot;
            </p>
          </div>
        </div>

        {/* Co-Founder Mobile */}
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="relative w-40 mb-6">
            <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-lg"></div>
            <img src={coFounder.profilePic} alt={coFounder.name} className="relative rounded-2xl border-2 border-white/10 shadow-xl w-full h-56 object-cover object-top" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-lg">
              {coFounder.designation}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl text-center">
            <h3 className="text-lg font-bold text-white mb-2">{coFounder.name}</h3>
            <p className="text-slate-300 text-xs leading-relaxed italic">
              &quot;{coFounder.message}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheLeaders;
