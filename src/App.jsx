import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import components
import Home from "./Components/Home";
import CollegeTraining from "./Components/CollegeTraining";
import CorporateTraining from "./Components/CorporateTraining";
import FacultyTraining from "./Components/FacultyTraining";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Placement from "./Components/Placement";
import Digital from "./Components/Digital";
import RegistrationForm from "./Components/RegistrationForm";

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
