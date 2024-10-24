import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher, // Pedagogy Enhancement
  faBookOpen, // Curriculum Development
  faLaptopCode, // Technology Integration in Teaching
  faClipboardCheck, // Assessment and Evaluation Strategies
  faBook, // Research and Publication Guidance
  faUserTie, // Leadership and Management Skills for Educators
  faGraduationCap, // Comprehensive Development
  faSyncAlt, // Real Time Based Approach
  faChalkboardTeacher as EliteGuidanceIcon, // Elite Guidance (Industry Experts)
} from "@fortawesome/free-solid-svg-icons";

function WhyTraining() {
  const lightBlue = "#003073";
  const highlightYellow = "#FFC80E";
  const darkGray = "#333333";

  const items = [
    { icon: faChalkboardTeacher, text: "Pedagogy Enhancement" },
    { icon: faBookOpen, text: "Curriculum Development" },
    { icon: faLaptopCode, text: "Technology Integration in Teaching" },
    { icon: faClipboardCheck, text: "Assessment and Evaluation Strategies" },
    { icon: faBook, text: "Research and Publication Guidance" },
    { icon: faUserTie, text: "Leadership and Management Skills for Educators" },
    { icon: faGraduationCap, text: "Comprehensive Development" },
    { icon: faSyncAlt, text: "Real Time Based Approach" },
    { icon: EliteGuidanceIcon, text: "Elite Guidance (Industry Experts)" },
  ];

  return (
    <div className="roboto-regular">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-8 md:px-16">
          {/* Layout for large screens */}
          <div className="hidden lg:flex flex-col lg:flex-row bg-[#003073] rounded-2xl shadow-lg p-6">
            {/* Left Content - 30% width */}
            <div className="flex-1 mb-6 lg:mb-0 flex flex-col items-center lg:items-start w-3/12">
              <p
                className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold mb-4 text-center lg:text-left tracking-widest" // Use tracking-widest for more letter spacing
                style={{ color: highlightYellow }}
              >
                WHAT DO OUR FDP MODULES INCLUDE?
              </p>

              <div className="flex items-center justify-center">
                <img
                  src="/Training - Thinking Man.png"
                  alt="Illustration"
                  className="h-64 sm:h-72 lg:h-80 xl:h-96"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
            </div>

            {/* Right Content - 70% width */}
            <div className="flex-1 flex items-center justify-center w-9/12">
              <div className="grid grid-cols-3 gap-6 w-full">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400 hover:border-2 hover:border-yellow-400"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{
                          color: lightBlue,
                          fontSize: "2rem",
                        }}
                      />
                    </div>
                    <p style={{ color: darkGray, fontWeight: "500" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Layout for medium and small screens */}
          <div className="flex lg:hidden flex-col bg-[#003073] rounded-2xl shadow-lg p-6">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 text-center tracking-wider"
              style={{ color: highlightYellow }}
            >
              WHAT DO OUR FDP MODULES INCLUDE?
            </p>
            <div className="flex items-center mb-6 justify-center">
              <img
                src="/Training - Thinking Man.png"
                alt="Illustration"
                className="h-64 sm:h-72 lg:h-80 xl:h-96"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {items.slice(0, 8).map(
                (
                  item,
                  index // Only take the first 8 items
                ) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400 hover:border-2 hover:border-yellow-400"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{
                          color: lightBlue,
                          fontSize: "2rem",
                        }}
                      />
                    </div>
                    <p>{item.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WhyTraining;
