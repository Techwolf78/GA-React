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

  // Event date (16th December)
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
      

      {/* Section 1: Background video with full black overlay */}
      <div
        className="relative w-full"
        style={{
          minHeight: '100vh', // Ensure full screen height
        }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="Event/1118new.mp4" type="video/mp4" /> {/* Replace with your video URL */}
          Your browser does not support the video tag.
        </video>

        {/* Content (Text and Countdown) on top of the overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-30 px-4">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 uppercase"
            style={{
              background: 'linear-gradient(to bottom, #c8a85b 25%, #f1d35f 50%, #755107 80%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Synergy Sphere 2024
          </h2>

          <p className="text-xl sm:text-2xl mb-4 text-white">
          Something Extrardinary Is Coming...
          </p>
          <p className="text-lg sm:text-xl mb-8 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia
            Lorem ipsum dolor sit amet <br />
            voluptatibus eligendi esse voluptates facere praesentium quis dolore necessitatibus
            <br />
            networking, collaboration, and learning. Don’t miss out on this chance to <br />
            be a part of something truly memorable and impactful.
          </p>

          {/* Countdown Timer */}
          <p className="text-3xl sm:text-4xl font-bold mb-4 "
            style={{
              background: 'linear-gradient(to bottom, #c8a85b 25%, #f1d35f 50%, #755107 80%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}><span className='text-white'>Event</span> <span className='text-white'>Starts </span><span className='text-white'>In</span></p>
          {timeLeft && (
            <div className="flex justify-center text-lg sm:text-2xl font-bold text-gray-200 tracking-wide mb-8">
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-gray-200">
                  {formatTime(timeLeft.days)}
                </span>
                <span className="text-sm sm:text-base text-gray-200 uppercase">Days</span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-gray-200">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-sm sm:text-base text-gray-200 uppercase">Hours</span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-gray-200">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-sm sm:text-base text-gray-200 uppercase">Minutes</span>
              </div>
              <div className="mx-3 flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-gray-200">
                  {formatTime(timeLeft.seconds)}
                </span>
                <span className="text-sm sm:text-base text-gray-200 uppercase">Seconds</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPopUp;
