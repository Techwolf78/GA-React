

import React, { useRef } from 'react';
import NavbarBrandPositioning from './NavbarBrandPositioning';
import ThreeFiberComponent from './ThreeFiberComponent';
import TryPage from './TryPage';
import Events from './Events';
import DmHookLine from './DmHookLine';
import BusinessServices from './BusinessServices';
import BrandPositioningWhyChoose from './BrandPositioningWhyChoose';
import Guest from './Guest';
import BrandContact from './BrandContact';
import DmEvents from './DmEvents';
import Dmvideo from './Dmvideo';
import DigitalHero from './DigitalHero';

const BrandPositioning = () => {
  const tryPageRef = useRef(null);

  const handleScrollToTryPage = () => {
    if (tryPageRef.current) {
      // Calculate the scroll position to leave 10vh at the top
      const topOffset = 10 * window.innerHeight / 100; // 10vh in pixels
      const elementTop = tryPageRef.current.offsetTop; // Get the offset of the TryPage component
      const scrollToPosition = elementTop - topOffset; // Subtract 10vh from the element's position

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <NavbarBrandPositioning />
      {/* <DigitalHero /> */}
      <Dmvideo />
      {/* <ThreeFiberComponent handleScrollClick={handleScrollToTryPage} /> */}
      
      {/* Attach ref to TryPage component */}
      {/* <div ref={tryPageRef}>
   
      </div> */}
     <TryPage />
      {/* Other Sections

      {/**/}
      {/* <Events /> */}
      {/* <DmHookLine /> */}
      {/* <DmEvents />  */}
      <BusinessServices />
      <BrandPositioningWhyChoose />
      {/* <Guest /> */}
      <BrandContact />
    </div>
  );
};

export default BrandPositioning;