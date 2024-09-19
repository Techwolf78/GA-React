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
    }, 2000); // Delay before full forms appear

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-dark-blue overflow-hidden">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row p-8">
        {/* Left Side: F, D, P */}
        <div className="flex-1 flex flex-col items-start justify-center gap-8">
          <div className={`flex items-center ${showFullForms ? 'fade-in' : ''}`}>
            <div className="text-6xl font-bold text-yellow mr-4 animate-fade-in">
              F
            </div>
            {showFullForms && (
              <div className="text-2xl md:text-3xl font-bold text-yellow slide-in-left">
                Facilitating Growth
              </div>
            )}
          </div>
          <div className={`flex items-center ${showFullForms ? 'fade-in' : ''}`}>
            <div className="text-6xl font-bold text-yellow mr-4 animate-fade-in">
              D
            </div>
            {showFullForms && (
              <div className="text-2xl md:text-3xl font-bold text-yellow slide-in-left">
                Diverse Skillsets
              </div>
            )}
          </div>
          <div className={`flex items-center ${showFullForms ? 'fade-in' : ''}`}>
            <div className="text-6xl font-bold text-yellow mr-4 animate-fade-in">
              P
            </div>
            {showFullForms && (
              <div className="text-2xl md:text-3xl font-bold text-yellow slide-in-left">
                Professional Advancement
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Heading and Paragraph */}
        <div className="flex-1 flex flex-col items-start justify-center px-4">
          {/* Heading */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow leading-tight uppercase text-left mb-4">
            Where great minds grow greater: FDP
          </p>
          {/* Paragraph */}
          <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-left">
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
