import React, { useState } from 'react';
import { FaUniversity, FaUserTie, FaUserGraduate, FaClock } from 'react-icons/fa';

function CollegeBox() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/400x300?text=Image+1&bg=8e2de2&fg=ffffff',
    'https://via.placeholder.com/400x300?text=Image+2&bg=7f5af0&fg=ffffff',
    'https://via.placeholder.com/400x300?text=Image+3&bg=9d7af0&fg=ffffff',
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-white to-purple-100 shadow-lg">
      <div className="flex w-full max-w-screen-lg">
        <div className="flex-1 p-6">
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
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
              <button 
                key={index} 
                onClick={() => setCurrentImageIndex(index)} 
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-blue-600' : 'bg-blue-800'} hover:bg-blue-500 transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <div className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-50 rounded-lg shadow-md">
          <FaUniversity className="text-5xl text-blue-600" />
          <p className="text-3xl font-semibold">55+</p>
          <p className="text-gray-700">Colleges</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-50 rounded-lg shadow-md">
          <FaUserTie className="text-5xl text-blue-600" />
          <p className="text-3xl font-semibold">5/5</p>
          <p className="text-gray-700">Trainers Index</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-50 rounded-lg shadow-md">
          <FaUserGraduate className="text-5xl text-blue-600" />
          <p className="text-3xl font-semibold">60,000+</p>
          <p className="text-gray-700">Students Trained</p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4 bg-white bg-opacity-50 rounded-lg shadow-md">
          <FaClock className="text-5xl text-blue-600" />
          <p className="text-3xl font-semibold">65,000+</p>
          <p className="text-gray-700">Training Hours</p>
        </div>
      </div>
    </div>
  );
}

export default CollegeBox;
