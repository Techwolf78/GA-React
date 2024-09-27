import React from 'react';
import { FaCalendarCheck, FaCogs, FaBriefcase } from 'react-icons/fa'; // Importing React Icons

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
          <div className="bg-[#003073] text-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-[#ffc700] mr-4">
                <FaCalendarCheck />
              </div>
              <h4 className="text-xl font-semibold text-[#ffc700]">Easy to Implement</h4>
            </div>
            <p className="text-[#ffffff] mb-2">
              <strong>Streamlined Training Delivery:</strong> Our offline and blended learning formats seamlessly integrate into your existing curriculum, minimizing disruption.
            </p>
            <p className="text-[#ffffff]">
              <strong>Flexible Scheduling:</strong> Modular courses and on-demand access allow for customization to fit your organization’s schedule.
            </p>
          </div>

          <div className="bg-[#003073] text-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-[#ffc700] mr-4">
                <FaCogs />
              </div>
              <h4 className="text-xl font-semibold text-[#ffc700]">Customized Content</h4>
            </div>
            <p className="text-[#ffffff] mb-2">
              <strong>Needs Assessment:</strong> We work with you to identify specific skill gaps and tailor training to address your organization’s unique requirements.
            </p>
            <p className="text-[#ffffff] mb-2">
              <strong>Industry Specific Modules:</strong> Choose from a diverse range of modules aligned with current industry trends and job demands.
            </p>
            <p className="text-[#ffffff]">
              <strong>Student Centric Learning:</strong> Interactive activities and case studies cater to diverse learning styles and real-world applications.
            </p>
          </div>

          <div className="bg-[#003073] text-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-[#ffc700] mr-4">
                <FaBriefcase />
              </div>
              <h4 className="text-xl font-semibold text-[#ffc700]">Industry Relevant</h4>
            </div>
            <p className="text-[#ffffff] mb-2">
              <strong>Advisory Board:</strong> Our board comprises industry experts who ensure our training programs stay current and prepare participants for in-demand skills.
            </p>
            <p className="text-[#ffffff] mb-2">
              <strong>Real World Case Studies:</strong> Participants tackle authentic industry challenges through project-based learning, gaining practical experience.
            </p>
            <p className="text-[#ffffff]">
              <strong>Employer Connections:</strong> We facilitate partnerships with leading companies in various fields and domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateAppoarch;
