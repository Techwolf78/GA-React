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
      className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-100 to-blue-200 relative"
      style={{
        backgroundImage: `url('/About/lead.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Prevent the background from repeating
      }}
    >
      {/* The wave element */}
      <WaveElement />

      <h2
        className="text-center mt-4 mb-8 md:mb-0 text-2xl md:text-3xl lg:text-4xl text-white font-bold z-20"
        data-aos="fade-down"
        data-aos-once="true"
      >
        Meet the Leaders
      </h2>

      {/* Desktop version */}
      <div className="hidden md:block px-8 md:px-16">
        {/* Founder Section */}
        <div
          className="flex flex-col md:flex-row mb-12 items-center justify-between p-8 relative z-20"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {/* Combined Profile and Message for Founder */}
          <div className="w-full md:w-2/3 flex items-center justify-start space-x-6">
            {/* Profile Image */}
            <div className="relative transition-transform transform hover:scale-105 duration-300">
              <div className="bg-blue-500 h-16 w-16 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
              <img
                src={founder.profilePic}
                alt={`${founder.name}'s profile`}
                className="rounded-lg shadow-xl w-full max-h-60 object-cover relative z-10 border-4 border-white"
                loading="lazy"
              />
              <div className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-xl font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg">
                {founder.designation}
              </div>
            </div>

            {/* Message Section */}
            <div className="relative w-2/3">
              {/* Background Patch for Message and Quote Icon */}
              <div className="absolute top-0 mt-1 left-4 w-full h-full bg-blue-800 bg-opacity-30 rounded-lg z-0" />

              {/* Quote Icon */}
              <div className="absolute top-0 left-0 w-6 h-6 ml-12 z-10">
                <img
                  src={QuotesSVG}
                  alt="Quotes"
                  className="w-full h-full"
                  style={{ marginLeft: "-24px", marginTop: "-24px" }}
                />
              </div>

              {/* Message Text */}
              <p className="text-xs mt-2 ml-12 text-white relative z-20">
                {founder.message}
              </p>
            </div>
          </div>
        </div>

        {/* Co-Founder Section */}
        <div
          className="flex flex-col md:flex-row mb-12 items-center justify-end p-8 relative z-20"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          {/* Combined Profile and Message for Co-Founder */}
          <div className="w-full md:w-2/3 flex items-center justify-end space-x-6">
            {/* Profile Image (on the right side for Co-Founder) */}
            <div className="relative transition-transform transform hover:scale-105 duration-300 order-1 md:order-1">
              <div className="bg-blue-500 h-16 w-16 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
              <img
                src={coFounder.profilePic}
                alt={`${coFounder.name}'s profile`}
                className="rounded-lg shadow-xl w-full max-h-60 object-cover relative z-10 border-4 border-white"
                loading="lazy"
              />
              <div className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-xl font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg whitespace-nowrap">
                {coFounder.designation}
              </div>
            </div>

            {/* Message Section (on the right for Co-Founder) */}
            <div className="relative w-2/3 order-0 md:order-0 ">
              <div className="absolute top-0 right-8 w-full h-full bg-blue-800 bg-opacity-30 mt-1 rounded-lg z-0" />
              <div className="absolute top-0 left-0 w-6 h-6 z-10">
                <img
                  src={QuotesSVG}
                  alt="Quotes"
                  className="w-full h-full"
                  style={{ marginLeft: "-24px", marginTop: "-24px" }}
                />
              </div>

              <p className="text-xs mt-2 mr-12 text-white z-20 relative">
                {coFounder.message}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="block md:hidden px-8 md:px-16">
        {/* Founder Section */}
        <div
          className="flex flex-col mb-12 items-center justify-center relative z-20 flex-wrap"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {/* Profile Image */}
          <div className="relative transition-transform transform hover:scale-105 duration-300 mb-6">
            <div className="bg-blue-500 h-12 w-12 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
            <img
              src={founder.profilePic}
              alt={`${founder.name}'s profile`}
              className="rounded-lg shadow-xl w-32 h-32 object-cover relative z-10 border-4 border-white mx-auto"
              loading="lazy"
            />
            <div className="bg-blue-700 text-white text-center text-sm md:text-lg font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg">
              {founder.designation}
            </div>
          </div>

          {/* Message Section (Full width on mobile) */}
          <div className="relative w-full">
            {/* Background Patch for Message and Quote Icon */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-800 bg-opacity-30 rounded-lg z-0" />

            {/* Quote Icon */}
            <div className="absolute top-0 left-0 w-6 h-6 ml-12 z-10">
              <img
                src={QuotesSVG}
                alt="Quotes"
                className="w-full h-full"
                style={{ marginLeft: "-24px", marginTop: "-24px" }}
              />
            </div>

            {/* Message Text (Full width) */}
            <p className="text-xs mt-2 ml-6 text-white relative z-20">
              {founder.message}
            </p>
          </div>
        </div>

        {/* Co-Founder Section */}
        <div
          className="flex flex-col mb-12 items-center justify-center relative z-20 flex-wrap"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          {/* Profile Image (on the right side for Co-Founder) */}
          <div className="relative transition-transform transform hover:scale-105 duration-300 mb-6">
            <div className="bg-blue-500 h-12 w-12 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>
            <img
              src={coFounder.profilePic}
              alt={`${coFounder.name}'s profile`}
              className="rounded-lg shadow-xl w-32 h-32 object-cover relative z-10 border-4 border-white mx-auto"
              loading="lazy"
            />
            <div className="bg-blue-700 text-white text-center text-sm md:text-lg font-semibold py-1 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg whitespace-nowrap">
              {coFounder.designation}
            </div>
          </div>

          {/* Message Section (Full width on mobile) */}
          <div className="relative w-full ml-4">
            <div className="absolute  w-full h-full bg-blue-800 bg-opacity-30 mt-1 rounded-lg z-0" />
            <div className="absolute top-0 left-0 w-6 h-6 z-10">
              <img
                src={QuotesSVG}
                alt="Quotes"
                className="w-full h-full"
                style={{ marginLeft: "-24px", marginTop: "-24px" }}
              />
            </div>

            <p className="text-xs p-2 mt-2 text-white z-20 relative">
              {coFounder.message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheLeaders;
