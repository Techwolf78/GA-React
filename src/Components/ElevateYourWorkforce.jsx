import React from 'react';
import { MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ElevateYourWorkforce() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 roboto-regular">
      <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
        {/* Left column: Image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
          <img 
            src="CorporatePage/training-card.png" 
            alt="Illustration of corporate training" 
            className="rounded-lg w-full h-auto object-cover max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>

        {/* Right column: Content */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D1D59] mb-4">ELEVATE YOUR WORKFORCE</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Elevate your workforce to new heights with Gryphon Academy’s time-tested approach to corporate skill development.
          </p>

          {/* Feature List */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Customized Training Programs",
                description: "Our specifically curated customized Corporate trainings are designed to meet your unique needs and requirements. With affiliations to over 450+ corporate entities across diverse industries such as manufacturing, telecommunications, IT, power, textile and government, we address industry-specific challenges and provide corporate learning solutions."
              },
              {
                title: "Measurable Business Impact",
                description: "The result? Measurable business impact. Our data-driven approach ensures your training investment delivers a clear ROI."
              },
              {
                title: "Targeted Training Solutions",
                description: "At Gryphon Academy, we use industry-specific assessments to uncover your workforce’s critical skill gaps. We then partner with you to design targeted training programs that directly address your pain points and strategic goals."
              },
              {
                title: "Boosting Productivity & Reducing Costs",
                description: "An effective way for companies to build a skilled and productive workforce while also reducing turnover and training costs."
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start mb-4">
                <div className="flex items-center justify-center w-5 h-5 border border-[#1D1D59] rounded-md mr-4 mt-1">
                  <MdCheck className="text-[#1D1D59] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D59]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8">
            <Link to="/contact" onClick={handleScrollToTop}>
              <button className="bg-[#003073] text-white py-2 px-6 rounded-md font-semibold hover:bg-[#002060] transition-colors focus:outline-none focus:ring-2 focus:ring-[#003073] focus:ring-opacity-50">
                See How It Works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElevateYourWorkforce;
