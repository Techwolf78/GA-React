import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for Sparkling Effect
const sparkle = keyframes`
  0% {
    box-shadow: 0 0 8px rgba(170, 126, 72, 0.7);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 1);
  }
  100% {
    box-shadow: 0 0 8px rgba(170, 126, 72, 0.7);
  }
`;

// Styled Component for the Image Border (with sparkling effect)
const SparklingImage = styled.img`
  width: 13rem; /* Default size (52px) */
  height: 13rem; /* Default size (52px) */
  border-radius: 50%;
  border: 8px solid #E5B80B; /* Golden Border */
  animation: ${sparkle} 1.5s infinite ease-in-out;
  position: relative;

  /* Media Queries for Responsiveness */
  @media (max-width: 1024px) {
    width: 10rem; /* 40px */
    height: 10rem; /* 40px */
  }

  @media (max-width: 768px) {
    width: 8rem; /* 32px */
    height: 8rem; /* 32px */
  }
`;

// Styled Component for the Glossy Effect
const GlossyEffect = styled.div`
  position: relative;
  display: inline-block;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
    pointer-events: none;
  }
`;

const SponsorsAndPartners = () => {
  return (
    <section 
      id="sponsors-section"
      className="relative py-2 md:py-8 mx-auto px-8 md:px-16 bg-cover bg-center roboto-regular"
      style={{ backgroundImage: 'url("https://res.cloudinary.com/dcjmaapvi/image/upload/v1732619381/spark_fhrbre.avif")' }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      <div className="container mx-auto text-center relative z-30">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FFC80E] mb-6 md:mb-12 roboto-regular">
          Our Academic Partners
        </h2>

        {/* Sponsor Logos (Academic) */}
        <div className="mb-6 md:mb-12">
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <GlossyEffect>
              <SparklingImage src="Event/indira.avif" alt="Placeholder 1" />
            </GlossyEffect>
            <GlossyEffect>
              <SparklingImage src="Event/sanjivani.avif" alt="Placeholder 2" />
            </GlossyEffect>
            <GlossyEffect>
              <SparklingImage src="Event/isbr.avif" alt="Placeholder 3" />
            </GlossyEffect>
          </div>
        </div>

        {/* Industry Alliance Header */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFC80E] mb-8 roboto-regular">
          Our Participating Delegates
        </h3>

        {/* Industry Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-2">
          {/* Display logos in grid, adjust spacing for each screen size */}
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/10n.avif" alt="Logo 2" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
        
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/2kn.avif" alt="Logo 2" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/3kn.avif" alt="Logo 3" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/5kn.avif" alt="Logo 5" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n4.avif" alt="Logo 4" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/9n.avif" alt="Logo 1" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
        
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n8.avif" alt="Logo 7" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/7kn.avif" alt="Logo 7" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/11n.avif" alt="Logo 8" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n7.avif" alt="Logo 9" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n5.avif" alt="Logo 10" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/4kn.avif" alt="Logo 4" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/1kn.avif" alt="Logo 1" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/1n.avif" alt="Logo 3" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/6kn.avif" alt="Logo 6" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n1.avif" alt="Logo 5" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n6.avif" alt="Logo 6" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n2.avif" alt="Logo 8" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/n3.avif" alt="Logo 9" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
          <div className="flex justify-center items-center">
            <img src="Event/finalbrands/6n.avif" alt="Logo 10" className="rounded-md w-full h-full object-contain"  type="image/avif" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsAndPartners;
