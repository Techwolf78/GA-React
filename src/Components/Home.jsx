import React from 'react';
import '../assets/CSS/home.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import HomeNavbar from './HomeNavbar'; 
import HomeAbout from './HomeAbout'; 
import Testimonials from './Testimonials'; // Import the Testimonials component
import learningAndDevelopmentImg from '../assets/Images/GettyImages-1387685447-shadow.webp';
import placementImg from '../assets/Images/GettyImages-1341057712.webp';
import brandPositioningImg from '../assets/Images/GettyImages-1404633864-Converted.webp';
import Services from './Services';

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
              <h1 className="text-4xl font-bold text-black fade-in-text">LEARN WHAT THE INDUSTRY DEMANDS
              </h1>
              <p className="mt-4 text-lg text-gray-700">Let's make your dreams come true. We're here to help you achieve your goals.</p>
            </div>
            <div className="flex justify-center items-center mt-12 space-x-4">
  {/* Cards */}
  <div className="card-wrapper bg-purple-200 rounded-lg p-6 flex flex-col items-center h-[260px] w-[260px] hover:bg-purple-300 transition-all duration-300 shadow-lg">
    <img src={learningAndDevelopmentImg} alt="Placement" className="w-20 h-20 mb-2" />
    <p className="text-lg font-semibold text-black text-center">Placement </p>
    <a href="/placement" className="mt-2 text-purple-600 font-bold flex items-center space-x-2 hover:text-purple-800">
      <span>Know More</span>
      <i className="fas fa-arrow-right"></i>
    </a>
  </div>
  <div className="flex flex-col items-center space-y-4">
    <div className="bg-blue-200 rounded-lg h-[260px] w-[260px] flex flex-col items-center justify-center relative hover:shadow-2xl transition-shadow duration-300">
      <img src={placementImg} alt="Learning And Development" className="w-full h-full object-cover rounded-lg" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-xl font-bold text-black mb-2">Learning And Development</h3>
        <a href="/learningAndDevelopment" className="text-purple-200 font-bold flex items-center space-x-2 hover:text-purple-800">
          <span>Know More</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div className="flex flex-col items-center bg-yellow-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-black mb-2">Get Your Dream Job Now</h2>
      <a
        href="#"
        className="cta-button bg-black text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-gradient-to-b from-purple-500 to-purple-600 transition-all duration-300"
      >
        <span>Let's Talk</span>
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
  <div className="card-wrapper bg-purple-200 rounded-lg p-6 flex flex-col items-center h-[260px] w-[260px] hover:bg-purple-300 transition-all duration-300 shadow-lg">
    <img src={brandPositioningImg} alt="Brand Positioning" className="w-20 h-20 mb-2" />
    <p className="text-lg font-semibold text-black">Brand Positioning</p>
    <a href="/brandPositioning" className="mt-2 text-purple-600 font-bold flex items-center space-x-2 hover:text-purple-800">
      <span>Know More</span>
      <i className="fas fa-arrow-right"></i>
    </a>
  </div>
</div>

          </div>
        </div>
      </div>
      <div id="about">
        <HomeAbout />
      </div>
      <div id="stats" className="stats-section ">
        <h2>Our Achievements</h2>
        <p>Here's a look at some of the milestones we've achieved in our journey.</p>
        <div className="stats-wrapper fade-in-stats">
          {[
            { icon: 'graduation-cap', color: '#6c63ff', value: '60,000+', label: 'Students Trained' },
            { icon: 'chalkboard-teacher', color: '#ff6f61', value: '200+', label: 'Certified Instructors' },
            { icon: 'clock', color: '#4caf50', value: '40,000+', label: 'Hours Trained' },
            { icon: 'star', color: '#ffeb3b', value: '5000+', label: 'Client Reviews' },
          ].map((stat, idx) => (
            <div key={idx} className="stat-card">
              <i className={`fas fa-${stat.icon}`} style={{ color: stat.color }}></i>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="Services" >
        <Services />
      </div>
      
      <Testimonials /> {/* Add Testimonials component here */}
      
    </div>
  );
};

export default Home;
