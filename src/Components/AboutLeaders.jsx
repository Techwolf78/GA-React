import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import QuotesSVG from '/About/quote.svg'; // Adjust the path as needed
import WaveElement from './WaveElement'; // Import the wave component

const MeetTheLeaders = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const founder = {
    designation: 'Founder',
    name: 'Mr. Shashi Bhat',
    message: "At Gryphon Academy, our mission is to bridge the gap between academia and industry by creating an industry-ready workforce within educational institutions. Through customized learning programs tailored for professional courses, we ensure students are equipped not just with theoretical knowledge but with practical skills to contribute from day one. With over 15 years of expertise in engineering academia and corporate relations, I've built strong partnerships with top recruiters, opening exceptional career opportunities for students. Gryphon Academy's vast network of industry leaders reflects our commitment to aligning education with real-world demands and shaping the future of professional growth.",

    profilePic: '/About/foun.PNG', // Replace with actual image path
  };

  const coFounder = {
    designation: 'Co-Founder',
    name: 'Ms. Ummeaiman Ansari',
    message: 'At Gryphon Academy, we envision a transformative approach to education-one that bridges the gap between academia and industry. Drawing from my 15 years of enriching experience in manufacturing, I have witnessed firsthand the challenges industries face in finding and nurturing talent equipped for real-world complexities. This understanding drives our mission to create an industry-ready workforce within the walls of our campus. What sets Gryphon Academy apart is our unwavering focus on customization. We begin by engaging directly with industry leaders to understand their unique challenges, skill requirements, and future goals. These insights form the foundation of our curriculum, ensuring it is tailored to meet specific demands. From technical expertise to behavioral skills, we design every training module with precision and purpose.',
    profilePic: '/About/cf.PNG', // Replace with actual image path
  };

  const renderMessage = (name, message) => (
    <div className="relative md:pl-10">
      <div className="absolute top-0 left-0 w-8 h-8">
        <img src={QuotesSVG} alt="Quotes" className="w-full h-full" />
      </div>
      <p className="text-base md:text-lg lg:text-xl mt-2 text-gray-900">
        <i>{message}</i>
      </p>
    </div>
  );

  return (
    <div
      className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-100 to-blue-200 relative"
      style={{
        backgroundImage: `url('/About/leader-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevent the background from repeating
      }}
    >
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-10"></div>

      {/* The wave element */}
      <WaveElement />

      <h2 className="text-center mt-4 text-2xl md:text-3xl lg:text-4xl text-blue-700 font-bold z-20" data-aos="fade-down" data-aos-once="true">
        Meet the Leaders
      </h2>

      {/* Founder Section */}
      <div
        className="flex flex-col md:flex-row mb-12 items-center justify-between p-8 relative z-20"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-full md:w-3/5 pr-4 mb-8 md:mb-0 px-4 md:px-8 lg:px-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">
            {founder.name}
          </h3>
          {renderMessage(founder.name, founder.message)}
        </div>
        <div className="w-full md:w-2/5 flex justify-center mt-4 px-4 md:px-8 lg:px-16">
          <div className="relative transition-transform transform hover:scale-105 duration-300">
            {/* Adjusted background blue circle size */}
            <div className="bg-blue-500 h-24 w-24 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"></div>

            {/* Updated profile image height to h-72 */}
            <img
              src={founder.profilePic}
              alt={`${founder.name}'s profile`}
              className="rounded-lg shadow-xl w-full max-h-80 object-cover relative z-10 border-4 border-white"
              loading="lazy"
            />

            {/* Adjusted designation label height and padding */}
            <div className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-xl font-semibold py-1.5 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg">
              {founder.designation}
            </div>
          </div>
        </div>
      </div>

      {/* Co-Founder Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between p-8 relative z-20"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="200"
      >
        <div className="w-full md:w-2/5 flex justify-center pr-4 mb-8 md:mb-0">
          <div className="relative transition-transform transform hover:scale-105 duration-300">
            {/* This div for blue circle behind the profile image gets AOS */}
            <div
              className="bg-blue-500 h-24 w-24 absolute -top-6 -left-6 rounded-lg shadow-lg z-0"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true" // Add once attribute to the blue circle
            ></div>

            {/* This is the profile image itself */}
            <img
              src={coFounder.profilePic}
              alt={`${coFounder.name}'s profile`}
              className="rounded-lg shadow-xl w-full max-h-80 object-cover relative z-10 border-4 border-white"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true" // Add once attribute to the profile image
            />

            {/* This div for the designation label gets AOS */}
            <div
              className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-xl font-semibold py-1.5 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg whitespace-nowrap"
            >
              {coFounder.designation}
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 pr-4 md:pr-8 lg:pr-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">{coFounder.name}</h3>
          {renderMessage(coFounder.name, coFounder.message)}
        </div>
      </div>

    </div>
  );
};

export default MeetTheLeaders;
