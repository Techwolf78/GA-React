import React from 'react';
import { motion } from 'framer-motion';

function WhyTraining() {
  // Define color variables
  const lightBlue = '#003073'; // Light blue background
  const darkBlue = '#091327'; // Dark blue text
  const highlightYellow = '#FFC80E'; // Highlight yellow
  const darkGray = '#333333'; // Dark gray text

  // Animation variants for different directions
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="roboto-regular">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-8 md:px-16">
          {/* Layout for large screens */}
          <motion.div
            className="hidden lg:flex flex-col lg:flex-row bg-[#003073] rounded-2xl shadow-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInFromLeft} // Apply left fade-in animation
          >
            {/* Left Content */}
            <motion.div
              className="flex-1 mb-6 lg:mb-0 flex flex-col items-center lg:items-start"
              variants={fadeInFromLeft} // Left to right for the left content
            >
              <p
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 text-center lg:text-left"
                style={{ color: highlightYellow }}
              >
                HOW DO OUR TRAININGS DIFFER?
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="/Training - Thinking Man.png"
                  alt="Illustration"
                  className="h-64 sm:h-72 lg:h-80 xl:h-96"
                  style={{ transform: 'scaleX(-1)' }} // Flip image horizontally
                />
              </div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              variants={fadeInFromRight} // Right to left for the right content
            >
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[400px]">
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Over two decades of instruction from highly skilled professionals',
                    'Syllabus crafted to meet current market demands',
                    'Advisory board featuring IIT and IIM luminaries',
                    'Integrated approach combining technical expertise, soft skills, and aptitude training',
                    'LinkedIn testimonials from our students across India',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                      <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Layout for medium and small screens */}
          <motion.div
            className="flex lg:hidden flex-col bg-[#003073] rounded-2xl shadow-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInFromBottom} // Bottom to top animation for smaller screens
          >
            <p
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 text-center"
              style={{ color: highlightYellow }}
            >
              HOW DO OUR TRAININGS DIFFER?
            </p>
            <div className="flex items-center mb-6 justify-center">
              <img
                src="/Training - Thinking Man.png"
                alt="Illustration"
                className="h-64 sm:h-72 lg:h-80 xl:h-96"
                style={{ transform: 'scaleX(-1)' }} // Flip image horizontally
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[400px]">
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Over two decades of instruction from highly skilled professionals',
                    'Syllabus crafted to meet current market demands',
                    'Advisory board featuring IIT and IIM luminaries',
                    'Integrated approach combining technical expertise, soft skills, and aptitude training',
                    'LinkedIn testimonials from our students across India',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                      <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default WhyTraining;
