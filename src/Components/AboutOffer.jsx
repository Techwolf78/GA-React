import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircleIcon, StarIcon, UsersIcon, CogIcon, ShieldCheckIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

function AboutOffer() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const offers = [
    {
      icon: <CheckCircleIcon className="text-green-400 w-12 h-12" />,
      description: 'Industry - Readiness Programmes for Students in Domains: Engineering, MBA, MCA & Pharmacy',
    },
    {
      icon: <StarIcon className="text-yellow-400 w-12 h-12" />,
      description: 'Training Need Analysis',
    },
    {
      icon: <UsersIcon className="text-blue-400 w-12 h-12" />,
      description: 'Job Opportunities for Final Year Students',
    },
    {
      icon: <CogIcon className="text-gray-400 w-12 h-12" />,
      description: 'Association with more than 300+ Corporate Partners & 55+ Colleges',
    },
    {
      icon: <ShieldCheckIcon className="text-red-400 w-12 h-12" />,
      description: 'Industry Guest Lectures',
    },
    {
      icon: <PaperAirplaneIcon className="text-purple-400 w-12 h-12" />,
      description: 'Brand Positioning for Colleges and Corporates',
    },
  ];

  return (
    <div className="bg-[#091327] p-6 px-8 md:px-12 lg:px-36">
      <p className="text-4xl text-[#FFC80E] text-center font-bold mb-4">WHAT WE OFFER</p>
      <div className="flex flex-col items-start">
        {offers.map((offer, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex items-center mb-4"
          >
            <div className="bg-white rounded-full flex items-center justify-center w-16 h-16 mr-4 shadow-lg hover:shadow-xl transition-shadow">
              {offer.icon}
            </div>
            <p className="text-lg md:text-2xl text-white font-medium">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutOffer;
