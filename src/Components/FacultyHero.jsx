import React, { useState, useEffect } from 'react';

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
    <div 
      style={{
        backgroundImage: "url('Clgimage/FDP.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        minHeight: '100vh',
      }}
    >
      {/* Definitions for Medium and Larger Screens */}
      <div className="definitions" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {['F', 'D', 'P'].map((letter, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '3.5rem', fontWeight: 'bold', color: '#FFC80E' }}>
            <span>{letter}</span>
            {showFullForms && (
              <span style={{ marginLeft: '0.5rem', fontSize: '1.3rem' }}>
                {index === 0 ? ' - Facilitating Growth' : index === 1 ? ' - Diverse Skillsets' : ' - Professional Advancement'}
              </span>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', color: '#FFC80E', marginBottom: '2rem', marginTop: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '0' }}>
          Where Great Minds Grow Greater : FDP
        </h1>

        <p style={{ color: 'white', fontSize: '1rem', marginTop: '1rem' }}>
          {words.map((word, index) => (
            <span
              key={index}
              className={index === currentWordIndex ? 'word-animation' : ''}
              style={{ display: 'inline-block', marginRight: '4px' }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .word-animation {
          animation: fadeIn 1s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          .mobile-definitions {
            display: none;
          }
          .definitions {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .definitions {
            display: flex;
            flex-direction: column; /* Stack F, D, P vertically */
            align-items: flex-start; /* Align to the left */
            gap: 0.5rem; /* Space between letters and definitions */
            margin-left: 1rem; /* Add some left margin for spacing */
          }
          .mobile-definitions {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default FacultyHero;
