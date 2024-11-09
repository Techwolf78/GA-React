import { useEffect, useState, useRef } from 'react';

const HeroCollege = () => {
  const words = ['College', 'Classroom', 'College', 'Classroom', 'College', 'Classroom'];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Calculate the width needed for the container on mount
  useEffect(() => {
    if (containerRef.current) {
      // Create a temporary span to measure each word
      const measureSpan = document.createElement('span');
      measureSpan.style.visibility = 'hidden';
      measureSpan.style.position = 'absolute';
      measureSpan.style.fontSize = window.getComputedStyle(containerRef.current).fontSize;
      measureSpan.style.fontWeight = 'bold';
      document.body.appendChild(measureSpan);

      // Find the widest word
      let maxWidth = 0;
      words.forEach(word => {
        measureSpan.textContent = word;
        maxWidth = Math.max(maxWidth, measureSpan.offsetWidth);
      });

      // Add a small buffer to prevent any potential text wrapping
      setContainerWidth(maxWidth + 16);
      document.body.removeChild(measureSpan);
    }
  }, []);

  // Handle word cycling
  useEffect(() => {
    const cycleWords = () => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWord(prev => {
          const nextIndex = (words.indexOf(prev) + 1) % words.length;
          return words[nextIndex];
        });
        setIsVisible(true);
      }, 500);
    };

    const interval = setInterval(cycleWords, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex items-center justify-center bg-[#003073] h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dcjmaapvi/image/upload/v1729941974/clgmain_uyozlj.webp')"
        }}
      >
        <div className="h-[3vh] sm:h-[5vh] lg:h-[10vh]" />
        
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2">
            A Journey From
            <span
              ref={containerRef}
              className="inline-block text-[#FFC80E]"
              style={{ width: `${containerWidth}px` }}
            >
              <span
                className={`
                  mx-2 inline-block
                  transition-opacity duration-500
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
              >
                {currentWord}
              </span>
            </span>
            To Corporate
          </h1>
          
          <p className="text-lg sm:text-xl text-white mt-1">
            Preparing your students for the industry with our customized <br />
            Industry Specific Training and Placement Solutions
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroCollege;