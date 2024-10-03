import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faClipboardList,
  faUsers,
  faLightbulb,
  faComments,
  faCogs,
  faBriefcase,
  faChalkboardTeacher,
  faSync,
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

  const items = [
    { icon: faGraduationCap, text: 'Over two decades of instruction from highly skilled professionals' },
    { icon: faClipboardList, text: 'Syllabus crafted to meet current market demands' },
    { icon: faUsers, text: 'Advisory board featuring IIT and IIM luminaries' },
    { icon: faLightbulb, text: 'Integrated approach combining technical expertise, soft skills, and aptitude training' },
    { icon: faComments, text: 'LinkedIn testimonials from our students across India' },
    { icon: faCogs, text: 'Customized learning paths for individual growth' },
    { icon: faBriefcase, text: 'Industry-relevant projects and case studies' },
    { icon: faChalkboardTeacher, text: 'Mentorship programs from leading experts' },
    { icon: faSync, text: 'Continuous feedback and improvement loops' },
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
            viewport={{ once: true, amount: 0.3 }}
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

            {/* Right Content - 70% width */}
            <motion.div
              className="flex-1 flex items-center justify-center w-9/12"
              variants={fadeInFromRight}
            >
              <div className="grid grid-cols-3 gap-4 w-full">
                {items.map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={item.icon} style={{ color: highlightYellow, fontSize: '2rem', marginBottom: '0.5rem' }} />
                    <p style={{ color: darkGray, fontWeight: '500' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Layout for medium and small screens */}
          <motion.div
            className="flex lg:hidden flex-col bg-[#003073] rounded-2xl shadow-lg p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
                <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center">
                  <FontAwesomeIcon icon={item.icon} style={{ color: highlightYellow, fontSize: '2rem', marginBottom: '0.5rem' }} />
                  <p style={{ color: darkGray, fontWeight: '500' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default WhyTraining;
