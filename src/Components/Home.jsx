import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/CSS/home.css';
import Testimonials from './Testimonials';
import ConnectWithUs from './ConnectWithUs'; // Import the Connect component

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [displayText, setDisplayText] = useState("Bridging Dreams");
  const fullText = "Dreams";
  const newText = "Careers";
  const [isBlinking, setIsBlinking] = useState(true);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const trainingRef = useRef(null);
  const placementRef = useRef(null);
  const brandingRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const brandPositioningSection = brandingRef.current;
      const sectionHeight = brandPositioningSection.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > (brandPositioningSection.offsetTop + (sectionHeight / 2))) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    };   

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let currentText = newText;
    let textType = 'new';

    const typeEffect = () => {
      currentText = textType === 'new' ? newText : fullText;
      setDisplayText(`Bridging ${currentText.slice(0, index)}`);

      const typingSpeed = isDeleting ? 100 : 100;

      if (isDeleting) {
        index--;
        if (index < 0) {
          isDeleting = false;
          textType = textType === 'new' ? 'full' : 'new';
          setTimeout(() => {
            index = 0;
            typeEffect();
          }, 500);
          return;
        }
      } else {
        index++;
        if (index > currentText.length) {
          isDeleting = true;
          setTimeout(() => {
            typeEffect();
          }, 2000);
          return;
        }
      }

      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();

    const cursorInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const toggleSidebar = (event) => {
    event.preventDefault();
    setSidebarOpen(prev => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return newState;
    });
  };

  useEffect(() => {
    const sections = [heroRef.current, aboutRef.current, trainingRef.current, placementRef.current, brandingRef.current];
    const navLinks = document.querySelectorAll('.stick-top-nav-ul li');

    const activateNavLink = () => {
      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      navLinks.forEach(link => link.classList.remove('nav-active'));
      if (navLinks[index]) {
        navLinks[index].classList.add('nav-active');
      }
    };

    activateNavLink();
    window.addEventListener('scroll', activateNavLink);

    return () => window.removeEventListener('scroll', activateNavLink);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector('.top-navigation');
      if (window.innerWidth <= 768) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'flex';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className= "roboto-regular">
      {/* Navbar */}
      <div className={`top-navigation ${isNavbarVisible ? 'visible' : 'hidden'}`}>
        <nav className="sticky-top-nav">
          <ul className="stick-top-nav-ul">
            <li className="nav-active"><a onClick={() => handleNavClick(heroRef)}><span>Home</span></a><div className="line"></div></li>
            <li><a onClick={() => handleNavClick(aboutRef)}><span>About Us</span></a><div className="line"></div></li>
            <li><a onClick={() => handleNavClick(trainingRef)}><span>Training</span></a><div className="line"></div></li>
            <li><a onClick={() => handleNavClick(placementRef)}><span>Placement</span></a><div className="line"></div></li>
            <li><a onClick={() => handleNavClick(brandingRef)}><span>Brand Positioning</span></a><div className="line"></div></li>
          </ul>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar" ref={sidebarRef}>
        <ul>
        <li><Link to="/blogs"><span>Blogs</span></Link></li>
          <li>
            <Link to="/training"><span>Training</span></Link>
            <ul>
              <li><Link to="/collegeTraining"><span>College Training</span></Link></li>
              <li><Link to="/corporateTraining"><span>Corporate Training</span></Link></li>
              <li><Link to="/facultyTraining"><span>Faculty Training</span></Link></li>
            </ul>
          </li>

          <li><Link to="/contact"><span>Contact us</span></Link></li>
        </ul>
      </div>

      {/* Sidebar Toggle Button */}
      <button 
        className={`sidebar-toggle ${isSidebarOpen ? 'cross' : ''}`} 
        id="sidebar-toggle" 
        onClick={toggleSidebar}
      >
        <div></div>
      </button>

      {/* Company Logo */}
      <Link to="/about" className="company-logo-link">
        <div className="company-logo"></div>
      </Link>

      {/* Hero Section */}
      <div id="hero_slider" className="section roboto-regular hero-slider-section left" ref={heroRef}>
        <div className="section-content left">
          <h2>
            {displayText}
            <span className={`cursor ${isBlinking ? 'blink' : ''}`}>|</span>
          </h2>
          <p>Making students Industry Ready with our Customized Industry Readiness Programme</p>
          <Link to="/training" className="btn-know-more">
            <span>Know More</span>
          </Link>
        </div>
      </div>

      {/* Other sections */}
      <div id="core_capabilities" className="section core-capabilities-section right" ref={aboutRef}>
  <div className="section-content right">
    <h2>About Us</h2>
    <p>
      As India&apos;s premier non-ed-tech organization, we are committed to
      bridging the gap between industry and academia. We provide customized
      and tailored industry-centric training programmes which help your
      organization facilitate the transition into the industry with ease and
      enabling you to excel.
    </p>
    <Link to="/about" className="btn-know-more">
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/pattern-new.png" alt="Right Side Design" className="right-side-image" />
  
  {/* New Vector Image for Mobile */}
  <img src="LandingImage/Mobile2.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>


      <div id="operating_models" className="section operating-models-section left" ref={trainingRef}>
        <div className="section-content left">
          <h2>Training</h2>
          <p>
            Gryphon Academy empowers students, professionals, and educators
            through customized training programs. Our trainings being traditional,
            ensures that our participants are industry ready for dynamic roles and
            responsibilities and are backed by substantive hands-on experience
            that the current industry requires.
          </p>
          <Link to="/training" className="btn-know-more">
            <span>Know More</span>
          </Link>
        </div>
        <img src="LandingImage/pattern-new.png" alt="Left Side Design" className="left-side-image" />

        {/* New Vector Image for Mobile */}
  <img src="LandingImage/Mobile3.png" alt="Mobile Vector" className="mobile-vector-image" />
        
      </div>

      <div id="talent_transformations" className="section talent-transformations-section right" ref={placementRef}>
        <div className="section-content right">
          <h2>Placement</h2>
          <p>
            Your dream job awaits! We go beyond training; we launch careers. Our
            guaranteed placement assistance connects you with your ideal path, all
            at zero cost to partnered colleges.
          </p>
          <Link to="/placement" className="btn-know-more">
            <span>Know More</span>
          </Link>
        </div>
        <img src="LandingImage/pattern-new.png" alt="Right Side Design" className="right-side-image" />

        {/* New Vector Image for Mobile */}
  <img src="LandingImage/Mobile4.png" alt="Mobile Vector" className="mobile-vector-image" />
      </div>

      <div id="do_more" className="section do-more-section left" ref={brandingRef}>
        <div className="section-content left">
          <h2>Cross Brand Positioning</h2>
          <p>
            Gryphon Academy empowers students, professionals, and educators
            through customized training programs. Our trainings being traditional,
            ensure that our participants are industry ready for dynamic roles and
            responsibilities and are backed by substantive hands-on experience
            that the current industry requires.
          </p>
          <Link to="/brandPositioning" className="btn-know-more">
            <span>Know More</span>
          </Link>
        </div>
        <img src="LandingImage/pattern-new.png" alt="Left Side Design" className="left-side-image" />
        
        {/* New Vector Image for Mobile */}
  <img src="LandingImage/Mobile5.png" alt="Mobile Vector" className="mobile-vector-image" />
      </div>

      <div>
        <Testimonials />
      </div>
      {/* New Connect Component As the word */}
      <ConnectWithUs />
    </div>
  );
};

export default Home;