import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

// Use direct URLs from public folder
const allImages = [
  "/MasterClass/o1.avif",
  "/MasterClass/o2.avif",
  "/MasterClass/o4.avif",
  "/MasterClass/o3.avif",
  "/MasterClass/5.avif",
  "/MasterClass/6.avif",
  "/MasterClass/16.avif",
  "/MasterClass/8.avif",
  "/MasterClass/9.avif",
  "/MasterClass/10.avif",
  "/MasterClass/1.avif",
  "/MasterClass/12.avif",
  "/MasterClass/13.avif",
  "/MasterClass/14.avif",
  "/MasterClass/15.avif",
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
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

ImageWithLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
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
        <div
          className="md:w-1/2 flex flex-col justify-center relative"
          data-aos="fade-up"
        >
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
              platform where training, hiring, and transformation happen side by
              side.
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Since its inception, the Masterclass series has stood apart — for
              how grand it looks & for how deeply it connects. It’s where
              India&apos;s top corporates, trainers, and college stakeholders
              sit together to redefine education, placements, and
              skill-building. With each edition, the stakes have risen — and
              Masterclass 3.0 is the ultimate elevation.
            </p>
          </div>
        </div>

        {/* Right Side - Circle Grid */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="circle-wrapper">
            <div className="circle-grid-3x3">
              {hasEntered &&
                visibleImages.map((img, idx) => (
                  <ImageWithLoader
                    key={idx}
                    src={img}
                    alt={`Grid Img ${idx}`}
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
