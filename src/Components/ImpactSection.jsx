// ImpactSection.jsx
import React from 'react';

const ImpactSection = () => {
  return (
    <div id="stats" className="py-16 bg-[#ffffff]">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: '#ffc700' }}>
        OUR IMPACT
      </h3>
      <div className="stats-wrapper flex flex-wrap justify-center gap-8 fade-in-stats">
        {[
          { icon: 'user-graduate', color: '#ffc700', value: '60,000+', label: 'Students Trained' },
          { icon: 'calendar-alt', color: '#ffc700', value: '65,000+', label: 'Training Hours' },
          { icon: 'building', color: '#ffc700', value: '450+', label: 'Corporate Partners' },
          { icon: 'university', color: '#ffc700', value: '55+', label: 'Educational Partners' },
        ].map((stat, idx) => (
          <div key={idx} className="stat-card bg-[#003073] shadow-lg rounded-lg p-6 sm:p-8 text-center w-56 sm:w-64">
            <i className={`fas fa-${stat.icon} text-5xl mb-4`} style={{ color: stat.color }}></i>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h3>
            <p className="text-base text-white mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;
