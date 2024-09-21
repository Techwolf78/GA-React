import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WhatsAppWidget = () => {
  const widgetRef = useRef(null); // Reference for the WhatsApp widget

  useEffect(() => {
    // GSAP animation for the floating effect
    gsap.to(widgetRef.current, {
      y: '+=15', // Move 15px vertically
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      duration: 2, // 2 seconds for the full up and down movement
      ease: 'power1.inOut', // Smooth easing
    });
  }, []);

  return (
    <a
      href="https://wa.me/+918983614509"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.widget}
      ref={widgetRef} // Apply ref to the widget
    >
      <img
        src="LandingImage/whatsapp.png" // Add your icon image
        alt="WhatsApp"
        style={styles.icon}
      />
    </a>
  );
};

const styles = {
  widget: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  icon: {
    width: '60px',
    height: '60px',
  },
};

export default WhatsAppWidget;
