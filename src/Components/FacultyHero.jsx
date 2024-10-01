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
      <div className="definitions" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {['F', 'D', 'P'].map((letter, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: '3.5rem', fontWeight: 'bold', color: '#FFC80E' }}>
            <span>{letter}</span>
            {showFullForms && (
              <span style={{ marginLeft: '0.5rem', fontSize: '1.3rem' }}>
                {index === 0 ? ' - FACILITATING GROWTH' : index === 1 ? ' - DIVERSE SKILLSETS' : ' - PROFESSIONAL ADVANCEMENT'}
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
          .definitions {
            gap: 2rem; /* Apply gap for larger screens */
          }
        }

        @media (max-width: 768px) {
          .definitions {
            flex-direction: column;
            align-items: flex-start;
            margin-left: 1rem;
            gap: 0; /* Remove gap for mobile layout */
          }
        }
      `}</style>
    </div>
  );
}

export default FacultyHero;
