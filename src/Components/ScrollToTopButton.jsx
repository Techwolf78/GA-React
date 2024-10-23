import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'; // Use solid icon

const ScrollToTopButton = ({ visible }) => {
  const buttonRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <div
        ref={buttonRef}
        onClick={scrollToTop}
        className="fixed bottom-5 left-5 z-50 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full shadow-lg cursor-pointer transition hover:bg-blue-600"
      >
        <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" color="white" />
      </div>
    )
  );
};

export default ScrollToTopButton;
