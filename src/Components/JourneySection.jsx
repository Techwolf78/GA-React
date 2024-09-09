import React from 'react';

const JourneySection = () => {
  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-purple-100">
      <div className="text-center mb-4">
      <p 
  className="text-3xl font-bold md:text-3xl lg:text-4xl underline text-black"
>
  Our Journey
</p>

      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg mx-auto">
          <img 
            src="Clgimage/oj.webp"
            alt="Journey Infographic" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
