// import React from 'react';
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/gax" element={<><Navbar /><GAX /></>} />
        <Route path="/blogs" element={<><Navbar /><Blogs /></>} />
        <Route path="/placement" element={<><Navbar /><Placement /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/brandPositioning" element={<><Navbar /><BrandPositioning /></>} />
        <Route path="/training" element={<><Navbar /><Training /></>} />
        <Route path="/collegeTraining" element={<><Navbar /><CollegeTraining /></>} />
        <Route path="/corporateTraining" element={<><Navbar /><CorporateTraining /></>} />
        <Route path="/facultyTraining" element={<><Navbar /><FacultyTraining /></>} />
       
      </Routes>
      <WhatsAppWidget /> {/* Render WhatsAppWidget on all pages */}
      <Footer /> {/* Render Footer on all pages */}
    </Router>
  );
}

export default App;
