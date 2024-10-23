import React, { useState, useEffect } from 'react';
import { FaUniversity, FaUserTie, FaUserGraduate, FaClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function CollegeBox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [collegesCount, setCollegesCount] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const [studentsTrained, setStudentsTrained] = useState(0);
  const [trainingHours, setTrainingHours] = useState(0);
  const [countingStarted, setCountingStarted] = useState(false);

  const images = [
    '/CollegeSliding/Training Photo 1.png',
    '/CollegeSliding/Training Photo 2.png',
    '/CollegeSliding/Training Photo 3.png',
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Set once to false for repeat triggering
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountingStarted(true);
    }, 1500); // Start counting after fade-in

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

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
    <div className="flex flex-col items-center py-4 px-8 sm:px-16 bg-gradient-to-b from-[#003073] to-[#091327] shadow-lg roboto-regular">
      <div className="flex flex-col md:flex-row w-full max-w-full mx-0">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out" // Slower ease effect
          className="flex-1 flex flex-col justify-between"
        >
          <div className="flex-1">
            <p className="text-[#ffffff] text-sm md:text-sm lg:text-xl font-medium leading-relaxed lg:pr-1">
              Our specialized curated industry-specific training programmes for colleges are designed to align with both student needs and job market demands. We conduct thorough evaluations to identify essential skills and incorporate feedback to create relevant learning experiences. By collaborating with industry leaders, we ensure our curriculum reflects current trends, preparing students to be workforce-ready with the subjects and topics they need most. This approach not only enhances student success but also strengthens partnerships between academia and industry.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="ease-in-out" // Slower ease effect
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
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-4 w-full max-w-full mx-0">
        {[
          { icon: <FaUniversity />, value: `${collegesCount}+`, label: 'Colleges' },
          { icon: <FaUserTie />, value: `${trainersCount}/5`, label: 'Trainers Index' },
          { icon: <FaUserGraduate />, value: `${studentsTrained}+`, label: 'Students Trained' },
          { icon: <FaClock />, value: `${trainingHours}+`, label: 'Training Hours' },
        ].map(({ icon, value, label }, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Staggering effect
            data-aos-easing="ease-in-out" // Slower ease effect
            className="flex flex-col items-center space-y-2 p-4 bg-[#003073] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-yellow-500 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-[#FFC80E] rounded-full">
              {React.cloneElement(icon, { className: "text-[#091327] text-3xl" })}
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-[#FFC80E]">{value}</p>
            <p className="text-white text-center text-base md:text-lg font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollegeBox;
