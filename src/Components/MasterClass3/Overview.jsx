import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import skillWorkshop from "../../../public/MasterClass/o1.avif";
import studentCollab from "../../../public/MasterClass/o2.avif";
import instructorSession from "../../../public/MasterClass/o4.avif";
import realProjects from "../../../public/MasterClass/o3.avif";
import inside3 from "../../../public/MasterClass/5.avif";
import img6 from "../../../public/MasterClass/6.avif";
import img7 from "../../../public/MasterClass/16.avif";
import img8 from "../../../public/MasterClass/8.avif";
import img9 from "../../../public/MasterClass/9.avif";
import img10 from "../../../public/MasterClass/10.avif";
import img11 from "../../../public/MasterClass/1.avif";
import img12 from "../../../public/MasterClass/12.avif";
import img13 from "../../../public/MasterClass/13.avif";
import img14 from "../../../public/MasterClass/14.avif";
import img15 from "../../../public/MasterClass/15.avif";

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

// Loader component for each image
const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-6 h-6 border-2 border-t-2 border-[#00A59F] rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

function Overview() {
  const [visibleImages, setVisibleImages] = useState(() => getRandomImages(9));
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 60,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Rotate images every 2 seconds after entry
  useEffect(() => {
    if (!hasEntered) return;
    const interval = setInterval(() => {
      setVisibleImages(getRandomImages(9));
    }, 2000);
    return () => clearInterval(interval);
  }, [hasEntered]);

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
      `}
      </style>

      <section
        id="overview"
        ref={sectionRef}
        className="scroll-mt-24 flex flex-col md:flex-row w-full bg-white px-6 md:px-16 py-6 md:py-12 gap-10 md:items-stretch"
      >
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center relative" data-aos="fade-up">
        <div
  className="absolute text-[28rem] md:text-[36rem] leading-none font-black text-black/10 select-none pointer-events-none z-0 
             left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             md:left-auto md:right-0 md:top-0 md:translate-x-0 md:translate-y-0"
>
  3
</div>


          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#027093] leading-normal mb-4">
              <span className="relative inline-block">
                Only
                <span className="absolute left-0 bottom-[-4px] h-1 w-12 bg-[#00A59F] my-2 rounded-full translate-y-2"></span>
              </span>{" "}
              platform where training, hiring, and transformation happen side by side.
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Since its inception, the Masterclass series has stood apart — for how grand it looks & for how deeply it connects. It’s where India&apos;s top corporates, trainers, and college stakeholders sit together to redefine education, placements, and skill-building. With each edition, the stakes have risen — and Masterclass 3.0 is the ultimate elevation.
            </p>
          </div>
        </div>

        {/* Right Side - Circle Grid */}
        <div className="md:w-1/2 flex justify-center items-center" >
          <div className="circle-wrapper">
            <div className="circle-grid-3x3">
              {hasEntered &&
                visibleImages.map((img, idx) => (
                  <ImageWithLoader key={idx} src={img} alt={`Grid Img ${idx}`} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Overview;

