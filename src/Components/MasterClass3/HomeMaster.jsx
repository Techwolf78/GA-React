import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GallerySlider from "./GallerySlider";
import ExploreButton from "./ExploreButton"; // Import the new component
import inside3 from "../../../public/MasterClass/5.avif";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'BritannicBold';
            src: url('/fonts/BritannicBold-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          .embedded-number {
            font-family: 'BritannicBold', sans-serif;
            font-size: 100px;
            font-weight: 900;
            line-height: 1;
            background-image: url(${inside3});
            background-size: cover;
            background-position: center;
            color: transparent;
            -webkit-text-stroke: 2px #000000;
            -webkit-background-clip: text;
            background-clip: text;
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            vertical-align: middle;
          }

          @media (max-width: 1024px) {
            .embedded-number {
              font-size: 80px;
            }
          }

          @media (max-width: 768px) {
            .embedded-number {
              font-size: 60px;
              -webkit-text-stroke: 1px #00BFA6;
            }
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <div className="relative flex flex-col md:flex-row h-auto md:h-screen bg-[#00a59f] overflow-hidden px-4 md:px-16">
        {/* Left Side */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-start bg-[#00bfa6] px-4 py-10 md:py-0"
          data-aos="fade-right"
        >
          <div className="overflow-x-auto no-scrollbar w-full">
            <h1
              className="text-4xl md:text-6xl whitespace-nowrap font-bold mb-2 text-[#000000] flex items-center gap-2"
              data-aos="zoom-in"
              data-aos-offset="30"
            >
              Masterclass <span className="embedded-number">3.0</span>
            </h1>
          </div>
          <p
            className="text-xl md:text-3xl text-[#000000] font-medium mb-3 md:mb-6"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            The Trident Traverse: Training. Hiring. Transformation.
          </p>
          <p
            className="text-base md:text-xl text-[#000000] mb-3 md:mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Masterclass 3.0 is a powerful confluence of decision-makers,
            industry leaders and academic visionaries. <br />
            Gryphon Academy's flagship initiative returns with a sharper focus,
            stronger presence, and a single goal: aligning the future of talent
            with the pulse of the real world.
          </p>
          <ExploreButton /> {/* Use the new component here */}
        </div>

        {/* Right Side - GallerySlider with AOS already added */}
        <GallerySlider />
      </div>
    </>
  );
}

export default Home;