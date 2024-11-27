import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const EventPopUp = () => {
  // State to store the countdown time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Event date (16th December)
  const eventDate = new Date("2024-12-16T00:00:00Z");

  // Function to calculate the time remaining
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      // If the event has passed, set the countdown to zero
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      // Calculate time left
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  // Set up the countdown timer
  useEffect(() => {
    calculateTimeLeft(); // Initial calculation
    const intervalId = setInterval(() => {
      calculateTimeLeft();
    }, 1000); // Update countdown every second

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time to always show two digits
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="relative w-full" style={{ minHeight: "108vh" }}>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: "cover",
        }}
      >
        <source src="https://res.cloudinary.com/dcjmaapvi/video/upload/v1732619496/23159_c5nlj1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      {/* Content (Text and Countdown) on top of the overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-30 h-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 mt-2 md:mt-0">
          {["SYNERGY", "SPHERE", "2024"].map((word, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                marginRight: "0.4em", // Controls the gap between words
              }}
            >
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  style={{
                    background:
                      "linear-gradient(to bottom, #f9d77e 25%, #f3c93d 50%, #ffd700 80%)", // Lighter and brighter golden gradient
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
          <br />
          {["UNISON", "OF", "INDUSTRY", "&", "ACADEMIA"].map((word, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                marginRight: "0.4em", // Controls the gap between words
                fontSize: "1.8rem", // Smaller font size for this group
              }}
            >
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  style={{
                    background:
                      "linear-gradient(to bottom, #f9d77e 25%, #f3c93d 50%, #ffd700 80%)", // Lighter and brighter golden gradient
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h2>

        <p className="text-xl sm:text-2xl mb-4 text-white">
          Experience the perfect fusion of recognition and networking!
        </p>

        <p className="text-sm md:text-lg lg:text-xl mb-8 text-white px-4 md:px-40">
          Join us at Synergy Sphere 2024, the premier celebration of innovation and excellence in bridging industry and academia. This dynamic event offers unparalleled opportunities for recognition, networking, and collaboration, bringing together corporate leaders and educational institutions to share insights and explore emerging trends. Engage in meaningful discussions, connect with top talent, and celebrate the partnerships that will shape the workforce of tomorrow!
        </p>

        {/* Countdown Timer */}
        <p
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4"
          style={{
            background:
              "linear-gradient(to bottom, #c8a85b 25%, #f1d35f 50%, #755107 80%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <span className="text-[#FFC80E]">Event</span>{" "}
          <span className="text-[#FFC80E]">Starts </span>
          <span className="text-[#FFC80E]">In</span>
        </p>

        {timeLeft && (
          <div className="flex justify-center text-lg sm:text-2xl font-bold text-gray-200 tracking-wide mb-4">
            <div className="mx-3 flex flex-col items-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200">
                {formatTime(timeLeft.days)}
              </span>
              <span className="text-sm sm:text-base text-gray-200 uppercase">
                Days
              </span>
            </div>
            <div className="mx-3 flex flex-col items-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200">
                {formatTime(timeLeft.hours)}
              </span>
              <span className="text-sm sm:text-base text-gray-200 uppercase">
                Hours
              </span>
            </div>
            <div className="mx-3 flex flex-col items-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200">
                {formatTime(timeLeft.minutes)}
              </span>
              <span className="text-sm sm:text-base text-gray-200 uppercase">
                Minutes
              </span>
            </div>
            <div className="mx-3 flex flex-col items-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-200">
                {formatTime(timeLeft.seconds)}
              </span>
              <span className="text-sm md:text-base text-gray-200 uppercase">
                Seconds
              </span>
            </div>
          </div>
        )}

        {/* Capsules Section */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center ">
          {/* Capsule 1: WHERE IS THE EVENT */}
          <div className="flex items-center gap-4 p-2 md:p-4 rounded-2xl shadow-xl transition-transform duration-500 ease-out bg-gray-800 hover:scale-105 hover:shadow-2xl">
            {/* Yellow box for the icon with glowing effect */}
            <div className="bg-[#103552] p-2 md:p-4 rounded-xl flex items-center justify-center">
              <FaMapMarkerAlt size={28} className="text-white" />
            </div>
            
            {/* Text Section with Golden Gradient */}
            <div className="flex flex-col text-left w-full text-white">
              <div
                className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  background: 'linear-gradient(to bottom, #f9d77e 25%, #f3c93d 50%, #ffd700 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ritz Carlton
              </div>
            </div>
          </div>

          {/* Capsule 2: WHEN IS THE EVENT */}
          <div className="flex items-center gap-4 p-2 md:p-4 rounded-2xl shadow-xl transition-transform duration-500 ease-out bg-gray-800 hover:scale-105 hover:shadow-2xl">
            {/* Yellow box for the icon with glowing effect */}
            <div className="bg-[#103552] p-2 md:p-4 rounded-xl flex items-center justify-center">
              <FaCalendarAlt size={28} className="text-white" />
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col text-left w-full text-white">
              <div
                className="font-bold text-xl sm:text-2xl md:text-3xl whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  background: 'linear-gradient(to bottom, #f9d77e 25%, #f3c93d 50%, #ffd700 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                16th December
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopUp;
