import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import "@fontsource/roboto";
import '../src/App.css'; // Import the main CSS file
import Home from '../src/components/Home'; // Import the Home component
import MasterClass3 from '../src/components/MasterClass3';
import About from '../src/components/About'; 
import GAX from '../src/components/GAX'; 
import Blogs from '../src/components/Blogs'; 
import Footer from '../src/components/Footer'; 
import Navbar from '../src/components/Navbar'; 
import Placement from '../src/components/Placement'; 
import Contact from '../src/components/Contact'; 
import Training from './pages/Training';
import BrandPositioning from '../src/components/BrandPositioning'; // Import the page
import CollegeTraining from './pages/CollegeTraining';
import CorporateTraining from './pages/CorporateTraining';
import FacultyTraining from './pages/FacultyTraining'; 
import WhatsAppWidget from '../src/components/WhatsAppWidget'; 
import ScrollToTopButton from '../src/components/ScrollToTopButton'; 
import Post1 from '../src/components/BlogPages/Post1';
import Post2 from '../src/components/BlogPages/Post2';
import Post3 from '../src/components/BlogPages/Post3';
import Post4 from '../src/components/BlogPages/Post4';
import Post5 from '../src/components/BlogPages/Post5';
import Post6 from '../src/components/BlogPages/Post6';
import NotFound from '../src/components/NotFound'; // Import the NotFound component
import DecEvent from '../src/components/DecEvent'; // Import the DecEvent component
import DecEventGroundZero from '../src/components/DecEventGroundZero'; // Import the Ground Zero page component
import Loader from '../src/components/Loader'; // Import the loader component
import DecEventAgenda from '../src/components/DecEventAgenda'; // Import the DecEventAgenda component

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

  useEffect(() => {
    const baseTitle = "Gryphon Academy | Bridging the Gap Between Industry and Academia";
  
    const titleMap = {
      "/": "Home",
      "/masterclass3": "Masterclass 3.0",
      "/test": "Home",
      "/about-us": "About Us",
      "/gax": "GAX",
      "/blogs": "Blogs",
      "/placement": "Placement",
      "/contact": "Contact Us",
      "/brandPositioning": "Brand Positioning",
      "/training": "Training",
      "/collegeTraining": "College Training",
      "/corporatetraining": "Corporate Training",
      "/facultytraining": "Faculty Training",
      "/events": "Events",
      "/agenda": "Agenda",
      "/post1": "Blog Post 1",
      "/post2": "Blog Post 2",
      "/post3": "Blog Post 3",
      "/post4": "Blog Post 4",
      "/post5": "Blog Post 5",
      "/post6": "Blog Post 6",
    };
  
    const pageTitle = titleMap[location.pathname] || "Page Not Found";
  
    document.title = `${pageTitle} | ${baseTitle}`;
  
    // Track the page view with Google Analytics
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowWhatsAppWidget(true); // Show after 3 seconds
  }, 3000);

  return () => clearTimeout(timer); // Cleanup on unmount
}, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<><Navbar /><DecEventAgenda /></>} />
        <Route path="/ground-zero" element={<DecEventGroundZero />} />
        <Route path="/about-us" element={<><Navbar /><About /></>} />
        <Route path="/about-us/" element={<><Navbar /><About /></>} />
        <Route path="/gax" element={<><Navbar /><GAX /></>} />
        <Route path="/masterclass3" element={<MasterClass3 />} />
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
