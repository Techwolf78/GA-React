import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const Highlights = () => {
  // List of image URLs for the highlights section
  const imageUrls = [
    "Event/h5.avif",
    "Event/h1.avif",
    "Event/h3.avif",
    "Event/h4.avif",
    "Event/h2.avif",
    "Event/h6.avif",
    "Event/h7.avif",
    "Event/h8.avif",
  ];

  // State to track loading status for each image
  const [loading, setLoading] = useState(Array(imageUrls.length).fill(true));

  // Simulate image loading (replace with your actual image loading logic)
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Animation only happens once (not repeated)
    });

    const loadImages = () => {
      setTimeout(() => {
        setLoading(Array(imageUrls.length).fill(false)); // Simulate all images loaded
      }, 2000); // Simulate a 2-second delay
    };

    loadImages();
  }, []);

  // Handle image load event to update loading state
  const handleImageLoad = (index) => {
    setLoading((prev) => {
      const newLoadingState = [...prev];
      newLoadingState[index] = false;
      return newLoadingState;
    });
    // GSAP animation to fade in the images when they load
    gsap.fromTo(
      `.highlight-image-${index}`,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  };

  return (
    <div className="px-2 md:px-8 py-4 bg-white font-poppins">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold py-0 md:py-6 mb-2">
        Event Highlights
      </h1>
      <div className="grid grid-cols-12 gap-4">
        {/* First Column (Large Image on Top, Small Images Below) */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <div
            className="relative w-full h-72 group"
            data-aos="fade-up" // Add AOS animation here
            data-aos-delay="100" // Add delay for a staggered effect
          >
            {loading[0] ? (
              <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
            ) : (
              <img
                src={imageUrls[0]}
                alt="Main Event Highlight"
                className="highlight-image-0 w-full h-full object-cover rounded-lg"
                onLoad={() => handleImageLoad(0)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 left-0 text-white text-sm md:text-base font-semibold p-4">
                Event Highlight
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="relative w-1/2 h-56 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {loading[1] ? (
                <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
              ) : (
                <img
                  src={imageUrls[1]}
                  alt="Ground Zero Session"
                  className="highlight-image-1 w-full h-full object-cover rounded-lg"
                  onLoad={() => handleImageLoad(1)}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
                <p className="absolute top-0 left-0 text-white text-sm font-semibold p-4">
                  Ground Zero Session
                </p>
              </div>
            </div>
            <div
              className="relative w-1/2 h-56 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {loading[2] ? (
                <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
              ) : (
                <img
                  src={imageUrls[2]}
                  alt="Networking Event"
                  className="highlight-image-2 w-full h-full object-cover rounded-lg"
                  onLoad={() => handleImageLoad(2)}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
                <p className="absolute top-0 left-0 text-white text-sm font-semibold p-4">
                  Celebrating HR Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column (Tall Event Image with Small One Below) */}
        <div
          className="col-span-12 md:col-span-3 flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* First Tall Image */}
          <div className="relative w-full h-80 group">
            {loading[3] ? (
              <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
            ) : (
              <img
                src={imageUrls[3]}
                alt="Guest Speaker Session"
                className="highlight-image-3 w-full h-full object-cover rounded-lg"
                onLoad={() => handleImageLoad(3)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute top-0 left-0 text-white text-lg font-semibold p-4">
                Welcome Note
              </p>
            </div>
          </div>

          {/* Second Smaller Image */}
          <div className="relative w-full h-48 group" data-aos="fade-up" data-aos-delay="500">
            {loading[4] ? (
              <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
            ) : (
              <img
                src={imageUrls[4]}
                alt="Panel Discussion"
                className="highlight-image-4 w-full h-full object-cover rounded-lg"
                onLoad={() => handleImageLoad(4)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute top-0 left-0 text-white text-sm font-semibold p-4">
                Panel Discussion
              </p>
            </div>
          </div>
        </div>

        {/* Third Column (Wide Event Image with Small One Below and Another Image) */}
        <div
          className="col-span-12 md:col-span-4 flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* First Wide Image */}
          <div className="relative w-full h-60 group">
            {loading[5] ? (
              <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
            ) : (
              <img
                src={imageUrls[5]}
                alt="Closing Note"
                className="highlight-image-5 w-full h-full object-cover rounded-lg"
                onLoad={() => handleImageLoad(5)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 left-0 text-white text-base md:text-lg font-semibold p-4">
                Closing Note
              </p>
            </div>
          </div>

          {/* Second Smaller Image */}
          <div className="relative w-full h-24 group" data-aos="fade-up" data-aos-delay="700">
            {loading[6] ? (
              <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
            ) : (
              <img
                src={imageUrls[6]}
                alt="Academic Addressal"
                className="highlight-image-6 w-full h-full object-cover rounded-lg"
                onLoad={() => handleImageLoad(6)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 right-0 text-white text-sm font-semibold p-4">
                Academic Addressal
              </p>
            </div>
          </div>

          {/* Third Image (Additional Image Below) */}
          <div className="relative w-full h-40 group" data-aos="fade-up" data-aos-delay="800">
            {loading[7] ? (
              <div className="w-full h-full bg-blue-700 shimmer rounded-lg"></div>
            ) : (
              <img
                src={imageUrls[7]}
                alt="Networking"
                className="highlight-image-7 w-full h-full object-cover rounded-lg object-top"
                onLoad={() => handleImageLoad(7)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 left-0 text-white text-sm font-semibold p-4">
                Networking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for shimmer effect */}
      <style jsx>{`
        /* Shimmer animation */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        /* Light grey shimmer effect */
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(240, 240, 240, 0) 25%,
            rgba(200, 200, 200, 0.5) 50%,
            rgba(240, 240, 240, 0) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Highlights;
