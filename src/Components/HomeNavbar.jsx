import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/HomeNavbar.css"; // Import the CSS for specific styling and animation

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent shadow-none backdrop-blur-md flex justify-between items-center p-4 animate-float z-50">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png"
            alt="Gryphon Academy Logo"
            className="h-16 w-auto" // Adjust size as needed
          />
        </Link>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link
            to="/contact"
            className="text-yellow-400 hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-yellow-400 hover:text-blue-500 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/training"
            className="text-yellow-400 hover:text-blue-500 transition-colors duration-300"
          >
            Training
          </Link>
        </li>
        <li>
          <Link
            to="/placement"
            className="text-yellow-400 hover:text-blue-500 transition-colors duration-300"
          >
            Placement
          </Link>
        </li>
        <li>
          <Link
            to="/brand-positioning"
            className="text-yellow-400 hover:text-blue-500 transition-colors duration-300"
          >
            Brand Positioning
          </Link>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      <button className="md:hidden text-yellow-400 hover:text-blue-500">
        {/* You can add a mobile menu toggle icon here */}
      </button>
    </nav>
  );
};

export default HomeNavbar;
