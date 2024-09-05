import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import About from './components/About'; // Import the About component
import GAX from './components/GAX'; // Import the GAX component
import Blogs from './components/Blogs'; // Import the Blogs component
import Footer from './components/Footer'; // Import the Footer component
import Navbar from './components/Navbar'; // Import the generic Navbar component
import Placement from './Components/Placement';
import Contact from './Components/Contact';

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

      </Routes>
      <Footer /> {/* Render Footer on all pages */}
    </Router>
  );
}

export default App;
