import React, { useEffect, useState, useRef } from 'react';
import { FaGraduationCap, FaSchool, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';

const departments = [
  {
    icon: <FaGraduationCap className="text-8xl text-[#FFC80E]" />,
    name: "STUDENTS",
    outcomes: [
      "Students are groomed for industry according to its specifications.",
      "Holistic upskilling of students.",
      "Industry guest lectures offer valuable industry insights.",
      "Access to placement opportunities with premier brands and companies."
    ]
  },
  {
    icon: <FaSchool className="text-8xl text-[#FFC80E]" />,
    name: "COLLEGES",
    outcomes: [
      "Enhanced placement rates.",
      "Empowered students taking the college to new heights.",
      "Elevated brand stature.",
      "Establishment of corporate partnerships."
    ]
  },
  {
    icon: <FaChalkboardTeacher className="text-8xl text-[#FFC80E]" />,
    name: "F D P",
    outcomes: [
      "Industry-aligned curriculum enhancement.",
      "Exposure to advanced industry-related teaching methodologies.",
      "Improved student engagement and learning outcomes.",
      "Networking opportunities with industry experts."
    ]
  },
  {
    icon: <FaBuilding className="text-8xl text-[#FFC80E]" />,
    name: "CORPORATE",
    outcomes: [
      "Customized skill development aligned with company goals.",
      "Increased employee productivity and efficiency.",
      "Enhanced leadership and management capabilities.",
      "Improved problem-solving and decision-making skills."
    ]
  }
];

const LearningOutcomes = () => {
  const [cardHeight, setCardHeight] = useState(0);
  const backCardRefs = useRef([]);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const heights = backCardRefs.current.map(card => card ? card.clientHeight : 0);
      const maxHeight = Math.max(...heights);
      setCardHeight(maxHeight);
    };

    const timeoutId = setTimeout(calculateMaxHeight, 100);
    window.addEventListener('resize', calculateMaxHeight);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);

  return (
    <div className="p-4 bg-[#091327] flex flex-col items-center roboto-regular px-8 md:px-16">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-[#FFC80E]">
        LEARNING OUTCOMES OF OUR TRAININGS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {departments.map((dept, index) => (
          <div key={index} className="flip-card" style={{ height: cardHeight || 'auto', width: '100%' }}>
            <div className="flip-card-inner" style={{ height: cardHeight || 'auto' }}>
              <div 
                className="flip-card-front bg-[#003073] text-white shadow-md rounded-3xl flex flex-col items-center justify-center p-6"
                style={{ height: cardHeight || 'auto' }}
              >
                <span className="mb-4">{dept.icon}</span>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">{dept.name}</p>
              </div>
              <div 
                className="flip-card-back bg-[#FFC80E] text-black shadow-md rounded-3xl flex flex-col items-center justify-center p-6"
                ref={el => backCardRefs.current[index] = el}
                style={{ height: cardHeight || 'auto' }}
              >
                <ul className="list-disc pl-5 space-y-2 text-left">
                  {dept.outcomes.map((outcome, idx) => (
                    <li key={idx} className="text-sm sm:text-base md:text-lg text-gray-800">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          width: 100%; /* Ensure full width */
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          backface-visibility: hidden;
          border-radius: 1.5rem;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default LearningOutcomes;
