import React from 'react';

function WhyTraining() {
  // Define color variables
  const lightBlue = '#003073'; // Light blue background
  const darkBlue = '#091327'; // Dark blue text
  const highlightYellow = '#FFC80E'; // Highlight yellow
  const darkGray = '#333333'; // Dark gray text

  return (
    <div className='roboto-regular'>
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Layout for large screens */}
          <div
            className="hidden lg:flex flex-col lg:flex-row"
            style={{ backgroundColor: lightBlue, padding: '1.5rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            {/* Left Content */}
            <div
              className="flex-1 text-dark-blue pr-4 lg:pr-2 mb-6 lg:mb-0 flex flex-col justify-center items-center lg:items-start"
              style={{ color: darkBlue }}
            >
              <div className="flex items-center mb-6 justify-center"> {/* Center the image */}
                <img
                  src="/Training - Thinking Man.png"
                  alt="Illustration"
                  className="h-64 sm:h-72 lg:h-80 xl:h-96"
                  style={{ transform: 'scaleX(-1)' }} // Flip image horizontally
                />
              </div>
              <p
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 text-center lg:text-left"
                style={{ color: highlightYellow }}
              >
                HOW DO OUR TRAININGS DIFFER?
              </p>
            </div>
            {/* Right Content */}
            <div className="flex-1 flex items-center justify-center">
              <div
                className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[400px]"
                style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Over two decades of instruction from highly skilled professionals',
                    'Syllabus crafted to meet current market demands',
                    'Advisory board featuring IIT and IIM luminaries',
                    'Integrated approach combining technical expertise, soft skills, and aptitude training',
                    'LinkedIn testimonials from our students across India',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                      <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Layout for medium and small screens */}
          <div
            className="flex lg:hidden flex-col"
            style={{ backgroundColor: lightBlue, padding: '1.5rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <p
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 text-center"
              style={{ color: highlightYellow }}
            >
              HOW DO OUR TRAININGS DIFFER?
            </p>
            <div className="flex items-center mb-6 justify-center">
              <img
                src="/Training - Thinking Man.png"
                alt="Illustration"
                className="h-64 sm:h-72 lg:h-80 xl:h-96"
                style={{ transform: 'scaleX(-1)' }} // Flip image horizontally
              />
            </div>
            <div className="flex items-center justify-center">
              <div
                className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg w-full md:w-[400px]"
                style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Over two decades of instruction from highly skilled professionals',
                    'Syllabus crafted to meet current market demands',
                    'Advisory board featuring IIT and IIM luminaries',
                    'Integrated approach combining technical expertise, soft skills, and aptitude training',
                    'LinkedIn testimonials from our students across India',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center" style={{ color: darkGray, fontWeight: '500' }}>
                      <span style={{ color: highlightYellow, fontSize: '1.25rem', marginRight: '0.75rem' }}>●</span>
                      {item}
                    </li>
                  ))}
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
