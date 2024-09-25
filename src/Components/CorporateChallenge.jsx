import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBuilding, FaBullhorn, FaLightbulb, FaUsers, FaTools, FaProjectDiagram, FaRegStar, FaHandshake, FaSyncAlt } from 'react-icons/fa';

const challenges = [
  {
    title: "Elevated Attrition Rates",
    solution: "Implement career development programs and leadership training to show investment in employee growth, increasing retention.",
    icon: <FaBuilding />
  },
  {
    title: "Dwindling Employee Morale",
    solution: "Offer personal development workshops and team-building exercises to boost motivation and workplace satisfaction.",
    icon: <FaUsers />
  },
  {
    title: "Unfavorable Workplace Culture",
    solution: "Conduct culture alignment workshops and diversity training to foster a positive, inclusive environment.",
    icon: <FaHandshake />
  },
  {
    title: "Communication Gaps",
    solution: "Provide communication skills training, focusing on active listening, clear messaging, and conflict resolution techniques.",
    icon: <FaBullhorn />
  },
  {
    title: "Decreasing Productivity and Outcomes",
    solution: "Implement time management and productivity training, along with goal-setting workshops to improve efficiency.",
    icon: <FaTools />
  },
  {
    title: "Suboptimal Project Management",
    solution: "Offer comprehensive project management courses, Executive leadership programmes including agile methodologies and risk management training.",
    icon: <FaProjectDiagram />
  },
  {
    title: "Challenges Related to Hierarchy and Bureaucracy",
    solution: "Conduct leadership training for all levels, emphasizing flat organizational structures and efficient decision-making processes.",
    icon: <FaRegStar />
  },
  {
    title: "Reluctance to Embrace Change",
    solution: "Provide change management workshops to help employees adapt to new processes and technologies.",
    icon: <FaSyncAlt />
  },
  {
    title: "Effective Management of Remote Teams",
    solution: "Offer training on virtual leadership, remote collaboration tools, and maintaining team cohesion in distributed environments.",
    icon: <FaLightbulb />
  },
  {
    title: "Skillful Resolution of Challenges",
    solution: "Implement problem-solving and critical thinking workshops to enhance employees' ability to tackle complex issues.",
    icon: <FaArrowRight />
  },
  {
    title: "Enhanced Technical Proficiency",
    solution: "Provide regular technical skills updates and training on emerging technologies relevant to the industry.",
    icon: <FaTools />
  },
  {
    title: "Boosting Employee Morale",
    solution: "Conduct stress management and work-life balance workshops, along with recognition and rewards training for managers.",
    icon: <FaUsers />
  }
];

const ChallengesSolutionsComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#0a1d3d] p-10 flex items-center justify-center roboto-regular">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#ffc700] mb-12">CHALLENGES & SOLUTIONS</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {challenges.map((challenge, index) => {
            const cardColor = '#003073';
            const isHovered = hoveredIndex === index;

            const borderColor = isHovered ? '#ffc700' : 'white';
            const glowIntensity = isHovered ? '10px' : '0px';

            return (
              <motion.div
                key={index}
                style={{
                  backgroundColor: cardColor,
                  border: `2px solid ${borderColor}`,
                  position: 'relative',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto',
                  borderRadius: '0.5rem',
                  boxShadow: isHovered ? `0 0 ${glowIntensity} ${borderColor}, 0 0 30px ${borderColor}` : 'none',
                  transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-4 mt-(-1)"> {/* Adjusted padding for top spacing */}
                  <div className="flex items-center mb-2"> {/* Adjusted margin-bottom */}
                    <div className="text-4xl text-[#ffc700] mr-3 flex-shrink-0">{challenge.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#ffffff]">{challenge.title}</h2>
                    </div>
                  </div>
                  <p className="text-[#ffffff] text-sm">
                    <span className="font-semibold text-[#ffc700]">Solution:</span> {challenge.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChallengesSolutionsComponent;