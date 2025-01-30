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
    message: 'When I look back and see how Gryphon collaboration with academia is creating a huge pool of talent for the industry, I feel we have set the right mission and vision. Still a long road ahead, but gratified with the progress we have made.',
    profilePic: '/About/foun.PNG', // Replace with actual image path
    bgImage: '/About/fbg.png', // Path to your horizontal background image
  };

  const coFounder = {
    designation: 'Co-Founder',
    name: 'Ms. Ummeaiman Ansari',
    message: 'Holding ranks but a trainer beneath, it thrills me to witness an amazing pool of talent being created with our best of trainers and equally supported by amazing career opportunities from our corporate partners. Gryphon is 3 years today, floating but on the course to sail through.',
    profilePic: '/About/cf.PNG', // Replace with actual image path
    bgImage: '/About/fbg.png', // Add a new background image path for Co-Founder
  };

  const renderMessage = (name, message) => (
    <div className="relative pl-10">
      <div className="absolute top-0 left-0 w-8 h-8">
        <img src={QuotesSVG} alt="Quotes" className="w-full h-full" />
      </div>
      <p className="text-base md:text-lg lg:text-xl mt-2 text-gray-600">
        <i>{message}</i>
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center mx-auto bg-gradient-to-r from-blue-100 to-blue-200 relative ">
      {/* The wave element */}
      <WaveElement />

      <h2 className="text-center mt-4 text-2xl md:text-3xl lg:text-4xl text-blue-700 font-bold" data-aos="fade-down" data-aos-once="true">
        Meet the Leaders
      </h2>

      {/* Founder Section with Horizontal Background Image */}
      <div
        className="flex flex-col md:flex-row mb-12 items-center justify-between bg-contain bg-center p-8 "
        style={{ backgroundImage: `url(${founder.bgImage})` }} // Apply background image to founder's section
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
              className="rounded-lg shadow-xl w-full max-h-72 object-cover relative z-10 border-4 border-white"
              loading="lazy"
            />

            {/* Adjusted designation label height and padding */}
            <div className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-xl font-semibold py-1.5 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg">
              {founder.designation}
            </div>
          </div>
        </div>
      </div>

      {/* Co-Founder Section with a Different Background Image */}
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-contain bg-bottom p-8 "
        style={{ backgroundImage: `url(${coFounder.bgImage})` }} // Apply background image to Co-Founder's section
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
              className="rounded-lg shadow-xl w-full max-h-72 object-cover relative z-10 border-4 border-white"
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
