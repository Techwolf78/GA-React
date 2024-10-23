import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const CollegeInfoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration as needed
  }, []);

  const points = [
    "Complete offline mode",
    "Content approved by the Industry & then delivered",
    "Real – Scenario based learning"
  ];

  return (
    <section className="bg-[#122949] text-white mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4">
      <div className="flex flex-col md:flex-row justify-start items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        {points.map((text, index) => (
          <div
            key={index}
            data-aos="fade-up" // Animation type
            data-aos-delay={`${index * 200}`} // Stagger each item by 200ms
            className="flex items-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl space-x-2"
          >
            <img
              src="Clgimage/checklist.png"
              alt="Tick"
              className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeInfoSection;
