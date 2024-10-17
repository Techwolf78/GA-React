import React from 'react';

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-blue-900 text-white p-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-bounce z-10">Coming Soon!</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-2 z-10">Gryphon Academy</p>
      <p className="text-lg md:text-xl mb-4 z-10">Exciting things are on the way. Stay tuned!</p>

      {/* Background Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float bg-blue-300 rounded-full w-24 h-24 md:w-32 md:h-32 absolute" style={{ top: '20%', left: '10%' }} />
        <div className="animate-float bg-purple-300 rounded-full w-20 h-20 md:w-24 md:h-24 absolute" style={{ top: '50%', left: '70%' }} />
        <div className="animate-float bg-yellow-300 rounded-full w-16 h-16 md:w-20 md:h-20 absolute" style={{ top: '70%', left: '30%' }} />
      </div>

      {/* Inline styles */}
      <style jsx>{`
        body {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
          opacity: 0.8;
        }

        .animate-float:nth-child(odd) {
          animation-delay: 1s;
        }

        .animate-float:nth-child(even) {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;