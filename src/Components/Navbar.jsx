import { useState, useEffect, useRef } from "react"; 


const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCrossBrandDropdownOpen, setCrossBrandDropdownOpen] = useState(false); // For Cross Brand Positioning dropdown
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const dropdownRef = useRef(null);
  const crossBrandDropdownRef = useRef(null); // Ref for Cross Brand dropdown

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTrainingClick = () => {
    setDropdownOpen(false);
    window.location.href = "/training";
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  const handleSidebarItemClick = () => {
    setSidebarOpen(false);
  };

  const handleCrossBrandClick = () => {
    // Redirect to /events
    window.location.href = "/events";
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
      if (crossBrandDropdownRef.current && !crossBrandDropdownRef.current.contains(event.target)) {
        setCrossBrandDropdownOpen(false);
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
        className="fixed roboto-regular top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-2 z-50"
        style={{
          backgroundColor: `rgba(1, 34, 79, ${navbarOpacity})`,
          color: navbarOpacity < 1 ? "#ffffff" : "#ffffff",
        }}
      >
        <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1732608342/NewLogo_glaelo.webp"
            alt="Company logo"
            className="w-36 h-auto"
          />
        </a>

        <nav className="hidden lg:flex space-x-4">
          <a
            href="/"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
             Home
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
              className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-2 flex items-center justify-center transition-colors duration-300"
            >
               Learning & Development
              <i className="fas fa-chevron-down ml-1"></i>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 bg-[#ffffff] text-[#1a1a1a] shadow-lg z-50 whitespace-nowrap">
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

          <div
            className="relative inline-block"
            onMouseEnter={() => setCrossBrandDropdownOpen(true)}
            onMouseLeave={() => setCrossBrandDropdownOpen(false)}
            ref={crossBrandDropdownRef}
          >
            <button
              className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-2 flex items-center justify-center transition-colors duration-300"
              onClick={handleCrossBrandClick}
            >
               Synergy Sphere 2024
              <i className="fas fa-chevron-down ml-1"></i>
            </button>

            {isCrossBrandDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 bg-[#ffffff] text-[#1a1a1a] shadow-lg z-50 whitespace-nowrap">
                <a
                  href="/brandPositioning"
                  className="block px-4 py-2 hover:bg-[#f2b800] transition-colors duration-300"
                  onClick={() => {
                    handleDropdownItemClick();
                    handleSidebarItemClick();
                  }}
                >
                  Cross Brand Positioning
                </a>
              </div>
            )}
          </div>

          <a
            href="/placement"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
             Campus Placement
          </a>
          <a
            href="/blogs"
            className="hover:bg-[#ffc700] hover:text-[#1a1a1a] py-2 px-4 transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            Blogs
          </a>
        </nav>

        <div className="lg:hidden">
          <button
            className="text-[#ffffff] text-3xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 h-full bg-white bg-opacity-90 text-black z-40 overflow-x-hidden transition-all duration-300 transform ${isSidebarOpen ? "translate-x-0 w-full" : "-translate-x-full w-0"}`}
        >
          <button
            className="absolute top-2 right-2 w-12 h-12 rounded-full bg-[#ffc700] flex items-center justify-center text-black text-4xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <i className="fas fa-times"></i>
          </button>
          <a
            href="/"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            <i className="fas fa-home"></i> Home
          </a>

          <div>
            <a
              href="/training"
              className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              <i className="fas fa-chalkboard-teacher"></i> Learning & Development
            </a>
            <a
              href="/collegeTraining"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              <i className="fas fa-university"></i> Industry Readiness Program
            </a>
            <a
              href="/corporateTraining"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              <i className="fas fa-briefcase"></i> Corporate Training
            </a>
            <a
              href="/facultyTraining"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              <i className="fas fa-user-graduate"></i> Faculty Training
            </a>
          </div>
          <a
            href="/placement"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            <i className="fas fa-handshake"></i> Campus Placement
          </a>
          <a
            href="/events"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            <i className="fas fa-bullhorn"></i> Synergy Sphere 2024
          </a>

          <div>
            <a
              href="/brandPositioning"
              className="block py-2 pl-12 hover:bg-[#f2b800] hover:text-[#1a1a1a] transition-colors duration-300"
              onClick={handleSidebarItemClick}
            >
              <i className="fas fa-flag"></i> Cross Brand Positioning
            </a>
          </div>

          <a
            href="/blogs"
            className="block py-3 pl-8 hover:bg-[#ffc700] hover:text-[#1a1a1a] transition-colors duration-300"
            onClick={handleSidebarItemClick}
          >
            <i className="fas fa-pencil-alt"></i> Blogs
          </a>
        </div>
      </header>

      <div className="pt-16">
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Navbar;
