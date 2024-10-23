import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Define the courses object directly in this file
const courses = {
  softSkills: [
    {
      src: "Training Page/SS 3.png",
      alt: "Interview Skills",
      title: "Group Discussion and Personal Interview",
    },
    {
      src: "Training Page/SS 2.png",
      alt: "Effective Communication Skills",
      title: "Effective Communication (Business Communication)",
    },
    {
      src: "Training Page/SS 1.png",
      alt: "Productivity Tools",
      title: "Productivity Tools <br />(Presentation, Time Management)",
    },
    {
      src: "Training Page/SS 5.png",
      alt: "Verbal & Non Verbal Communication",
      title: "Verbal & Non Verbal Communication",
    },
    {
      src: "Training Page/SS 6.png",
      alt: "Confidence Building and Public speaking",
      title: "Confidence Building and Public speaking",
    },
    {
      src: "Training Page/SS 4.png",
      alt: "Presentation Skills",
      title: "Personality Development and Presentation Skills",
    },
  ],
  aptitude: [
    {
      src: "Training Page/SS 4.png",
      alt: "Problem Solving",
      title: "Problem Solving",
    },
    {
      src: "Training Page/Aptitude 4.png",
      alt: "Critical Design Thinking",
      title: "Critical Design Thinking",
    },
    {
      src: "Training Page/Aptitude 1.png",
      alt: "Blood Relations",
      title: "Blood Relations",
    },
    {
      src: "Training Page/Aptitude 3.png",
      alt: "Syllogism",
      title: "Syllogism",
    },
    {
      src: "Training Page/Aptitude 5.png",
      alt: "Coding Decoding",
      title: "Coding Decoding",
    },
    {
      src: "Training Page/Aptitude 2.png",
      alt: "Data Interpretation",
      title: "Data Interpretation",
    },
  ],
};

const CourseCard = React.forwardRef(
  ({ src, alt, title, widthClass, heightClass, aos, aosDelay }, ref) => (
    <div
      className={`p-1 ${widthClass} ${heightClass}`}
      data-aos={aos} // AOS effect for cards
      data-aos-delay={aosDelay} // Staggered delay
    >
      <div className="bg-[#003073] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <img src={src} alt={alt} className="max-h-40 w-auto object-contain" />
        </div>
        <div
          ref={ref}
          className="bg-[#003073] text-white text-center font-extrabold text-lg flex items-center justify-center"
          style={{ minHeight: "60px", overflow: "hidden" }}
          dangerouslySetInnerHTML={{ __html: title }} // Use dangerouslySetInnerHTML
        />
      </div>
    </div>
  )
);

const CollegeCourse = () => {
  const softSkillsRefs = useRef([]);
  const aptitudeRefs = useRef([]);

  const setMaxHeight = (refs) => {
    const heights = refs.map((ref) => (ref ? ref.offsetHeight : 0));
    const maxHeight = Math.max(...heights);

    refs.forEach((ref) => {
      if (ref) {
        ref.style.height = `${maxHeight}px`;
      }
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS
    setMaxHeight(softSkillsRefs.current);
    setMaxHeight(aptitudeRefs.current);
  }, []);

  return (
    <section className="bg-[#091327] py-6 roboto-regular">
      <div className="container mx-auto px-8 sm:px-16">
        <div className="mb-4 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#ffc700] mb-1">
            <span className="relative inline-block">
              OUR INDUSTRY READINESS PROGRAM INCLUDES:
              <span className="absolute left-0 right-0 h-[1px] bg-[#ffffff] bottom-0 mx-auto"></span>
            </span>
          </p>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-4 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffc700] mb-1">
            INTER - PERSONAL SKILLS
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start">
            {courses.softSkills.map((course, index) => (
              <CourseCard
                key={index}
                ref={(el) => (softSkillsRefs.current[index] = el)}
                {...course}
                widthClass="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6"
                heightClass="h-auto"
                aos="fade-up" // AOS effect for cards
                aosDelay={`${index * 100}`} // Staggered delay
              />
            ))}
            {/* Extra Course Button on the Right Side */}
            <div
              className="p-1 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/12 flex justify-start lg:ml-auto items-center"
              style={{
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              <div className="bg-[#003073] text-white text-center font-extrabold text-xs sm:text-sm flex items-center justify-center rounded-lg py-2 px-3 hover:shadow-xl hover:scale-105 hover:translate-y-[-2px] active:scale-95 active:translate-y-[2px]">
                <span className="mr-1">+ Many More….</span>
              </div>
            </div>
          </div>
        </div>

        {/* Aptitude Section */}
        <div className="mb-4 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#ffc700] mb-1">
            APTITUDE
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start">
            {courses.aptitude.map((course, index) => (
              <CourseCard
                key={index}
                ref={(el) => (aptitudeRefs.current[index] = el)}
                {...course}
                widthClass="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6"
                heightClass="h-auto"
                aos="fade-up" // AOS effect for cards
                aosDelay={`${index * 100}`} // Staggered delay
              />
            ))}
            {/* Extra Course Button on the Right Side */}
            <div
              className="p-1 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/12 flex justify-start lg:ml-auto items-center"
              style={{
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
            >
              <div className="bg-[#003073] text-white text-center font-extrabold text-xs sm:text-sm flex items-center justify-center rounded-lg py-2 px-3 hover:shadow-xl hover:scale-105 hover:translate-y-[-2px] active:scale-95 active:translate-y-[2px]">
                <span className="mr-1">+ Many More….</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeCourse;
