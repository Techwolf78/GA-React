import React, { useState, useEffect } from 'react';
import { FaUniversity, FaUserTie, FaUserGraduate, FaClock } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

function CollegeBox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [collegesCount, setCollegesCount] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const [studentsTrained, setStudentsTrained] = useState(0);
  const [trainingHours, setTrainingHours] = useState(0);
  const [countingStarted, setCountingStarted] = useState(false);
  const [fadeInCompleted, setFadeInCompleted] = useState(false);

  const images = [
    '/CollegeSliding/Training Photo 1.png',
    '/CollegeSliding/Training Photo 2.png',
    '/CollegeSliding/Training Photo 3.png',
  ];

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const cardsControls = useAnimation();
  const ref = React.useRef();
  const isInView = useInView(ref, { threshold: 1, once: true }); // Trigger when 100% is in view

  useEffect(() => {
    if (isInView) {
      textControls.start({ opacity: 1, x: 0, transition: { duration: 3 } });
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 3 } });

      // Start cards animation after the component is fully in view
      cardsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, staggerChildren: 0.5 },
      }).then(() => {
        setFadeInCompleted(true); // Mark fade-in completion
      });

      return () => {
        setFadeInCompleted(false);
      };
    } else {
      textControls.start({ opacity: 0, x: -50 });
      imageControls.start({ opacity: 0, x: 50 });
      setCountingStarted(false);
      cardsControls.start({ opacity: 0, y: 20 });
    }
  }, [textControls, imageControls, cardsControls, isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (fadeInCompleted) {
      const timer = setTimeout(() => {
        setCountingStarted(true);
      }, 1500); // Start counting 1.5 seconds after all boxes are visible

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [fadeInCompleted]);

  useEffect(() => {
    if (!countingStarted) return;

    const countUp = (setter, target, duration) => {
      let start = 0;
      const step = target / (duration / 50);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          clearInterval(interval);
          setter(target);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
    };

    countUp(setCollegesCount, 55, 2000);
    countUp(setTrainersCount, 5, 2000);
    countUp(setStudentsTrained, 60000, 6000);
    countUp(setTrainingHours, 65000, 6000);
  }, [countingStarted]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center py-4 px-8 sm:px-16 bg-gradient-to-b from-[#003073] to-[#091327] shadow-lg roboto-regular"
    >
      <div className="flex flex-col md:flex-row w-full max-w-full mx-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={textControls}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex-1">
            <p className="text-[#ffffff] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed lg:pr-1">
              Our customized Industry-specific trainings for colleges are carefully designed to meet both academic and industry needs. We incorporate the latest trends and student feedback to ensure relevant and effective programmes. By customizing our training for each institution and learner, we promote student success and build strong partnerships between academia and industry.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={imageControls}
          className="flex-1 flex flex-col items-center"
        >
          <div className="relative w-full flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt="Slider"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
          <div className="flex mt-4 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-[#FFC80E]' : 'bg-[#003073]'} transition-colors`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-4 w-full max-w-full mx-0" animate={cardsControls}>
        {[
          { icon: <FaUniversity />, value: `${collegesCount}+`, label: 'Colleges' },
          { icon: <FaUserTie />, value: `${trainersCount}/5`, label: 'Trainers Index' },
          { icon: <FaUserGraduate />, value: `${studentsTrained}+`, label: 'Students Trained' },
          { icon: <FaClock />, value: `${trainingHours}+`, label: 'Training Hours' },
        ].map(({ icon, value, label }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={fadeInCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Fade in only after completion
            transition={{
              duration: 0.5,
              delay: fadeInCompleted ? 1.5 + index * 0.5 : 0 // Delay for staggered effect after fade-in completion
            }}
            className="flex flex-col items-center space-y-2 p-4 bg-[#003073] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#FFC80E] rounded-full">
              {React.cloneElement(icon, { className: "text-[#091327] text-3xl" })}
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-[#FFC80E]">{value}</p>
            <p className="text-white text-center text-base md:text-lg font-medium">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default CollegeBox;
