import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faUsersCog,
  faClock,
  faClipboardCheck,
  faSyncAlt,
  faChalkboardTeacher,
  faClipboardList,
  faUserFriends,
  faBookOpen,
  faCertificate,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyTraining() {
  const lightBlue = '#2563eb'; 
  const darkGray = '#333333'; 

  const items = [
    { icon: faGraduationCap, text: 'Customized & Curated Content', aos: 'fade-up' },
    { icon: faClipboardCheck, text: 'Periodic Assessment Models', aos: 'fade-right' },
    { icon: faSyncAlt, text: 'Measurable Performance Outcomes', aos: 'zoom-in' },
    { icon: faUserFriends, text: 'Direct Industry Application Modules', aos: 'fade-left' },
    { icon: faChalkboardTeacher, text: 'Long-Term Investment', aos: 'fade-up' },
    { icon: faCertificate, text: 'Certifications Post Training', aos: 'fade-right' },
    { icon: faLaptopCode, text: 'Technical Skill Mastery', aos: 'zoom-in' },
    { icon: faUsersCog, text: 'Communication Enhancement', aos: 'fade-left' },
    { icon: faClock, text: 'Reduced Training Costs', aos: 'fade-up' },
    { icon: faClipboardList, text: 'Evaluation Based Learning', aos: 'fade-right' },
    { icon: faBookOpen, text: 'Scenario Based Learning', aos: 'zoom-in' },
    { icon: faBookOpen, text: 'Case Study Based Learning', aos: 'fade-left' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="roboto-regular">
      <main className="flex-1 py-8">
        <div className="container mx-auto px-8 md:px-12">
          <div className="flex flex-col lg:flex-row bg-[#1e3a8a] rounded-2xl shadow-lg p-6">
            {/* Left Content */}
            <div className="flex-1 mb-6 lg:mb-0 flex flex-col items-center lg:items-start w-full lg:w-3/12">
              <p
                className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-4 text-center lg:text-left "
                style={{ color: '#FFC80E' }}
              >
                How This Training Creates Industry Fit?
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

            {/* Right Content */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                {items.map((item, index) => (
                  <div
                    key={index}
                    data-aos={item.aos}
                    data-aos-delay={index * 0.1} // Staggered effect
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:bg-gray-100 hover:scale-105"
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
                      style={{
                        color: darkGray,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        lineHeight: '1.5rem',
                      }}
                      dangerouslySetInnerHTML={{ __html: item.text }} 
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
