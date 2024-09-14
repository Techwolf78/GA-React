import React from 'react';

const VideoSection = () => (
  <div>
    {/* Heading section */}
    <div className="heading-section">
      <h1>Welcome to Our Video Section</h1>
    </div>

    {/* Video section */}
    <div className="video-section">
      <style>
        {`
          .heading-section {
            text-align: center;
            padding: 2rem;
            background-color: #d1c4e9; /* Solid light purple background */
            border-radius: 8px; /* Optional: Rounded corners for the background */
            margin-bottom: 0; /* Ensure no margin below the heading section */
          }

          .heading-section h1 {
            font-size: 2.5rem; /* Adjust size as needed */
            margin: 0;
            position: relative;
            display: inline-block;
            padding-bottom: 10px; /* Space for the underline */
            color: purple; /* Text color for contrast */
          }

          .heading-section h1::after {
            content: '';
            display: block;
            width: 50%; /* Adjust width of the underline */
            height: 3px; /* Thickness of the underline */
            background: #6c63ff; /* Color of the underline */
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
          }

          .video-section {
            position: relative;
            width: 100%;
            height: 100vh; /* Takes up the full viewport height */
            margin: 0;
            overflow: hidden;
          }

          .video-section video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Adjusts the video to cover the container */
          }
        `}
      </style>

      <video src="/IMG_5815.mp4" autoPlay muted loop></video>
    </div>
  </div>
);

export default VideoSection;
