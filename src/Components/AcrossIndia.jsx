import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AcrossIndia() {
  return (
    <div className="p-8 bg-[#091327] flex flex-col items-center roboto-regular">
      <motion.h1
        className="heading text-[#FFC80E] text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        OUR TRAININGS ACROSS INDIA
      </motion.h1>

      <div className="w-full max-w-4xl mx-auto">
        {/* India Map Image */}
        <motion.img
          src="Pan India 1.png" // Replace with the actual path to your map image
          alt="India Map"
          className="w-full h-full object-contain"
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }} // Remove delay to make it fade in immediately
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is in view
        />
      </div>
    </div>
  );
}

export default AcrossIndia;
