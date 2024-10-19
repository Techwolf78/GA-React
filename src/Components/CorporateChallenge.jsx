import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBuilding, FaBullhorn, FaLightbulb, FaUsers, FaTools, FaProjectDiagram, FaRegStar, FaHandshake, FaSyncAlt } from 'react-icons/fa';

const challenges = [
  {
    title: "Elevated Attrition Rates",
    solution: "Implement career development programs and leadership training to show investment in employee growth, increasing retention.",
    icon: <FaRegStar aria-label="Elevated Attrition Rates" />
  },
  {
    title: "Dwindling Employee Morale",
    solution: "Offer personal development workshops and team-building exercises to boost motivation and workplace satisfaction.",
    icon: <FaUsers aria-label="Dwindling Employee Morale" />
  },
  {
    title: "Unfavorable Workplace Culture",
    solution: "Conduct culture alignment workshops and diversity training to foster a positive, inclusive environment.",
    icon: <FaHandshake aria-label="Unfavorable Workplace Culture" />
  },
  {
    title: "Communication Gaps",
    solution: "Provide communication skills training, focusing on active listening, clear messaging, and conflict resolution techniques.",
    icon: <FaBullhorn aria-label="Communication Gaps" />
  },
  {
    title: "Suboptimal Project Management",
    solution: "Offer comprehensive project management courses, Executive leadership programs including agile methodologies and risk management training.",
    icon: <FaProjectDiagram aria-label="Suboptimal Project Management" />
  },
  {
    title: "Hierarchy and Bureaucracy",
    solution: "Conduct leadership training for all levels, emphasizing flat organizational structures and efficient decision-making processes.",
    icon: <FaBuilding aria-label="Hierarchy and Bureaucracy" />
  },
  {
    title: "Reluctance to Embrace Change",
    solution: "Provide change management workshops to help employees adapt to new processes and technologies.",
    icon: <FaSyncAlt aria-label="Reluctance to Embrace Change" />
  },
  {
    title: "Remote Team Management",
    solution: "Offer training on virtual leadership, remote collaboration tools, and maintaining team cohesion in distributed environments.",
    icon: <FaLightbulb aria-label="Remote Team Management" />
  },
  {
    title: "Enhanced Technical Proficiency",
    solution: "Provide regular technical skills updates and training on emerging technologies relevant to the industry.",
    icon: <FaTools aria-label="Enhanced Technical Proficiency" />
  },
  {
    title: "Employer-Employee Gap",
    solution: "Offer training on effective feedback mechanisms, transparent communication practices, and aligning individual goals with company objectives.",
    icon: <FaArrowRight aria-label="Employer-Employee Gap" />
  },
  {
    title: "High Employee Turnover Rates",
    solution: "Implement tailored career development programs that enhance employee engagement and demonstrate investment in their growth, leading to increased retention.",
    icon: <FaBullhorn aria-label="High Employee Turnover Rates" />
  },
  {
    title: "Inflation and Economic Downturns",
    solution: "Offer training on cost-effective practices and resource management, equipping employees with skills to navigate economic challenges effectively.",
    icon: <FaRegStar aria-label="Inflation and Economic Downturns" />
  },
  {
    title: "Supply Chain Disruptions",
    solution: "Provide comprehensive training in supply chain management and risk assessment strategies, enabling teams to proactively mitigate disruptions and ensure continuity.",
    icon: <FaTools aria-label="Supply Chain Disruptions" />
  },
  {
    title: "Evolving Customer Expectations",
    solution: "Equip staff with customer service training and data analytics skills to better understand and respond to changing customer needs and preferences.",
    icon: <FaHandshake aria-label="Evolving Customer Expectations" />
  },
  {
    title: "Rapid Digital Transformation",
    solution: "Deliver digital skills training that ensures employees are proficient in new technologies, facilitating smoother transitions and enhancing operational efficiency.",
    icon: <FaUsers aria-label="Rapid Digital Transformation" />
  },
  {
    title: "Talent Shortages",
    solution: "Invest in skill-based training programs that prepare existing employees for advancement, reducing reliance on external hiring and fostering internal talent development.",
    icon: <FaProjectDiagram aria-label="Talent Shortages" />
  }
];

const ChallengesSolutionsComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1024);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-[#0a1d3d] py-4 flex items-center justify-center roboto-regular">
      <div className="container mx-auto px-8 sm:px-8 md:px-16 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#ffc700] mb-8">CHALLENGES & SOLUTIONS</h1>
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
                  transition: 'border-color 0.1s ease-in-out, box-shadow 0.3s ease-in-out',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-4 mt-(-1)">
                  <div className="flex items-center mb-2">
                    <div className="text-4xl text-[#ffc700] mr-3 flex-shrink-0">{challenge.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-[#ffffff]">{challenge.title}</h2>
                    </div>
                  </div>
                  <p className="text-[#ffffff] text-base">
                    <span className="font-semibold text-[#ffc700]">Solution:</span> {challenge.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Custom magnifying glass cursor */}
      {isWideScreen && (
        <div
          className="custom-cursor"
          style={{
            left: cursorPosition.x - 20, // Center the cursor
            top: cursorPosition.y - 20, // Center the cursor
          }}
        />
      )}
      <style>
      {`
        body {
          cursor: ${isWideScreen ? 'none' : 'auto'}; /* Hide the default cursor on wide screens */
        }

        .custom-cursor {
          position: fixed;
          width: 40px; /* Width of the cursor */
          height: 40px; /* Height of the cursor */
          background-color: transparent; /* Fully transparent center */
          border: 3px solid rgba(255, 199, 0, 1); /* Solid yellow border */
          border-radius: 50%; /* Circular shape */
          pointer-events: none; /* Ensure it doesn't interfere with mouse events */
          box-shadow: 0 0 10px rgba(255, 199, 0, 2.6); /* Optional glow effect */
          z-index: 9999; /* Ensure it stays above other elements */
        }

        /* Apply zoom effect on text when hovered */
        .text-zoom {
          transition: transform 0.2s ease;
        }

        .text-zoom:hover {
          transform: scale(1.5); /* Adjust scale for zoom effect */
          z-index: 10000; /* Bring to front on zoom */
        }
      `}
      </style>
    </div>
  );
};

export default ChallengesSolutionsComponent;