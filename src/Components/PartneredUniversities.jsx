import React from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

const PartneredUniversities = () => {
  const domains = [
    { name: 'MBA/PGDM', count: 8000 },
    { name: 'BE/BTECH', count: 15000 },
    { name: 'MCA', count: 800 },
    { name: 'GRADUATION', count: 400 },
    { name: 'DIPLOMA', count: 1200 },
  ];

  return (
    <div className="relative p-6 bg-[#091327] text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 mx-auto max-w-full underline text-[#FFC80E]">
        Partnered with 60+ Colleges/Universities
      </h1>
      <div className="text-center mb-6">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-[#FFC80E] mb-4">
          PAN INDIA
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-6">
        {domains.map((domain) => (
          <div
            key={domain.name}
            className="bg-[#003073] border border-gray-300 rounded-lg p-4 shadow-md text-center relative"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">{domain.name}</div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              <span className="count-up-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
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
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl">Students</div>
          </div>
        ))}
      </div>
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-[#FFC80E] mb-4">
          Gender Distribution of Students
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMale} size="4x" className="text-[#FFC80E] mr-2 sm:mr-3" />
            <span className="text-base sm:text-lg md:text-2xl font-bold">55% MALE</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFemale} size="4x" className="text-[#FFC80E] mr-2 sm:mr-3" />
            <span className="text-base sm:text-lg md:text-2xl font-bold">45% FEMALE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredUniversities;
