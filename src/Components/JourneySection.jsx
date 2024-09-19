import React, { useEffect, useState } from 'react';

const JourneySection = () => {
  const [displayText, setDisplayText] = useState("OUR JOURNEY");
  const fullText = "JOURNEY";
  const newText = "DREAM";
  const [isBlinking, setIsBlinking] = useState(true); // State to control cursor blinking

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = newText;
    let textType = 'new';

    const typeEffect = () => {
      if (textType === 'new') {
        currentText = newText;
      } else {
        currentText = fullText;
      }

      // Update display text with current index
      setDisplayText(`OUR ${currentText.slice(0, index)}`);

      const typingSpeed = isDeleting ? 150 : 250; // Slower typing and deleting speeds

      if (isDeleting) {
        index--;
        if (index < 0) {
          isDeleting = false;
          textType = textType === 'new' ? 'full' : 'new'; // Switch text type
          setTimeout(() => {
            index = 0; // Reset index for the next text
            typeEffect(); // Restart typing
          }, 500); // Pause before switching
          return;
        }
      } else {
        index++;
        if (index > currentText.length) {
          isDeleting = true; // Start deleting after reaching the end
          setTimeout(() => {
            typeEffect(); // Wait a moment before starting to delete
          }, 2000); // Pause before deleting
          return;
        }
      }

      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500); // Change cursor every 500ms

    return () => {
      clearTimeout(typeEffect); // Cleanup on unmount
      clearInterval(cursorInterval); // Clear cursor interval
    };
  }, []);

  return (
    <div>
      <style>
        {`
          .cursor {
            font-weight: bold;
            color: black; /* Change this to match your design */
            margin-left: 5px; /* Space between text and cursor */
          }

          .blink {
            animation: blink-animation 1s steps(1, end) infinite;
          }

          @keyframes blink-animation {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      <div>
        <h1 className="text-4xl font-bold text-center pt-6 bg-purple-100">
          {displayText}
          <span className={`cursor ${isBlinking ? 'blink' : ''}`}>|</span> {/* Cursor */}
        </h1>
      </div>
      <section className="w-full h-auto relative overflow-hidden bg-purple-100">
        <img 
          src="Clgimage/oj-new.png"
          alt="Journey Infographic" 
          className="w-full h-auto object-cover"
        />
      </section>
    </div>
  );
};

export default JourneySection;
