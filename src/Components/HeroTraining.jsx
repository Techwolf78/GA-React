import { FaChalkboardTeacher, FaTools } from "react-icons/fa";

const HeroTraining = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 1,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#091327] relative roboto-regular">
      {/* Full-Width Section: Background Image for Large Screens */}
      <div
        className="hidden lg:flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('Training 1 1.png')" }}
      >
        {/* Heading at the top */}
        <div className="text-center md:text-left mt-28 ml-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-[#000000]">
            <span className="text-[#003073] font-bold">THE LEARNING TRINITY:</span> <br />
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 text-[#000000]">
              WHERE ACADEMIA MEETS INDUSTRY EXPERTISE
            </span>
          </h1>
        </div>

        {/* Paragraph and Button in the bottom-left corner */}
        <div className="absolute bottom-8 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 text-left">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#ffffff] mb-4 font-light">
            The Tri-Force of Excellence: Powering Education, Faculty, and Industry 
          </p>

          <button
            onClick={handleScroll}
            className="btn-know-more relative inline-flex px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap"
          >
            <span className="relative z-10">Explore Our Trainings</span>
            <svg
              className="ml-2 w-4 h-4 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#000000]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Stat boxes with animated glowing border */}
        <div className="absolute top-36 right-4 p-2 hidden md:flex">
          <div className="stat-box">
            <div className="border-animation p-3 rounded-2xl shadow-md flex items-center space-x-2">
              <FaTools className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">Customized Trainings</h3>
                <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">Tailored to your needs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-4 p-2 hidden md:flex">
          <div className="stat-box">
            <div className="border-animation p-3 rounded-2xl shadow-md flex items-center space-x-2">
              <FaChalkboardTeacher className="text-[#FFC80E] text-xl sm:text-2xl md:text-3xl" />
              <div className="text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#FFC80E]">Expert Trainers</h3>
                <span className="text-[#ffffff] block text-xs sm:text-sm md:text-sm">Learn from industry experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background for Medium and Small Screens */}
      <div className="lg:hidden flex flex-col justify-center items-center bg-cover bg-center p-4"
        style={{ backgroundImage: "url('Training 1 1.png')" }}
      >
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-[#FFC80E] mb-4">
            The Learning Trinity: Where Academia Meets Industry Expertise
          </h1>
          <p className="text-base text-[#ffffff] mb-6">
            The Tri-Force of Excellence: Powering Education, Faculty, and Industry 
          </p>
        </div>
        
        {/* Stat Boxes for Smaller Screens */}
        <div className="flex flex-row space-x-2 p-4 hidden md:flex">
          <div className="stat-box">
            <div className="border-animation p-2 rounded-2xl shadow-md flex items-center">
              <FaTools className="text-[#FFC80E] text-xl sm:text-2xl" />
              <div className="text-center ml-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#FFC80E]">Customized Trainings</h3>
                <span className="text-[#ffffff] block text-xs sm:text-sm">Tailored to your needs</span>
              </div>
            </div>
          </div>

          <div className="stat-box">
            <div className="border-animation p-2 rounded-2xl shadow-md flex items-center">
              <FaChalkboardTeacher className="text-[#FFC80E] text-xl sm:text-2xl" />
              <div className="text-center ml-2">
                <h3 className="text-xs sm:text-sm font-bold text-[#FFC80E]">Expert Trainers</h3>
                <span className="text-[#ffffff] block text-xs sm:text-sm">Learn from industry experts</span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleScroll}
          className="btn-know-more relative inline-flex px-5 py-3 text-sm sm:text-base font-semibold text-[#ffffff] group whitespace-nowrap mb-4"
        >
          <span className="relative z-10">Explore Our Trainings</span>
          <svg
            className="ml-2 w-4 h-4 text-[#ffffff] relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#000000]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>

      <style>{`
      .stat-box {
  position: relative;
  overflow: hidden;
}

.border-animation {
  position: relative;
  padding: 10px; /* Space for the animated border */
  background-color: #003073; /* Blue background */
  border-radius: 12px; /* Match the rounding of the box */
}

.border-animation::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 12px; /* Match the rounding of the box */
  background: linear-gradient(90deg, #FFC80E, #003073); /* Gradient border */
  z-index: -1; /* Position behind the box */
}

      `}</style>
    </div>
  );
};

export default HeroTraining;
