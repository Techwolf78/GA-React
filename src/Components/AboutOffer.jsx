import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutOffer() {
  useEffect(() => {
    AOS.init({
      duration: 600,  // Animation duration
      once: true,     // Trigger animation only once
    });

    AOS.refresh();
  }, []);

  const collegeOffers = [
    {
      icon: '→', // Right arrow symbol
      description: 'Training Need Analysis and Competence Mapping',
    },
    {
      icon: '→',
      description: 'Customized Industry Ready Programmes',
    },
    {
      icon: '→',
      description: 'Industry Guest Lectures',
    },
    {
      icon: '→',
      description: 'Empanelment with Industry: 450+ recruiters',
    },
    {
      icon: '→',
      description: 'Job opportunities for Final Year Students',
    },
    {
      icon: '→',
      description: 'Last mile programmes',
    },
  ];

  const corporateOffers = [
    {
      icon: '→',
      description: 'Provide Trained Pool of students',
    },
    {
      icon: '→',
      description: 'Curated HR Summits',
    },
    {
      icon: '→',
      description: 'HR Excellence Awards',
    },
    {
      icon: '→',
      description: 'Talent from PAN India',
    },
    {
      icon: '→',
      description: 'Corporate Trainings',
    },
  ];

  return (
<div className="bg-white mx-auto px-4 md:px-8 lg:px-16 py-2 max-w-5xl rounded-lg shadow-xl backdrop-blur-lg bg-opacity-30" data-aos="fade-up">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFC80E] text-center mb-6">
        What We Offer
      </p>
      <div className="flex flex-row justify-between gap-8">
        {/* Left Side - Colleges Section */}
        <div className="w-full md:w-1/2">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">For Colleges</p>
          <div className="flex flex-col items-start">
            {collegeOffers.map((offer, index) => (
              <div key={index} className="flex items-center mb-5">
                <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 mr-4 shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-[#FFC80E] text-3xl">{offer.icon}</span>
                </div>
                <p className="text-base md:text-xl text-gray-100 font-medium flex-1">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Corporates Section */}
        <div className="w-full md:w-1/2">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">For Corporates</p>
          <div className="flex flex-col items-start">
            {corporateOffers.map((offer, index) => (
              <div key={index} className="flex items-center mb-5">
                <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 mr-4 shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-[#FFC80E] text-3xl">{offer.icon}</span>
                </div>
                <p className="text-base md:text-xl text-gray-100 font-medium flex-1">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOffer;
