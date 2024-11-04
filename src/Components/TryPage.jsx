import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './App.css'; // Ensure you have your CSS imported

const FullPageScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = (event) => {
      event.preventDefault(); // Prevent default scrolling
      const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction

      // Find the current section
      let currentIndex = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });

      // Calculate new index
      let newIndex = currentIndex + direction;

      // Ensure newIndex is within bounds
      if (newIndex >= 0 && newIndex < sections.length) {
        const targetSection = sections[newIndex];

        // Smooth scroll to the next section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        disappear();
        appear(newIndex + 1);
      }
    };

    const disappear = () => {
      anime({
        targets: 'h1',
        opacity: [1, 0],
        translateY: [0, -50],
        duration: anime.random(200, 400),
        easing: 'easeInOutQuad',
      });
    };

    const appear = (index) => {
      anime({
        targets: `.section:nth-child(${index}) h1`,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: anime.random(300, 600),
        easing: 'easeInOutQuad',
      });
    };

    // Add mouse wheel event listener
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="sections">
      <div className="section bg-purple">
        <h1>Welcome to Section 1</h1>
      </div>
      <div className="section bg-green">
        <h1>Explore Section 2</h1>
      </div>
      <div className="section bg-creme">
        <h1>Discover Section 3</h1>
      </div>
    </div>
  );
};

export default FullPageScroll;
