import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
const DigitalMarketing = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef();
 
  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");
 
    // Adjusted positions for first-row and second-row alternative placement
    const positions = [
      { x: -250, y: -200, rotation: -12 }, // Top left (tilted)
      { x: 0, y: -200, rotation: 0 },        // Top center (straight)
      { x: 250, y: -200, rotation: 12 },       // Top right (tilted)
      { x: -190, y: 100, rotation: -9 },       // Bottom left (centered between first-row left & center)
      { x: 190, y: 100, rotation: 9 },         // Bottom right (centered between first-row center & right)
    ];
 
    cards.forEach((card, index) => {
      if (positions[index]) {
        gsap.set(card, {
          x: positions[index].x,
          y: positions[index].y,
          opacity: 0,
          rotation: positions[index].rotation,
        });
      }
    });
 
    // Animate to final position on scroll
    cards.forEach((card, index) => {
      if (positions[index]) {
        gsap.to(card, {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: positions[index].rotation, // Keeps the tilt only for first-row cards
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=100",
            end: "center center",
            scrub: 0.5,
          },
        });
      }
    });
 
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
 
  return (
    <div
      ref={containerRef}
      className="block lg:hidden bg-blue-950 px-4 sm:px-8 md:px-16 py-8 lg:py-12 overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 sm:mb-8">
          We Help Business Grow Digitally
        </h2>
        <p className="text-lg sm:text-xl font-medium text-white mb-12">
          Complete Digital Marketing Solutions
        </p>
 
        <div className="grid grid-cols-1 sm:grid-row-3 gap-2 gap-y-10 px-1 ml-3 justify-center">
          {[
            "Paid Ads",
            "Performance Marketing",
            "Lead Generation",
            "Social Media Marketing",
            "Website Design & Development",
          ].map((title, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card relative w-72 h-48 bg-yellow-400 p-7 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={
                    title === "Social Media Marketing"
                      ? "journey/Social-Media-Marketing.png"
                      : title === "Website Design & Development"
                      ? "journey/Website-Design-and-Development.png"
                      : `journey/${title.replace(" ", "-")}.png`
                  }
                  alt={`${title} Icon`}
                  className="h-20 object-contain"
                />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-xl lg:text-2xl font-medium text-gray-950">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      <div className="text-center">
        <a href="/contact">
          <button className="mt-8 bg-blue-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
            ENQUIRE NOW
          </button>
        </a>
      </div>
    </div>
  );
};
 
export default DigitalMarketing;