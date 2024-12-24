import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleMouseEnter = (e) => {
      const card = e.currentTarget;
      const textContainer = card.querySelector(".card-text");
      const overlay = card.querySelector(".card-overlay");

      const timeline = gsap.timeline();
      timeline.to(overlay, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .to(textContainer, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }, "-=0.4");
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      const textContainer = card.querySelector(".card-text");
      const overlay = card.querySelector(".card-overlay");

      const timeline = gsap.timeline();
      timeline.to([overlay, textContainer], {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[70vh] bg-[url('Event/h5.JPG')] bg-cover bg-center text-white flex items-center justify-center">
        {/* Black Overlay with lower z-index */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Text Content with higher z-index */}
        <div className="relative text-center px-6 md:px-12 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Synergy Sphere 2024
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl mb-6 font-cookie">
            &quot;Unison of Academia & Industry&quot;
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            16<sup>th</sup> December 2024 | Ritz Carlton
          </p>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-16 px-1 md:px-6 bg-gray-100 relative">
  <div className="max-w-4xl mx-auto relative z-10">
    {/* Card Container with Flexbox and Absolute Positioning */}
    <div className="absolute top-[-200px] left-0 w-full flex gap-2 md:gap-12 justify-between">
      {/* Card 1 - Ground Zero */}
      <div className="card relative bg-[url('Event/h1.JPG')] bg-cover bg-center shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-all h-60 sm:h-72 flex-grow flex-shrink-1 w-[30%]">
        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-amber-800 to-transparent opacity-0 z-10"></div>
        <div className="card-text absolute bottom-0 md:bottom-6 left-6 z-20 opacity-0 transform translate-y-10">
          <h3 className="text-xs sm:text-xl font-semibold mb-3 text-white">
            Ground Zero: Industry Challenges
          </h3>
          <p className="text-gray-100 mb-4 text-xs sm:text-base">
            A discussion on the critical challenges faced by industries today, focusing on operational issues and ground-level problems.
          </p>
        </div>
      </div>

      {/* Card 2 - Panel Discussion */}
      <div className="card relative bg-[url('Event/panel1.JPG')] bg-cover bg-center shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-all h-60 sm:h-72 flex-grow flex-shrink-1 w-[30%]">
        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-amber-800 to-transparent opacity-0 z-10"></div>
        <div className="card-text absolute bottom-0 md:bottom-6 left-6 z-20 opacity-0 transform translate-y-10">
          <h3 className="text-xs sm:text-xl font-semibold mb-3 text-white">
            Panel Discussion: Skill Gap Dilemma
          </h3>
          <p className="text-gray-100 mb-4 text-xs sm:text-base">
            Industry leaders discuss the growing skill gap among Indian youth and how to bridge this divide for better workforce alignment.
          </p>
        </div>
      </div>

      {/* Card 3 - Key Addressal */}
      <div className="card relative bg-[url('Event/keyinda.JPG')] bg-cover bg-center  shadow-lg rounded-lg p-6 sm:p-8 hover:shadow-2xl transition-all h-60 sm:h-72 flex-grow flex-shrink-1 w-[30%]">
        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-amber-800 to-transparent opacity-0 z-10"></div>
        <div className="card-text absolute bottom-0 md:bottom-6 left-6 z-20 opacity-0 transform translate-y-10">
          <h3 className="text-xs sm:text-xl font-semibold mb-3 text-white">
            Key Addressal: Industry Insights
          </h3>
          <p className="text-gray-100 mb-4 text-xs sm:text-base">
            Senior HR leaders address industry benefits, emerging issues, and how businesses can adapt to future challenges.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default HeroSection;
