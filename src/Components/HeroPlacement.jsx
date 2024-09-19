import React, { useEffect, useState } from 'react';

const HeroPlacement = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/placement-bg/plac-new.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className={`relative z-10 w-full h-[60vh] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative w-full h-full">
        {imageLoaded && (
          <img 
            src="/placement-bg/plac-new.jpg" 
            className="w-full h-full object-cover opacity-90" 
            alt="Placeholder" 
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className={`text-4xl md:text-6xl font-bold text-[#ffc700] ${imageLoaded ? 'animate-slideIn' : ''}`}>
            One stop commercial free solution to recruiter’s complete fresher’s hiring needs 
          </h1>
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
