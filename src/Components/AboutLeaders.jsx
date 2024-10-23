import React from 'react';
import QuotesSVG from '/About/quote.svg'; // Adjust the path as needed

const MeetTheLeaders = () => {
  const founder = {
    designation: 'Founder',
    name: 'Mr. Shashi Bhat',
    message: '" When I look back and see how gryphon collaboration with academia is creating a huge pool of talent for the industry, I feel we have set the right mission and vision. Still a long road ahead, but gratified with the progress WE HAVE made. ',
    profilePic: 'About/foun.PNG', // Replace with actual image path
  };

  const coFounder = {
    designation: 'Co-Founder',
    name: 'Ms. Ummeaiman Ansari',
    message: '"Holding Ranks but a Trainer Beneath, it thrills me to witness an amazing pool of talent being created with our best of trainers and eqaully supported by amazing career opportunities from our corporate partners. Gryphon is 3 years today, floating but on the course to sail through.',
    profilePic: 'About/cf.PNG', // Replace with actual image path
  };

  const renderMessage = (name, message) => (
    <div className="relative pl-10">
      <div className="absolute top-0 left-0 w-8 h-8">
        <img src={QuotesSVG} alt="Quotes" className="w-full h-full" />
      </div>
      <p className="text-xl mt-2 text-gray-600">
        <i>{message}</i>
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center mx-auto p-6 bg-white px-8 md:px-12">
      <h2 className="text-center text-5xl text-blue-600 font-bold mb-8">Meet the Leaders</h2>

      <div className="flex mb-12 items-center">
        <div className="w-3/5 pr-4">
          <h3 className="text-3xl font-semibold">{founder.name}</h3>
          {renderMessage(founder.name, founder.message)}
        </div>
        <div className="w-2/5 flex justify-center">
          <div className="relative">
            <div className="bg-blue-500 h-32 w-32 absolute -top-8 -left-8 rounded-lg shadow-lg z-0"></div>
            <img
              src={founder.profilePic}
              alt={`${founder.name}'s profile`}
              className="rounded-lg shadow-lg w-auto h-96 relative z-10"
            />
            <div className="bg-blue-700 text-white text-center text-2xl font-semibold py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20">
              {founder.designation}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-2/5 flex justify-center pr-4">
          <div className="relative">
            <div className="bg-blue-500 h-32 w-32 absolute -top-8 -left-8 rounded-lg shadow-lg z-0"></div>
            <img
              src={coFounder.profilePic}
              alt={`${coFounder.name}'s profile`}
              className="rounded-lg shadow-lg w-auto h-96 relative z-10"
            />
            <div className="bg-blue-700 text-white text-center text-2xl font-semibold py-2 px-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 rounded-md z-20">
              {coFounder.designation}
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <h3 className="text-3xl font-semibold">{coFounder.name}</h3>
          {renderMessage(coFounder.name, coFounder.message)}
        </div>
      </div>
    </div>
  );
};

export default MeetTheLeaders;
