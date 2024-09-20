import React from 'react';

const backgroundImage = 'Clgimage/VM_4.jpg';

const MissionVisionSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Main Heading */}
      <h1 
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-[#ffc700] text-center mx-4"
        style={{ margin: 0 }}
      >
        OUR MISSION & VISION
      </h1>

      {/* Bottom Left Section - Mission */}
      <div className="absolute bottom-20 left-0 w-1/2 h-1/5 p-4">
        <h3 className="text-2xl font-semibold text-black text-center mb-2">
          MISSION
        </h3>
        <p className="text-lg text-black text-center">
          To ensure that every student has an <br />offer letter in their hands and are prepared to <br /> succeed in their chosen fields.
        </p>
      </div>

      {/* Bottom Right Section - Vision */}
      <div className="absolute bottom-20 right-0 w-1/2 h-1/5 p-4">
        <h3 className="text-2xl font-semibold text-black text-center mb-2">
          VISION
        </h3>
        <p className="text-lg text-black text-center">
          To bridge the gap between industry and <br /> academia, ensuring a comprehensive understanding <br /> of requirements on both sides, and empowering students <br /> to be industry-ready from multiple perspectives.
        </p>
      </div>
    </section>
  );
};

export default MissionVisionSection;
