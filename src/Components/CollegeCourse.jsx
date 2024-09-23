import React from 'react';

// Define the courses object directly in this file
const courses = {
  softSkills: [
    { src: 'Training Page/SS 1.png', alt: 'Corporate etiquettes', title: 'Corporate etiquettes and Mannerism' },
    { src: 'Training Page/Effective Communication Skills.jpg', alt: 'Effective Communication Skills', title: 'Effective Communication Skills' },
    { src: 'Training Page/Interview Skills and GD-PI Techniques.jpg', alt: 'Interview Skills', title: 'Interview Skills and GD-PI Techniques' },
    { src: 'Training Page/Presentation Skills.jpg', alt: 'Presentation Skills', title: 'Presentation Skills' },
    { src: 'Training Page/Time Management.jpg', alt: 'Time Management', title: 'Time Management' },
  ],
  aptitude: [
    { src: 'Training Page/Quantitative Ability [Basic Mathematics].jpg', alt: 'Quantitative Ability', title: 'Quantitative Ability [Basic Mathematics]' },
    { src: 'Training Page/Quantitative Aptitude.jpg', alt: 'Quantitative Aptitude', title: 'Quantitative Aptitude' },
    { src: 'Training Page/Data Interpretation.jpg', alt: 'Data Interpretation', title: 'Data Interpretation' },
    { src: 'Training Page/Logical Reasoning.jpg', alt: 'Logical Reasoning', title: 'Logical Reasoning' },
    { src: 'Training Page/Critical Thinking.jpg', alt: 'Critical Thinking', title: 'Critical Thinking' },
  ],
};

const CourseCard = ({ src, alt, title }) => (
  <div className="w-1/2 p-1 sm:w-1/2 md:w-1/3 lg:w-1/5">
    <div className="bg-[#003073] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex-grow">
        <div className="h-48 w-full">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-2 flex-shrink-0 flex items-start">
        <p className="text-lg font-medium text-white leading-tight">{title}</p> {/* Changed to font-medium */}
      </div>
    </div>
  </div>
);

const CollegeCourse = () => (
  <section className="bg-[#091327] py-6 roboto-regular">
    <div className="container mx-auto px-2">
      <div className="mb-6 text-center">
        <p className='text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffc700] mb-4'>
          OUR INDUSTRY READINESS PROGRAMME INCLUDES
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffc700] mb-2"> {/* Changed to font-extrabold */}
          Soft Skills
        </p>
        <div className="flex flex-wrap justify-center">
          {courses.softSkills.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className="mb-6 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffc700] mb-2"> {/* Changed to font-extrabold */}
          Aptitude
        </p>
        <div className="flex flex-wrap justify-center">
          {courses.aptitude.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CollegeCourse;
