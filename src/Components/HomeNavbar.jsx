import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/CSS/homeNavbar.css'; 

const HomeNavbar = () => {
  return (
    <nav className="navbar text-black  z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <img src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png" alt="Gryphon Academy Logo" className="logo-img" />
        </div>
        <ul className="nav-links flex space-x-8">
          <li><Link to="collegeTraining" className="nav-link">College</Link></li>
          <li><Link to="/corporateTraining" className="nav-link">Corporate</Link></li>
          <li><Link to="/facultyTraining" className="nav-link">Faculty</Link></li>
          <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
