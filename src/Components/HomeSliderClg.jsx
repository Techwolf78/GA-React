
const HomeSliderClg = () => {
  const logos = [
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
    "Clgimage/12-2.png",
  ];

  return (
    <div className="logo-slider-section bg-[#01224f] py-4 roboto-regular">
      <div className="logo-slider relative overflow-hidden w-full">
        <div className="logo-slider-track flex animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="logo-slider-item flex-none mx-3 sm:mx-4 md:mx-5">
              <img src={logo} alt="College Logo" className="h-16 sm:h-20 max-w-[120px] object-contain" />
            </div>
          ))}
        </div>
        <div className="blur-border left-blur"></div>
        <div className="blur-border right-blur"></div>
      </div>
      
      <p className="text-[#3398f2] text-center mt-4 text-[20px]">and many more...</p>

      <style>{`
        .logo-slider-track {
          width: calc(120px * ${logos.length * 2});
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(calc(-120px * ${logos.length})); }
          100% { transform: translateX(0); }
        }

          
.blur-border {
    position: absolute;
    top: 0;
    height: 100%;
    pointer-events: none;
    z-index: 10;
    width: 100px; /* Default width for larger screens */
}

.left-blur {
    left: 0;
    background: linear-gradient(to right, rgba(1, 34, 79, 1), rgba(1, 34, 79, 0) 100%);
}

.right-blur {
    right: 0;
    background: linear-gradient(to left, rgba(1, 34, 79, 1), rgba(1, 34, 79, 0) 100%);
}

/* Media query for screens between 768px and 1024px */
@media (max-width: 1024px) and (min-width: 768px) {
    .blur-border {
        width: 70px; /* Width for medium screens */
    }
}

/* Media query for screens below 768px */
@media (max-width: 768px) {
    .blur-border {
        width: 50px; /* Width for smaller screens */
    }
}

      `}</style>
    </div>
  );
};

export default HomeSliderClg;
