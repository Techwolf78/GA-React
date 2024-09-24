import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import icons
import '../assets/CSS/Globe.css';

const socialMediaIcons = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon: <FaFacebook /> },
  { name: 'Twitter', url: 'https://www.twitter.com', icon: <FaTwitter /> },
  { name: 'Instagram', url: 'https://www.instagram.com', icon: <FaInstagram /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: <FaLinkedin /> },
  { name: 'YouTube', url: 'https://www.youtube.com', icon: <FaYoutube /> },
];

export default function Globe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const globeGeometry = new THREE.SphereGeometry(5, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x0077be, wireframe: false });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    const radius = 5; // Position icons directly on the globe's surface

    // Create icons on the globe
    for (let i = 0; i < 100; i++) { // Adjust the number of icons as needed
      const icon = socialMediaIcons[i % socialMediaIcons.length].icon;
      const spriteMaterial = new THREE.SpriteMaterial({ color: 0xffffff });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.5, 0.5, 1); // Adjust size

      const phi = Math.acos(2 * Math.random() - 1); // Random latitude
      const theta = Math.random() * 2 * Math.PI; // Random longitude

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      sprite.position.set(x, y, z); // Position inside the sphere

      // Render the icon onto the sprite
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = '40px FontAwesome'; // Use appropriate font size
      context.fillText(icon.props.children, 0, 40); // Adjust position as needed
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      sprite.material.map = texture;

      sprite.userData = { url: socialMediaIcons[i % socialMediaIcons.length].url }; // Store the URL
      scene.add(sprite);
    }

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01; // Rotate the globe
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="globe-container" />;
}
