import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Helper function to format time
const formatTime = (time) => (time < 10 ? `0${time}` : time);

const CountdownTimer = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = eventDate - now;
      
      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setTimeLeft({});
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  return (
    <div className="mt-4 flex justify-center text-lg sm:text-2xl font-bold text-white tracking-wide">
      {timeLeft && Object.keys(timeLeft).length > 0 && (
        ["days", "hours", "minutes", "seconds"].map((unit, idx) => (
          <div key={idx} className="mx-3 flex flex-col items-center">
            <span className="text-xl md:text-2xl">{formatTime(timeLeft[unit])}</span>
            <span className="text-xs md:text-sm uppercase">{unit}</span>
          </div>
        ))
      )}
    </div>
  );
};

const EventPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Event date
  const eventDate = new Date("2024-12-16T10:00:00");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 4000); // Show after 4 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // Don't render if not visible

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
        <button
          onClick={() => setIsVisible(false)}
          title="Close"
          className="absolute top-1 md:top-4 right-1 md:right-4 w-6 h-6 rounded-full border-2 border-yellow-500 text-[#FFC80E] bg-transparent flex items-center justify-center text-xl cursor-pointer z-20 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:border-yellow-500 hover:text-black"
        >
          ×
        </button>

        <div className="relative w-full h-full bg-transparent">
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-cover bg-center z-1"
            style={{ backgroundImage: 'url("Event/bannerhome.jfif")' }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-2 bg-black bg-opacity-60">
            <div className="w-full flex flex-col justify-center items-center z-3 text-white p-5">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#FFC80E] tracking-wide uppercase text-center">
                SYNERGY SPHERE 2024
              </h3>

              <p className="text-sm md:text-lg lg:text-xl mt-1 mb-2 text-center">
                Experience the perfect fusion of recognition and networking!
              </p>
              <p className="text-base md:text-xl lg:text-2xl text-center mt-2">
                Join us at Synergy Sphere 2024, the premier celebration of innovation and excellence.
              </p>

              <CountdownTimer eventDate={eventDate} />

              <button
                onClick={() => window.location.href = "/events"}
                className="mt-4 py-2 px-4 text-white border-2 border-[#FFC80E] hover:text-black transition duration-300 ease-in-out relative group"
              >
                <span className="absolute inset-0 bg-[#FFC80E] transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-in-out z-0"></span>
                <span className="relative z-10">Know More</span>
              </button>
            </div>
          </div>

          <div className="glitter-overlay absolute inset-0 pointer-events-none z-30"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventPopUp;
