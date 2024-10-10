import  { useState, useEffect, useRef } from 'react';
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };
  

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
        <li><Link to="/blogs" onClick={scrollToTop}><span>Blogs</span></Link></li>
          <li>
            <Link to="/training" onClick={scrollToTop}><span>Training</span></Link>
            <ul>
              <li><Link to="/collegeTraining" onClick={scrollToTop}><span>College Training</span></Link></li>
              <li><Link to="/corporateTraining" onClick={scrollToTop}><span>Corporate Training</span></Link></li>
              <li><Link to="/facultyTraining" onClick={scrollToTop}><span>Faculty Training</span></Link></li>
            </ul>
          </li>

          <li><Link to="/contact" onClick={scrollToTop}><span>Contact us</span></Link></li>
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
    <p>Making students Industry Ready with our Customized Industry Readiness Programme
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum vel qui dolore, consequatur repellendus! Eligendi, aperiam quas numquam consequuntur iste obcaecati ullam repellendus libero est minus placeat nesciunt ratione.
    </p>
    <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/MobileHero.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>

{/* Other sections */}
<div id="core_capabilities" className="section core-capabilities-section right" ref={aboutRef}>
  <div className="section-content right">
    <h2>About Us</h2>
    <p>
    Step into a world where your growth is our mission. At Gryphon Academy, we transform ambitions into achievements. Whether you’re a student, professional, or educator, our customized programs provide the tools you need to thrive in today’s fast-paced industries. Ready to embark on a transformative journey? Let’s take the first step together.
    </p>
    <Link to="/about" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/pattern-new.png" alt="Right Side Design" className="right-side-image" />
  <img src="LandingImage/Mobile 2.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>

<div id="operating_models" className="section operating-models-section left" ref={trainingRef}>
  <div className="section-content left">
    <h2>Training</h2>
    <p>
    At Gryphon Academy, our training programs are specifically designed with your career goals in mind. We focus on equipping you with the essential skills that today’s industry demand, ensuring you are excelling in your field. Our customized content addresses the unique challenges of your chosen industry, while personalized evaluations help identify your strengths and areas for improvement. By utilizing modern tools and methodologies, we enhance your learning experience and prepare you for real-world applications. 
    </p>
    <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/pattern-new.png" alt="Left Side Design" className="left-side-image" />
  <img src="LandingImage/Mobile 3.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>

<div id="talent_transformations" className="section talent-transformations-section right" ref={placementRef}>
  <div className="section-content right">
    <h2>Placement</h2>
    <p>
    Your dream job awaits. At Gryphon Academy, we take your career aspirations seriously. With unmatched placement assistance and deep industry ties, we open doors to opportunities that set you on the path to success. Take the leap and see where it leads.
    </p>
    <Link to="/placement" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/pattern-new.png" alt="Right Side Design" className="right-side-image" />
  <img src="LandingImage/Mobile 4.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>

<div id="do_more" className="section do-more-section left" ref={brandingRef}>
  <div className="section-content left">
    <h2>Cross Brand Positioning</h2>
    <p>
    We understand how tricky it is to get branding right. Let Gryphon Academy take the stress out of it. We’ll manage everything—from strategy to execution—so you can focus on what you do best.
    </p>
    <Link to="/brandPositioning" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/pattern-new.png" alt="Left Side Design" className="left-side-image" />
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