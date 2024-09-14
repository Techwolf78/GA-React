import React from 'react';

function FacultyModule() {
  return (
    <div>
      <main className="flex-1 bg-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-purple-400 p-6 sm:p-8 lg:p-10 rounded-[20px] shadow-md">
            {/* Left Content */}
            <div className="flex-1 text-white pr-0 lg:pr-8 mb-6 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
              <div className="flex items-center mb-6">
                <img src="/whyGA.png" alt="Illustration" className="h-48 sm:h-56 lg:h-64 xl:h-72" />
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-center lg:text-left underline">
                What do our FDP modules include?
              </p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[380px]">
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Pedagogy Enhancement
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Curriculum Development
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Technology Integration in Teaching
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Assessment and Evaluation Strategies
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Research and Publication Guidance
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Leadership and Management Skills for Educators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 text-white py-12 mt-6 px-6 sm:px-12 shadow-lg">
          <div className="container mx-auto text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Join Gryphon Academy's FDP Today
            </p>
            <p className="text-lg sm:text-xl mb-8">
              Embark on a transformative journey towards academic excellence. Empower your faculty, inspire your students, and lead your institution to greater heights with us.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FacultyModule;
