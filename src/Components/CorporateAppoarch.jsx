import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { FaCalendarCheck, FaCogs, FaBriefcase, FaThumbsUp } from 'react-icons/fa'; // Importing React Icons

const CorporateAppoarch = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Varela"],
      },
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 p-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg font-semibold text-gray-700 mb-2 underline">OUR APPROACH</p>
            <h1
              className="text-4xl font-bold text-gray-800"
              style={{ fontFamily: "Varela, sans-serif" }}
            >
              Comprehensive Corporate Training Solutions
            </h1>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700">
              Gryphon's corporate training programs are designed to seamlessly integrate into your organization’s operations, offering flexible scheduling and customized content to address your specific needs. Our approach ensures that training is not only relevant but also impactful, fostering a culture of continuous learning and development.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-purple-600 mr-4">
                <FaCalendarCheck />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Easy to Implement</h4>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Streamlined Training Delivery:</strong> Our offline and blended learning formats seamlessly integrate into your existing curriculum, minimizing disruption.
            </p>
            <p className="text-gray-700">
              <strong>Flexible Scheduling:</strong> Modular courses and on-demand access allow for customization to fit your organization’s schedule.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-purple-600 mr-4">
                <FaCogs />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Customized Content</h4>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Needs Assessment:</strong> We work with you to identify specific skill gaps and tailor training to address your organization’s unique requirements.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Industry Specific Modules:</strong> Choose from a diverse range of modules aligned with current industry trends and job demands.
            </p>
            <p className="text-gray-700">
              <strong>Student Centric Learning:</strong> Interactive activities and case studies cater to diverse learning styles and real-world applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <div className="text-4xl text-purple-600 mr-4">
                <FaBriefcase />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">Industry Relevant</h4>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>Advisory Board:</strong> Our board comprises industry experts who ensure our training programs stay current and prepare participants for in-demand skills.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Real World Case Studies:</strong> Participants tackle authentic industry challenges through project-based learning, gaining practical experience.
            </p>
            <p className="text-gray-700">
              <strong>Employer Connections:</strong> We facilitate partnerships with leading companies in various fields and domains.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CorporateAppoarch;
