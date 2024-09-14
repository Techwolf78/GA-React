import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import '../assets/CSS/PartneredUniversities.css';

const PartneredUniversities = () => {
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
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 mx-auto max-w-full underline text-black">
        Partnered with 60+ Colleges/Universities
      </h1>
      {/* Sub Heading with Lines */}
      <div className="text-center mb-12 relative">
        <p className="text-xl md:text-3xl font-semibold text-purple-700 mb-4">
          PAN INDIA
        </p>
        {/* Connecting Line */}
        <div className="relative w-full">
          <div className="absolute inset-x-0 flex justify-center top-1/2 transform -translate-y-1/2">
            <div className="relative w-full">
              <div className="absolute inset-x-1/2 transform -translate-x-1/2">
                <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-blue-400 to-purple-600 animate-line"></div>
              </div>
              <div className="absolute inset-x-0 flex justify-between w-full px-2 md:px-4 top-16">
                {domains.map((domain) => (
                  <div
                    key={domain.name}
                    className="w-1/5 h-1 bg-gradient-to-r from-red-400 to-yellow-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-5 mb-6">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="bg-white border border-gray-300 rounded-lg p-4 shadow-md text-center relative card-info"
          >
            <div className="text-base md:text-lg font-semibold mb-2">{domain.name}</div>
            <div className="text-lg md:text-xl font-bold">
              <span className="count-up-text">
                <CountUp
                  start={0}
                  end={domain.count}
                  duration={2.5}
                  separator=","
                  className="inline"
                />
                {' '}
                +
              </span>
            </div>
            <div className="text-lg md:text-xl ">Students</div>
          </div>
        ))}
      </div>
      {/* Gender Distribution Section */}
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          Gender Distribution of Students
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMale} size="2x" className="text-blue-600 mr-2 md:mr-3" />
            <span className="text-lg md:text-xl font-bold">55% MALE</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFemale} size="2x" className="text-pink-600 mr-2 md:mr-3" />
            <span className="text-lg md:text-xl font-bold">45% FEMALE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredUniversities;
