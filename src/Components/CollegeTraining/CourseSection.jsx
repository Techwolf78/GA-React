import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { courses, buttonLabels } from "./CourseArray";
import InquiryFormModal from "./InquiryFormModal";

const backSideImageUrl =
  "https://res.cloudinary.com/dcjmaapvi/image/upload/v1729943834/Yellow_Bcakground_jd3l6n.avif";

const CourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("MECH");
  const [showCards, setShowCards] = useState({ MECH: true });
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [downloadButtonVisible] = useState(true);
  const [isSectionInView, setIsSectionInView] = useState(true);

  const sectionRef = useRef(null);

  const changeCourse = (courseKey) => {
    if (courseKey !== selectedCourse) {
      setShowCards({ [courseKey]: true });
      setSelectedCourse(courseKey);
    } else {
      setShowCards((prev) => ({ ...prev, [courseKey]: !prev[courseKey] }));
    }
  };

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const handleDownloadBrochure = () => {
    setFormVisible(true);
  };

  const isMobile = window.innerWidth < 1024;

  // Monitor visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto px-8 sm:px-16 bg-[#01224F] roboto-regular"
    >
      <ToastContainer position="top-right" autoClose={3000} limit={1} />
      <div className="mb-4 md:mb-8 pt-4">
        <p className="text-[#FFC80E] text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-center font-bold md:mb-4">
          Technical Training
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap">
        {/* Mobile Accordion */}
        <div
          className={`accordion-container w-full ${
            isMobile ? "block pb-8" : "hidden"
          }`}
        >
          {Object.keys(courses).map((key, index) => (
            <div key={key}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center w-full py-3 px-4 transition-all duration-300 ${
                  accordionOpen === index
                    ? "bg-[#FFC80E] text-[#003073]"
                    : "bg-[#003073] text-white"
                } transform-gpu hover:bg-[#FFC80E] hover:text-[#003073]`}
              >
                {/* LEFT-aligned text */}
                <span className="text-left w-full">{buttonLabels[key]}</span>

                {/* RIGHT-aligned arrow */}
                <span className="ml-2 flex-shrink-0">
                  {accordionOpen === index ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
              </button>

              {accordionOpen === index && (
                <div className="p-4 bg-[#003073] text-white">
                  {courses[key].map((course, i) => (
                    <div
                      key={`${key}-${i}`}
                      className="bg-white rounded-lg shadow-md p-2 mb-2"
                    >
                      <h3 className="text-base text-[#003073] text-center">
                        {course.title}
                      </h3>
                      <ul className="text-black text-sm ml-4 list-disc list-outside">
                        {course.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Sidebar */}
        <div
          className={`course-sidebar ${
            isMobile ? "hidden" : "w-1/4"
          } px-4 mb-8`}
        >
          <div className="bg-[#01224F] shadow-lg">
            {Object.keys(courses).map((key) => (
              <button
                key={key}
                onClick={() => changeCourse(key)}
                className={`group flex justify-between items-center w-full py-2 px-2 transition-all duration-300 ${
                  selectedCourse === key
                    ? "bg-[#FFC80E] text-[#003073] translate-x-2 shadow-2xl"
                    : "bg-[#003073] text-white"
                } transform-gpu hover:bg-[#FFC80E] hover:text-[#003073] hover:translate-x-2 hover:shadow-xl`}
              >
                {/* LEFT-aligned text */}
                <span className="text-sm lg:text-xl text-left w-full">
                  {buttonLabels[key]}
                </span>

                {/* Arrow stays at the end */}
                <span
                  className={`ml-2 text-lg ${
                    selectedCourse === key
                      ? "text-[#003073]"
                      : "text-[#FFC80E] group-hover:text-[#003073]"
                  }`}
                >
                  &gt;
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className={`flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 ${
            isMobile ? "hidden" : ""
          }`}
        >
          {Object.keys(courses).map(
            (key) =>
              showCards[key] &&
              courses[key].map((course, index) => (
                <div key={`${key}-${index}`} className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front aspect-[3/2] ">
                      <div
                        className={`w-full h-48 bg-gray-300 rounded dark:bg-gray-700 lg:hidden ${
                          isImageLoaded ? "hidden" : "block"
                        }`}
                      ></div>
                      <img
                        src={course.image}
                        alt={course.title}
                        className={`object-cover w-full h-full ${
                          isImageLoaded ? "block" : "hidden"
                        }`}
                        onLoad={() => setIsImageLoaded(true)}
                      />
                    </div>
                    <div className="flip-card-back aspect-[3/2]">
                      <ul className="list-disc list-outside text-black text-sm lg:text-base p-4 ml-2">
                        {course.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>

      {/* Floating Brochure Button */}
      {!isMobile &&
        selectedCourse === "MBA" &&
        downloadButtonVisible &&
        !isSubmitted &&
        isSectionInView && (
          <button
            onClick={handleDownloadBrochure}
            className="fixed bottom-20 right-6 z-50 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12V4m0 8l-4-4m4 4l4-4"
              />
            </svg>
            MBA Training Content
          </button>
        )}

      {/* Form Modal */}
      {formVisible && (
        <InquiryFormModal
          onClose={() => setFormVisible(false)}
          onSuccess={() => setIsSubmitted(true)}
        />
      )}

      {/* Styles */}
      <style>{`
        .flip-card {
          perspective: 1000px;
          width: 100%;
          max-width: 300px;
          height: 330px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .flip-card-back {
          background-image: url('${backSideImageUrl}');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          transform: rotateY(180deg);
          padding: 0px;
          color: #003073 !important;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default CourseSection;
