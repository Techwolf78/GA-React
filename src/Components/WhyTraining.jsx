import React from 'react';

function WhyTraining() {
  // Define color variables
  const lightBlue = '#2e4d80'; // Light blue background
  const darkBlue = '#091327'; // Dark blue text
  const highlightYellow = '#ffc700'; // Highlight yellow
  const darkGray = '#333333'; // Dark gray text

  return (
    <div>
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col lg:flex-row"
            style={{ backgroundColor: lightBlue, padding: '1.5rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            {/* Left Content */}
            <div
              className="flex-1 text-dark-blue pr-0 lg:pr-8 mb-6 lg:mb-0 flex flex-col justify-center items-center lg:items-start"
              style={{ color: darkBlue }}
            >
              <div className="flex items-center mb-6">
                <img src="/whyGA.png" alt="Illustration" className="h-48 sm:h-56 lg:h-64 xl:h-72" />
              </div>
              <p
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-center lg:text-left"
                style={{ color: highlightYellow }}
              >
                How do Our Trainings Differ?
              </p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center justify-center">
              <div
                className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[380px]"
                style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                    <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                    Over two decades of instruction from highly skilled professionals
                  </li>
                  <li className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                    <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                    Syllabus crafted to meet current market demands
                  </li>
                  <li className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                    <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                    Advisory board featuring IIT and IIM luminaries
                  </li>
                  <li className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                    <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                    Integrated approach combining technical expertise, soft skills, and aptitude training
                  </li>
                  <li className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                    <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
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
