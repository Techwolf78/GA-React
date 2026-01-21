import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.jsx";
import "./index.css";

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0.1, // Lower value for smoother scrolling
  duration: 1.5, // Slightly longer duration for smoother feel
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
