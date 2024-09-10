import React from 'react';

function WhyTraining() {
  return (
    <div>
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-purple-400 p-6 sm:p-8 lg:p-10 rounded-[20px] shadow-md">
            {/* Left Content */}
            <div className="flex-1 text-white pr-0 lg:pr-8 mb-6 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
              <div className="flex items-center mb-6">
                <img src="/whyGA.png" alt="Illustration" className="h-48 sm:h-56 lg:h-64 xl:h-72" />
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-center lg:text-left">
                How do Our Trainings Differ?
              </p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[380px]">
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Over two decades of instruction from highly skilled professionals
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Syllabus crafted to meet current market demands
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Advisory board featuring IIT and IIM luminaries
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    Integrated approach combining technical expertise, soft skills, and aptitude training
                  </li>
                  <li className="flex items-center text-[#1F2937] font-medium">
                    <span className="text-[#b564e4] text-base mr-3">●</span>
                    LinkedIn testimonials from our students across India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WhyTraining;
