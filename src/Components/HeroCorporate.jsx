import React from 'react';

const backgroundImage = "/Corporate Training Page Zip/Corporate Training.png"; // Static image
const vectorImage = "/path/to/your/vector-image.png"; // Vector image for mobile

function HeroCorporate() {
  return (
    <div>
      {/* Heading Section */}
      <div className="relative w-full p-6">
        <div className="text-center lg:hidden">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFC80E]">
            Invest in Your Employees, Invest in Your Organization’s Future: Gryphon Academy Corporate Training
          </h1>
        </div>
        <div className="hidden lg:flex absolute top-36 left-20 z-20 max-w-[50%]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003073] break-words">
            Invest in Your Employees, Invest in Your Organization’s Future: Gryphon Academy Corporate Training
          </h1>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={backgroundImage}
          className="w-full h-auto object-contain"
          alt="Background"
        />
      </div>

      {/* Vector Image Section for Mobile */}
      <div className="lg:hidden relative w-full">
        <img
          src={vectorImage}
          className="w-full h-auto"
          alt=""
        />
      </div>

      {/* New Section */}
      <section className="bg-[#003073] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-3xl md:text-4xl font-semibold mb-6 text-[#FFC80E] underline">Elevate Your Workforce</p>
            <p className="text-lg md:text-xl text-[#ffffff]">
              Elevate your workforce to new heights with Gryphon Academy’s time-tested approach to corporate skill development.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FFC80E]">Customized Training Programs</h3>
              <p className="text-base md:text-lg text-[#ffffff] mb-6">
                Our specifically curated customized Corporate trainings are designed to meet your unique needs and requirements. With affiliations to over 450+ corporate entities across diverse industries such as manufacturing, telecommunications, IT, power, textile and government, we address industry-specific challenges and provide corporate learning solutions.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FFC80E]">Measurable Business Impact</h3>
              <p className="text-base md:text-lg text-[#ffffff]">
                The result? Measurable business impact. Our data-driven approach ensures your training investment delivers a clear ROI.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#FFC80E]">Targeted Training Solutions</h3>
              <p className="text-base md:text-lg text-[#ffffff]">
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
