import React from 'react';

// Define the courses object directly in this file
const courses = {
  softSkills: [
    { src: 'Training Page/Corporate etiquettes and Mannerism.jpg', alt: 'Corporate etiquettes', title: 'Corporate etiquettes and Mannerism' },
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
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
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
      <div className="p-4 flex-shrink-0 flex items-start">
        <p className="text-lg font-semibold text-white leading-tight">{title}</p>
      </div>
    </div>
  </div>
);

const CollegeCourse = () => (
  <section className="bg-[#091327] py-12">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <p className='text-center text-4xl font-bold text-[#ffc700] mb-6'>OUR INDUSTRY READINESS PROGRAMME INCLUDES</p>
        <p className="text-3xl font-semibold text-[#ffc700] mb-3">Soft Skills</p>
        <div className="flex flex-wrap justify-center">
          {courses.softSkills.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className="mb-12 text-center">
        <p className="text-3xl font-semibold text-[#ffc700] mb-3">Aptitude</p>
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
