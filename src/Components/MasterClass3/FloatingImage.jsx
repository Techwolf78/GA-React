import { useEffect, useRef } from "react";
import { TweenLite, Sine } from "gsap";

const FloatingImage = ({ src, alt }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    // Randomized initial values
    const randomX = (min, max) => min + Math.random() * (max - min);
    const randomY = (min, max) => min + Math.random() * (max - min);
    const randomRotation = (min, max) => min + Math.random() * (max - min);

    // Function to start random movement and rotation
    const moveX = (target) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const distance = randomX(50, 200);
      const duration = randomX(2, 4); // Random duration for smoothness

      TweenLite.to(target, duration, {
        x: `+=${distance * direction}`,
        ease: Sine.easeInOut,
        onComplete: () => moveX(target), // Recursively move
      });
    };

    const moveY = (target) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const distance = randomY(50, 200);
      const duration = randomY(2, 4); // Random duration for smoothness

      TweenLite.to(target, duration, {
        y: `+=${distance * direction}`,
        ease: Sine.easeInOut,
        onComplete: () => moveY(target), // Recursively move
      });
    };

    const rotate = (target) => {
      const rotationValue = randomRotation(10, 40);
      const duration = randomY(2, 5); // Random rotation speed
      const direction = Math.random() > 0.5 ? 1 : -1;

      TweenLite.to(target, duration, {
        rotation: `+=${rotationValue * direction}`,
        ease: Sine.easeInOut,
        onComplete: () => rotate(target), // Recursively rotate
      });
    };

    // Start the floating movement and rotation
    moveX(img);
    moveY(img);
    rotate(img);

  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className="pointer-events-none select-none absolute z-20 opacity-90"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120px", // Adjust size as needed
        height: "120px", // Adjust size as needed
      }}
    />
  );
};

export default FloatingImage;
