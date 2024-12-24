import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from 'react-router-dom';

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '10%',
    focusOnSelect: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="py-10 w-full flex items-center justify-center bg-[#6c451b] font-poppins">
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {/* Slide 1: Synergy Sphere */}
          <div className="px-4 flex justify-center items-center">
            <div className="flex w-full max-w-screen-xl items-center bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image on the Left */}
              <div 
                className="w-1/2 h-[500px] bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(Event/eventGuest.JPG)',
                }} 
              ></div>

              {/* Content on the Right */}
              <div className="w-1/2 p-6 space-y-4">
                <h2 className="text-4xl font-bold text-black">Synergy Sphere: Connecting Ideas & Innovation</h2>
                <p className="text-lg text-black">
                  Join us at the Synergy Sphere, where brilliant minds collaborate to innovate and shape the future. A place where ideas come together to spark change.
                </p>
                <button className="bg-black px-6 py-2 text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all" aria-label="Learn more about Synergy Sphere">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2: Ground Zero */}
          <div className="px-4 flex justify-center items-center">
            <div className="flex w-full max-w-screen-xl items-center bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image on the Left */}
              <div 
                className="w-1/2 h-[500px] bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(Event/h1.JPG)',  // Changed background image for differentiation
                }} 
              ></div>

              {/* Content on the Right */}
              <div className="w-1/2 p-6 space-y-4">
                <h2 className="text-4xl font-bold text-black">Ground Zero: Building Foundations for Success</h2>
                <p className="text-lg text-black">
                  The journey to success begins at Ground Zero, where every step counts. Let’s build the foundations that lead to greatness, together.
                </p>
                {/* Use Link to navigate to DecEventGroundZero */}
                <Link to="/ground-zero">
                  <button className="bg-black px-6 py-2 text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all" aria-label="Learn more about Ground Zero">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

{/* Slide 4: Industry Panel Discussion */}
<div className="px-4 flex justify-center items-center">
  <div className="flex w-full max-w-screen-xl items-center bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Image on the Left */}
    <div 
      className="w-1/2 h-[500px] bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(Event/h2.JPG)',  // Replace with relevant image
      }} 
    ></div>

    {/* Content on the Right */}
    <div className="w-1/2 p-6 space-y-4">
      <h2 className="text-4xl font-bold text-black">Industry Panel Discussion: Insights from HR Leaders</h2>
      <p className="text-lg text-black">
        Join the conversation as prominent HR leaders and CHROs discuss the future of work, evolving leadership strategies, and the impact of innovation in the HR landscape. Gain valuable insights from their experiences and vision for the future.
      </p>
      <button className="bg-black px-6 py-2 text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all" aria-label="Learn more about the Industry Panel Discussion">
        Learn More
      </button>
    </div>
  </div>
</div>

        </Slider>
      </div>

      <style>{`
  .slick-slide {
    opacity: 1;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  .slick-center .slick-slide {
    opacity: 1;
    transform: scale(1.05);
  }

  .slick-slide:not(.slick-center) .bg-cover {
    transform: scale(0.95);
    opacity: 0.85;
  }

  .slick-dots {
    bottom: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Default style for the dots */
  .slick-dots li button {
    width: 12px;  /* Size of the dot */
    height: 12px;  /* Size of the dot */
    border-radius: 50%;  /* Circle shape */
    background-color: lightgray;  /* Light gray color for inactive dots */
    opacity: 1;  /* Fully visible when inactive */
    border: none;  /* Remove border */
    outline: none;  /* Remove outline */
    padding: 0;  /* Remove any internal padding */
    position: relative;  /* Allow for absolute positioning of any inner content */
  }

  /* Remove the inner dot */
  .slick-dots li button:before {
    content: '';  /* Remove the default inner content */
  }

.slick-dots li.slick-active button {
  background-color: #D2B48C;  /* Light brown color for active dot */
  transform: scale(1.2);  /* Slightly enlarge the active dot */
}


  /* Optional: Hover effect */
  .slick-dots li button:hover {
    background-color: gray;  /* Hover color */
  }

  .bg-primary {
    background-color: #007bff;
  }
`}</style>


    </div>
  );
};

export default CustomSlider;
