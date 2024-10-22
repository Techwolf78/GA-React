import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutIntro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing for animations
      once: true, // Animation only happens once
    });
  }, []);

  const handleNavigate = () => {
    window.location.href = "/contact";
  };

  const buttonHover = {
    hover: {
      scale: 1.1,
      backgroundColor: "#FFC80E",
      color: "#003073",
      transition: { duration: 0.3 },
    },
  };

  const iconHover = {
    hover: {
      rotate: 20,
      scale: 1.3,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.1 }, // Reduced duration for a quicker lift
    },
  };
  

  return (
    <div className="relative overflow-hidden px-4 md:px-8 lg:px-16 py-12 bg-[#e1eaf7]">
      <div className="relative z-10 flex flex-col md:flex-row justify-between mx-auto">
        <div className="flex-1 text-left mb-4 md:mb-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up"
            className="text-xl md:text-2xl text-[#003073] font-bold mb-2"
          >
            WHAT WE DO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-aos="fade-up"
            className="text-3xl md:text-5xl text-[#000000] font-bold"
          >
            WE PROVIDE <span className="text-[#003073]">360</span>
            <sup className="text-[#003073]">°</sup>
            <br className="hidden md:block" /> APPROACH.
          </motion.h1>
        </div>
        <div className="flex-1 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-aos="fade-up"
            className="text-base text-black mb-0"
          >
            As India’s premier non-ed-tech organization, we are committed to bridging the gap between industry and academia. We provide customized training solutions as per the Industry-centric needs which helps your students to be industry-ready and help your academic institution facilitate smooth transition into the industry with ease.
          </motion.p>
          <motion.button
            onClick={handleNavigate}
            className="inline-block text-base font-bold mt-4 mb-4 relative group border-2 border-[#003073] rounded-lg py-2 px-4"
            variants={buttonHover}
            whileHover="hover"
          >
            GET IN TOUCH WITH US
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch lg:gap-12 gap-4 mx-auto mt-4">
        {[
          {
            icon: "graduation-cap",
            title: "Customized Training Solutions",
            description: "We provide customized training solutions as per the Industry-centric needs which helps your students to be industry ready and help your academic institution to facilitate smooth transition into the industry with ease.",
          },
          {
            icon: "handshake",
            title: "Industry-Academia Collaboration",
            description: "We are committed to bridging the gap between industry and academia by providing customized training solutions that help your students be industry-ready and facilitate a smooth transition into the industry.",
          },
          {
            icon: "briefcase",
            title: "Industry-Ready Graduates",
            description: "Our customized training solutions help your students develop the necessary skills and knowledge to be successful in their chosen industry, ensuring they are well-prepared for their future careers.",
          },
        ].map((item, index) => (
          <motion.div
          key={index}
          data-aos="zoom-in-up"
          data-aos-delay={index * 100}
          className="bg-[#003073] p-6 border-2 border-dashed border-[#FFC80E] shadow-lg flex flex-col items-center rounded-[20px] flex-1 mb-4 md:mb-0"
          style={{ margin: "0 10px", position: "relative", zIndex: 1 }}
          whileHover="hover"
          variants={cardHover} // Apply the 3D hover effect here
        >
            <motion.div
              variants={iconHover}
              whileHover="hover"
              className="flex justify-center items-center w-16 h-16 bg-[#FFC80E] rounded-full mb-2 shadow-lg"
            >
              <i className={`fas fa-${item.icon} text-[#003073] text-3xl`}></i>
            </motion.div>
            <motion.h4
              className="text-lg md:text-xl text-[#ffffff] font-bold mb-2"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {item.title}
            </motion.h4>
            <p className="text-base text-[#ffffff] text-left">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutIntro;
