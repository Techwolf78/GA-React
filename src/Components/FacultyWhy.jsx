import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function FacultyWhy() {
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const underline = e.currentTarget.querySelector('span');
      underline.style.transform = 'scaleX(1)';
    };

    const handleMouseLeave = (e) => {
      const underline = e.currentTarget.querySelector('span');
      underline.style.transform = 'scaleX(0)';
    };

    const titles = document.querySelectorAll('h2');
    titles.forEach((title) => {
      title.addEventListener('mouseenter', handleMouseEnter);
      title.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      titles.forEach((title) => {
        title.removeEventListener('mouseenter', handleMouseEnter);
        title.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 mx-auto bg-[#091327] py-8 shadow-2xl roboto-regular">
      <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#ffc700] text-center mb-8">
        WHY CHOOSE GRYPHON ACADEMY'S FDP?
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {keyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-1 bg-[#ffc700] h-16 rounded-r-xl"></div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#091327] mb-4 relative">
              {feature.title}
              <span
                className="absolute bottom-0 left-0 w-full h-1 bg-[#ffc700] transform origin-left transition-transform duration-300 ease-in-out"
                style={{ transform: 'scaleX(0)', transformOrigin: 'bottom left' }}
              />
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#091327] leading-relaxed flex-grow">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Data for the key features
const keyFeatures = [
  {
    title: 'Industry-Aligned Curriculum',
    description: 'Equip faculty with the latest industry trends and practices, ensuring students receive up-to-date knowledge.',
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from industry leaders with 10+ years of experience, bringing real-world insights and strategies.',
  },
  {
    title: 'Continuous Support',
    description: 'Ongoing resources and support to apply and sustain the skills and knowledge gained during the program.',
  },
  {
    title: 'Enhanced Teaching Methods',
    description: 'Innovative techniques to boost student engagement and improve learning outcomes.',
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with industry experts for potential collaborations and guest lectures.',
  },
  {
    title: 'Interdisciplinary Approach',
    description: 'Encourage cross-departmental collaboration for holistic learning experiences.',
  },
];

export default FacultyWhy;
