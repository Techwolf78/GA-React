import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from '/About/s1.png';
import icon2 from '/About/s2.png';
import icon3 from '/About/s3.png';
import icon4 from '/About/s4.png';
import icon5 from '/About/s5.png';
import icon6 from '/About/s6.png';

function AboutOffer() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const offers = [
    {
      icon: icon1,
      description: 'Industry - Readiness Programmes for Students in Domains: Engineering, MBA, MCA & Pharmacy',
    },
    {
      icon: icon2,
      description: 'Training Need Analysis',
    },
    {
      icon: icon3,
      description: 'Job Opportunities for Final Year Students',
    },
    {
      icon: icon4,
      description: 'Association with more than 300+ Corporate Partners & 55+ Colleges',
    },
    {
      icon: icon5,
      description: 'Industry Guest Lectures',
    },
    {
      icon: icon6,
      description: 'Brand Positioning for Colleges and Corporates',
    },
  ];

  return (
    <div className="bg-[#091327] mx-auto px-4 md:px-8 lg:px-16 py-8">
      <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] text-center mb-4">
        WHAT WE OFFER
      </p>
      <div className="flex flex-col items-start">
        {offers.map((offer, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex items-start mb-6"
          >
            <div className="bg-white rounded-full flex items-center justify-center w-16 h-16 mr-4 shadow-lg hover:shadow-xl transition-shadow">
              <img src={offer.icon} alt={`icon-${index}`} className="w-12 h-12" />
            </div>
            <p className="text-lg md:text-2xl text-white font-medium flex-1">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutOffer;
