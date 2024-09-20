import React from 'react';
import { FaGraduationCap, FaSchool, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';

// Define the data structure for departments with updated icons
const departments = [
  {
    icon: <FaGraduationCap className="text-4xl text-[#091327]" />, // Dark blue color for icons
    name: "Students",
    outcomes: [
      "Students are groomed for industry according to its specifications.",
      "Holistic upskilling of students.",
      "Industry guest lectures offer valuable industry insights.",
      "Access to placement opportunities with premier brands and companies."
    ]
  },
  {
    icon: <FaSchool className="text-4xl text-[#091327]" />, // Dark blue color for icons
    name: "Colleges",
    outcomes: [
      "Enhanced placement rates.",
      "Empowered students taking the college to new heights.",
      "Elevated brand stature.",
      "Establishment of corporate partnerships."
    ]
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-[#091327]" />, // Dark blue color for icons
    name: "F D P", // Faculty Development Program
    outcomes: [
      "Industry-aligned curriculum enhancement.",
      "Exposure to advanced industry-related teaching methodologies.",
      "Improved student engagement and learning outcomes.",
      "Networking opportunities with industry experts."
    ]
  },
  {
    icon: <FaBuilding className="text-4xl text-[#091327]" />, // Dark blue color for icons
    name: "Corporate",
    outcomes: [
      "Customized skill development aligned with company goals.",
      "Increased employee productivity and efficiency.",
      "Enhanced leadership and management capabilities.",
      "Improved problem-solving and decision-making skills."
    ]
  }
];

const LearningOutcomes = () => {
  return (
    <div className="p-4 bg-[#091327] flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6  text-[#FFC80E]">
        LEARNING OUTCOMES OF OUR TRAININGS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {departments.map((dept, index) => (
          <div key={index} className="bg-[#003073] text-white shadow-md rounded-3xl p-4 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFC80E] mr-4">
                {dept.icon}
              </span>
              <p className="text-2xl font-semibold">{dept.name}</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {dept.outcomes.map((outcome, idx) => (
                <li key={idx} className="text-gray-300">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningOutcomes;
