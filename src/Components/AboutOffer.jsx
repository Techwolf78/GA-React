import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Online Icons for Corporates
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
      icon: <img src="About/training-program.png" alt="Training Icon" className="w-16 h-16" />,
      description: 'Training Need Analysis and Competence Mapping',
    },
    {
      icon: <img src="About/adaptability.png" alt="Customized Program Icon" className="w-16 h-16" />,
      description: 'Customized Industry Ready Programmes',
    },
    {
      icon: <img src="About/lecture.png" alt="Guest Icon" className="w-16 h-16" />,
      description: 'Industry Guest Lectures',
    },
    {
      icon: <img src="About/recruitment.png" alt="Recruiter Icon" className="w-16 h-16" />,
      description: 'Empanelment with Industry: 450+ recruiters',
    },
    {
      icon: <img src="About/job-opportunities.png" alt="Job Icon" className="w-16 h-16" />,
      description: 'Job opportunities for Final Year Students',
    },
    {
      icon: <img src="About/project.png" alt="Last Mile Icon" className="w-16 h-16" />,
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
    <div className="bg-[#01224F] max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-4" data-aos="fade-up">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFC80E] text-center mb-8">
        What We Offer
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Colleges Section - Left Side */}
        <div className="flex-1">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">For Colleges</p>
          <div className="space-y-4">
            {collegeOffers.map((offer, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {offer.icon}
                </div>
                <p className="text-sm md:text-base font-extralight text-gray-200">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporates Section - Right Side */}
        <div className="flex-1">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">For Corporates</p>
          <div className="space-y-4">
            {corporateOffers.map((offer, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {offer.icon}
                </div>
                <p className="text-sm md:text-base font-extralight text-white">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOffer;