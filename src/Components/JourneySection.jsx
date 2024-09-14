import React from 'react';

const JourneySection = () => {
  return (
    <div>
      <div>
      <h1 className="text-4xl font-bold text-center pt-6 bg-purple-100">OUR JOURNEY</h1>
      </div>
    <section className="w-full h-auto relative overflow-hidden bg-purple-100">
      <img 
        src="Clgimage/oj-new.png"
        alt="Journey Infographic" 
        className="w-full h-auto object-cover"
      />
    </section>
    </div>
  );
};

export default JourneySection;
