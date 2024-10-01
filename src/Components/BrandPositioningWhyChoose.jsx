import React from 'react';

const BrandPositioningWhyChoose = () => {
  return (
    <div className="bg-[#003073] h-auto py-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Why Choose Gryphon Academy for Your Digital Marketing Needs?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-300 mx-auto">
          Proven expertise in delivering exceptional results for clients across diverse industries.
        </p>

        {/* Icons and Content Section */}
        <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          
          {/* Block 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              <i className="fas fa-book-open"></i> {/* Specialized Focus */}
            </div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Specialized Focus
            </h3>
            <p className="mt-2 text-base text-gray-300">
              We understand the unique challenges and opportunities in the education sector.
            </p>
          </div>
          
          {/* Block 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              <i className="fas fa-sitemap"></i> {/* Comprehensive Approach */}
            </div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Comprehensive Approach
            </h3>
            <p className="mt-2 text-base text-gray-300">
              From social media management to event promotion, we cover all digital touchpoints.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              <i className="fas fa-chart-bar"></i> {/* Data-Driven Strategies */}
            </div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Data-Driven Strategies
            </h3>
            <p className="mt-2 text-base text-gray-300">
              Our campaigns are backed by analytics, ensuring measurable results.
            </p>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              <i className="fas fa-lightbulb"></i> {/* Creative Excellence */}
            </div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Creative Excellence
            </h3>
            <p className="mt-2 text-base text-gray-300">
              We blend creativity with technology to make your institution stand out.
            </p>
          </div>

          {/* Block 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              <i className="fas fa-users"></i> {/* Targeted Audience Segmentation */}
            </div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Targeted Audience Segmentation
            </h3>
            <p className="mt-2 text-base text-gray-300">
              Leveraging data analytics for personalized messaging and higher engagement across campaigns.
            </p>
          </div>

          {/* Block 6 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              <i className="fas fa-plug"></i> {/* Seamless Integration */}
            </div>
            <h3 className="text-lg leading-6 font-medium text-white">
              Seamless Integration
            </h3>
            <p className="mt-2 text-base text-gray-300">
              Our digital efforts complement your offline marketing for maximum impact.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BrandPositioningWhyChoose;
