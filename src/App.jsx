import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import '../src/Components/App.css';
import "@fontsource/roboto";
import './App.css'; 
import Home from './Components/Home.jsx'; 
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
import Post3 from './Components/BlogPages/Post3';
import Post4 from './Components/BlogPages/Post4';
import Post5 from './Components/BlogPages/Post5';
import Post6 from './Components/BlogPages/Post6';
import NotFound from './Components/NotFound'; // Import the NotFound component
import CookieConsentWidget from './Components/CookieConsentWidget'; // Import the CookieConsentWidget
import DecEvent from './Components/DecEvent'; // Import the DecEvent component
import Loader from './Components/Loader'; // Import the loader component

function App() {
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false); // State to track loader finish
  const location = useLocation(); // Get the current route location

  const handleLoaderFinish = () => {
    setLoaderFinished(true); // Set the loader as finished
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Display the WhatsApp Widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppWidget(true);
    }, 3000);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<><Navbar /><About /></>} />
        <Route path="/about-us/" element={<><Navbar /><About /></>} />
        <Route path="/gax" element={<><Navbar /><GAX /></>} />
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
        
        {/* /events route showing loader and then event content */}
        <Route path="/events" element={
          <>
            <Navbar /> {/* Navbar always visible */}
            {!loaderFinished ? (
              <Loader onFinish={handleLoaderFinish} /> // Show loader until it's finished
            ) : (
              <DecEvent /> // Show DecEvent once loader is finished
            )}
            <Footer /> {/* Footer always visible */}
          </>
        } />

        <Route path="/collegeTraining" element={<><Navbar /><CollegeTraining /></>} />
        <Route path="/corporateTraining" element={<><Navbar /><CorporateTraining /></>} />
        <Route path="/facultyTraining" element={<><Navbar /><FacultyTraining /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {location.pathname === "/" && (
        <CookieConsentWidget /> // Only show CookieConsentWidget on the Home page
      )}
      {showWhatsAppWidget && <WhatsAppWidget />} 
      <ScrollToTopButton visible={scrollVisible} />
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
