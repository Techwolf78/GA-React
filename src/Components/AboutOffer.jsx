import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaIndustry, 
  FaBuilding, 
  FaBriefcase, 
  FaCertificate, 
  FaGraduationCap, 
  FaHandsHelping, 
  FaCog, 
  FaPeopleCarry, 
  FaRocket, 
  FaUserTie 
} from 'react-icons/fa';

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
      icon: <FaGraduationCap className="text-blue-500 text-3xl" />, // Training Need Analysis
      description: 'Training Need Analysis and Competence Mapping',
    },
    {
      icon: <FaRocket className="text-green-500 text-3xl" />, // Customized Industry Programs
      description: 'Customized Industry Ready Programmes',
    },
    {
      icon: <FaHandsHelping className="text-yellow-500 text-3xl" />, // Industry Guest Lectures
      description: 'Industry Guest Lectures',
    },
    {
      icon: <FaBuilding className="text-red-500 text-3xl" />, // Empanelment with Industry
      description: 'Empanelment with Industry: 450+ recruiters',
    },
    {
      icon: <FaBriefcase className="text-purple-500 text-3xl" />, // Job Opportunities
      description: 'Job opportunities for Final Year Students',
    },
    {
      icon: <FaCertificate className="text-indigo-500 text-3xl" />, // Last Mile Programs
      description: 'Last mile programmes',
    },
  ];

  const corporateOffers = [
    {
      icon: <FaUserTie className="text-blue-500 text-3xl" />, // Provide Trained Pool of Students
      description: 'Provide Trained Pool of students',
    },
    {
      icon: <FaCog className="text-green-500 text-3xl" />, // Curated HR Summits
      description: 'Curated HR Summits',
    },
    {
      icon: <FaCertificate className="text-yellow-500 text-3xl" />, // HR Excellence Awards
      description: 'HR Excellence Awards',
    },
    {
      icon: <FaPeopleCarry className="text-red-500 text-3xl" />, // Talent from PAN India
      description: 'Talent from PAN India',
    },
    {
      icon: <FaIndustry className="text-purple-500 text-3xl" />, // Corporate Trainings
      description: 'Corporate Trainings',
    },
  ];

  return (
    <div className="bg-[#01224F] mx-auto px-4 md:px-8 lg:px-16 py-2" data-aos="fade-up">
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] text-center mb-6">
        What We Offer
      </p>
      <div className="flex flex-row justify-between gap-8">
        {/* Left Side - Colleges Section */}
        <div className="w-full md:w-1/2">
          <p className="text-xl sm:text-2xl font-semibold text-white mb-4">For Colleges</p>
          <div className="flex flex-col items-start">
            {collegeOffers.map((offer, index) => (
              <div key={index} className="flex items-center mb-5">
                <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 mr-4 shadow-lg hover:shadow-xl transition-shadow">
                  {offer.icon}
                </div>
                <p className="text-sm md:text-lg text-white font-medium flex-1">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Corporates Section */}
        <div className="w-full md:w-1/2">
          <p className="text-xl sm:text-2xl font-semibold text-white mb-4">For Corporates</p>
          <div className="flex flex-col items-start">
            {corporateOffers.map((offer, index) => (
              <div key={index} className="flex items-center mb-5">
                <div className="bg-white rounded-full flex items-center justify-center w-12 h-12 mr-4 shadow-lg hover:shadow-xl transition-shadow">
                  {offer.icon}
                </div>
                <p className="text-sm md:text-lg text-white font-medium flex-1">
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
