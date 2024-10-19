import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/home.css';
import Testimonials from './Testimonials';
import HomeSliderClg from './HomeSliderClg';
import ConnectWithUs from './ConnectWithUs';
import HomeSliderComp from './HomeSliderComp';

// ProgressBar Component
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

const Home = () => {
const [isSidebarOpen, setSidebarOpen] = useState(false);
const [isNavbarVisible, setNavbarVisible] = useState(true);
const [displayText, setDisplayText] = useState("Bridging Dreams");
const [isBlinking, setIsBlinking] = useState(true);
const [scrollPercent, setScrollPercent] = useState(0);
const heroRef = useRef(null);
const aboutRef = useRef(null);
const trainingRef = useRef(null);
const placementRef = useRef(null);
const brandingRef = useRef(null);
const sidebarRef = useRef(null);

useEffect(() => {
const sections = document.querySelectorAll('.section-content');

const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = (scrollTop / docHeight) * 100;

  setScrollPercent(scrollFraction);

  // Navbar visibility logic
  const brandPositioningSection = brandingRef.current;
  if (brandPositioningSection) {
      const sectionHeight = brandPositioningSection.offsetHeight;
      if (scrollTop > (brandPositioningSection.offsetTop + (sectionHeight / 2))) {
          setNavbarVisible(false);
      } else {
          setNavbarVisible(true);
      }
  }

  // Section visibility logic
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible'); // Optional: Remove when out of view
      }
  });

  activateNavLink();
};


window.addEventListener('scroll', handleScroll);
handleScroll(); // Check visibility on initial load

return () => window.removeEventListener('scroll', handleScroll);
}, []);

const activateNavLink = () => {
const sections = [heroRef.current, aboutRef.current, trainingRef.current, placementRef.current, brandingRef.current];
const navLinks = document.querySelectorAll('.stick-top-nav-ul li');

let index = sections.length;
while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
navLinks.forEach(link => link.classList.remove('nav-active'));
if (navLinks[index]) {
navLinks[index].classList.add('nav-active');
}
};

useEffect(() => {
let index = 0;
let isDeleting = false;
const newText = "Careers";
const fullText = "Dreams";
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

const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: 'smooth',
});
};

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

const handleNavClick = (ref) => {
if (ref.current) {
ref.current.scrollIntoView({ behavior: 'smooth' });
setTimeout(activateNavLink, 500);
}
};

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

return (
<div className="roboto-regular">
<ProgressBar scrollPercent={scrollPercent} />

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
<a onClick={() => handleNavClick(trainingRef)}><span>Learning & Development</span></a>
</li>
<li>
<div className="underline"></div>
<a onClick={() => handleNavClick(placementRef)}><span>Campus Placements</span></a>
</li>
<li>
<div className="underline"></div>
<a onClick={() => handleNavClick(brandingRef)}><span>Brand Positioning</span></a>
</li>
</ul>
</nav>
</div>

<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} id="sidebar" ref={sidebarRef}>
<ul>
<li>
<Link to="/training" onClick={scrollToTop}><span>Learning & Development</span></Link>
<ul>
<li><Link to="/collegeTraining" onClick={scrollToTop}><span>Industry Readiness Program</span></Link></li>
<li><Link to="/corporateTraining" onClick={scrollToTop}><span>Corporate Training</span></Link></li>
<li><Link to="/facultyTraining" onClick={scrollToTop}><span>Faculty Training</span></Link></li>
</ul>
</li>
<li><Link to="/placement" onClick={scrollToTop}><span>Campus Placements</span></Link></li>
<li><Link to="/blogs" onClick={scrollToTop}><span>Blogs</span></Link></li>
<li><Link to="/contact" onClick={scrollToTop}><span>Contact us</span></Link></li>
</ul>
</div>

<button
className={`sidebar-toggle ${isSidebarOpen ? 'cross' : ''}`}
id="sidebar-toggle"
onClick={toggleSidebar}
>
<div></div>
</button>

<Link to="#" className="company-logo-link">
<div className="company-logo"></div>
</Link>

<div id="hero_slider" className="section roboto-regular hero-slider-section left" ref={heroRef}>
<div className="section-content left">
<h2>
{displayText}
<span className={`cursor ${isBlinking ? 'blink' : ''}`}>|</span>
</h2>
<p>Making students Industry Ready with our Customized Industry Readiness Programme</p>
<Link to="/training" className="btn-know-more" onClick={scrollToTop}>
<span>Know More</span>
</Link>
</div>
<img src="LandingImage/vector 1.png" alt="Left Side Design" className="left-side-image hidden md:block" />
<img src="LandingImage/MobileHeroNew.PNG" alt="Mobile Vector" className="mobile-vector-image " />
</div>

<div id="core_capabilities" className="section core-capabilities-section right" ref={aboutRef}>
<div className="section-content right">
<h2>About Us</h2>
<p>
We are an organization that bridges the gap between academic learning and industry needs by developing industry ready programmes that prepares your students to be job-ready from day one transforming them into well-rounded professionals ready to excel in their careers.
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
<h2>Learning & Development</h2>
<p>
At Gryphon, we specifically curate our training programmes as per today’s industry demands, by using the latest modern tools and methodologies, we enhance the students learning experience and make sure they are the chosen ones in our 450+ recruiters.
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
<h2>Campus Placements</h2>
<p>
A well-trained resource easily secures their place in the industry and at Gryphon this is what we abide by, providing students top placement opportunities which also includes guest sessions, industry collaborations, and empanelment, helping them learn the industry applications & opening doors towards their dream companies.
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
Elevating your college's presence hinges on brand visibility, strategic positioning, and market insight. At Gryphon, we specialize in enhancing your brand through tailored solutions, including guest sessions, strategic events, and effective admissions strategies. Let us transform your college’s impact and redefine your market standing!
</p>
<Link to="/brandPositioning" className="btn-know-more" onClick={scrollToTop}>
<span>Know More</span>
</Link>
</div>
<img src="LandingImage/vector 1.png" alt="Left Side Design" className="left-side-image" />
<img src="LandingImage/Mobile5.png" alt="Mobile Vector" className="mobile-vector-image" />
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