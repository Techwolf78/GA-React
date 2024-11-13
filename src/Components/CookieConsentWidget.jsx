import React, { useState, useEffect } from "react";

// Helper function to format time
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const EventPopUp = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially set to false
  const [timeLeft, setTimeLeft] = useState(null);

  // Set the event date (14th December 2024)
  const eventDate = new Date("2024-12-14T00:00:00");

  // Update the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = eventDate - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setTimeLeft(null); // Event has passed
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Calculate days
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); // Calculate hours
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // Calculate seconds
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  // Handle pop-up visibility after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show the pop-up after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on unmount or before re-running
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Return null if not visible
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50 animate-fade-in">
      <div className="relative w-11/12 max-w-4xl h-4/5 bg-transparent shadow-lg flex flex-col overflow-hidden z-10">
        {/* Close button with circular background */}
        <button
          onClick={handleClose}
          title="Close" // This will show the "Close" tooltip on hover
          className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-yellow-500 text-[#FFC80E] bg-transparent flex items-center justify-center text-3xl cursor-pointer z-20 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:border-yellow-500 hover:text-black"
        >
          ×
        </button>

        <div className="relative w-full h-full bg-transparent">
          {/* Solid Background Image */}
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-cover bg-center z-1"
            style={{ backgroundImage: 'url("journey/evbg.jpg")' }}
          ></div>

          {/* Black Overlay Section */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col sm:flex-row z-2 bg-black bg-opacity-70">
            {/* Left Section: Event Image */}
            <div className="w-full sm:w-1/2 flex justify-center items-center z-3 p-5">
              <img
                src="journey/evtry.png"
                alt="Event"
                className="w-full h-auto object-contain max-w-xs sm:max-w-full"
              />
            </div>

            {/* Right Section: Heading and Paragraph */}
            <div className="w-full sm:w-1/2 p-5 sm:p-10 flex flex-col justify-center items-center text-white text-shadow-xl">
              <div className="flex-1 flex flex-col justify-center items-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 leading-tight text-center uppercase text-[#FFC80E] tracking-wide">
                  Welcome to the Event !
                </h3>
                <p className="text-xs sm:text-sm mt-2 leading-relaxed text-center">
                  NOW OPEN FOR ENTRIES
                </p>
                <p className="text-sm sm:text-base text-center mt-2 leading-relaxed">
                  Join the excitement and prestige of the Creative Retail
                  Awards, the ultimate celebration of innovation and excellence
                  in retail, leisure and hospitality design, offering
                  unparalleled opportunities for recognition, networking, and
                  celebration.
                </p>

                <button
                  onClick={() => {
                    window.location.href = "/events"; // Redirect to /events
                  }}
                  className="mt-4 py-2 px-6 text-white hover:text-black font-semibold text-sm border-2 border-[#FFC80E] transition duration-300 ease-in-out overflow-hidden relative group"
                >
                  {/* Animated Fill */}
                  <span className="absolute inset-0 bg-[#FFC80E] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-all duration-500 ease-in-out z-0"></span>

                  {/* Button Text */}
                  <span className="relative z-10">Know More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Timer */}
      {timeLeft && (
        <div className="w-full p-3 flex justify-center items-center absolute bottom-0 sm:bottom-[-10px] left-0 z-30">
          <div className="bg-white p-3 rounded-3xl shadow-xl flex flex-col items-center max-w-md mx-auto">
            <p className="text-xl sm:text-3xl mb-3 font-bold text-center text-[#01224F]">
              Event{" "}
              <span className="relative inline-block">
                <span className="text-red-600">Starts</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 w-full h-10 opacity-0 animate-fade-line"
                >
                  <path
                    d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
                    stroke="#e74c3c"
                    strokeWidth="2"
                    fill="transparent"
                  />
                </svg>
              </span>{" "}
              in
            </p>
            <div className="flex justify-center text-lg sm:text-2xl font-bold text-[#01224F] tracking-wide">
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.days)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">
                  Days
                </span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">
                  Hours
                </span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">
                  Minutes
                </span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">
                  Seconds
                </span>
              </div>
            </div>
          </div>
          <style>
            {`
              .animate-fade-line {
                animation: fadeLine 2s ease-in-out infinite;
              }

              @keyframes fadeLine {
                0% {
                  opacity: 0;
                }
                50% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                }
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
};

export default EventPopUp;
