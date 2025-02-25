import { useState, } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import { courses, buttonLabels } from "./CourseArray"; // Import from new file
import PropTypes from 'prop-types';

const backSideImageUrl =
  "https://res.cloudinary.com/dcjmaapvi/image/upload/v1729943834/Yellow_Bcakground_jd3l6n.avif";

const CourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("MECH");
  const [showCards, setShowCards] = useState({ MECH: true });
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image load state

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    source: "MBA Brochure", // Add this line
  });

  const [downloadButtonVisible] = useState(true);

  // Handle image load event
  const handleImageLoad = () => {
    setIsImageLoaded(true); // Image has loaded
  };

  // Toggle course selection
  const changeCourse = (courseKey) => {
    if (courseKey !== selectedCourse) {
      setShowCards({ [courseKey]: true });
      setSelectedCourse(courseKey);
    } else {
      setShowCards((prev) => ({ ...prev, [courseKey]: !prev[courseKey] }));
    }
  };

  // Toggle accordion open/close
  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  // Download the PDF brochure
  const downloadPDF = () => {
    const url = "Course/MBA - Training Module New 2.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "mba-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show the form modal for downloading the brochure
  const handleDownloadBrochure = () => {
    setFormVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Immediately change the button text to "Submitting..."
    setIsSubmitting(true);

    // Close the modal immediately after the user clicks submit (before the toast)
    setTimeout(() => {
      setFormVisible(false); // Close the form modal immediately
    }, 0); // Use 0 delay to close it instantly

    // Proceed with form submission
    const formData = new FormData();

    // Append form data to FormData object
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Include source explicitly (not strictly necessary if included in formState)
    formData.append("source", formState.source);

    try {
      // Send the form data to the server (or your chosen endpoint)
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Show success message via toast notification
        toast.success("Form successfully submitted! Downloading brochure...", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => {
            // Disable the submit button after submission
            setIsSubmitted(true); // Mark as submitted
          },
        });

        // Simulate download after submission
        setTimeout(downloadPDF, 0); // Delay download by 1 second
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      // Show error toast if the submission failed
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Submission error:", error);
    } finally {
      // Ensure the button is re-enabled or stays disabled after the form submission
      if (!isSubmitted) {
        setIsSubmitting(false); // Re-enable the button only if not already submitted
      }
    }
  };

  // Responsive check for mobile
  const isMobile = window.innerWidth < 1024;

  return (
    <section className="mx-auto px-8 sm:px-16 bg-[#01224F] roboto-regular">
      <ToastContainer position="top-right" autoClose={3000} limit={1} />
      <div className="mb-4 md:mb-8 pt-4">
        {" "}
        {/* pt-8 adds padding-top */}
        <p className="text-[#FFC80E] text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-center font-bold md:mb-4">
          Technical Training
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap">
        {/* Accordion for smaller screens */}
        <div
          className={`accordion-container w-full ${
            isMobile ? "block pb-8" : "hidden"
          }`}
        >
          {" "}
          {/* Add pb-8 for padding-bottom */}
          {Object.keys(courses).map((key, index) => (
            <div key={key}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center w-full py-3 px-4 transition-all duration-300
        ${
          accordionOpen === index
            ? "bg-[#FFC80E] text-[#003073]"
            : "bg-[#003073] text-white"
        }
        transform-gpu hover:bg-[#FFC80E] hover:text-[#003073]`}
              >
                <span className="text-left break-words ">
                  {buttonLabels[key]}
                </span>
                <span className="flex items-center transition-all duration-300 transform hover:scale-105">
                  {accordionOpen === index ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
              </button>
              {accordionOpen === index && (
                <div className="p-4 bg-[#003073] text-white">
                  {courses[key].map((course, courseIndex) => (
                    <div
                      key={`${key}-${courseIndex}`}
                      className="bg-white rounded-lg shadow-md p-2 mb-2"
                    >
                      <h3 className="text-base text-[#003073] text-center">
                        {course.title}
                      </h3>
                      <ul className="text-black text-sm text-left ml-4">
                        {course.description.map((item, idx) => (
                          <li key={idx} className="list-disc list-outside">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar for larger screens */}
        <div
          className={`course-sidebar ${
            isMobile ? "hidden" : "w-1/4"
          } px-4 mb-8`}
        >
          <div className="bg-[#01224F] shadow-lg">
            {Object.keys(courses).map((key) => (
              <div key={key}>
                <button
                  onClick={() => changeCourse(key)}
                  className={`flex justify-between items-center w-full py-2 px-2 transition-all duration-300
          ${
            selectedCourse === key
              ? "bg-[#FFC80E] text-[#003073] transform translate-x-2 shadow-2xl"
              : "bg-[#003073] text-white"
          }
          transform-gpu hover:bg-[#FFC80E] hover:text-[#003073] hover:translate-x-2 hover:shadow-xl`}
                >
                  <span className="text-left break-words text-sm lg:text-xl">
                    {buttonLabels[key]}
                  </span>

                  {/* Always display the '>' symbol, change color for active button */}
                  <span
                    className={`ml-2 text-lg ${
                      selectedCourse === key
                        ? "text-[#003073]"
                        : "text-[#FFC80E]"
                    }`}
                  >
                    &gt;
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Content Area - Cards shown to the right of the sidebar */}
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
                    {/* Front of the Card */}
                    <div className="flip-card-front aspect-[3/2]">
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
                        onLoad={handleImageLoad}
                      />
                    </div>

                    {/* Back of the Card */}
                    <div
                      className="flip-card-back aspect-[3/2]"
                      style={{
                        backgroundImage:
                          isMobile || selectedCourse !== "MBA"
                            ? `url('${backSideImageUrl}')` // Default back image for mobile and non-MBA tabs
                            : `url('${course.backImage || backSideImageUrl}')`, // Custom back image for MBA tab on larger screens
                      }}
                    >
                      {/* Only show description for MBA on smaller screens or larger screens with MBA tab selected */}
                      {(isMobile || selectedCourse !== "MBA") && (
                        <ul
                          className={`list-disc list-outside text-black text-sm lg:text-base`}
                        >
                          {course.description.map((item, idx) => (
                            <li key={idx} className="pl-0">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
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
        !isSubmitted && (
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

      {/* Inquiry Form Modal */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-6 text-center">
              Please provide your details:
            </h2>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
              <InputField
                label="Phone"
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formState.phone}
                onChange={(e) =>
                  setFormState({ ...formState, phone: e.target.value })
                }
              />
              <SelectField
                label="Category"
                name="category"
                value={formState.category}
                onChange={(e) =>
                  setFormState({ ...formState, category: e.target.value })
                }
              />
              <TextareaField
                label="Inquiry"
                name="message"
                placeholder="Your Inquiry"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className={`bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors ${
                    isSubmitting || isSubmitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSubmitted
                    ? "Already Submitted" // Updated text after submission
                    : "Submit"}
                </button>

                <button
                  type="button"
                  className="ml-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => setFormVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* Flip card styles */
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
        .flip-card-front {
          background-color: #f8f8f8;
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
          z-index: 1;
        }
        .flip-card-back ul {
          margin: 10px;
          padding-left: 20px;
          list-style-position: outside;
          list-style-type: disc;
          color: #003073;
        }
        .flip-card-back li {
          margin-left: 0;
          padding-left: 0;
        }
      `}</style>
    </section>
  );
};

const InputField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const SelectField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    >
      <option value="">Select Category</option>
      <option value="college">College</option>
      <option value="corporate">Corporate</option>
      <option value="university">University</option>
    </select>
  </div>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TextareaField = ({ label, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      rows="4"
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    ></textarea>
  </div>
);

TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default CourseSection;
