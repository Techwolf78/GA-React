// ChallengesSolutionsComponent.js

import React from 'react';
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
  },
  {
    title: "Bridging the Employer-Employee Gap for Workplace Clarity",
    solution: "Offer training on effective feedback mechanisms, transparent communication practices, and aligning individual goals with company objectives.",
    icon: <FaHandshake />
  }
];

const ChallengesSolutionsComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 p-10 flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 underline ">Challenges & Solutions</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => {
            const cardColor = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
            const shadowColor = index % 2 === 0 ? 'shadow-lg' : 'shadow-md';

            return (
              <motion.div
                key={index}
                className={`relative w-full max-w-md mx-auto ${cardColor} ${shadowColor} rounded-lg overflow-hidden`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl text-purple-600 mr-4 flex-shrink-0">{challenge.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-1xl font-semibold text-gray-800">{challenge.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold text-gray-800">Solution:</span> {challenge.solution}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-200 opacity-30"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChallengesSolutionsComponent;
