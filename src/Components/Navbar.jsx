import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <header className="bg-[#091327] text-[#ffffff] flex justify-between items-center p-4 roboto-regular">
      <a className="navbar-brand" href="/">
        <img
          src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png"
          alt="logo2"
          className="w-36 h-auto"
        />
      </a>

      <nav className="hidden md:flex space-x-4">
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
            TRAINING <i className="bx bx-chevron-down ml-1"></i>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-0 bg-[#ffc700] text-[#1a1a1a] rounded-md shadow-lg transition-all duration-300 z-50 whitespace-nowrap">
              <Link
                to="/collegeTraining"
                className="block px-4 py-2 hover:bg-[#f2b800] transition-colors duration-300"
                onClick={() => { handleDropdownItemClick(); handleSidebarItemClick(); }}
              >
                College Training
              </Link>
              <Link
                to="/corporateTraining"
                className="block px-4 py-2 hover:bg-[#f2b800] transition-colors duration-300"
                onClick={() => { handleDropdownItemClick(); handleSidebarItemClick(); }}
              >
                Corporate Training
              </Link>
              <Link
                to="/facultyTraining"
                className="block px-4 py-2 hover:bg-[#f2b800] transition-colors duration-300"
                onClick={() => { handleDropdownItemClick(); handleSidebarItemClick(); }}
              >
                Faculty Training
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/placement"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          PLACEMENT
        </Link>
        <Link
          to="/brandPositioning"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          DIGITAL MARKETING
        </Link>
        <Link
          to="/blogs"
          className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          BLOG
        </Link>
      </nav>

      <div className="md:hidden">
        <button
          className="text-[#ffffff] text-3xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-[#091327] text-[#ffffff] z-40 overflow-x-hidden transition-width duration-500 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-0"
        }`}
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
            TRAINING
          </Link>
          {/* Sub-links for Training */}
          <Link
            to="/collegeTraining"
            className="block py-2 pl-12 text-[#ffffff] hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            College Training
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
          PLACEMENT
        </Link>
        <Link
          to="/brandPositioning"
          className="block py-3 pl-8 text-[#ffffff] hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
          onClick={handleSidebarItemClick}
        >
          DIGITAL MARKETING
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
