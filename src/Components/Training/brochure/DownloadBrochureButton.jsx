import React from 'react';
import PropTypes from 'prop-types';

const DownloadBrochureButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12V4m0 8l-4-4m4 4l4-4" />
    </svg>
    Download Brochure
  </button>
);

DownloadBrochureButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DownloadBrochureButton;
