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

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center bg-[#e9e5ff] text-center px-4 overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-8  relative z-10">Beginning of Revolution</h2>

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