import React from 'react';

const SlidingCollege = () => {
  const logos = [
    "Clgimage/ASM's IBMR Pune Institute of Management & Research.avif",
    "Clgimage/Ideal Institute Of Technology.avif",
    "Clgimage/Indira University.avif",
    "Clgimage/International School of Management Excellence.avif",
    "Clgimage/Mauli College of Engineering & Technology.avif",
    "Clgimage/Nagpur Institute of Technology.avif",
    "Clgimage/P. R. Pote Patil College of Engineering and Management.avif",
    "Clgimage/Pune District Education Association College Of Engineering.avif",
    "Clgimage/Sharda University.avif",
    "Clgimage/Shri Ramdeobaba College of Engineering and Management.avif",
    "Clgimage/Sri Eshwar College of Engineering.avif",
    "Clgimage/1-1.png",
    "Clgimage/13-1.png",
    "Clgimage/14-1.png",
    "Clgimage/15-1.png",
    "Clgimage/16-1.png",
    "Clgimage/6-2.png",
    "Clgimage/7-2.png",
    "Clgimage/8-2.png",
    "Clgimage/9-2.png",
    "Clgimage/10-2.png",
    "Clgimage/11-2.png",
    "Clgimage/12-2.png"
  ];

  return (
    <div className="logo-slider-section bg-[#01224F] py-4 roboto-regular">
      <p className="section-heading text-[#FFC80E] text-center text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4">
        Our College Partners
      </p>
      <div className="logo-slider relative overflow-hidden w-full">
        <div className="logo-slider-track flex animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[150px] rounded-lg" />
            </div>
          ))}
          {/* Duplicate the logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[150px] rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-slider-track {
          width: calc(150px * ${logos.length * 2}); /* Adjust based on the number of logos */
          animation: scroll 20s linear infinite;
        }

        .logo-slider-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-150px * ${logos.length})); } /* Adjust based on the number of logos */
        }
      `}</style>
    </div>
  );
};

export default SlidingCollege;
