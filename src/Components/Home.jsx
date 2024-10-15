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
  <li className="nav-active">
    <div className="underline"></div>
    <a onClick={() => handleNavClick(heroRef)}><span>Home</span></a>
  </li>
  <li>
    <div className="underline"></div>
    <a onClick={() => handleNavClick(aboutRef)}><span>About Us</span></a>
  </li>
  <li>
    <div className="underline"></div>
    <a onClick={() => handleNavClick(trainingRef)}><span>Training</span></a>
  </li>
  <li>
    <div className="underline"></div>
    <a onClick={() => handleNavClick(placementRef)}><span>Placement</span></a>
  </li>
  <li>
    <div className="underline"></div>
    <a onClick={() => handleNavClick(brandingRef)}><span>Brand Positioning</span></a>
  </li>
</ul>

  </nav>
</div>


      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar" ref={sidebarRef}>
        <ul>
      
          <li>
            <Link to="/training" onClick={scrollToTop}><span>Training</span></Link>
            <ul>
              <li><Link to="/collegeTraining" onClick={scrollToTop}><span>College Training</span></Link></li>
              <li><Link to="/corporateTraining" onClick={scrollToTop}><span>Corporate Training</span></Link></li>
              <li><Link to="/facultyTraining" onClick={scrollToTop}><span>Faculty Training</span></Link></li>
            </ul>
          </li>
          <li><Link to="/placement" onClick={scrollToTop}><span>Placement</span></Link></li>
          <li><Link to="/blogs" onClick={scrollToTop}><span>Blogs</span></Link></li>
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
      <Link to="#" className="company-logo-link">
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
    </p>
    <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/vector 1.png" alt="Left Side Design" className="left-side-image hidden md:block" />
  <img src="LandingImage/MobileHeroNew.PNG" alt="Mobile Vector" className="mobile-vector-image " />
</div>

{/* Other sections */}
<div id="core_capabilities" className="section core-capabilities-section right" ref={aboutRef}>
  <div className="section-content right">
    <h2>About Us</h2>
    <p>
    Gryphon Academy bridges the gap between academic learning and industry needs by developing programmes that prepares your students to be job-ready from day one. Our curriculum, crafted in collaboration with industry experts, focuses on practical skills and real-world applications, ensuring students acquire the competencies employers seek. Through hands-on projects and specialized workshops, we foster technical knowledge along with essential soft skills like communication and leadership, transforming students into well-rounded professionals ready to excel in their careers.
    </p>
    <Link to="/about" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/vector 1.png" alt="Right Side Design" className="right-side-image" />
  <img src="LandingImage/Mobile 2.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>

<div id="operating_models" className="section operating-models-section left" ref={trainingRef}>
  <div className="section-content left">
    <h2>Training</h2>
    <p>
    At Gryphon Academy, our training programs are specifically designed with career goals of students in mind. We focus on equipping students with the essential skills that today’s industry demand, ensuring they excel in their fields. Our customized content addresses the unique challenges of the industry, while personalized evaluations help identify strengths and key areas of the students for improvement. By utilizing modern tools and methodologies, we enhance the students learning experience and prepare them for real-world applications. 
    </p>
    <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/vector 1.png" alt="Left Side Design" className="left-side-image" />
  <img src="LandingImage/Mobile 3.png" alt="Mobile Vector" className="mobile-vector-image" />
</div>

<div id="talent_transformations" className="section talent-transformations-section right" ref={placementRef}>
  <div className="section-content right">
    <h2>Placement</h2>
    <p>
    A well-trained resource secures their place in the industry, and at Gryphon Academy, we connect your students with over 450 recruiters for impactful industry-academia interactions, leading to successful placements. Our initiatives include guest sessions, industry collaborations, and empanelment, opening doors for students to become industry-ready. We provide comprehensive placement services, from pre-placement training to seamless recruitment and post-placement support, ensuring students are well-prepared and connected with top employers for ongoing career opportunities. 
    </p>
    <Link to="/placement" className="btn-know-more" onClick={scrollToTop}>
      <span>Know More</span>
    </Link>
  </div>
  <img src="LandingImage/vector 1.png" alt="Right Side Design" className="right-side-image" />
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
  <img src="LandingImage/vector 1.png" alt="Left Side Design" className="left-side-image" />
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