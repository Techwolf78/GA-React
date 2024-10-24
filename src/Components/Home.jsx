import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/CSS/home.css";
import Testimonials from "./Testimonials";
import HomeSliderClg from "./HomeSliderClg";
import ConnectWithUs from "./ConnectWithUs";
import HomeSliderComp from "./HomeSliderComp";

const ProgressBar = ({ scrollPercent }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollPercent}%` }}></div>
    </div>
  );
};

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [firstWordIndex, setFirstWordIndex] = useState(0);
  const [lastWordIndex, setLastWordIndex] = useState(0);
  const [fadeFirst, setFadeFirst] = useState(false);
  const [fadeLast, setFadeLast] = useState(false);
  
  const firstWords = [
    "Theory",
    "Campus",
    "Students",
    "Academia",
    "Knowledge",
    "Skills",
    "Education & Learning"
  ];
  
  const lastWords = [
    "Practice",
    "Workplace",
    "Professionals",
    "Industry",
    "Opportunities",
    "Employment",
    "Outcome"
  ];
  
  const scrollPercent = useRef(0);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const trainingRef = useRef(null);
  const placementRef = useRef(null);
  const brandingRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out' });

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = (scrollTop / docHeight) * 100;
      scrollPercent.current = scrollFraction;

      const brandPositioningSection = brandingRef.current;
      if (brandPositioningSection) {
        const sectionHeight = brandPositioningSection.offsetHeight;
        setNavbarVisible(scrollTop <= brandPositioningSection.offsetTop + sectionHeight / 2);
      }

      activateNavLink();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activateNavLink = () => {
    const sections = [
      heroRef.current,
      aboutRef.current,
      trainingRef.current,
      placementRef.current,
      brandingRef.current,
    ];
    const navLinks = document.querySelectorAll(".stick-top-nav-ul li");

    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("nav-active");
    }
  };

  useEffect(() => {
    const cycleWords = () => {
      setFadeFirst(true);
      setFadeLast(true);
      
      // After the fade-out animation, change the words immediately
      setTimeout(() => {
        setFirstWordIndex((prevIndex) => (prevIndex + 1) % firstWords.length);
        setLastWordIndex((prevIndex) => (prevIndex + 1) % lastWords.length);
        
        setFadeFirst(false);
        setFadeLast(false);
      }, 300); // Set this to a shorter duration, like 1000ms for fade-out
      
    };
    
    // Set the interval for word switching to be less than the total duration (like 3000ms)
    const interval = setInterval(cycleWords, 2000); // Change to 4000ms to allow for immediate switch after fade
    
    return () => clearInterval(interval);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSidebar = (event) => {
    event.preventDefault();
    setSidebarOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return newState;
    });
  };

  const handleNavClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(activateNavLink, 500);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector(".top-navigation");
      if (window.innerWidth <= 768) {
        navbar.style.display = "none";
      } else {
        navbar.style.display = "flex";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="roboto-regular">
      <ProgressBar scrollPercent={scrollPercent.current} />

      <div className={`top-navigation ${isNavbarVisible ? "visible" : "hidden"}`}>
        <nav className="sticky-top-nav">
          <ul className="stick-top-nav-ul">
            <li className="nav-active">
              <div className="underline"></div>
              <a onClick={() => handleNavClick(heroRef)}>
                <span>The one stop hub</span>
              </a>
            </li>
            <li>
              <div className="underline"></div>
              <a onClick={() => handleNavClick(aboutRef)}>
                <span>Gryphon Academy </span>
              </a>
            </li>
            <li>
              <div className="underline"></div>
              <a onClick={() => handleNavClick(trainingRef)}>
                <span>Train as per the Industry</span>
              </a>
            </li>
            <li>
              <div className="underline"></div>
              <a onClick={() => handleNavClick(placementRef)}>
                <span>Get top brands</span>
              </a>
            </li>
            <li>
              <div className="underline"></div>
              <a onClick={() => handleNavClick(brandingRef)}>
                <span>Elevate your brand presence</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} id="sidebar" ref={sidebarRef}>
        <ul>
          <li>
            <Link to="/training" onClick={scrollToTop}>
              <span>Learning & Development</span>
            </Link>
            <ul>
              <li>
                <Link to="/collegeTraining" onClick={scrollToTop}>
                  <span>Industry Readiness Program</span>
                </Link>
              </li>
              <li>
                <Link to="/corporateTraining" onClick={scrollToTop}>
                  <span>Corporate Training</span>
                </Link>
              </li>
              <li>
                <Link to="/facultyTraining" onClick={scrollToTop}>
                  <span>Faculty Training</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/placement" onClick={scrollToTop}>
              <span>Campus Placements</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={scrollToTop}>
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>
              <span>Contact us</span>
            </Link>
          </li>
        </ul>
      </div>

      <button
        className={`sidebar-toggle ${isSidebarOpen ? "cross" : ""}`}
        id="sidebar-toggle"
        onClick={toggleSidebar}
      >
        <div></div>
      </button>

      <Link to="#" className="company-logo-link">
        <div className="company-logo"></div>
      </Link>

      <div id="hero_slider" className="section roboto-regular hero-slider-section left" ref={heroRef}>
        <div className="section-content left" data-aos="fade-up">
        <h2 className="hero-text">
  <span className={`fade ${fadeFirst ? "fade-out" : "fade-in"}`}>
    {firstWords[firstWordIndex]}
  </span>
  <span className="permanent-text text-white"> Bridging the Gap Between  </span>
  <span className={`fade ${fadeLast ? "fade-out" : "fade-in"}`}>
    {lastWords[lastWordIndex]}
  </span>
</h2>
<p>
Making students Industry Ready with our Customized Industry Readiness Programme
</p>
<Link to="/training" className="btn-know-more" onClick={scrollToTop}>
<span>Know More</span>
</Link>
</div>
<img
src="LandingImage/vector 1.png"
alt="Left Side Design"
className="left-side-image hidden md:block"
/>
<img
src="LandingImage/MobileHeroNew.PNG"
alt="Mobile Vector"
className="mobile-vector-image "
/>
</div>

      <div id="core_capabilities" className="section core-capabilities-section right" ref={aboutRef}>
        <div className="section-content right" data-aos="fade-left">
          <h2>About Us</h2>
          <p>
          Gryphon Academy is a Non-ed-tech organization, that bridges the gap between academia and industry needs, by developing Customized Industry readiness programmes, which prepares your students within the walls of campus. These trainings help students in transforming themselves into well-rounded professionals, ready to excel in their careers.
          </p>
          <Link to="/about" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.png"
          alt="Right Side Design"
          className="right-side-image"
        />
        <img
          src="LandingImage/Mobile 2.png"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div id="operating_models" className="section operating-models-section left" ref={trainingRef}>
        <div className="section-content left" data-aos="fade-right">
          <h2>Learning & Development</h2>
          <p>
          Our Industry Readiness Programme specializes in delivering focused & curated trainings that bridge the gap between academia and workplace demands! Students gain practical experience through hands-on projects, technical skill development, and immersive industry simulations. With interactive case studies and collaborative projects that reflect current market scenarios, we ensure our students are fully prepared to meet the employer expectations.
          </p>
          <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.png"
          alt="Left Side Design"
          className="left-side-image"
        />
        <img
          src="LandingImage/Mobile 3.png"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div id="talent_transformations" className="section talent-transformations-section right" ref={placementRef}>
        <div className="section-content right" data-aos="fade-left">
          <h2>Campus Placements</h2>
          <p>
          In campus placements, we connect top industry brands with campus talent, bringing premium opportunities from top 500 companies across multiple sectors. We manage the entire placement cycle, ensuring each opportunity aligns perfectly with student capabilities and campus goals, making the journey from campus to corporate seamless.
          </p>
          <Link to="/placement" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.png"
          alt="Right Side Design"
          className="right-side-image"
        />
        <img
          src="LandingImage/Mobile 4.png"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div id="do_more" className="section do-more-section left" ref={brandingRef}>
        <div className="section-content left" data-aos="fade-right">
          <h2>Cross Brand Positioning</h2>
          <p>
          We provide targeted digital marketing services for colleges, focusing on enhancing your visibility and attracting prospective students. Our offerings include organizing events, HR summits, and admission campaigns that helps the institutions enhance their position in the academia. Our strategic approach empowers colleges to adeptly navigate the digital landscape and achieve their visibility objectives.
          </p>
          <Link to="/brandPositioning" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.png"
          alt="Left Side Design"
          className="left-side-image"
        />
        <img
          src="LandingImage/Mobile5.png"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div>
        <HomeSliderComp />
        <HomeSliderClg />
        <Testimonials />
      </div>
      <ConnectWithUs />
    </div>
  );
};

export default Home;
