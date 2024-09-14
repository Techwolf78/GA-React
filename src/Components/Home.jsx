import React from 'react';
import '../assets/CSS/home.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import HomeNavbar from './HomeNavbar'; 
import HomeAbout from './HomeAbout'; 
import Testimonials from './Testimonials'; // Import the Testimonials component
import learningAndDevelopmentImg from '/Training 1.jpg';
import placementImg from '/Placement 1.jpg';
import brandPositioningImg from '/Brand Positioning 1.jpg';
import JourneySection from './JourneySection';
import Revolution from './Revolution';
import MissionVisionSection from './MissionVisionSection';

const Home = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-purple-100 min-h-screen overflow-hidden">
      <HomeNavbar /> {/* Render HomeNavbar only in the Home component */}
      <div id="home" className="hero-section">
        <div className="hero-circles">
          <ul className="circles">
            {[...Array(10)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black fade-in-text">BRIDGING CAREERS AND DREAMS</h1>
              <p className="mt-4 text-lg text-gray-700">Making students Industry Ready with our Customized Industry Readiness Programme</p>
            </div>
            <div className="flex justify-center items-center mt-12 space-x-4">
              {/* Cards */}
              <div className="bg-blue-200 rounded-lg h-[260px] w-[260px] flex flex-col items-center justify-center relative hover:shadow-2xl transition-shadow duration-300">
                <img src={placementImg} alt="Learning And Development" className="w-full h-full object-cover rounded-lg" />
                <div className="card-text">
                  
                  <a href="/placement" className="text-purple-500 font-bold flex items-center space-x-2 hover:text-purple-700">
                    <span>Know More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-blue-200 rounded-lg h-[260px] w-[260px] flex flex-col items-center justify-center relative hover:shadow-2xl transition-shadow duration-300">
                  <img src={learningAndDevelopmentImg} alt="Placement" className="w-full h-full object-cover rounded-lg" />
                  <div className="card-text">
                   
                    <a href="/training" className="text-blue-700 font-bold flex items-center space-x-2 hover:text-purple-200">
                      <span>Know More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center bg-yellow-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-xl font-bold text-black mb-2">Have any questions?</h2>
                  <a
                    href="/contact"
                    className="cta-button bg-black text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-gradient-to-b from-purple-500 to-purple-600 transition-all duration-300"
                  >
                    <span>Let's Talk</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="bg-blue-200 rounded-lg h-[260px] w-[260px] flex flex-col items-center justify-center relative hover:shadow-2xl transition-shadow duration-300">
                <img src={brandPositioningImg} alt="Brand Positioning" className="w-full h-full object-cover rounded-lg" />
                <div className="card-text">
                  
                  <a href="/brandPositioning" className="text-purple-500 font-bold flex items-center space-x-2 hover:text-purple-700">
                    <span>Know More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <HomeAbout />
      </div>
      <div id="missionVision">
        <MissionVisionSection />
      </div>
      <div id="stats" className="stats-section">
        <h3 className="text-3xl font-bold text-black mb-4 underline">Our Impact</h3>
        <div className="stats-wrapper fade-in-stats">
          {[{ icon: 'user-graduate', color: '#6c63ff', value: '60,000+', label: 'Students Trained' },
            { icon: 'calendar-alt', color: '#4caf50', value: '65,000+', label: 'Training Hours' },
            { icon: 'building', color: '#ff6f61', value: '450+', label: 'Corporate Partners' },
            { icon: 'university', color: '#ffeb3b', value: '55+', label: 'Educational Partners' }]
            .map((stat, idx) => (
              <div key={idx} className="stat-card">
                <i className={`fas fa-${stat.icon}`} style={{ color: stat.color, fontSize: '3em' }}></i>
                <h3 style={{ fontWeight: 'bold' }}>{stat.value}</h3>
                <p style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>{stat.label}</p>
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
      <Testimonials /> {/* Add Testimonials component here */}
    </div>
  );
};

export default Home;
