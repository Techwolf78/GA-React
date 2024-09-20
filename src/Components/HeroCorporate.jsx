import React, { useEffect, useRef, useState } from 'react';

const carouselItems = [
  "/Corporate Training Page Zip/Corporate Training.svg1_Images/Corporate Training.svg1_ImgID1.png",
  "/Corporate Training Page Zip/Corporate Training.svg2_Images/Corporate Training.svg2_ImgID1.png",
  "/Corporate Training Page Zip/Corporate Training.svg3_Images/Corporate Training.svg3_ImgID1.png",
  "/Corporate Training Page Zip/Corporate Training.svg1_Images/Corporate Training.svg1_ImgID1.png",
  "/Corporate Training Page Zip/Corporate Training.svg2_Images/Corporate Training.svg2_ImgID1.png"
];

function HeroCorporate() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

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
          ref={carouselRef}
        >
          {/* Carousel wrapper */}
          <div className="relative w-full h-full overflow-hidden">
            {carouselItems.map((src, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out absolute w-full h-full ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={src}
                  className="w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="absolute z-30 flex justify-center bottom-5 left-1/2 -translate-x-1/2 space-x-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#ffc700]' : 'bg-[#2e4d80]'}`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>

          {/* Centered Heading */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center p-6 max-w-4xl bg-transparent"> {/* Adjusted for full transparency */}
              <h1 className="text-3xl font-bold mb-4 text-[#ffc700]">
                Invest in Your Employees, Invest in Your Organization’s Future: Gryphon Academy Corporate Training
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <section className="bg-[#003073] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-4xl font-semibold mb-6 text-[#ffc700] underline">Elevate Your Workforce</p>
            <p className="text-lg text-[#ffffff]">
              Elevate your workforce to new heights with Gryphon Academy’s time-tested approach to corporate skill development.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-[#ffc700]">Customized Training Programs</h3>
              <p className="text-lg text-[#ffffff] mb-6">
                Our specifically curated customized Corporate trainings are designed to meet your unique needs and requirements. With affiliations to over 450+ corporate entities across diverse industries such as manufacturing, telecommunications, IT, power, textile and government, we address industry-specific challenges and provide corporate learning solutions.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#ffc700]">Measurable Business Impact</h3>
              <p className="text-lg text-[#ffffff]">
                The result? Measurable business impact. Our data-driven approach ensures your training investment delivers a clear ROI.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-[#ffc700]">Targeted Training Solutions</h3>
              <p className="text-lg text-[#ffffff]">
                At Gryphon Academy, we use industry-specific assessments to uncover your workforce’s critical skill gaps. We then partner with you to design targeted training programs that directly address your pain points and strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroCorporate;
