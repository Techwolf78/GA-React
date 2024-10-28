import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import QuotesSVG from '/About/quote.svg'; // Adjust the path as needed

const MeetTheLeaders = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const founder = {
    designation: 'Founder',
    name: 'Mr. Shashi Bhat',
    message: '"When I look back and see how Gryphon collaboration with academia is creating a huge pool of talent for the industry, I feel we have set the right mission and vision. Still a long road ahead, but gratified with the progress WE HAVE made."',
    profilePic: '/About/foun.PNG', // Replace with actual image path
  };

  const coFounder = {
    designation: 'Co-Founder',
    name: 'Ms. Ummeaiman Ansari',
    message: '"Holding ranks but a trainer beneath, it thrills me to witness an amazing pool of talent being created with our best of trainers and equally supported by amazing career opportunities from our corporate partners. Gryphon is 3 years today, floating but on the course to sail through."',
    profilePic: '/About/cf.PNG', // Replace with actual image path
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
    <div className="flex flex-col items-center mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-200 px-4 md:px-8 lg:px-12 py-8">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-blue-700 font-bold mb-12" data-aos="fade-down">
        MEET THE LEADERS
      </h2>

      <div className="flex flex-col md:flex-row mb-12 items-center justify-around" data-aos="fade-up">
        <div className="w-full md:w-3/5 pr-4 mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">
            {founder.name}
          </h3>
          {renderMessage(founder.name, founder.message)}
        </div>
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative transition-transform transform hover:scale-105 duration-300">
            <div className="bg-blue-500 h-32 w-32 absolute -top-8 -left-8 rounded-lg shadow-lg z-0"></div>
            <img
              src={founder.profilePic}
              alt={`${founder.name}'s profile`}
              className="rounded-lg shadow-xl w-auto h-80 md:h-96 relative z-10 border-4 border-white"
            />
            <div className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-2xl font-semibold py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg">
              {founder.designation}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full md:w-2/5 flex justify-center pr-4 mb-8 md:mb-0">
          <div className="relative transition-transform transform hover:scale-105 duration-300">
            <div className="bg-blue-500 h-32 w-32 absolute -top-8 -left-8 rounded-lg shadow-lg z-0"></div>
            <img
              src={coFounder.profilePic}
              alt={`${coFounder.name}'s profile`}
              className="rounded-lg shadow-xl w-auto h-80 md:h-96 relative z-10 border-4 border-white"
            />
            <div className="bg-blue-700 text-white text-center text-lg md:text-xl lg:text-2xl font-semibold py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20 shadow-lg">
              {coFounder.designation}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">{coFounder.name}</h3>
          {renderMessage(coFounder.name, coFounder.message)}
        </div>
      </div>
    </div>
  );
};

export default MeetTheLeaders;
