import React, { useEffect, useRef, useState } from 'react';

function HeroCorporate() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const items = carousel.querySelectorAll('[data-carousel-item]');
    const totalItems = items.length;

    function showNextSlide() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }

    const interval = setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="relative w-full h-[50vh]">
        {/* Carousel Container */}
        <div
          id="default-carousel"
          className="relative w-full h-full"
          data-carousel="slide"
          ref={carouselRef}
        >
          {/* Carousel wrapper */}
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            {/* Item 1 */}
            <div
              className={`duration-700 ease-in-out absolute w-full h-full ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <img
                src="/Corporate Training Page Zip/Corporate Training.svg1_Images/Corporate Training.svg1_ImgID1.png"
                className="w-full h-full object-cover"
                alt="Slide 1"
              />
            </div>
            {/* Item 2 */}
            <div
              className={`duration-700 ease-in-out absolute w-full h-full ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <img
                src="/Corporate Training Page Zip/Corporate Training.svg2_Images/Corporate Training.svg2_ImgID1.png"
                className="w-full h-full object-cover"
                alt="Slide 2"
              />
            </div>
            {/* Item 3 */}
            <div
              className={`duration-700 ease-in-out absolute w-full h-full ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <img
                src="/Corporate Training Page Zip/Corporate Training.svg3_Images/Corporate Training.svg3_ImgID1.png"
                className="w-full h-full object-cover"
                alt="Slide 3"
              />
            </div>
            {/* Item 4 */}
            <div
              className={`duration-700 ease-in-out absolute w-full h-full ${currentIndex === 3 ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <img
                src="/Corporate Training Page Zip/Corporate Training.svg1_Images/Corporate Training.svg1_ImgID1.png"
                className="w-full h-full object-cover"
                alt="Slide 4"
              />
            </div>
            {/* Item 5 */}
            <div
              className={`duration-700 ease-in-out absolute w-full h-full ${currentIndex === 4 ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item
            >
              <img
                src="/Corporate Training Page Zip/Corporate Training.svg2_Images/Corporate Training.svg2_ImgID1.png"
                className="w-full h-full object-cover"
                alt="Slide 5"
              />
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="absolute z-30 flex justify-center bottom-5 left-1/2 -translate-x-1/2 space-x-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-300'}`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>

          {/* Centered Heading */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center p-6 rounded-lg max-w-4xl">
              <h1 className="text-3xl font-bold mb-4 text-white">
                Invest in Your Employees, Invest in Your Organization’s Future: Gryphon Academy Corporate Training
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <section className="bg-gradient-to-b from-white to-purple-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-4xl font-semibold mb-6 text-purple-700 underline">Elevate Your Workforce</p>
            <p className="text-lg text-gray-700">
              Elevate your workforce to new heights with Gryphon Academy’s time-tested approach to corporate skill development.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Customized Training Programs</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our specifically curated customized Corporate trainings are designed to meet your unique needs and requirements. With affiliations to over 450+ corporate entities across diverse industries such as manufacturing, telecommunications, IT, power, textile and government, we address industry-specific challenges and provide corporate learning solutions.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Measurable Business Impact</h3>
              <p className="text-lg text-gray-700">
                The result? Measurable business impact. Our data-driven approach ensures your training investment delivers a clear ROI.
              </p>
            </div>
            <div className="lg:w-1/2">
             
              <h3 className="text-2xl font-semibold mb-4">Targeted Training Solutions</h3>
              <p className="text-lg text-gray-700">
                At Gryphon Academy, we use industry-specific assessments to uncover your workforce’s critical skill gaps. We then partner with you to design targeted training programs that directly address your pain points and strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS */}
      <style jsx>{`
        [data-carousel-item] {
          transition: opacity 0.7s ease-in-out;
        }

        .relative {
          position: relative;
        }

        .absolute {
          position: absolute;
        }

        .w-full {
          width: 100%;
        }

        .h-full {
          height: 100%;
        }

        .object-cover {
          object-fit: cover;
        }

        .duration-700 {
          transition-duration: 0.7s;
        }

        .ease-in-out {
          transition-timing-function: ease-in-out;
        }

        .rounded-lg {
          border-radius: 0.5rem;
        }

        .bg-gray-100 {
          background-color: #f7fafc;
        }

        .text-gray-700 {
          color: #4a5568;
        }

        .text-white {
          color: #ffffff;
        }

        .text-3xl {
          font-size: 1.875rem;
        }

        .text-4xl {
          font-size: 2.25rem;
        }

        .font-bold {
          font-weight: 700;
        }

        .font-semibold {
          font-weight: 600;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }

        .mb-6 {
          margin-bottom: 1.5rem;
        }

        .py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .container {
    max-width: 1200px;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .lg\:flex-row {
    flex-direction: row;
  }

  .lg\:w-1\/2 {
    width: 50%;
  }

  .lg\:mb-0 {
    margin-bottom: 0;
  }

  .lg\:space-x-12 {
    margin-right: 3rem;
    margin-left: 3rem;
  }
`}</style>
</div>
);
}

export default HeroCorporate;