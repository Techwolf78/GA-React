// ImpactSection.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Slower animation duration
      easing: 'ease-in-out', // Smooth easing
      once: true, // Animation only happens once
    });
  }, []);

  const statCardStyle = {
    backgroundColor: '#1e3a8a',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '1.5rem',
    textAlign: 'center',
    width: '14rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const hoverStyle = {
    transform: 'scale(1.1)', // Slightly larger scale for a unique effect
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div id="stats" className="py-8 bg-[#e1eaf7]">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-4 md:mb-8" style={{ color: '#1e3a8a' }}>
        Our Impact
      </h3>
      <div className="stats-wrapper flex flex-wrap justify-center gap-8">
        {[
          { icon: 'user-graduate', color: '#ffc700', value: '60,000+', label: 'Students Trained' },
          { icon: 'calendar-alt', color: '#ffc700', value: '65,000+', label: 'Training Hours' },
          { icon: 'building', color: '#ffc700', value: '450+', label: 'Corporate Partners' },
          { icon: 'university', color: '#ffc700', value: '55+', label: 'Educational Partners' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="stat-card"
            data-aos="zoom-in-up" // Unique AOS animation
            data-aos-duration="1500" // Slower individual animation
            data-aos-delay={idx * 200} // Staggered delay for each card
            style={statCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = hoverStyle.transform;
              e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <i className={`fas fa-${stat.icon} text-5xl mb-4`} style={{ color: stat.color }}></i>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h3>
            <p className="text-lg text-white mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
