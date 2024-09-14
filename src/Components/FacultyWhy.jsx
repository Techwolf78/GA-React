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

    document.querySelectorAll('h2').forEach((title) => {
      title.addEventListener('mouseenter', handleMouseEnter);
      title.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('h2').forEach((title) => {
        title.removeEventListener('mouseenter', handleMouseEnter);
        title.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
<div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-purple-200 rounded-xl shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-700 text-center mb-8 sm:mb-12 underline">
        Why Choose Gryphon Academy’s FDP?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {keyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300 h-16 rounded-r-xl"></div>
            <h2
              className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 relative"
              style={{ position: 'relative' }}
            >
              {feature.title}
              <span
                className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left transition-transform duration-300 ease-in-out"
                style={{
                  transform: 'scaleX(0)',
                  transformOrigin: 'bottom left',
                }}
              />
            </h2>
            <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
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
