import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../assets/CSS/home.css";
import Testimonials from "./Testimonials";
import HomeSliderClg from "./HomeSliderClg";
import ConnectWithUs from "./CollegeTraining/ConnectWithUs";
import HomeSliderComp from "./HomeSliderComp";
import SidebarToggle from "./SidebarToggle";
import SynergySpherePopup from "./SynergySpherePopup";

// ProgressBar Component with PropTypes
const ProgressBar = ({ scrollPercent }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
};

// Add PropTypes for ProgressBar
ProgressBar.propTypes = {
  scrollPercent: PropTypes.number.isRequired,
};

// Default props for ProgressBar
ProgressBar.defaultProps = {
  scrollPercent: 0,
};

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [firstWordIndex, setFirstWordIndex] = useState(0);
  const [lastWordIndex, setLastWordIndex] = useState(0);
  const [fadeFirst, setFadeFirst] = useState(false);
  const [fadeLast, setFadeLast] = useState(false);
  const navigate = useNavigate();

  const firstWords = ["Campus", "Students", "Academia"];
  const lastWords = ["Corporate", "Professionals", "Industry"];

  const scrollPercent = useRef(0);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const trainingRef = useRef(null);
  const placementRef = useRef(null);
  const brandingRef = useRef(null);
  const sidebarRef = useRef(null);
  const sidebarToggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = (scrollTop / docHeight) * 100;
      scrollPercent.current = scrollFraction;

      const brandPositioningSection = brandingRef.current;
      if (brandPositioningSection) {
        const sectionHeight = brandPositioningSection.offsetHeight;
        setNavbarVisible(
          scrollTop <= brandPositioningSection.offsetTop + sectionHeight / 2,
        );
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
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {
      // Intentionally left empty to find the active section index
    }
    navLinks.forEach((link) => link.classList.remove("nav-active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("nav-active");
    }
  };

  useEffect(() => {
    const cycleWords = () => {
      setFadeFirst(true);
      setFadeLast(true);

      setTimeout(() => {
        setFirstWordIndex((prevIndex) => (prevIndex + 1) % firstWords.length);
        setLastWordIndex((prevIndex) => (prevIndex + 1) % lastWords.length);

        setFadeFirst(false);
        setFadeLast(false);
      }, 400);
    };

    const interval = setInterval(cycleWords, 2000);

    return () => clearInterval(interval);
  }, [firstWords.length, lastWords.length]);

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

  const handleMarqueeClick = () => {
    window.scrollTo({ top: 0 });
    navigate("/synergysphere2");
  };

  // Click outside handler to close the sidebar
  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      !sidebarToggleRef.current.contains(event.target)
    ) {
      setSidebarOpen(false);
      document.body.classList.remove("no-scroll");
    }
  };

  // Add event listener when component mounts, and clean up when unmounts
  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="roboto-regular">
      <ProgressBar scrollPercent={scrollPercent.current} />

      <div
        className={`top-navigation ${isNavbarVisible ? "visible" : "hidden"}`}
      >
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
                <span>Who are we</span>
              </a>
            </li>
            <li>
              <div className="underline"></div>
              <a onClick={() => handleNavClick(trainingRef)}>
                <span>Learning & Development</span>
              </a>
            </li>
            <li>
              <div className="underline"></div>
              <a onClick={() => handleNavClick(placementRef)}>
                <span>Industry Placements</span>
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

      <SidebarToggle
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarToggleRef={sidebarToggleRef}
        scrollToTop={scrollToTop}
      />

      <Link to="#" className="company-logo-link">
        <div className="company-logo"></div>
      </Link>

      <div
        id="hero_slider"
        className="section roboto-regular hero-slider-section left"
        ref={heroRef}
      >
        <div className="section-content left">
          <h2 className="hero-text">
            <div className="permanent-text text-white large-font">
              <span className="text-[#FFC80E]">Bridging</span> the{" "}
              <span className="text-[#FFC80E]">Gap</span> Between
            </div>
            <div className="hero-words">
              {/* First Word Container */}
              <div className="word-container first-word-container">
                <div
                  className={`fade ${
                    fadeFirst ? "fade-out" : "fade-in"
                  } small-font first-word`}
                >
                  {firstWords[firstWordIndex]}
                </div>
              </div>

              {/* Bridge Image Container */}
              <div className="image-container px-2">
                <img src="bridge.avif" alt="Bridge" className="hero-bridge" />
              </div>

              {/* Last Word Container */}
              <div className="word-container last-word-container">
                <div
                  className={`fade ${
                    fadeLast ? "fade-out" : "fade-in"
                  } small-font last-word`}
                >
                  {lastWords[lastWordIndex]}
                </div>
              </div>
            </div>
          </h2>
          <p>
            <span className="text-base font-medium">
              Creating Industry-Ready Force, Enhancing Fresher&apos;s
              Employability
            </span>
            <br />
            <span className="text-sm">
              With our Customized{" "}
              <span className="text-[#FFC80E]">
                Industry Readiness Programme
              </span>
            </span>
          </p>
          <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.webp"
          alt="Left Side Design"
          className="left-side-image hidden md:block"
        />
        <img
          src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1730698772/MobileHeroNew_ia78v1.webp"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div
        id="core_capabilities"
        className="section core-capabilities-section right"
        ref={aboutRef}
      >
        <div className="section-content right">
          <h2>About Us</h2>
          <p>
            Gryphon Academy is a Non-ed-tech organization, that bridges the gap
            between academia and industry needs, by developing Customized
            Industry readiness programmes, which prepares your students within
            the walls of campus. These trainings help students in transforming
            themselves into well-rounded professionals, ready to excel in their
            careers.
          </p>
          <Link to="/about-us" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.webp"
          alt="Right Side Design"
          className="right-side-image"
        />
        <img
          src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1730699772/Mobile_2_bf16b7.webp"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div
        id="operating_models"
        className="section operating-models-section left"
        ref={trainingRef}
      >
        <div className="section-content left">
          <h2>Learning & Development</h2>
          <p>
            Our Industry Readiness Programme specializes in delivering focused &
            curated trainings that bridge the gap between academia and workplace
            demands! Students gain practical experience through hands-on
            projects, technical skill development, and immersive industry
            simulations. With interactive case studies and collaborative
            projects that reflect current market scenarios, we ensure our
            students are fully prepared to meet the employer expectations.
          </p>
          <Link to="/training" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.webp"
          alt="Left Side Design"
          className="left-side-image"
        />
        <img
          src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1730699951/Mobile_3_iqwjro.webp"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div
        id="talent_transformations"
        className="section talent-transformations-section right"
        ref={placementRef}
      >
        <div className="section-content right">
          <h2>Campus Placements</h2>
          <p>
            In campus placements, we connect top industry brands with campus
            talent, bringing premium opportunities from top 500 companies across
            multiple sectors. We manage the entire placement cycle, ensuring
            each opportunity aligns perfectly with student capabilities and
            campus goals, making the journey from campus to corporate seamless.
          </p>
          <Link to="/placement" className="btn-know-more" onClick={scrollToTop}>
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.webp"
          alt="Right Side Design"
          className="right-side-image"
        />
        <img
          src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1730710833/Mobile_4_rsdx1y.avif"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div
        id="do_more"
        className="section do-more-section left"
        ref={brandingRef}
      >
        <div className="section-content left">
          <h2>Cross Brand Positioning</h2>
          <p>
            We provide targeted digital marketing services for colleges,
            focusing on enhancing your visibility and attracting prospective
            students. Our offerings include organizing events, HR summits, and
            admission campaigns that help the institutions enhance their
            position in academia. Our strategic approach empowers colleges to
            adeptly navigate the digital landscape and achieve their visibility
            objectives.
          </p>
          <Link
            to="/brandPositioning"
            className="btn-know-more"
            onClick={scrollToTop}
          >
            <span>Know More</span>
          </Link>
        </div>
        <img
          src="LandingImage/vector 1.webp"
          alt="Left Side Design"
          className="left-side-image"
        />
        <img
          src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1730710834/Mobile5_ct75om.avif"
          alt="Mobile Vector"
          className="mobile-vector-image"
        />
      </div>

      <div>
        <HomeSliderComp />
        <HomeSliderClg />
        <Testimonials />
        <SynergySpherePopup />
      </div>
      <ConnectWithUs />

      {/* Permanent Bottom Marquee Banner - Now Clickable */}
      <div className="fixed bottom-0 left-0 w-full bg-[#070c18]/80 backdrop-blur-md border-t border-white/10 overflow-hidden z-[50] py-2 sm:py-3 flex items-center shadow-[0_-5px_20px_rgba(13,211,197,0.1)]">
        <style>{`
          @keyframes marqueeSlide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            animation: marqueeSlide 30s linear infinite;
            display: flex;
            width: max-content;
          }
          .marquee-text-hover {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .marquee-text-hover:hover {
            text-decoration: underline;
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
          }
          .marquee-text-hover:hover .event-title {
            text-shadow: 0 0 10px rgba(13, 211, 197, 0.5);
          }
        `}</style>
        <div
          className="animate-marquee-infinite flex items-center whitespace-nowrap marquee-text-hover"
          onClick={handleMarqueeClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleMarqueeClick();
            }
          }}
        >
          {/* Repeat enough times to cover ultra-wide screens */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="flex items-center whitespace-nowrap shrink-0"
            >
              <span className="mx-6 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] whitespace-nowrap">
                <span className="text-cyan-300 event-title transition-all duration-300">
                  Master Class 3.0
                </span>
                <span className="text-white/50 mx-2">×</span>
                <span className="text-orange-400 event-title transition-all duration-300">
                  Synergy Sphere 2.0
                </span>
              </span>
              <span className="mx-6 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white whitespace-nowrap">
                June 27, 2026
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 mx-2 shrink-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
