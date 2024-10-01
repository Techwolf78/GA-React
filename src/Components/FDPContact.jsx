// FDPContact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const FDPContact = () => {
  return (
    <div className="relative bg-[#003073] text-white py-12 mt-6 px-8 md:px-16 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
          Join Gryphon Academy's FDP Today
        </p>
        <p className="text-lg sm:text-xl mb-8">
          Embark on a transformative journey towards academic excellence. Empower your faculty, inspire your students, and lead your institution to greater heights with us.
        </p>
        <Link 
          to="/contact" 
          className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-[#ffffff] bg-transparent border border-[#ffffff] rounded-none overflow-hidden group transition-all duration-300 ease-in-out"
        >
          <span className="relative z-10 group-hover:text-[#003073]">Contact Us</span>
          <span className="absolute inset-0 bg-[#FFC80E] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 z-0"></span>
        </Link>
      </div>
    </div>
  );
};

export default FDPContact;
