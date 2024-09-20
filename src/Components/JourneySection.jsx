import React from 'react';

const JourneySection = () => {
  return (
    <div>
      <style>
        {`
          .cursor {
            font-weight: bold;
            color: black;
            margin-left: 5px;
          }
        `}
      </style>
      <div className='bg-[#003073] '>
        <h1 className="text-4xl font-bold text-center pt-6 bg-[#003073] text-[#ffc700] r">
          OUR JOURNEY
        
        </h1>
      </div>
      <section className="w-full h-auto relative overflow-hidden bg-[#003073]">
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
