import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaArrowRight, FaChalkboardTeacher, FaUsers, FaRegBuilding } from 'react-icons/fa'; 

function AboutOffer() {
  useEffect(() => {
    AOS.init({
      duration: 600,  
      once: true,     
    });

    AOS.refresh();
  }, []);

  const collegeOffers = [
    {
      icon: <FaChalkboardTeacher className="text-4xl text-[#FFC80E]" />,
      description: 'Training Need Analysis and Competence Mapping',
    },
    {
      icon: <FaArrowRight className="text-4xl text-[#FFC80E]" />,
      description: 'Customized Industry Ready Programmes',
    },
    {
      icon: <FaUsers className="text-4xl text-[#FFC80E]" />,
      description: 'Industry Guest Lectures',
    },
    {
      icon: <FaRegBuilding className="text-4xl text-[#FFC80E]" />,
      description: 'Empanelment with Industry: 450+ recruiters',
    },
    {
      icon: <FaArrowRight className="text-4xl text-[#FFC80E]" />,
      description: 'Job opportunities for Final Year Students',
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-[#FFC80E]" />,
      description: 'Last mile programmes',
    },
  ];

  const corporateOffers = [
    {
      icon: <FaUsers className="text-4xl text-[#FFC80E]" />,
      description: 'Provide Trained Pool of students',
    },
    {
      icon: <FaArrowRight className="text-4xl text-[#FFC80E]" />,
      description: 'Curated HR Summits',
    },
    {
      icon: <FaRegBuilding className="text-4xl text-[#FFC80E]" />,
      description: 'HR Excellence Awards',
    },
    {
      icon: <FaUsers className="text-4xl text-[#FFC80E]" />,
      description: 'Talent from PAN India',
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-[#FFC80E]" />,
      description: 'Corporate Trainings',
    },
  ];

  return (
    <div className="bg-[#01224F] mx-auto px-4 md:px-8 lg:px-16 py-4 " data-aos="fade-up">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFC80E] text-center mb-4">
        What We Offer
      </p>

      {/* Colleges Section */}
      <div className="mb-8">
        <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">For Colleges</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collegeOffers.map((offer, index) => (
            <div key={index} className="bg-[#1e3a8a] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="flex justify-start">
                  {offer.icon}
                </div>
              </div>
              <div>
                <p className="text-left text-sm md:text-base font-extralight text-gray-200">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corporates Section */}
      <div>
        <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">For Corporates</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corporateOffers.map((offer, index) => (
            <div key={index} className="bg-[#1e3a8a] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <div className="flex justify-start">
                  {offer.icon}
                </div>
              </div>
              <div>
                <p className="text-left text-sm md:text-base font-extralight text-gray-200">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutOffer;
