import { useState, useEffect } from 'react';
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
import BrandPositioning from './Components/BrandPositioning'; 
import CollegeTraining from './Components/CollegeTraining';
import CorporateTraining from './Components/CorporateTraining';
import FacultyTraining from './Components/FacultyTraining'; 
import WhatsAppWidget from './Components/WhatsAppWidget'; 
import ScrollToTopButton from './Components/ScrollToTopButton'; 
import Post1 from './Components/BlogPages/Post1';
import Post2 from './Components/BlogPages/Post2';
import Post3 from './Components/Cloud';
import Post4 from './Components/BlogPages/Post4';
import Post5 from './Components/BlogPages/Post5';
import Post6 from './Components/BlogPages/Post6';
import NotFound from './Components/NotFound'; 
import DecEvent from './Components/DecEvent'; 
import DecEventGroundZero from './Components/DecEventGroundZero'; 
import Loader from './Components/Loader'; 
import DecEventAgenda from './Components/DecEventAgenda';
import Cloud from './Components/Cloud'; // ✅ Import Cloud Component

function App() {
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false); 
  const location = useLocation(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      navigate(location.pathname.slice(0, -1), { replace: true });
    }
  }, [location, navigate]); 
  
  const handleLoaderFinish = () => {
    setLoaderFinished(true); 
  };

  useEffect(() => {
    const baseTitle = "Gryphon Academy | Bridging the Gap Between Industry and Academia";
    let pageTitle = "";

    switch (location.pathname) {
      case "/":
      case "/test":
        pageTitle = "Home";
        break;
      case "/masterclass3":
        pageTitle = "Masterclass 3.0";
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
      case "/corporateTraining":
        pageTitle = "Corporate Training";
        break;
      case "/facultyTraining":
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
      case "/cloud":
        pageTitle = "Cloud Services"; // ✅ Added Cloud page title
        break;
      default:
        pageTitle = "Page Not Found";
    }

    document.title = `${pageTitle} | ${baseTitle}`;
    
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/brandPositioning') {
      const handleScroll = () => {
        setShowWhatsAppWidget(window.scrollY > 100);
      };

      window.addEventListener('scroll', handleScroll);
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
        <Route path="/masterclass3" element={<><MasterClass3 /></>} />
        <Route path="/blogs" element={<><Navbar /><Blogs /></>} />
        <Route path="/post1" element={<><Navbar /><Post1 /></>} />
        <Route path="/post2" element={<><Navbar /><Post2 /></>} />
        <Route path="/post3" element={<><Navbar /><Post3 /></>} />
        <Route path="/post4" element={<><Navbar /><Post4 /></>} />
        <Route path="/post5" element={<><Navbar /><Post5 /></>} />
        <Route path="/post6" element={<><Navbar /><Post6 /></>} />
        <Route path="/placement" element={<><Navbar /><Placement /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/brandPositioning" element={<><Navbar /><BrandPositioning /></>} />
        <Route path="/training" element={<><Navbar /><Training /></>} />
        <Route path="/test" element={<><Navbar /><Home /></>} />
        <Route path="/events" element={
          <>
            <Navbar />
            {!loaderFinished ? (
              <Loader onFinish={handleLoaderFinish} />
            ) : (
              <DecEvent />
            )}
          </>
        } />
        <Route path="/collegeTraining" element={<><Navbar /><CollegeTraining /></>} />
        <Route path="/corporateTraining" element={<><Navbar /><CorporateTraining /></>} />
        <Route path="/facultyTraining" element={<><Navbar /><FacultyTraining /></>} />
        <Route path="/cloud" element={<><Navbar /><Cloud /></>} /> {/* ✅ Added new route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showWhatsAppWidget && <WhatsAppWidget />}
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
