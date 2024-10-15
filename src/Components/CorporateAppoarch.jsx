import React from 'react';

const CorporateAppoarch = () => {
  return (
    <div className="bg-[#091327] py-4 roboto-regular">
      <div className="container mx-auto px-8 sm:px-8 md:px-16 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg font-semibold text-[#ffffff] mb-2">OUR APPROACH</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#ffc700]">
              Comprehensive Corporate Training Solutions
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#ffffff]">
              Gryphon's corporate training programs are designed to seamlessly integrate into your organization’s operations, offering flexible scheduling and customized content to address your specific needs. Our approach ensures that training is not only relevant but also impactful, fostering a culture of continuous learning and development.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#ffffff] text-[#000000] p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300  hover:shadow-xl">
            <div className="flex items-center mb-4">
             
            </div>
            <div className="flex items-start mb-2">
              <img src="CorporatePage/1.png" alt="Needs Assessment Icon" className="w-10 h-10" />
              <p className="ml-2">
              <strong>Streamlined Training Delivery:</strong> Our offline and blended learning formats seamlessly integrate into your existing curriculum, minimizing disruption.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <img src="CorporatePage/2.png" alt="Industry Specific Modules Icon" className="w-10 h-10" />
              <p className="ml-2">
              <strong>Flexible Scheduling:</strong> Modular courses and on-demand access allow for customization to fit your organization’s schedule..
              </p>
            </div>
            <div className="flex items-start">
              <img src="CorporatePage/3.png" alt="Student Centric Learning Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Student Centric Learning:</strong> Interactive activities and case studies cater to diverse learning styles and real-world applications.
              </p>
            </div>
          </div>

          <div className="bg-[#ffffff] text-[#000000] p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300  hover:shadow-xl">
            <div className="flex items-center mb-4">
             
            </div>
            <div className="flex items-start mb-2">
              <img src="CorporatePage/1.png" alt="Needs Assessment Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Needs Assessment:</strong> We work with you to identify specific skill gaps and tailor training to address your organization’s unique requirements.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <img src="CorporatePage/2.png" alt="Industry Specific Modules Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Industry Specific Modules:</strong> Choose from a diverse range of modules aligned with current industry trends and job demands.
              </p>
            </div>
            <div className="flex items-start">
              <img src="CorporatePage/3.png" alt="Student Centric Learning Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Student Centric Learning:</strong> Interactive activities and case studies cater to diverse learning styles and real-world applications.
              </p>
            </div>
          </div>

          <div className="bg-[#ffffff] text-[#000000] p-6 rounded-lg shadow-lg flex flex-col transition-all duration-300  hover:shadow-xl">
            <div className="flex items-center mb-4">
              
            </div>
            <div className="flex items-start mb-2">
              <img src="CorporatePage/1.png" alt="Advisory Board Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Advisory Board:</strong> Our board comprises industry experts who ensure our training programs stay current and prepare participants for in-demand skills.
              </p>
            </div>
            <div className="flex items-start mb-2">
              <img src="CorporatePage/2.png" alt="Real World Case Studies Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Real World Case Studies:</strong> Participants tackle authentic industry challenges through project-based learning, gaining practical experience.
              </p>
            </div>
            <div className="flex items-start">
              <img src="CorporatePage/3.png" alt="Employer Connections Icon" className="w-10 h-10" />
              <p className="ml-2">
                <strong>Employer Connections:</strong> We facilitate partnerships with leading companies in various fields and domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateAppoarch;
