import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsersCog, // Industry – Ready Talent
  faClipboardCheck, // Customized & curated content
  faStar, // Tailored Skill sets
  faDollarSign, // Reduced Training Costs
  faClock, // Long Term Investment
  faCheckCircle, // Evaluation Based Learning
  faChalkboardTeacher, // Elite Guidance (Industry Experts)
  faGraduationCap, // Comprehensive Development
  faSyncAlt, // Real time based approach
} from '@fortawesome/free-solid-svg-icons';

function WhyTraining() {
  // Define color variables
  const lightBlue = '#003073'; // Light blue background
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

  // Stagger animation for items on the right side
  const staggeredFadeIn = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each item appearing
        duration: 1,
      },
    },
  };

  const fadeInItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const items = [
    { icon: faUsersCog, text: 'Industry – Ready Talent' },
    { icon: faClipboardCheck, text: 'Customized & Curated Content' },
    { icon: faStar, text: 'Tailored Skill  Sets' },
    { icon: faDollarSign, text: 'Reduced Training Costs' },
    { icon: faClock, text: 'Long Term Investment' },
    { icon: faCheckCircle, text: 'Evaluation Based Learning' },
    { icon: faChalkboardTeacher, text: 'Elite Guidance (Industry Experts)' },
    { icon: faGraduationCap, text: 'Comprehensive Development' },
    { icon: faSyncAlt, text: 'Real Time Based Approach' },
  ];

  return (
    <div className="roboto-regular">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-8 md:px-16">
          {/* Layout for large screens */}
          <motion.div
            className="hidden lg:flex flex-col lg:flex-row bg-[#003073] rounded-2xl shadow-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}  
            variants={fadeInFromLeft}
          >
            {/* Left Content - 30% width */}
            <motion.div
              className="flex-1 mb-6 lg:mb-0 flex flex-col items-center lg:items-start w-3/12"
              variants={fadeInFromLeft}
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
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </motion.div>

            {/* Right Content - 70% width with staggered fade-in */}
            <motion.div
              className="flex-1 flex items-center justify-center w-9/12"
              variants={staggeredFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}  
            >
              <div className="grid grid-cols-3 gap-6 w-full">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400 hover:border-2 hover:border-yellow-400"
                    variants={fadeInItem}
                    whileHover={{
                      scale: 1.05,  // Slightly scale the card
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Icon (removed rotation effect) */}
                    <motion.div
                      whileHover={{
                        scale: 1.2,  // Slightly scale up the icon
                        y: -10,      // Bounce effect (move up)
                        transition: {
                          type: 'spring',
                          stiffness: 100, // Bounciness
                          damping: 10,    // Smoothness
                        },
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{
                          color: lightBlue,
                          fontSize: '2rem',
                        }}
                      />
                    </motion.div>
                    <p style={{ color: darkGray, fontWeight: '500' }}>{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Layout for medium and small screens */}
          <motion.div
            className="flex lg:hidden flex-col bg-[#003073] rounded-2xl shadow-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}  
            variants={fadeInFromBottom}
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
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400 hover:border-2 hover:border-yellow-400"
                  variants={fadeInItem}
                  whileHover={{
                    scale: 1.05,  // Slightly scale the card
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Icon (removed rotation effect) */}
                  <motion.div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{
                        color: lightBlue,
                        fontSize: '2rem',
                      }}
                    />
                  </motion.div>
                  <p style={{ color: darkGray, fontWeight: '500' }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default WhyTraining;
