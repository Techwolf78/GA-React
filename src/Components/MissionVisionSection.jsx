import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import visionDotImage from '/About/Vision.png'; // Update with your actual vision dot image path
import missionDotImage from '/About/Mission.png'; // Update with your actual mission dot image path
import arrowImage from '/About/arrow.svg'; // Update with your actual arrow image path

const MissionVisionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing for animations
      once: true, // Animation only happens once
    });
  }, []);

  const fixedHeight = '450px'; // Set a fixed height for both cards

  return (
    <section className="flex flex-col w-full lg:min-h-[80vh] md:min-h-[50vh] bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 py-4 roboto-regular">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">

        {/* Vision Card */}
        <div
          className="flex-1 mx-4 md:mx-6 lg:mx-8 mt-2"
          style={{ height: fixedHeight, boxSizing: 'border-box' }}
          data-aos="fade-right" // Animation effect for vision card
        >
          <h3 className="text-lg sm:text-xl md:text-4xl font-semibold text-black mb-4 md:mb-4 lg:mb-8">
            OUR <span className='text-[#003073]'>VISION</span>
          </h3>
          <div className="shadow-lg rounded-3xl p-4 md:p-6" style={{ backgroundColor: '#d5e2f5', height: '100%', boxSizing: 'border-box' }}>
            <div className="flex flex-col items-start mb-4">
              <img src={visionDotImage} alt="Vision Dot" className="w-32 h-32 mb-1" />
              <img src={arrowImage} alt="Arrow" className="w-auto h-auto mb-2" />
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
                To create an industry-ready workforce within the walls of the institutions, through the customized learning & development programmes for professional courses.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div
          className="flex-1 mx-4 md:mx-6 lg:mx-8 mt-2"
          style={{ height: fixedHeight, boxSizing: 'border-box' }}
          data-aos="fade-left" // Animation effect for mission card
          data-aos-delay="200" // Staggered delay for the mission card
        >
          <h3 className="text-lg sm:text-xl md:text-4xl font-semibold text-black mb-4 md:mb-4 lg:mb-8">
            OUR <span className='text-[#003073]'>MISSION</span>
          </h3>
          <div className="shadow-lg rounded-3xl p-4 md:p-6" style={{ backgroundColor: '#d5e2f5', height: '100%', boxSizing: 'border-box' }}>
            <div className="flex flex-col items-start mb-4">
              <img src={missionDotImage} alt="Mission Dot" className="w-32 h-32 mb-1" />
              <img src={arrowImage} alt="Arrow" className="w-auto h-auto mb-2" />
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
                To offer equal job opportunities to every student across all tiers, through a vast industry network.
              </p>
            </div>
          </div>
        </div>

      </div>
     
    </section>
  );
};

export default MissionVisionSection;
