import  { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Helper function to format time
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const EventPopUp = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially set to false
  const [timeLeft, setTimeLeft] = useState(null);

  // Set the event date (16th December 2024)
  // Set the event date (16th December 2024)

  // Update the timer every second
  useEffect(() => {
    const eventDate = new Date("2024-12-16T10:00:00");
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
  }, []);

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
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50"
>
  <motion.div
    initial={{ scale: 0.8, rotate: 5 }}
    animate={{
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    }}
    exit={{ scale: 0.8 }}
    className="relative w-5/6 md:w-2/3 lg:w-1/3 h-2/3 md:h-1/2 lg:h-2/3 bg-transparent shadow-lg flex flex-col overflow-hidden z-10 border-2 border-yellow-400"
  >
    {/* Close button */}
    <button
      onClick={handleClose}
      title="Close"
      className="absolute top-1 md:top-4 right-1 md:right-4 w-6 h-6 rounded-full border-2 border-yellow-500 text-[#FFC80E] bg-transparent flex items-center justify-center text-xl cursor-pointer z-20 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:border-yellow-500 hover:text-black"
    >
      ×
    </button>

    <div className="relative w-full h-full bg-transparent">
      {/* Solid Background Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-full bg-cover bg-center z-1"
        style={{ backgroundImage: 'url("Event/bannerhome.jfif")' }}
      ></div>

      {/* Black Overlay Section */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-2 bg-black bg-opacity-60">
        {/* Main Content Area */}
        <div className="w-full flex flex-col justify-center items-center z-3 text-white text-shadow-xl p-5">
          {/* Heading with Shine Effect */}
          <h3 className="heading mt-10 text-xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight uppercase text-[#FFC80E] tracking-wide break-words text-center">
  SYNERGY SPHERE 2024
</h3>

          <p className="text-sm md:text-lg lg:text-xl mt-1 mb-2 leading-relaxed text-center">
            Experience the perfect fusion of recognition and networking!
          </p>
          <p className="text-base md:text-xl lg:text-2xl text-center mt-2 leading-relaxed">
            Join us at Synergy Sphere 2024, the premier celebration of innovation and excellence in bridging industry and academia.
          </p>

          {timeLeft && (
            <div className="mt-4 rounded-3xl shadow-xl flex flex-col ">
              <p className="text-xl md:text-2xl mb-2 font-bold text-center text-[#fff]">
                Event{" "}
                <span className="relative inline-block">
                  <span className="text-yellow-500">Starts</span>
                </span>{" "}
                in
              </p>
              <div className="flex justify-center text-lg sm:text-2xl font-bold text-[#fff] tracking-wide">
                <div className="mx-3 flex flex-col items-center">
                  <span className="text-xl md:text-2xl font-bold text-[#fff]">
                    {formatTime(timeLeft.days)}
                  </span>
                  <span className="text-xs md:text-sm text-[#fff] uppercase">
                    Days
                  </span>
                </div>
                <div className="mx-3 flex flex-col items-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#fff]">
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span className="text-xs md:text-sm text-[#fff] uppercase">
                    Hours
                  </span>
                </div>
                <div className="mx-3 flex flex-col items-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#fff]">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className="text-xs md:text-sm text-[#fff] uppercase">
                    Minutes
                  </span>
                </div>
                <div className="mx-3 flex flex-col items-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#fff]">
                    {formatTime(timeLeft.seconds)}
                  </span>
                  <span className="text-xs md:text-sm text-[#fff] uppercase">
                    Seconds
                  </span>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              window.location.href = "/events"; // Redirect to /events
            }}
            className="mb-4 mt-2 py-2 px-4 md:px-4 lg:px-6 text-white hover:text-black font-semibold text-xs sm:text-sm md:text-sm border-2 border-[#FFC80E] transition duration-300 ease-in-out overflow-hidden relative group glow-border"
          >
            {/* Animated Fill */}
            <span className="absolute inset-0 bg-[#FFC80E] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-all duration-500 ease-in-out z-0"></span>

            {/* Button Text */}
            <span className="relative z-10 text-xs sm:text-base md:text-sm">Know More</span>
          </button>

        </div>
      </div>

      {/* Glitter Effect */}
      <div className="glitter-overlay absolute inset-0 pointer-events-none z-30"></div>
    </div>
  </motion.div>
</motion.div>

  );
};

export default EventPopUp;
