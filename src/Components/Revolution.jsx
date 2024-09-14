import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const storyItems = [
  { id: 1, text: "When COVID-19 struck, education and industry expectations were turned upside down." },
  { id: 2, text: "Core domain students found themselves facing a void of opportunities." },
  { id: 3, text: "As industries rebuilt with resilience in mind, a gap widened." },
  { id: 4, text: "The talented students left behind, their potential untapped." },
  { id: 5, text: "From this crisis, our 'Core for Core' concept was born." },
  { id: 6, text: "Our mission crystallized: bridge student potential with industry needs." },
  { id: 7, text: "We set out to restore confidence in core domain students." },
  { id: 8, text: "Our goal: match students with placements that truly fit their expertise." },
  { id: 9, text: "'Core for Core' became more than a program—it was our answer to uncertainty." },
  { id: 10, text: "Through this, we committed to nurturing the next generation of industry leaders." },
  { id: 11, text: "In a world in flux, we created a pathway for students to thrive once again." }
];

const StorySection = () => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section
      ref={sectionRef}
      className="relative  flex flex-col items-center justify-center bg-[#e9e5ff] text-center px-4 overflow-hidden"
    >
      {/* Heading */}
      <motion.p
        className="text-4xl md:text-4xl font-bold mb-5 relative z-10 mt-4" // Updated font size class
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Beginning of Revolution
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 transform translate-y-1 rounded-full" />
      </motion.p>

      {/* Storytelling Items */}
      <div className="relative z-10 flex flex-col items-start max-w-4xl mx-auto">
        {storyItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="flex items-center mb-4 w-full px-2"
          >
            {/* Sleek Dash */}
            <span className="text-lg font-bold text-gray-800 mr-4">-</span>
            {/* Story text */}
            <p className="text-base md:text-lg font-semibold text-gray-800">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
