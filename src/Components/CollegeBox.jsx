import React, { useState, useEffect } from 'react';
import { FaUniversity, FaUserTie, FaUserGraduate, FaClock } from 'react-icons/fa';

function CollegeBox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/400x300?text=Image+1&bg=091327&fg=ffffff',
    'https://via.placeholder.com/400x300?text=Image+2&bg=2e4d80&fg=ffffff',
    'https://via.placeholder.com/400x300?text=Image+3&bg=ffc700&fg=ffffff',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#003073] to-[#091327] shadow-lg">
      <div className="flex w-full max-w-screen-lg">
        <div className="flex-1 p-6">
          <p className="text-[#ffffff] text-lg font-medium leading-relaxed">
            Our customized Industry-specific trainings for colleges are carefully designed to meet both academic and industry needs. We incorporate the latest trends and student feedback to ensure relevant and effective programmes. By customizing our training for each institution and learner, we promote student success and build strong partnerships between academia and industry.
          </p>
        </div>

        <div className="flex-1 p-6 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <img 
              src={images[currentImageIndex]} 
              alt="Slider" 
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex mt-4 space-x-2">
            {images.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-[#FFC80E]' : 'bg-[#003073]'} transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <div className="flex flex-col items-center space-y-2 p-4 bg-[#003073] rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFC80E] rounded-full">
            <FaUniversity className="text-[#091327] text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-[#FFC80E]">55+</p>
          <p className="text-white">Colleges</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 bg-[#003073] rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFC80E] rounded-full">
            <FaUserTie className="text-[#091327] text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-[#FFC80E]">5/5</p>
          <p className="text-white">Trainers Index</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 bg-[#003073] rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFC80E] rounded-full">
            <FaUserGraduate className="text-[#091327] text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-[#FFC80E]">60,000+</p>
          <p className="text-white">Students Trained</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 bg-[#003073] rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-[#FFC80E] rounded-full">
            <FaClock className="text-[#091327] text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-[#FFC80E]">65,000+</p>
          <p className="text-white">Training Hours</p>
        </div>
      </div>
    </div>
  );
}

export default CollegeBox;
