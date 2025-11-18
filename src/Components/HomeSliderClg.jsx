import { useEffect, useState } from 'react';

const HomeSliderClg = () => {
  const [isVisible, setIsVisible] = useState(true);

  const logos = [
    "Clgimage/ASM's IBMR Pune Institute of Management & Research.png",
    "Clgimage/Ideal Institute Of Technology.png",
    "Clgimage/Indira University.png",
    "Clgimage/International School of Management Excellence.png",
    "Clgimage/Mauli College of Engineering & Technology.png",
    "Clgimage/Nagpur Institute of Technology.png",
    "Clgimage/P. R. Pote Patil College of Engineering and Management.png",
    "Clgimage/Pune District Education Association College Of Engineering.png",
    "Clgimage/Sharda University.png",
    "Clgimage/Shri Ramdeobaba College of Engineering and Management.png",
    "Clgimage/Sri Eshwar College of Engineering.png",
    "Clgimage/1-1.avif",
    "Clgimage/13-1.avif",
    "Clgimage/14-1.avif",
    "Clgimage/15-1.avif",
    "Clgimage/16-1.avif",
    "Clgimage/6-2.avif",
    "Clgimage/7-2.avif",
    "Clgimage/8-2.avif",
    "Clgimage/9-2.avif",
    "Clgimage/10-2.avif",
    "Clgimage/11-2.avif",
    "Clgimage/12-2.avif",
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="clg_slider_main_wrapper bg-[#01224f] py-4 roboto-regular">
      <div className="clg_slider_container relative overflow-hidden w-full">
        <div className={`clg_slider_track_container flex ${isVisible ? 'clg_animate_scroll' : ''}`}>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={index} className="clg_logo_wrapper flex-none mx-3 sm:mx-4 md:mx-5">
              <img 
                src={logo} 
                alt={`College Logo ${index + 1}`} 
                className="h-16 sm:h-20 max-w-[150px] rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="clg_logo_wrapper flex-none mx-3 sm:mx-4 md:mx-5">
              <img 
                src={logo} 
                alt={`College Logo ${index + 1}`} 
                className="h-16 sm:h-20 max-w-[150px] rounded-lg"
              />
            </div>
          ))}
        </div>
        
        <div className="clg_gradient_overlay clg_gradient_left"></div>
        <div className="clg_gradient_overlay clg_gradient_right"></div>
      </div>

      <p className="text-[#FFC80E] text-center mt-4 text-[20px]">and many more...</p>

      <style >{`
        .clg_slider_container {
          position: relative;
          width: 100%;
        }

        .clg_slider_track_container {
          display: flex;
          width: fit-content;
          transform: translateX(calc(-120px * ${logos.length}));
        }

        .clg_slider_track_container.clg_animate_scroll {
          animation: clg_scroll_animation 20s linear infinite;
        }

        @keyframes clg_scroll_animation {
          0% {
            transform: translateX(calc(-120px * ${logos.length}));
          }
          100% {
            transform: translateX(0);
          }
        }

        .clg_slider_container:hover .clg_slider_track_container {
          animation-play-state: paused;
        }

        .clg_gradient_overlay {
          position: absolute;
          top: 0;
          height: 100%;
          pointer-events: none;
          z-index: 10;
          width: 100px;
        }

        .clg_gradient_left {
          left: 0;
          background: linear-gradient(to right, rgba(1, 34, 79, 1), rgba(1, 34, 79, 0) 100%);
        }

        .clg_gradient_right {
          right: 0;
          background: linear-gradient(to left, rgba(1, 34, 79, 1), rgba(1, 34, 79, 0) 100%);
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .clg_gradient_overlay {
            width: 70px;
          }
        }

        @media (max-width: 768px) {
          .clg_gradient_overlay {
            width: 50px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clg_slider_track_container {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSliderClg;