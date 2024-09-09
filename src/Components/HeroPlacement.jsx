import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const HeroPlacement = () => {
  return (
    <div className="relative z-10 w-full h-[60vh] overflow-hidden bg-[#e9e5ff]">
      <div className="relative w-full h-full">
        <img 
          src="Clgimage/Placement.jpg" 
          className="w-full h-full object-cover opacity-60" 
          alt="Placeholder" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#000000] animate-slideIn">One stop commercial free solution to recruiter’s complete fresher’s hiring needs </h1>
     
        </div>
      </div>
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 2s forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroPlacement;
