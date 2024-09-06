import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../assets/CSS/PartneredUniversities.css';

const PartneredUniversities = () => {
  // Data for the bar chart
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Student Gender Distribution',
        data: [55, 45],
        backgroundColor: ['#4A90E2', '#E94E77'],
        borderColor: ['#4A90E2', '#E94E77'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const domains = [
    { name: 'MBA/PGDM', count: 8000 },
    { name: 'BE/BTECH', count: 15000 },
    { name: 'MCA', count: 800 },
    { name: 'GRADUATION', count: 400 },
    { name: 'DIPLOMA', count: 1200 },
  ];

  return (
    <div className="relative p-6 bg-gradient-to-b from-gray-50 to-[#dac9ff]">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-4 mx-auto max-w-full">
        Partnered with 60+ Colleges/Universities
      </h1>
      {/* Sub Heading with Lines */}
      <div className="text-center mb-12 relative">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">
          PAN INDIA
        </h2>
        {/* Connecting Line */}
        <div className="absolute inset-x-0 flex justify-center top-16">
          <div className="relative w-full">
            <div className="absolute inset-x-1/2 transform -translate-x-1/2 top-0">
              <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-600 animate-line"></div>
            </div>
            <div className="absolute inset-x-0 top-16 flex justify-between w-full px-4">
              {domains.map((domain) => (
                <div key={domain.name} className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-yellow-500"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5 mb-6">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="bg-white border border-gray-300 rounded-lg p-4 shadow-md text-center relative"
          >
            <p className="text-lg font-semibold">{domain.name}</p>
            <p className="text-sm text-gray-500 mt-2">+{domain.count} students</p>
          </div>
        ))}
      </div>
      {/* Bar Chart Visualization */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Gender Distribution of Students
        </h3>
        <div className="flex justify-center">
          <div className="w-64 h-auto">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredUniversities;
