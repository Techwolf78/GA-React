import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUniversity, FaBriefcase, FaUserGraduate, FaHandshake, FaBullhorn, FaPencilAlt, FaPhoneAlt } from 'react-icons/fa'; 
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP for animation

const SidebarToggle = ({ isSidebarOpen, toggleSidebar, sidebarToggleRef, scrollToTop }) => {
  const toggleButtonRef = useRef(null); // Reference for the toggle button

  useEffect(() => {
    if (!isSidebarOpen) {
      // GSAP Timeline to manage shaking sequence (left-right, stop)
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // Repeat infinitely, with delay of 2 seconds between cycles
  
      // Step 1: No shake for the first 2 seconds
      tl.to(toggleButtonRef.current, { duration: 2, x: 0 }) // No movement for 2 seconds
  
      // Step 2: Shake left-right fast for 2 seconds
      .to(toggleButtonRef.current, {
        duration: 0.1, // Small duration for each shake movement
        x: 14, // Shake horizontally (left-right)
        repeat: 7, // Repeat 7 times to make it fast
        yoyo: true, // Alternate back and forth
        ease: "none" // Instant movement without easing
      })
  
      // Step 3: Pause for 2 seconds (no shaking)
      .to(toggleButtonRef.current, { duration: 2, x: 0 });
  
    } else {
      // If the sidebar is open, stop shaking and reset to original position
      gsap.killTweensOf(toggleButtonRef.current);
      gsap.set(toggleButtonRef.current, { x: 0 });
    }
  }, [isSidebarOpen]);

  return (
    <>
      <style>
        {`
          /* Sidebar Styles */
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 300px;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            border-right: 1px solid #ddd;
            box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
            z-index: 20000;
            display: flex;
            flex-direction: column;
            padding-top: 60px;
            transition: transform 0.3s ease;
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .sidebar ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
          }

          .sidebar ul li {
            margin: 20px 0;
            position: relative;
            padding-bottom: 5px;
          }

          .sidebar ul li a {
            text-decoration: none;
            color: #01224f;
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            transition: color 0.3s ease, padding-bottom 0.3s ease;
            position: relative;
            white-space: nowrap;
            gap: 12px;
          }

          .sidebar ul li a i {
            margin-right: 10px;
          }

          .sidebar ul li a::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: #01224f;
            transition: width 0.3s ease;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .sidebar ul li a:hover::after {
            width: 100%;
          }

          .sidebar ul li a:hover {
            color: #01224f;
            padding-bottom: 7px;
          }

          /* Hover effect for dropdown on desktop */
          .sidebar ul li:hover > ul {
            display: block;
          }

          /* Initially hide the child <ul> items */
          .sidebar ul li ul {
            display: none;
            flex-direction: column;
          }

          /* Indentation for child li under Learning & Development */
          .sidebar ul li ul li {
            padding-left: 20px; /* Indentation */
            margin-left: 10px;
          }

          /* Sidebar Toggle Styles */
          .sidebar-toggle {
            position: fixed;
            top: 35px;
            right: 60px;
            background: #2252ce;
            color: rgb(255, 255, 255);
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 11;
            transition: background-color 0.3s ease;
          }

          .sidebar-toggle i {
            margin-right: 10px;
            font-size: 18px;
          }

          .sidebar-toggle::before,
          .sidebar-toggle::after,
          .sidebar-toggle div {
            content: "";
            display: block;
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: #ffffff;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .sidebar-toggle::before {
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
          }

          .sidebar-toggle div {
            top: 22px;
            left: 50%;
            transform: translateX(-50%);
          }

          .sidebar-toggle::after {
            top: 32px;
            left: 50%;
            transform: translateX(-50%);
          }

          .sidebar-toggle.cross::before {
            transform: translate(-50%, -50%) rotate(45deg);
            top: 50%;
          }

          .sidebar-toggle.cross div {
            opacity: 0;
          }

          .sidebar-toggle.cross::after {
            transform: translate(-50%, -50%) rotate(-45deg);
            top: 50%;
          }

          /* Media Queries for Responsive Design */
          @media (max-width: 1024px) {
            .sidebar-toggle {
              right: 30px;
            }

            .sidebar ul li a::after,
            .sidebar ul li a:hover::after {
              width: 0 !important;
            }

            .sidebar ul li a.active::after {
              width: 0 !important;
            }

            /* Ensure child links are displayed under Learning & Development */
            .sidebar ul li ul {
              display: block; /* Show the dropdown on mobile by default */
            }
          }

          @media (max-width: 768px) {
            .sidebar-toggle {
              right: 15px;
            }

            .hidden-on-large {
              display: block;
            }

            .sidebar ul li {
              display: block;
              margin: 10px 0;
            }

            /* Ensure child links are displayed on mobile */
            .sidebar ul li ul {
              display: block;
            }

            .sidebar ul li a::after,
            .sidebar ul li a:hover::after {
              width: 0 !important;
            }

            .sidebar ul li a.active::after {
              width: 0 !important;
            }
          }
        `}
      </style>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/training" onClick={scrollToTop}>
              <FaChalkboardTeacher />
              <span>Learning & Development</span>
            </Link>
            <ul>
              <li>
                <Link to="/collegeTraining" onClick={scrollToTop}>
                  <FaUniversity />
                  <span>Industry Readiness Program</span>
                </Link>
              </li>
              <li>
                <Link to="/corporateTraining" onClick={scrollToTop}>
                  <FaBriefcase />
                  <span>Corporate Training</span>
                </Link>
              </li>
              <li>
                <Link to="/facultyTraining" onClick={scrollToTop}>
                  <FaUserGraduate />
                  <span>Faculty Training</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/placement" onClick={scrollToTop}>
              <FaHandshake />
              <span>Campus Placements</span>
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={scrollToTop}>
              <FaBullhorn />
              <span>Synergy Sphere 2024</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={scrollToTop}>
              <FaPencilAlt />
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>
              <FaPhoneAlt />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>

      <button
  ref={sidebarToggleRef} // Use sidebarToggleRef here
  className={`sidebar-toggle ${isSidebarOpen ? "cross" : ""}`}
  id="sidebar-toggle"
  onClick={toggleSidebar}
>
  <div></div>
</button>

    </>
  );
};

SidebarToggle.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebarToggleRef: PropTypes.object.isRequired,
  scrollToTop: PropTypes.func.isRequired,
};

export default SidebarToggle;
