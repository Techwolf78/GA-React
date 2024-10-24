import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrainingClick = () => {
    navigate("/training");
    setDropdownOpen(false);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  const handleSidebarItemClick = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#091327] text-[#ffffff] flex justify-between items-center px-8 md:px-16 py-[1rem] roboto-regular">
      <a className="navbar-brand" href="/">
        <img
          src="/LandingImage/NewLogo.png"
          alt="logo2"
          className="w-36 h-auto"
        />
      </a>

      <nav className="hidden lg:flex space-x-4">
        <Link
          to="/"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          HOME
        </Link>
        <div
          className="relative inline-block"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          ref={dropdownRef}
        >
          <button
            onClick={handleTrainingClick}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-2 rounded flex items-center justify-center transition-colors duration-300"
          >
            LEARNING & DEVELOPMENT<i className="bx bx-chevron-down ml-1"></i>
          </button>

          {isDropdownOpen && (
  <motion.div
    className="absolute top-full left-0 mt-0 bg-[#ffc700] text-[#1a1a1a] rounded-md shadow-lg z-50 whitespace-nowrap"
    initial={{ opacity: 0, x: 10 }} // Start from the right
    animate={{ opacity: 1, x: 0 }}  // Move to its final position
    exit={{ opacity: 0, x: 10 }}     // Exit to the right
    transition={{ duration: 0.5 }}    // Slow down the animation for the container
  >
{['Industry Readiness Program', 'Corporate Training', 'Faculty Training'].map((item, index) => (
  <motion.div
    key={item}
    initial={{ opacity: 0, x: 10 }} // Start from the right
    animate={{ opacity: 1, x: 0 }}  // Move to its final position
    exit={{ opacity: 0, x: 10 }}     // Exit to the right
    transition={{ duration: 0.5, delay: index * 0.3 }} // Increase the delay for staggered items
  >
    <Link
      to={`/${item === 'Industry Readiness Program' ? 'collegeTraining' : item.replace(' ', '').toLowerCase()}`}
      className="block px-4 py-2 hover:bg-[#f2b800] transition-colors duration-300"
      onClick={() => {
        handleDropdownItemClick();
        handleSidebarItemClick();
      }}
    >
      {item}
    </Link>
  </motion.div>
))}

  </motion.div>
)}

        </div>

        {/* Other Links */}
        <Link
          to="/placement"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          CAMPUS PLACEMENT
        </Link>
        <Link
          to="/brandPositioning"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          CROSS BRAND POSITIONING
        </Link>
        <Link
          to="/blogs"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          BLOG
        </Link>
      </nav>

      {/* Sidebar Toggle */}
      <div className="lg:hidden">
        <button
          className="text-[#ffffff] text-3xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#091327] text-[#ffffff] z-40 overflow-x-hidden transition-width duration-500 ease-in-out ${isSidebarOpen ? "w-64" : "w-0"}`}
      >
        <button
          className="absolute top-0 right-4 text-4xl focus:outline-none text-[#ffffff]"
          onClick={toggleSidebar}
        >
          ×
        </button>
        <Link
          to="/"
          className="block py-3 pl-8 text-[#ffffff] hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          HOME
        </Link>
        <div>
          <Link
            to="/training"
            className="block py-3 pl-8 text-[#ffffff] hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            LEARNING & DEVELOPMENT
          </Link>
          {/* Sub-links for Training */}
          <Link
            to="/collegeTraining"
            className="block py-2 pl-12 text-[#ffffff] hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Industry Readiness Program
          </Link>
          <Link
            to="/corporateTraining"
            className="block py-2 pl-12 text-[#ffffff] hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Corporate Training
          </Link>
          <Link
            to="/facultyTraining"
            className="block py-2 pl-12 text-[#ffffff] hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Faculty Training
          </Link>
        </div>
        <Link
          to="/placement"
          className="block py-3 pl-8 text-[#ffffff] hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          CAMPUS PLACEMENT
        </Link>
        <Link
          to="/brandPositioning"
          className="block py-3 pl-8 text-[#ffffff] hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          CROSS BRAND POSITIONING
        </Link>
        <Link
          to="/blogs"
          className="block py-3 pl-8 text-[#ffffff] hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          BLOG
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
