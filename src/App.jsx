import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/Components/App.css'; // Import the App.css file
import "@fontsource/roboto";
import './App.css'; // Corrected path to App.css
import Home from './Components/Home.jsx'; // Import the Home component
import About from './Components/About'; // Import the About component
import GAX from './Components/GAX'; // Import the GAX component
import Blogs from './Components/Blogs'; // Import the Blogs component
import Footer from './Components/Footer'; // Import the Footer component
import Navbar from './Components/Navbar'; // Import the generic Navbar component
import Placement from './Components/Placement'; // Corrected path to Components
import Contact from './Components/Contact'; // Corrected path to Components
import Training from './Components/Training';
import BrandPositioning from './Components/BrandPositioning';
import CollegeTraining from './Components/CollegeTraining';
import CorporateTraining from './Components/CorporateTraining';
import FacultyTraining from './Components/FacultyTraining'; // Corrected path to Components
import WhatsAppWidget from './Components/WhatsAppWidget'; // Import the WhatsAppWidget component
import Post1 from './Components/BlogPages/Post1';
import Post2 from './Components/BlogPages/Post2';
import Post3 from './Components/BlogPages/Post3';
import Post4 from './Components/BlogPages/Post4';
import Post5 from './Components/BlogPages/Post5';
import Post6 from './Components/BlogPages/Post6';

function App() {
  const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppWidget(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Navbar /><About /></>} />
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
        <Route path="/collegeTraining" element={<><Navbar /><CollegeTraining /></>} />
        <Route path="/corporateTraining" element={<><Navbar /><CorporateTraining /></>} />
        <Route path="/facultyTraining" element={<><Navbar /><FacultyTraining /></>} />
      </Routes>
      {showWhatsAppWidget && <WhatsAppWidget />} {/* Render WhatsAppWidget after 3 seconds */}
      <Footer /> {/* Render Footer on all pages */}
    </Router>
  );
}

export default App;
