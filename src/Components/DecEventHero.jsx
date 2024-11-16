import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const EventPopUp = () => {
  // State to store the countdown time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State to control the confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Event date (14th December)
  const eventDate = new Date('2024-12-16T00:00:00Z');

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
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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

  // Trigger confetti after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 100); // Trigger after 100 milliseconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Format the time to always show two digits
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div>
      {/* Confetti animation */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          gravity={0.3}
          initialVelocityX={15}
          initialVelocityY={10}
          recycle={false}
          colors={['#FFC80E', '#FF6347', '#4CAF50', '#2196F3', '#8E24AA']}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9999,  // Ensure it's on top of everything
          }}
        />
      )}

      {/* Section 1: Background image with full black overlay */}
      <div
        className="bg-cover bg-center flex items-center justify-center relative w-full"
        style={{
          backgroundImage: 'url("journey/evbg.jpg")', // Replace with your background image URL
          minHeight: '100vh', // Ensure full screen height
        }}
      >
        {/* Full black overlay above the background image */}
        <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

        {/* Content (Image, Text, and Countdown) on top of the overlay */}
        <div className="flex flex-col sm:flex-row w-full px-5 relative z-30">
          {/* Left side: Image (100% width on small screens, 30% width on large screens) */}
          <div className="w-full sm:w-1/3 flex justify-center items-center mb-5 sm:mb-0">
            <img
              src="journey/evtry.png" // Replace with your image URL
              alt="Event Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg opacity-90"
            />
          </div>

          {/* Right side: Text (100% width on small screens, 70% width on large screens) */}
          <div className="w-full sm:w-2/3 flex flex-col justify-center text-white text-left pl-5 md:pl-10">
            <h2
              className="text-4xl sm:text-5xl text-center font-bold mb-4 uppercase"
              style={{
                background: 'linear-gradient(to bottom, #c8a85b 25%, #f1d35f 50%, #755107 80%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Synergy Sphere 2024
            </h2>

            <p className="text-xl sm:text-2xl text-center mb-4">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-lg sm:text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia
              Lorem ipsum dolor sit amet <br />
              voluptatibus eligendi esse voluptates facere praesentium quis dolore necessitatibus
              <br />
              networking, collaboration, and learning. Don’t miss out on this chance to <br />
              be a part of something truly memorable and impactful.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Timer */}
      {timeLeft && (
        <div className="w-full p-3 flex justify-center items-center absolute bottom-0 sm:bottom-[-10px] left-0 z-30">
          <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center max-w-md mx-auto border-2 border-[#FFD700]">
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
                <span className="text-sm sm:text-base text-[#01224F] uppercase">Days</span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">Hours</span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">Minutes</span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-[#01224F]">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-sm sm:text-base text-[#01224F] uppercase">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPopUp;
