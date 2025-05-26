import React from 'react';
import './BlobButton.scss';

const BlobButton = () => {
  return (
    <>
      <div className="buttons">
        <button className="blob-btn">
          Learn More
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </div>

      {/* SVG Goo Filter (add once globally) */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" result="mix" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default BlobButton;
