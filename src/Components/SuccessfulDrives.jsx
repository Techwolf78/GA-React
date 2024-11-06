import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll } from '@react-three/drei';
import { easing } from 'maath';
import '../Components/util.js'; // Ensure you have the bent plane geometry and sine material defined

const SuccessfulDrives = () => {
  const images = [
   
    "journey/Campus 11.png",
    "journey/Campus 7.png",
    "journey/Campus 9.png",
    "journey/Campus 3.png",
    "journey/Campus 5.png",
    "journey/Campus 8.png",
    "journey/Campus 10.png",
     "journey/Campus 6.png"
   
  ];

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.5,
      behavior: 'smooth'
    });
  };

  const handleScrollUp = () => {
    window.scrollBy({
      top: -window.innerHeight * 0.5,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative py-2 bg-[#01224F] text-white roboto-regular">
      <div className="container mx-auto px-0 relative z-10">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4 mt-2 text-center text-[#FFC80E]">
          Recent Campus Placement Conversions
        </h1>

        {/* Full-width Image */}
        <img 
          src="placement-bg/Top Placements 2.png" 
          alt="Main Drive" 
          className="w-full h-full rounded-lg object-cover"
        />

        {/* Conditional Rendering for Carousel and Slider */}
        <div className="mt-8 h-[50vh] relative mb-8 hidden lg:block"> {/* 3D Carousel for large screens */}
          <Canvas 
            camera={{ position: [0, 0, 100], fov: 15 }} 
            style={{ height: '100%', width: '100%', overflow: 'hidden' }} // Hide overflow
          >
            <ScrollControls pages={1} infinite>
              <Rig>
                <Carousel images={images} />
              </Rig>
            </ScrollControls>
          </Canvas>

          {/* Scroll Up Arrow */}
          <div className="absolute left-5 top-5 flex items-center">
            <button 
              className="bg-yellow-500 rounded-full p-2"
              onClick={handleScrollUp}
            >
              ↑
            </button>
            <span className="ml-2 text-sm">Scroll Up</span>
          </div>

          {/* Scroll Down Arrow */}
          <div className="absolute left-5 bottom-5 flex items-center">
            <button 
              className="bg-yellow-500 rounded-full p-2"
              onClick={handleScrollDown}
            >
              ↓
            </button>
            <span className="ml-2 text-sm">Scroll Down</span>
          </div>
        </div>

        {/* Infinite Slider Section for smaller screens */}
        <div className="relative mb-8 lg:hidden"> {/* Automatic Slider for small screens */}
          <div className="flex overflow-hidden">
            <AutoSlider images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AutoSlider = ({ images }) => {
  const sliderRef = useRef();
  const [offset, setOffset] = useState(0);
  const visibleImagesCount = 3; // Number of images to show at once

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Create an array that duplicates the images to allow infinite scrolling
  const extendedImages = [...images, ...images];

  return (
    <div
      ref={sliderRef}
      className="flex transition-transform duration-300"
      style={{
        transform: `translateX(-${(offset * (100 / visibleImagesCount))}%)`, // Adjust based on visible images
        width: `${(extendedImages.length * 100) / visibleImagesCount}%`, // Total width of the extended images
      }}
    >
      {extendedImages.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Drive ${index + 1}`}
          className="w-1/3 object-cover transition-transform duration-300"
          style={{ flex: '0 0 33.33%' }}
        />
      ))}
    </div>
  );
};

function Rig({ children }) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) * 0.5; // Slower rotation

    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref}>{children}</group>;
}

function Carousel({ images, radius = 2.5 }) {
  return (
    <>
      {images.slice(0, 8).map((url, i) => (
        <Card
          key={i}
          url={url}
          position={[Math.sin((i / 8) * Math.PI * 2) * radius, 0, Math.cos((i / 8) * Math.PI * 2) * radius]}
          rotation={[0, Math.PI + (i / 8) * Math.PI * 2, 0]}
        />
      ))}
    </>
  );
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
  });

  return (
    <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.2, 2, 1, 20, 20]} />
    </Image>
  );
}

export default SuccessfulDrives;
