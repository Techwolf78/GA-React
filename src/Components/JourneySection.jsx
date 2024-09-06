import React from 'react';

const JourneySection = () => {
  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-purple-100">
      <div className="text-center mb-4">
        <h2 
          style={{ color: 'black' }} 
          className="text-2xl font-bold md:text-3xl lg:text-4xl"
        >
          Our Journey
        </h2>
      </div>
      <div className="flex justify-center">
        <img 
          src="https://via.placeholder.com/1200x400" 
          alt="Journey Infographic" 
          className="w-full max-w-screen-lg h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default JourneySection;
