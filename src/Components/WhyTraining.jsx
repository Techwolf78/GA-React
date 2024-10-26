import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faUsersCog,
  faClock,
  faClipboardCheck,
  faProjectDiagram,
  faSyncAlt,
  faChalkboardTeacher,
  faMapMarkedAlt,
  faClipboardList,
  faUserFriends,
  faBookOpen,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

function WhyTraining() {
  const lightBlue = '#003073'; 
  const highlightYellow = '#FFC80E'; 
  const darkGray = '#333333'; 

  const items = [
    { icon: faGraduationCap, text: 'Experiential Learning' },
    { icon: faUsersCog, text: 'Competence Based Learning' },
    { icon: faClock, text: 'Timely Evaluation' },
    { icon: faClipboardCheck, text: 'Periodic Assessment (Summative & Formative)' },
    { icon: faProjectDiagram, text: 'Interdisciplinary Approach' },
    { icon: faSyncAlt, text: 'Agile & Real Time Based Trainings' },
    { icon: faChalkboardTeacher, text: 'Trainer<br /> Role Fit' },
    { icon: faMapMarkedAlt, text: 'Skill Mapping as per Industry' },
    { icon: faClipboardList, text: 'Continuous Assessment' },
    { icon: faUserFriends, text: 'Role Play Based Training' },
    { icon: faBookOpen, text: 'Case<br />Method' },
    { icon: faSchool, text: 'Teaching Bootcamps' },
  ];
  
  return (
    <div className="roboto-regular">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row bg-[#003073] rounded-2xl shadow-lg p-6">
            {/* Left Content - 30% width */}
            <div className="flex-1 mb-6 lg:mb-0 flex flex-col items-center lg:items-start w-full lg:w-3/12">
              <p
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 text-center lg:text-left"
                style={{ color: highlightYellow }}
              >
                HOW DO OUR TRAININGS DIFFER?
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="placement-bg/Training - Thinking Man.avif"
                  alt="Illustration"
                  className="h-64 sm:h-72 lg:h-80 xl:h-96"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>

            {/* Right Content - Allow to grow */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400 hover:border-2 hover:border-yellow-400"
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{
                          color: lightBlue,
                          fontSize: '2rem',
                        }}
                      />
                    </div>
                    <p 
                      style={{ color: darkGray, fontSize: '1rem', fontWeight: 'bold', lineHeight: '1.5rem' }}
                      dangerouslySetInnerHTML={{ __html: item.text }} // Use dangerouslySetInnerHTML
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default WhyTraining;
