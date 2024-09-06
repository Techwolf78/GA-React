import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-blue-900 text-white flex justify-between items-center p-4">
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
          className="hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded"
        >
          HOME
        </Link>
        <div className="relative group">
          <button className="w-48 focus:outline-none hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded flex items-center justify-center">
            TRAINING <i className="bx bx-chevron-down ml-1"></i>
          </button>
          <div className="absolute top-full left-0 w-48 bg-yellow-400 text-blue-900 rounded-md shadow-lg hidden group-hover:block">
            <Link
              to="/collegeTraining"
              className="block px-4 py-2 hover:bg-yellow-500"
            >
              College Training
            </Link>
            <Link
              to="/corporate-training"
              className="block px-4 py-2 hover:bg-yellow-500"
            >
              Corporate Training
            </Link>
            <Link
              to="/faculty-training"
              className="block px-4 py-2 hover:bg-yellow-500"
            >
              Faculty Training
            </Link>
          </div>
        </div>
        <Link
          to="/placement"
          className="hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded"
        >
          PLACEMENT
        </Link>
        <Link
          to="/digital-marketing"
          className="hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded"
        >
          DIGITAL MARKETING
        </Link>
        <Link
          to="/gax"
          className="hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded"
        >
          GAX
        </Link>
        <Link
          to="/blog"
          className="hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded"
        >
          BLOG
        </Link>
      </nav>

      <div className="md:hidden">
        <button
          className="text-white text-3xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-0 h-full bg-blue-900 z-40 overflow-x-hidden transition-width duration-500 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-0"
        }`}
      >
        <button
          className="absolute top-0 right-4 text-4xl focus:outline-none text-white"
          onClick={toggleSidebar}
        >
          ×
        </button>
        <Link
          to="/"
          className="block py-3 pl-8 text-white hover:bg-yellow-400 hover:text-blue-900"
        >
          HOME
        </Link>
        <Link
          to="/training"
          className="block py-3 pl-8 text-white hover:bg-yellow-400 hover:text-blue-900"
        >
          TRAINING
        </Link>
        <Link
          to="/placement"
          className="block py-3 pl-8 text-white hover:bg-yellow-400 hover:text-blue-900"
        >
          PLACEMENT
        </Link>
        <Link
          to="/digital-marketing"
          className="block py-3 pl-8 text-white hover:bg-yellow-400 hover:text-blue-900"
        >
          DIGITAL MARKETING
        </Link>
        <Link
          to="/gax"
          className="block py-3 pl-8 text-white hover:bg-yellow-400 hover:text-blue-900"
        >
          GAX
        </Link>
        <Link
          to="/blog"
          className="block py-3 pl-8 text-white hover:bg-yellow-400 hover:text-blue-900"
        >
          BLOG
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
