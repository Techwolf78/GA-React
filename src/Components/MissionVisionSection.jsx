import React, { useState, useEffect } from 'react';

const images = [
  'Clgimage/our-mission.jpg',
  'Clgimage/our-vision.jpg',
];

const MissionVisionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-purple-100 relative">
      <style>
        {`
          .feature-header-link {
            display: inline-block;
            font-size: 2rem;
            color: #333;
            text-decoration: none;
            font-weight: bold;
            position: relative;
            cursor: pointer;
          }

          .feature-header-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background: #6c63ff;
            left: 0;
            bottom: -2px;
            transition: width 2s ease;
          }

          .feature-header-link:hover::after {
            width: 100%;
            background: #6c63ff;
          }

          .feature-header-link:focus::after,
          .feature-header-link:active::after,
          .feature-header-link:not(:hover)::after {
            width: 0;
            background: #b19cd9;
            transition: width 0.5s ease;
          }

          .carousel-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
            height: 300px;
          }

          .carousel-container {
            display: flex;
            transition: transform 1s ease-in-out;
            width: 100%;
            height: 100%;
          }

          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .carousel-slide {
            flex: 0 0 100%;
            height: 100%;
          }
        `}
      </style>

      <div className="text-center mb-12">
        <p
          className="text-4xl font-bold md:text-4xl lg:text-4xl text-black mb-4 relative inline-block"
          style={{ 
            textDecoration: 'none', 
            position: 'relative' 
          }}
        >
          OUR MISSION & VISION
          <span
            className="absolute left-0 bottom-0 h-1 bg-black w-full transition-transform duration-300"
            style={{ width: '100%', transform: 'translateY(2px)' }}
          />
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="md:w-1/2 p-4">
          <div className="mb-8">
            <p className="text-4xl font-bold text-black mb-2 feature-header-link">Our Mission</p>
            <p className="text-lg text-gray-700">
              To bridge the gap between industry and academia, ensuring a comprehensive understanding of requirements on both sides, and empowering students to be industry-ready from multiple perspectives.
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black mb-2 feature-header-link">Our Vision</p>
            <p className="text-lg text-gray-700">
              To ensure that every student has an offer letter in their hands and are prepared to succeed in their chosen fields.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 p-4 flex items-center justify-center overflow-hidden">
          <div className="carousel-wrapper">
            <div 
              className="carousel-container"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
