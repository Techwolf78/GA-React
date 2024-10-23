import React, { useEffect } from 'react';
import { MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function ElevateYourWorkforce() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#E1F2FB] mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4 roboto-regular relative">
      <div className="container mx-auto flex flex-col lg:flex-row lg:space-x-8">
        {/* Left column: Image */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center" data-aos="fade-right">
          <img 
            src="CorporatePage/elevate.png" 
            alt="Illustration of corporate training" 
            className="rounded-lg w-full h-auto object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
          />
        </div>

        {/* Right column: Content */}
        <div className="lg:w-2/3" data-aos="fade-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003073] mb-4">ELEVATE YOUR WORKFORCE</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Our tailored approach bridges the skills gap and fosters a culture of continuous learning. With our expertise, organizations can transform their workforce into a dynamic and resilient team, ready to tackle modern business challenges and drive sustainable success.
          </p>

          {/* Feature List */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Customized Corporate Training",
              "Addressing Challenges",
              "Essential Skills Development",
              "Empowering Teams",
              "Bridging the Skills Gap",
              "Transformative Expertise",
              "Driving Sustainable Success",
              "Measurable Outcomes"
            ].map((title, index) => (
              <div key={index} className="flex items-start mb-4" data-aos="fade-up" data-aos-duration="500" data-aos-delay={index * 100}>
                <div className="flex items-center justify-center w-6 h-6 border border-[#003073] rounded-md mr-4 mt-1 bg-[#003073]">
                  <MdCheck className="text-[#FFC80E] w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#003073]">{title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link to="/contact" onClick={handleScrollToTop}>
              <button className="bg-[#003073] text-white py-2 px-6 rounded-md font-semibold hover:bg-[#002060] hover:text-[#FFC80E] transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003073] focus:ring-opacity-50">
                See How It Works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ElevateYourWorkforce;
