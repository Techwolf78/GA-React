import React from 'react';
import { motion } from 'framer-motion';
import visionDotImage from '/About/Vision.png'; // Update with your actual vision dot image path
import missionDotImage from '/About/Mission.png'; // Update with your actual mission dot image path
import arrowImage from '/About/arrow.svg'; // Update with your actual arrow image path

const MissionVisionSection = () => {
  const fixedHeight = '400px'; // Set a fixed height for both cards

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section className="flex flex-col w-full min-h-[80vh] bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 py-4 roboto-regular">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">

        {/* Vision Card */}
        <motion.div
          className="flex-1 mx-4 md:mx-6 lg:mx-8 mt-2"
          style={{ height: fixedHeight, boxSizing: 'border-box' }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5 }}
          whileHover="hover"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 md:mb-4 lg:mb-8">
            OUR <span className='text-[#003073]'>VISION</span>
          </h3>
          <div className="shadow-lg rounded-3xl p-4 md:p-6" style={{ backgroundColor: '#d5e2f5', height: '100%', boxSizing: 'border-box' }}>
            <div className="flex flex-col items-start mb-4">
              <img src={visionDotImage} alt="Vision Dot" className="w-32 h-32 mb-1" />
              <img src={arrowImage} alt="Arrow" className="w-auto h-auto mb-2" />
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
                To bridge the gap between industry and academia, ensuring a comprehensive understanding of requirements on both sides, and empowering students to be industry-ready from multiple perspectives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          className="flex-1 mx-4 md:mx-6 lg:mx-8 mt-2"
          style={{ height: fixedHeight, boxSizing: 'border-box' }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover="hover"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-4 md:mb-4 lg:mb-8">
           OUR  <span className='text-[#003073]'>MISSION</span>
          </h3>
          <div className="shadow-lg rounded-3xl p-4 md:p-6" style={{ backgroundColor: '#d5e2f5', height: '100%', boxSizing: 'border-box' }}>
            <div className="flex flex-col items-start mb-4">
              <img src={missionDotImage} alt="Mission Dot" className="w-32 h-32 mb-1" />
              <img src={arrowImage} alt="Arrow" className="w-auto h-auto mb-2" />
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-black">
                To ensure that every student has an offer letter in their hands and are prepared to succeed in their chosen fields.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVisionSection;
