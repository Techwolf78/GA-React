import { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Use chevron-up icon

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
        className="fixed bottom-5 left-5 z-50 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg cursor-pointer transition hover:bg-gray-200"
      >
        <div className="flex flex-col items-center justify-center m-0 p-0">
          <FontAwesomeIcon icon={faChevronUp} size="lg" color="#01224F" className="m-0" />
          
        </div>
      </div>
    )
  );
};
ScrollToTopButton.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;

