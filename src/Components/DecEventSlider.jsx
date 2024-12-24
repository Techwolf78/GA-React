import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sponsorsData = [
  {
    title: 'ACADEMIC SPONSORS',
    logos: [
      'Event/academic1.png',
      'Event/academic2.png',
      'Event/academic3.png',
    ],
  },
  {
    title: 'PARTICIPATING DELIGATES',
    logos: [
      'Event/came/2.png',
      'Event/came/3.png',
      'Event/came/7.png',
      'Event/came/8.png',
      'Event/came/9.png',
      'Event/came/10.png',
      'Event/came/11.png',
      'Event/came/12.png',
      'Event/came/13.png',
      'Event/came/15.png',
      'Event/came/19.png',
      'Event/came/20.png',
      'Event/came/41.png',
      'Event/came/42.png',
      'Event/came/43.png',
      'Event/came/44.png',
    ],
  },
  {
    title: 'PARTICIPATING DELIGATES',
    logos: [
      'Event/came/21.png',
      'Event/came/22.png',
      'Event/came/24.png',
      'Event/came/29.png',
      'Event/came/30.png',
      'Event/came/31.png',
      'Event/came/32.png',
      'Event/came/34.png',
      'Event/came/37.png',
      'Event/came/38.png',
      'Event/came/39.png',
      'Event/came/40.png',
      'Event/came/46.png',
      'Event/came/47.png',
      'Event/came/48.png',
      'Event/came/50.png',
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
    <div className="flex justify-center items-center py-6 md:py-12 bg-white px-0 md:px-16">
      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Conditional layout for the first slide */}
            {index === 0 ? (
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div
                  className="text-sm md:text-lg font-semibold text-gray-800"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
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
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {slide.title}
                </div>
              </div>
            ) : (
              <div className="flex flex-row justify-between items-center w-full px-4">
                <div
                  className="text-sm md:text-lg font-semibold text-gray-800"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
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
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
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
