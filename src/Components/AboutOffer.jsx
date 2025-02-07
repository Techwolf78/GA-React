import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Local Images for Corporates
import corporateIcon1 from '/About/reading-group.png';
import corporateIcon2 from '/About/hr-a.png';
import corporateIcon3 from '/About/trophy-a.png';
import corporateIcon4 from '/About/leadership.png';
import corporateIcon5 from '/About/owner.png';

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
      icon: <img src={corporateIcon1} alt="Trained Students Icon" className="w-16 h-16" />,
      description: 'Provide Trained Pool of students',
    },
    {
      icon: <img src={corporateIcon2} alt="HR Summits Icon" className="w-16 h-16" />,
      description: 'Curated HR Summits',
    },
    {
      icon: <img src={corporateIcon3} alt="HR Awards Icon" className="w-16 h-16" />,
      description: 'HR Excellence Awards',
    },
    {
      icon: <img src={corporateIcon4} alt="PAN India Talent Icon" className="w-16 h-16" />,
      description: 'Talent from PAN India',
    },
    {
      icon: <img src={corporateIcon5} alt="Corporate Trainings Icon" className="w-16 h-16" />,
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
        <div className="flex-1 flex flex-col items-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 text-center">For Colleges :</p>
          <div className="space-y-4">
            {collegeOffers.map((offer, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:space-x-4 sm:items-center">
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  {offer.icon}
                </div>
                <p className="text-sm md:text-xl  text-gray-200 text-center sm:text-left">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporates Section - Right Side */}
        <div className="flex-1 flex flex-col items-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 text-center">For Corporates :</p>
          <div className="space-y-4">
            {corporateOffers.map((offer, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:space-x-4 sm:items-center">
                <div className="flex-shrink-0 mb-2 sm:mb-0">
                  {offer.icon}
                </div>
                <p className="text-sm md:text-xl  text-white text-center sm:text-left">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOffer;
