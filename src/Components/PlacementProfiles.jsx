

import { useState, useEffect } from 'react';

const engineeringProfiles = [
  "Associate Android Developer",
  "Associate Software Developer",
  "Associate Technical Consultant",
  "BIM Engineer",
  "Cyber Security Engineer",
  "Electrical Design Engineer",
  "Electronics Hardware Engineer",
  "Embedded Firmware Developer",
  "Graduate Engineer Trainee",
  "GET - Product Design and Development",
  "GET - Engine Dataset Management",
  "Full Stack Developer",
  "Jr. Robotics Engineer",
  "MES Support Engineer",
  "PHP Developer",
  "Project Engineer",
  "Purchase Associate",
  "Quality Management Executive",
  "Software Engineer",

  "Trainee - Quality Management",
];

const mbaProfiles = [
  "Analyst",
  "Area Operations Manager",
  "Associate - HR operations",
  "Associate Business Analyst",
  "Corporate Relations",
  "Operations Associate",
  "Presales Executive",
  "Brand Partnership & Alliances",
  "Compliance Associate",
  "Employer Branding & Recruitment Marketing Executive",
  "Finance Executive",
  "HR (Campus Hiring Team)",
  "HR Operations Associate",
  "Learning and Development Coordinator",
  "Management Trainee - Research Associate",
  "Management Trainee - Project Management",
  "Management Trainee - Product Management",
  "MT - Business Process Re-Engineering",
  "Project Accounting Admin",
  "Trainee - Logistics and Supply Chain Management",

];

const PlacementProfiles = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full bg-[#01224F] py-2 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-center text-[#FFC80E] mb-2 tracking-tight">
          Profiles We Train For
        </h1>
        <p className="text-base md:text-lg text-center text-white mb-2 md:mb-4 max-w-3xl mx-auto">
          Empowering careers with targeted training for in-demand roles across engineering and business domains.
        </p>

        {/* Engineering Section */}
        <section className="mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#FFC80E] mb-6 flex items-center justify-center gap-3">
            <svg className="w-8 h-8 text-[#FFC80E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Engineering
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(isMobile ? engineeringProfiles.slice(0, 6) : engineeringProfiles).map((profile, index) => (
              <div
                key={index}
                className="group bg-white p-2 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-[#FFC80E] focus-within:ring-2 focus-within:ring-[#FFC80E] focus-within:ring-offset-2"
                role="listitem"
                tabIndex={0}
                aria-label={`Engineering profile: ${profile}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#003073] rounded-lg flex items-center justify-center group-hover:bg-[#01224F] transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#FFC80E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-[#003073] transition-colors duration-200 leading-tight">
                      {profile}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isMobile && (
            <div className="text-right mt-4">
              <span className="text-[#FFC80E] text-sm font-medium">more...</span>
            </div>
          )}
        </section>

        {/* MBA Section */}
        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#FFC80E] mb-6 flex items-center justify-center gap-3">
            <svg className="w-8 h-8 text-[#FFC80E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            MBA
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(isMobile ? mbaProfiles.slice(0, 6) : mbaProfiles).map((profile, index) => (
              <div
                key={index}
                className="group bg-white p-2 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 hover:border-[#FFC80E] focus-within:ring-2 focus-within:ring-[#FFC80E] focus-within:ring-offset-2"
                role="listitem"
                tabIndex={0}
                aria-label={`MBA profile: ${profile}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#003073] rounded-lg flex items-center justify-center group-hover:bg-[#01224F] transition-colors duration-200">
                    <svg className="w-4 h-4 text-[#FFC80E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-[#003073] transition-colors duration-200 leading-tight">
                      {profile}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isMobile && (
            <div className="text-right mt-4">
              <span className="text-[#FFC80E] text-sm font-medium">more...</span>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PlacementProfiles;
