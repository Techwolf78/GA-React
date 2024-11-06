import React, { useState, useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrainingClick = () => {
    setDropdownOpen(false);
    window.location.href = "/training"; // Redirect to /training
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  const handleSidebarItemClick = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        const newOpacity = Math.max(0.5, 1 - window.scrollY / 100);
        setNavbarOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-2 z-50`}
        style={{
          backgroundColor: `rgba(1, 34, 79, ${navbarOpacity})`, // Start with #01224F background color
          color: navbarOpacity < 1 ? '#ffffff' : '#ffffff', // Ensures text is white
        }}
      >
        <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1729940570/NewLogoR_f6kttv.png"
            alt="Company logo"
            className="w-36 h-auto"
          />
        </a>

        <nav className="hidden lg:flex space-x-4">
          <a
            href="/"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            HOME
          </a>
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
              <div className="absolute top-full left-0 mt-0 bg-[#ffffff] text-[#1a1a1a] rounded-md shadow-lg z-50 whitespace-nowrap">
                {['Industry Readiness Program', 'Corporate Training', 'Faculty Training'].map((item) => (
                  <a
                    key={item}
                    href={`/${item === 'Industry Readiness Program' ? 'collegeTraining' : item.replace(' ', '').toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-[#f2b800] transition-colors duration-300"
                    onClick={() => {
                      handleDropdownItemClick();
                      handleSidebarItemClick();
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/placement"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            CAMPUS PLACEMENT
          </a>
          <a
            href="/brandPositioning"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            CROSS BRAND POSITIONING
          </a>
          <a
            href="/blogs"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 rounded transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            BLOGS
          </a>
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
          className={`fixed top-0 left-0 h-full bg-white bg-opacity-90 text-black z-40 overflow-x-hidden transition-all duration-300 transform ${isSidebarOpen ? "translate-x-0 w-full" : "-translate-x-full w-0"}`}
        >
          <button
            className="absolute top-2 right-2 w-12 h-12 rounded-full bg-[#ffc700] flex items-center justify-center text-black text-4xl focus:outline-none"
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <a
            href="/"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Home
          </a>
          <div>
            <a
              href="/training"
              className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              Learning & Development
            </a>
            {/* Sub-links for Training */}
            <a
              href="/collegeTraining"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              Industry Readiness Program
            </a>
            <a
              href="/corporateTraining"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              Corporate Training
            </a>
            <a
              href="/facultyTraining"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              Faculty Training
            </a>
          </div>
          <a
            href="/placement"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Campus Placement
          </a>
          <a
            href="/brandPositioning"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Cross Brand Positioning
          </a>
          <a
            href="/blogs"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Blogs
          </a>
        </div>

      </header>

      {/* Content Below Navbar */}
      <div className="pt-16">
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
