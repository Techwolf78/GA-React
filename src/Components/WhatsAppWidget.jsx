import  { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const WhatsAppWidget = () => {
  const widgetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    // GSAP animation
    gsap.to(widgetRef.current, {
      y: '+=15',
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    });

    // Media query check
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      setIsSmallMobile(window.matchMedia('(max-width: 480px)').matches);
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);

  // Determine icon size based on screen width
  const iconSize = isSmallMobile ? 40 : isMobile ? 50 : 60;

  return (
    <a
      href="https://wa.me/+918983614509"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.widget}
      ref={widgetRef}
    >
      <img
        src="/LandingImage/whatsapp.avif"
        alt="WhatsApp"
        style={{ ...styles.icon, width: `${iconSize}px`, height: `${iconSize}px` }}
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
    transition: 'all 0.3s ease',
  },
};

export default WhatsAppWidget;