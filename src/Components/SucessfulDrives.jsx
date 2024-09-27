import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const SuccessfulDrives = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Placeholder images
  const images = [
    "https://via.placeholder.com/300x200.png?text=Image+1",
    "https://via.placeholder.com/300x200.png?text=Image+2",
    "https://via.placeholder.com/300x200.png?text=Image+3",
    "https://via.placeholder.com/300x200.png?text=Image+4",
    "https://via.placeholder.com/300x200.png?text=Image+5",
    "https://via.placeholder.com/300x200.png?text=Image+6",
    "https://via.placeholder.com/300x200.png?text=Image+7",
    "https://via.placeholder.com/300x200.png?text=Image+8"
  ];

  return (
    <div className="relative py-2 bg-[#003073] text-white roboto-regular">
      <div className="container mx-auto px-0 relative z-10">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-center text-[#FFC80E]">
          OUR SUCCESSFUL DRIVES
        </h1>

        {/* Full-width Image */}
        <img 
          src="Top Placements.png" 
          alt="Main Drive" 
          className="w-full h-full  rounded-lg"
        />

        {/* Slider Component */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2"> {/* Reduced padding */}
              <img 
                src={image} 
                alt={`Drive ${index + 1}`} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessfulDrives;
