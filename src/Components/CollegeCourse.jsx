import React from 'react';

// Define the courses object directly in this file
const courses = {
  softSkills: [
    { src: 'Training Page/SS 1.png', alt: 'Corporate etiquettes', title: 'Corporate etiquettes and Mannerism' },
    { src: 'Training Page/SS 2.png', alt: 'Effective Communication Skills', title: 'Effective Communication Skills' },
    { src: 'Training Page/SS 3.png', alt: 'Interview Skills', title: 'Group Discussion and Personal Interview' },
    { src: 'Training Page/SS 4.png', alt: 'Presentation Skills', title: 'Presentation Skills' },
    { src: 'Training Page/SS 5.png', alt: 'Time Management', title: 'Time Management' },
  ],
  aptitude: [
    { src: 'Training Page/Aptitude 1.png', alt: 'Quantitative Ability', title: 'Quantitative Ability' },
    { src: 'Training Page/Aptitude 2.png', alt: 'Data Interpretation', title: 'Data Interpretation' },
    { src: 'Training Page/Aptitude 3.png', alt: 'Logical Reasoning', title: 'Logical Reasoning' },
    { src: 'Training Page/Aptitude 4.png', alt: 'Critical Thinking', title: 'Critical Thinking' },  
    { src: 'Training Page/Aptitude 5.png', alt: 'Verbal Ability', title: 'Verbal Ability' },
  ],
};

const CourseCard = ({ src, alt, title }) => (
  <div className="w-1/2 p-1 sm:w-1/2 md:w-1/3 lg:w-1/5">
    <div className="bg-[#003073] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex-grow">
        <div className="h-full w-full ">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-top" 
          />
        </div>
      </div>
      <div className="p-2 flex-shrink-0 flex items-center justify-center h-12"> {/* Fixed height for title area */}
        <p className="text-base font-medium text-white leading-tight text-center">{title}</p>
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
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffc700] mb-2">
          Soft Skills
        </p>
        <div className="flex flex-wrap justify-center">
          {courses.softSkills.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className="mb-6 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffc700] mb-2">
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
