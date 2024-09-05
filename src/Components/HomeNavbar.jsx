import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/CSS/homeNavbar.css'; 

const HomeNavbar = () => {
  return (
    <nav className="navbar bg-transparent text-black py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold logo-animation">Gryphon Academy</div>
        <ul className="flex space-x-8">
          <li><Link to="/" className="hover:text-gray-300 transition-all duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition-all duration-300">About</Link></li>
          <li><Link to="/gax" className="hover:text-gray-300 transition-all duration-300">GAX</Link></li>
          <li><Link to="/blogs" className="hover:text-gray-300 transition-all duration-300">Blogs</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavbar;
