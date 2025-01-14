import { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const handleMouseEnter = (e) => {
      const card = e.currentTarget;
      const textContainer = card.querySelector(".card-text");
      const overlay = card.querySelector(".card-overlay");

      gsap.to(overlay, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(textContainer, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      const textContainer = card.querySelector(".card-text");
      const overlay = card.querySelector(".card-overlay");

      gsap.to(overlay, {
        opacity: 0,
        x: "-100%",
        y: "100%",
        duration: 0.4,
        ease: "power2.in",
      });
      gsap.to(textContainer, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.in",
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
<section className="relative w-full h-[70vh] bg-[url('/Event/h5bg.avif')] bg-cover bg-center text-white flex items-center justify-center font-poppins">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
  
  {/* Text Content with higher z-index */}
  <div className="relative text-center px-6 md:px-12 z-20">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
      Synergy Sphere 2024
    </h1>
    <p className="text-xl md:text-3xl mb-6 font-cookie">
      &quot;Unison of Academia & Industry&quot;
    </p>
    <p className="text-lg md:text-xl mb-6">
      16<sup>th</sup> December 2024 | Ritz Carlton
    </p>
  </div>
</section>


      {/* Card Section */}
      <section className="py-16 px-2 md:px-6 bg-gray-100 relative h-[0vh] md:h-[20vh]">
        <div className="max-w-4xl mx-auto">
          {/* Card Container with Flexbox */}
        <div className="flex gap-2 md:gap-12 relative z-10 top-[-140px] md:top-[-200px]">
            {/* Card 1 */}
            <div className="card relative bg-[url('/Event/h1.avif')] bg-cover bg-center shadow-lg rounded-lg p-2 md:p-6 hover:shadow-2xl transition-all h-48 md:h-72 overflow-hidden flex-1">
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#b5651d] opacity-0 z-10"></div>
              <div className="card-text absolute bottom-1 left-1 md:bottom-6 md:left-6 z-20 opacity-0 transform translate-y-10">
                <h3 className="text-xs sm:text-xl font-semibold mb-1 md:mb-4 text-white">
                  Ground Zero: Industry Challenges
                </h3>
                {/* <p className="text-gray-100 mb-4 text-xs sm:text-base">
                  A discussion on the critical challenges faced by industries
                  today, focusing on operational issues and ground-level
                  problems.
                </p> */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="card relative bg-[url('/Event/panel1.avif')] bg-cover bg-center shadow-lg rounded-lg p-2 md:p-6 hover:shadow-2xl transition-all h-48 md:h-72 overflow-hidden flex-1">
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#b5651d] opacity-0 z-10"></div>
              <div className="card-text absolute bottom-1 left-1 md:bottom-6 md:left-6 z-20 opacity-0 transform translate-y-10">
                <h3 className="text-xs sm:text-xl font-semibold mb-1 md:mb-4 text-white">
                  Panel Discussion: Skill Gap Dilemma
                </h3>
                {/* <p className="text-gray-100 mb-4 text-xs sm:text-base">
                  Industry leaders discuss the growing skill gap among Indian
                  youth and how to bridge this divide for better workforce
                  alignment.
                </p> */}
              </div>
            </div>

            {/* Card 3 */}
            <div className="card relative bg-[url('/Event/keyinda.avif')] bg-cover bg-left shadow-lg rounded-lg p-2 md:p-6 hover:shadow-2xl transition-all h-48 md:h-72 overflow-hidden flex-1">
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-transparent to-[#b5651d] opacity-0 z-10"></div>
              <div className="card-text absolute bottom-1 left-1 md:bottom-6 md:left-6 z-20 opacity-0 transform translate-y-10">
                <h3 className="text-xs sm:text-xl font-semibold mb-1 md:mb-4 text-white">
                  Key Addressal: Industry Insights
                </h3>
                {/* <p className="text-gray-100 mb-4 text-xs sm:text-base">
                  Senior HR leaders address industry benefits, emerging issues,
                  and how businesses can adapt to future challenges.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
