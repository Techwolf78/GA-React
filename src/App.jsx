import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import '../src/Components/App.css';
import "@fontsource/roboto";
import './App.css'; 
import Home from './Components/Home.jsx'; 
import MasterClass3 from './Components/MasterClass3';
import About from './Components/About'; 
import GAX from './Components/GAX'; 
import Blogs from './Components/Blogs'; 
import Footer from './Components/Footer'; 
import Navbar from './Components/Navbar'; 
import Placement from './Components/Placement'; 
import Contact from './Components/Contact'; 
import Training from './Components/Training';
import BrandPositioning from './Components/BrandPositioning'; // Import the page
import CollegeTraining from './Components/CollegeTraining';
import CorporateTraining from './Components/CorporateTraining';
import FacultyTraining from './Components/FacultyTraining'; 
import WhatsAppWidget from './Components/WhatsAppWidget'; 
import ScrollToTopButton from './Components/ScrollToTopButton'; 
import Post1 from './Components/BlogPages/Post1';
import Post2 from './Components/BlogPages/Post2';
import Post3 from './Components/BlogPages/Post3';
import Post4 from './Components/BlogPages/Post4';
import Post5 from './Components/BlogPages/Post5';
import Post6 from './Components/BlogPages/Post6';
import NotFound from './Components/NotFound'; // Import the NotFound component
import DecEvent from './Components/DecEvent'; // Import the DecEvent component
import DecEventGroundZero from './Components/DecEventGroundZero'; // Import the Ground Zero page component
import Loader from './Components/Loader'; // Import the loader component
import DecEventAgenda from './Components/DecEventAgenda'; // Import the DecEventAgenda component

function App() {
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false); // State to track loader finish
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // Hook to navigate to different paths

  useEffect(() => {
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      // Only navigate if there's a trailing slash and the pathname isn't already the root
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]); // Run this only when `location` changes
  
  const handleLoaderFinish = () => {
    setLoaderFinished(true); // Set the loader as finished
  };

  // Dynamically set the page title based on the route
  useEffect(() => {
    const baseTitle = "Gryphon Academy | Bridging the Gap Between Industry and Academia";
    let pageTitle = "";

    switch (location.pathname) {
      case "/":
        pageTitle = "Home";
        break;
      case "/masterclass3":
        pageTitle = "Masterclass 3.0";
        break;
      case "/test":
        pageTitle = "Home";
        break;
      case "/about-us":
        pageTitle = "About Us";
        break;
      case "/gax":
        pageTitle = "GAX";
        break;
      case "/blogs":
        pageTitle = "Blogs";
        break;
      case "/placement":
        pageTitle = "Placement";
        break;
      case "/contact":
        pageTitle = "Contact Us";
        break;
      case "/brandPositioning":
        pageTitle = "Brand Positioning";
        break;
      case "/training":
        pageTitle = "Training";
        break;
      case "/collegeTraining":
        pageTitle = "College Training";
        break;
      case "/corporatetraining":
        pageTitle = "Corporate Training";
        break;
      case "/facultytraining":
        pageTitle = "Faculty Training";
        break;
      case "/events":
        pageTitle = "Events";
        break;
      case "/agenda":
        pageTitle = "Agenda";
        break;
      case "/post1":
        pageTitle = "Blog Post 1";
        break;
      case "/post2":
        pageTitle = "Blog Post 2";
        break;
      case "/post3":
        pageTitle = "Blog Post 3";
        break;
      case "/post4":
        pageTitle = "Blog Post 4";
        break;
      case "/post5":
        pageTitle = "Blog Post 5";
        break;
      case "/post6":
        pageTitle = "Blog Post 6";
        break;
      case "/login":
        pageTitle = "Login";
        break;
      case "/forget-password":
        pageTitle = "Forget Password";
        break;
      default:
        pageTitle = "Page Not Found";
    }

    document.title = `${pageTitle} | ${baseTitle}`;
    
    // Track the page view with Google Analytics
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]); // Re-run whenever location changes

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Display the WhatsApp Widget only after scrolling on /brandPositioning page
  useEffect(() => {
    if (location.pathname === '/brandPositioning') {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowWhatsAppWidget(true); // Show widget after scrolling
        } else {
          setShowWhatsAppWidget(false); // Hide widget if not scrolled
        }
      };

      // Listen to scroll event when on /brandPositioning page
      window.addEventListener('scroll', handleScroll);

      // Cleanup event listener on component unmount or route change
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/agenda" element={<><Navbar /><DecEventAgenda /></>} />
        <Route path="/ground-zero" element={<DecEventGroundZero />} />
        <Route path="/about-us" element={<><Navbar /><About /></>} />
        <Route path="/about-us/" element={<><Navbar /><About /></>} />
        <Route path="/gax" element={<><Navbar /><GAX /></>} />
        <Route path="/masterclass3" element={<><Navbar /><MasterClass3 /></>} />
        <Route path="/blogs" element={<><Navbar /><Blogs /></>} />
        <Route path="/post1" element={<><Navbar /><Post1 /></>} />
        <Route path="/post2" element={<><Navbar /><Post2 /></>} />
        <Route path="/post3" element={<><Navbar /><Post3 /></>} />
        <Route path="/post4" element={<><Navbar /><Post4 /></>} />
        <Route path="/post5" element={<><Navbar /><Post5 /></>} />
        <Route path="/post6" element={<><Navbar /><Post6 /></>} />
        <Route path="/placement" element={<><Navbar /><Placement /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/brandPositioning" element={<><Navbar /><BrandPositioning /></>} />  {/* Brand Positioning Route */}
        <Route path="/training" element={<><Navbar /><Training /></>} />
        <Route path="/test" element={<><Navbar /><Home /></>} />
        
        {/* /events route showing loader and then event content */}
        <Route path="/events" element={
          <>
            <Navbar /> {/* Navbar always visible */}
            {!loaderFinished ? (
              <Loader onFinish={handleLoaderFinish} /> // Show loader until it's finished
            ) : (
              <DecEvent /> // Show DecEvent once loader is finished
            )}
          </>
        } />
       <Route path="/collegetraining" element={<><Navbar /><CollegeTraining /></>} />

        <Route path="/corporateTraining" element={<><Navbar /><CorporateTraining /></>} />
        <Route path="/facultyTraining" element={<><Navbar /><FacultyTraining /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showWhatsAppWidget && (<WhatsAppWidget />)}
      
      <ScrollToTopButton visible={scrollVisible} />
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router basename="/">
      <App />
    </Router>
  );
}

export default AppWrapper;
