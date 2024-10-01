import React, { useState, useEffect } from 'react';

const eventData = {
  1: {
    number: '01',
    heading: 'Indira Diversity Awards (IDA) 2023',
    line: 'The Key Event of the Year',
    para: [
      'Our leading experts gather to discuss innovations for 2023.',
      'Explore trends and challenges in diversity and inclusion.',
      'Network with industry leaders and peers',
    ],
    image: 'CollegeSliding/Training Photo 1.png',
    logo: 'journey/Ankita.jpeg', // Add the logo path here
  },
  2: {
    number: '02',
    heading: 'Indira Women Achiever Awards (IWAA) 2024',
    line: 'Shaping the Future',
    para: [
      'Explore what\'s next for AI and automation.',
      'Celebrate the achievements of inspiring women.',
      'Engage in insightful discussions with experts.',
    ],
    image: 'CollegeSliding/Training Photo 2.png',
    logo: 'journey/Mridhiba.jpeg', // Add the logo path here
  },
  3: {
    number: '03',
    heading: 'Masterclass 1.0 2023',
    line: 'Mastering the Basics',
    para: [
      'Focus on foundational concepts in your field.',
      'Prepare for future challenges with expert guidance.',
      'Interactive sessions for hands-on learning.',
    ],
    image: 'CollegeSliding/Training Photo 3.png',
    logo: 'journey/rimpi.jpeg', // Add the logo path here
  },
  4: {
    number: '04',
    heading: 'Masterclass 2.0 2024',
    line: 'Advanced Strategies for Success',
    para: [
      'Dive deeper into advanced techniques and insights.',
      'Enhance your professional skills and knowledge.',
      'Collaborate with peers for growth and success.',
    ],
    image: 'CollegeSliding/Training Photo 1.png',
    logo: 'journey/Shatakshi.webp', // Add the logo path here
  },
  5: {
    number: '05',
    heading: 'Induction Programmes',
    line: 'Welcome to New Beginnings',
    para: [
      'Join us for an immersive introduction to our organization.',
      'Engage with mentors and peers in various workshops.',
      'Understand our vision, values, and future directions.',
    ],
    image: 'CollegeSliding/Training Photo 2.png',
    logo: 'journey/Swati.webp', // Add the logo path here
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          
          body {
            font-family: 'Roboto', sans-serif;
          }
          .heading {
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            color: #003073;
            margin: 20px 0;
            text-transform: uppercase;
          }
          .top-row {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .tab-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .tab-container:hover {
            transform: scale(1.05);
          }
          .active-tab {
            background-color: #003073;
            color: white;
            border-radius: 8px;
            padding: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .logo {
            width: 100px; /* Increased size of logo */
            height: 100px; /* Increased size of logo */
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
          }
          .tab-text {
            font-size: 1.25rem;
            font-weight: bold;
            text-align: center;
          }
          .fade-in {
            opacity: 1;
            transition: opacity 0.3s ease-in;
          }
          .fade-out {
            opacity: 0;
            transition: opacity 0.3s ease-out;
          }
          .content {
            display: flex;
            flex: 1;
            padding: 20px;
            gap: 20px;
          }
          .text-content {
            flex: 0.4;
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .image-content {
            flex: 0.6;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .list-custom {
            list-style-type: disc;
            list-style-position: inside;
            padding-left: 0;
            margin-left: 1.5rem;
          }
          .list-custom li {
            margin-bottom: 0.5rem;
          }
        `}
      </style>

      <h1 className="heading">ELEVATING EVENTS TO NEW HEIGHTS</h1>

      <div className="top-row">
        {Object.keys(eventData).map((key, index) => (
          <div
            key={index}
            className={`tab-container ${activeSection === index + 1 ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(index + 1)}
          >
            <img
              src={eventData[index + 1].logo}
              alt="Logo"
              className="logo"
            />
            <span className="tab-text">{eventData[index + 1].heading}</span>
          </div>
        ))}
      </div>

      <div className="content">
        <div className={`text-content ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          <h1 className="text-6xl font-bold text-blue-500">{eventData[activeSection].number}</h1>
          <h2 className="text-4xl font-semibold mt-4">{eventData[activeSection].heading}</h2>
          <div className="w-1/4 h-1 bg-gray-300 my-4"></div>
          <ul className="list-custom">
            {eventData[activeSection].para.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={`image-content ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          <img
            src={eventData[activeSection].image}
            alt={eventData[activeSection].heading}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
