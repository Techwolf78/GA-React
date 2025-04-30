import { useEffect, useState, useRef } from "react";
import skillWorkshop from "../../../public/MasterClass/o1.webp";
import studentCollab from "../../../public/MasterClass/o2.webp";
import instructorSession from "../../../public/MasterClass/o4.webp";
import realProjects from "../../../public/MasterClass/o3.webp";
import inside3 from "../../../public/MasterClass/5.webp";
import img6 from "../../../public/MasterClass/6.webp";
import img7 from "../../../public/MasterClass/16.webp";
import img8 from "../../../public/MasterClass/8.webp";
import img9 from "../../../public/MasterClass/9.webp";
import img10 from "../../../public/MasterClass/10.webp";
import img11 from "../../../public/MasterClass/1.webp";
import img12 from "../../../public/MasterClass/12.webp";
import img13 from "../../../public/MasterClass/13.webp";
import img14 from "../../../public/MasterClass/14.webp";
import img15 from "../../../public/MasterClass/15.webp";

const allImages = [
  skillWorkshop,
  studentCollab,
  instructorSession,
  realProjects,
  inside3,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

function Overview() {
  const [visibleImages, setVisibleImages] = useState(() => getRandomImages(9));
  const imageRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages(getRandomImages(9));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            img.src = src;
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, [visibleImages]);

  function getRandomImages(count) {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <>
      <style>
        {`
          .circle-wrapper {
            width: 100%;
            max-width: 500px;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .circle-grid-3x3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            width: 100%;
            height: 100%;
          }

          .circle-grid-3x3 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.3s ease-in-out;
          }
        `}
      </style>

      <section
        id="overview"
        className="scroll-mt-24 flex flex-col md:flex-row w-full bg-white px-6 md:px-16 py-6 md:py-12 gap-10 md:items-stretch"
      >
        {/* Left Side with Background 3 */}
        <div className="md:w-1/2 flex flex-col justify-center relative">
          <div className="absolute  right-0 text-[18rem] md:text-[36rem] leading-none font-black text-black/10 select-none pointer-events-none z-0">
            3
          </div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-8 gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#027093] leading-normal">
                <span className="inline-block">
                  <span className="inline-block relative">
                    Only
                    <span className="absolute left-0 bottom-[-4px] h-1 w-12 bg-[#00A59F] my-2 rounded-full translate-y-2"></span>
                  </span>
                </span>{" "}
                platform where training, hiring, and transformation happen side
                by side.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Since its inception, the Masterclass series has stood apart — for
              how grand it looks & for how deeply it connects. It’s where
              India's top corporates, trainers, and college stakeholders sit
              together to redefine education, placements, and skill-building.
              With each edition, the stakes have risen — and Masterclass 3.0 is
              the ultimate elevation.
            </p>
          </div>
        </div>

        {/* Right Side: Circle Grid */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="circle-wrapper">
            <div className="circle-grid-3x3">
              {visibleImages.map((img, idx) => (
                <img
                  key={idx}
                  ref={(el) => (imageRefs.current[idx] = el)}
                  data-src={img}
                  alt={`Grid Img ${idx}`}
                  src=""
                  className="lazyload"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
