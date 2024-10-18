import React, { useState, useEffect } from "react";

const eventData = {
  1: {
    number: "01",
    heading: "Indira Diversity Awards (IDA) 2023",
    line: "The Key Event of the Year",
    para: [
      "Our leading experts gather to discuss innovations for 2023.",
      "Explore trends and challenges in diversity and inclusion.",
      "Network with industry leaders and peers",
    ],
    image: "CollegeSliding/Training Photo 1.png",
    logo: "journey/Ankita.jpeg",
  },
  2: {
    number: "02",
    heading: "Indira Women Achiever Awards (IWAA) 2024",
    line: "Shaping the Future",
    para: [
      "Explore what's next for AI and automation.",
      "Celebrate the achievements of inspiring women.",
      "Engage in insightful discussions with experts.",
    ],
    image: "CollegeSliding/Training Photo 2.png",
    logo: "journey/Mridhiba.jpeg",
  },
  3: {
    number: "03",
    heading: "Masterclass 1.0 2023",
    line: "Mastering the Basics",
    para: [
      "Focus on foundational concepts in your field.",
      "Prepare for future challenges with expert guidance.",
      "Interactive sessions for hands-on learning.",
    ],
    image: "CollegeSliding/Training Photo 3.png",
    logo: "journey/rimpi.jpeg",
  },
  4: {
    number: "04",
    heading: "Masterclass 2.0 2024",
    line: "Advanced Strategies for Success",
    para: [
      "Dive deeper into advanced techniques and insights.",
      "Enhance your professional skills and knowledge.",
      "Collaborate with peers for growth and success.",
    ],
    image: "CollegeSliding/Training Photo 1.png",
    logo: "journey/Shatakshi.webp",
  },
  5: {
    number: "05",
    heading: "Induction Programmes",
    line: "Welcome to New Beginnings",
    para: [
      "Join us for an immersive introduction to our organization.",
      "Engage with mentors and peers in various workshops.",
      "Understand our vision, values, and future directions.",
    ],
    image: "CollegeSliding/Training Photo 2.png",
    logo: "journey/Swati.webp",
  },
};

const Events = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleTabClick = (index) => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveSection(index);
      setFadeIn(true);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800 uppercase mb-6">
        ELEVATING EVENTS TO NEW HEIGHTS
      </h1>

      <div className="flex overflow-x-auto justify-between items-stretch bg-white shadow-md p-0 md:p-4 rounded mb-6">
        {Object.keys(eventData).map((key, index) => (
          <div
            key={index}
            className={`flex-1 flex flex-col items-center cursor-pointer transition-transform duration-200 ${
              activeSection === index + 1
                ? "bg-blue-800 text-white rounded"
                : ""
            }`}
            onClick={() => handleTabClick(index + 1)}
          >
            <img
              src={eventData[index + 1].logo}
              alt="Logo"
              className="w-10 h-10 sm:w-20 sm:h-20 rounded-full mb-2"
            />
            <span className="text-sm sm:text-lg md:text-xl text-center">
              {eventData[index + 1].heading}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div
          className={`flex-1 bg-white rounded p-4 shadow-md transition-opacity duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
            {eventData[activeSection].number}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
            {eventData[activeSection].heading}
          </h2>
          <div className="w-full h-1 bg-gray-300 my-4"></div>
          <ul className="list-disc list-inside pl-5">
            {eventData[activeSection].para.map((point, index) => (
              <li key={index} className="mb-2 text-base sm:text-lg">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`flex-1 rounded overflow-hidden shadow-md transition-opacity duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={eventData[activeSection].image}
            alt={eventData[activeSection].heading}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
