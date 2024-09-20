import '@fortawesome/fontawesome-free/css/all.min.css'; 

import HomeAbout from './HomeAbout'; 
import Testimonials from './Testimonials'; // Import the Testimonials component
import JourneySection from './JourneySection';
import Revolution from './Revolution';
import MissionVisionSection from './MissionVisionSection';

const About = () => {
  return (
    <div className="relative bg-[#091327] overflow-hidden">
      
      {/* Hero Section */}
      <section className="bg-[#003073] text-white flex flex-col items-center text-center py-16">
        <div className="w-full max-w-screen-lg px-6">
          <h1 className="text-6xl font-bold mb-6" style={{ color: '#ffc700' }}>ABOUT GRYPHON ACADEMY</h1>
          <p className="text-2xl font-medium mb-12" style={{ color: '&apos;#ffffff&apos;' }}>
          As India&apos;s premier non-ed-tech organization, we are committed to bridging the gap between industry and academia. We provide customized training solutions as per the Industry-centric needs which helps your academic institution facilitate smooth transition into the industry with ease.
          </p>

          {/* Responsive Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-8">
            {[
              { icon: 'user-graduate', value: '60,000+', label: 'Students Trained' },
              { icon: 'calendar-alt', value: '65,000+', label: 'Training Hours' },
              { icon: 'building', value: '450+', label: 'Corporate Partners' },
              { icon: 'university', value: '55+', label: 'Educational Partners' },
              { icon: 'money-bill-alt', value: '7 LPA', label: 'Average Salary' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <i className={`fas fa-${stat.icon} text-6xl mb-4`} style={{ color: '#ffc700' }}></i>
                <h3 className="text-3xl font-bold" style={{ color: '#ffc700' }}>{stat.value}</h3>
                <p className="text-lg mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <div id="about">
        <HomeAbout />
      </div>
      <div id="missionVision">
        <MissionVisionSection />
      </div>
      
      {/* Our Impact Section */}
      <div id="stats" className="py-16 bg-[#091327]">
        <h3 className="text-4xl font-bold text-center mb-12" style={{ color: '#ffc700' }}>
          OUR IMPACT
        </h3>
        <div className="stats-wrapper flex flex-wrap justify-center gap-8 fade-in-stats">
          {[{ icon: 'user-graduate', color: '#ffc700', value: '60,000+', label: 'Students Trained' },
            { icon: 'calendar-alt', color: '#ffc700', value: '65,000+', label: 'Training Hours' },
            { icon: 'building', color: '#ffc700', value: '450+', label: 'Corporate Partners' },
            { icon: 'university', color: '#ffc700', value: '55+', label: 'Educational Partners' }].map((stat, idx) => (
              <div key={idx} className="stat-card bg-[#003073] shadow-lg rounded-lg p-8 text-center w-64">
                <i className={`fas fa-${stat.icon} text-6xl mb-4`} style={{ color: stat.color }}></i>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-lg text-white mt-2">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>

      <div id="Revolution">
        <Revolution />
      </div>
      <div id="JourneySection">
        <JourneySection />
      </div>
      <Testimonials />
    </div>
  );
};

export default About;
