import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CSS/Connect.css'; // Adjust the path if needed

const ConnectWithUs = () => {
  return (
    <div className="app-container">
      <Link to="/contact" className="neon-link-button">
        Cont<span>a</span>ct Us
      </Link>
    </div>
  );
};

export default ConnectWithUs;
