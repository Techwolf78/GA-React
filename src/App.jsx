import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components
import Home from "./components/Home";
import CollegeTraining from "./components/CollegeTraining";
import CorporateTraining from "./components/CorporateTraining";
import FacultyTraining from "./components/FacultyTraining";
import Contact from "./components/Contact";
import About from "./components/About.jsx";
import Placement from "./components/Placement";
import Digital from "./components/Digital";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college-training" element={<CollegeTraining />} />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/faculty-training" element={<FacultyTraining />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
