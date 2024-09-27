// AboutStats.jsx
import React from 'react';

const AboutStats = () => {
  return (
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
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: '#ffc700' }}>{stat.value}</h3>
          <p className="text-base sm:text-lg mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
