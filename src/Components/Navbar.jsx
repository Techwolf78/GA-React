import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrainingClick = () => {
    navigate("/learningAndDevelopment");
    setDropdownOpen(false); // Close dropdown on click
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false); // Close dropdown on item click
  };

  return (
    <header className="bg-[#7157ff] text-[#2e2e2e] flex justify-between items-center p-4">
      <a className="navbar-brand" href="/">
        <img
          src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png"
          alt="logo2"
          className="w-36 h-auto"
        />
      </a>

      <nav className="hidden md:flex space-x-6">
        <Link
          to="/"
          className="hover:bg-[#d0c6f7] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
        >
          HOME
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={handleTrainingClick}
            className="hover:bg-[#d0c6f7] hover:text-[#1a1a1a] py-2 px-4 rounded flex items-center justify-center w-48 transition-colors duration-300"
          >
            TRAINING <i className="bx bx-chevron-down ml-1"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-48 bg-[#d0c6f7] text-[#1a1a1a] rounded-md shadow-lg transition-all duration-300">
              <Link
                to="/collegeTraining"
                className="block px-4 py-2 hover:bg-[#b8aef6] transition-colors duration-300"
                onClick={handleDropdownItemClick}
              >
                College Training
              </Link>
              <Link
                to="/corporateTraining"
                className="block px-4 py-2 hover:bg-[#b8aef6] transition-colors duration-300"
                onClick={handleDropdownItemClick}
              >
                Corporate Training
              </Link>
              <Link
                to="/facultyTraining"
                className="block px-4 py-2 hover:bg-[#b8aef6] transition-colors duration-300"
                onClick={handleDropdownItemClick}
              >
                Faculty Training
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/placement"
          className="hover:bg-[#d0c6f7] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
        >
          PLACEMENT
        </Link>
        <Link
          to="/digital"
          className="hover:bg-[#d0c6f7] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
        >
          DIGITAL MARKETING
        </Link>
        <Link
          to="/gax"
          className="hover:bg-[#d0c6f7] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
        >
          GAX
        </Link>
        <Link
          to="/blog"
          className="hover:bg-[#d0c6f7] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
        >
          BLOG
        </Link>
      </nav>

      <div className="md:hidden">
        <button
          className="text-[#2e2e2e] text-3xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-0 h-full bg-[#e9e5ff] z-40 overflow-x-hidden transition-width duration-500 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-0"
        }`}
      >
        <button
          className="absolute top-0 right-4 text-4xl focus:outline-none text-[#2e2e2e]"
          onClick={toggleSidebar}
        >
          ×
        </button>
        <Link
          to="/"
          className="block py-3 pl-8 text-[#2e2e2e] hover:bg-[#d0c6f7] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          HOME
        </Link>
        <Link
          to="/learningAndDevelopment"
          className="block py-3 pl-8 text-[#2e2e2e] hover:bg-[#d0c6f7] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          TRAINING
        </Link>
        <Link
          to="/placement"
          className="block py-3 pl-8 text-[#2e2e2e] hover:bg-[#d0c6f7] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          PLACEMENT
        </Link>
        <Link
          to="/digital-marketing"
          className="block py-3 pl-8 text-[#2e2e2e] hover:bg-[#d0c6f7] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          DIGITAL MARKETING
        </Link>
        <Link
          to="/gax"
          className="block py-3 pl-8 text-[#2e2e2e] hover:bg-[#d0c6f7] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          GAX
        </Link>
        <Link
          to="/blog"
          className="block py-3 pl-8 text-[#2e2e2e] hover:bg-[#d0c6f7] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          BLOG
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
