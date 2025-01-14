import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sponsorsData = [
  {
    title: 'ACADEMIC SPONSORS',
    logos: [
      'Event/academic1.avif',
      'Event/academic2.avif',
      'Event/academic3.avif',
    ],
  },
  {
    title: 'PARTICIPATING DELEGATES',
    logos: [
      'Event/came/2.avif',
      'Event/came/3.avif',
      'Event/came/7.avif',
      'Event/came/8.avif',
      'Event/came/9.avif',
      'Event/came/10.avif',
      'Event/came/11.avif',
      'Event/came/12.avif',
      'Event/came/13.avif',
      'Event/came/15.avif',
      'Event/came/19.avif',
      'Event/came/20.avif',
      'Event/came/41.avif',
      'Event/came/42.avif',
      'Event/came/43.avif',
      'Event/came/44.avif',
    ],
  },
  {
    title: 'PARTICIPATING DELEGATES',
    logos: [
      'Event/came/21.avif',
      'Event/came/22.avif',
      'Event/came/24.avif',
      'Event/came/29.avif',
      'Event/came/30.avif',
      'Event/came/31.avif',
      'Event/came/32.avif',
      'Event/came/34.avif',
      'Event/came/37.avif',
      'Event/came/38.avif',
      'Event/came/39.avif',
      'Event/came/40.avif',
      'Event/came/46.avif',
      'Event/came/47.avif',
      'Event/came/48.avif',
      'Event/came/50.avif',
    ],
  },
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex justify-center items-center py-6 md:py-12 bg-white px-0 md:px-16 font-poppins">
      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Conditional layout for the first slide */}
            {index === 0 ? (
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div
                  className="text-sm md:text-lg font-semibold text-gray-800"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)', // Normal orientation on left
                  }}
                >
                  {slide.title}
                </div>
                <div className="flex justify-center items-center w-full gap-4">
                  {slide.logos.map((logo, idx) => (
                    <div key={idx} className="flex justify-center">
                      <img
                        src={logo}
                        alt={`Logo ${idx + 1}`}
                        className="rounded-none shadow-none w-40 h-40 object-contain" // Removed background styling for transparency
                      />
                    </div>
                  ))}
                </div>
                <div
                  className="text-sm md:text-lg font-semibold text-gray-800"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(0deg)', // Upside-down and facing inside
                  }}
                >
                  {slide.title}
                </div>
              </div>
            ) : (
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div
                  className="text-sm md:text-lg font-semibold text-gray-800"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)', // Normal orientation on left
                  }}
                >
                  {slide.title}
                </div>
                <div
                  className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-items-center w-full px-6"
                  style={{ gridTemplateRows: 'repeat(2, auto)' }} // Enforcing only two rows
                >
                  {slide.logos.map((logo, idx) => (
                    <div key={idx} className="flex justify-center">
                      <img
                        src={logo}
                        alt={`Logo ${idx + 1}`}
                        className="rounded-none shadow-none w-auto h-auto object-contain" // Logos will scale dynamically without any background styling
                      />
                    </div>
                  ))}
                </div>
                <div
                  className="text-sm md:text-lg font-semibold text-gray-800"
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(0deg)', // Upside-down and facing inside
                  }}
                >
                  {slide.title}
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
