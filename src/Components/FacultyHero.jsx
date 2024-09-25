import React, { useState, useEffect } from 'react';
import '../assets/CSS/FacultyHero.css';

function FacultyHero() {
  const text = "Empower your educators and elevate your institution with our targeted academic training. We boost professors' and staff's teaching skills, integrating industry needed advanced digital & offline strategies tailored to your college's unique needs. By fostering professional growth and creating dynamic learning environments, we help transform your institution into a hub of educational excellence.";

  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showFullForms, setShowFullForms] = useState(false);

  useEffect(() => {
    setWords(text.split(' '));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullForms(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-faculty-hero bg-cover bg-center overflow-hidden roboto-regular mb-12">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row p-4 md:p-8 h-full">
        {/* Left Side: F, D, P */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <div className={`flex flex-col items-start ${showFullForms ? 'fade-in' : ''}`}>
            {['F', 'D', 'P'].map((letter, index) => (
              <div className="flex items-center" key={index}>
                <div className="text-4xl mb-4 md:text-6xl font-bold" style={{ color: '#FFC80E', marginRight: '8px' }}>
                  {letter}
                </div>
                {showFullForms && (
                  <div className="text-lg md:text-2xl font-bold" style={{ color: '#FFC80E', animation: 'slide-in-left 1s ease-in-out forwards' }}>
                    {index === 0 ? ' - Facilitating Growth' : index === 1 ? ' - Diverse Skillsets' : ' - Professional Advancement'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Heading and Paragraph */}
        <div className="flex-1 flex flex-col items-start justify-center px-4 ">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-left " style={{ color: '#FFC80E' }}>
            Where great minds grow greater: FDP
          </p>
          <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed text-left ">
            {words.map((word, index) => (
              <span
                key={index}
                className={index === currentWordIndex ? 'word-animation' : ''}
                style={{
                  display: 'inline-block',
                  marginRight: '4px',
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FacultyHero;
