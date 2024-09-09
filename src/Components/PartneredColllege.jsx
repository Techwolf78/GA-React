import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'; // Import Heroicons location icon

const PartneredCollege = () => {
  const colleges = [
    { name: 'Indria School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/1-1.png' },
    { name: 'Indria College of Engineering and Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/2-2.png' },
    { name: 'Indria Institute of Management, Pune', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/3-2.png' },
    { name: 'Indria College of Engineering and Management', location: 'Zurich, Switzerland', imageUrl: 'Clgimage/4-2.png' },
    { name: 'Indria Institute of Management, Pune', location: 'Cambridge, USA', imageUrl: 'Clgimage/5-2.png' },
    { name: 'Indria College of Engineering and Management', location: 'Cambridge, USA', imageUrl: 'Clgimage/6-2.png' },
    { name: 'Indria Institute of Management, Pune', location: 'Stanford, USA', imageUrl: 'Clgimage/7-2.png' },
    { name: 'Indria School Of Communication', location: 'Oxford, UK', imageUrl: 'Clgimage/8-2.png' },
    { name: 'Indria Institute of Management, Pune', location: 'Cambridge, UK', imageUrl: 'Clgimage/9-2.png' },
    { name: 'Indria College of Engineering and Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/10-2.png' },
    { name: 'Indria School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/11-2.png' },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-purple-50 to-purple-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <p className="text-5xl font-bold mb-12 text-center text-black">Few Partnered Colleges</p>
        <div className="relative">
          {/* First Row: 4 Items */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-4">
            {colleges.slice(0, 4).map((college, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  <img 
                    src={college.imageUrl} 
                    alt={college.name} 
                    className="max-w-full max-h-32 rounded-t-lg" 
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold mb-1">{college.name}</h3>
                </div>
                <div className="text-gray-700 text-lg mt-1 flex items-center space-x-2">
                  <MapPinIcon className="w-5 h-5 text-gray-600" />
                  <span>{college.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: 3 Items */}
          <div className="relative top-[calc(100%+2rem)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
              {colleges.slice(4, 7).map((college, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <img 
                      src={college.imageUrl} 
                      alt={college.name} 
                      className="max-w-full max-h-32 rounded-t-lg" 
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold mb-1">{college.name}</h3>
                  </div>
                  <div className="text-gray-700 text-lg mt-1 flex items-center space-x-2">
                    <MapPinIcon className="w-5 h-5 text-gray-600" />
                    <span>{college.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row: 4 Items */}
          <div className="relative top-[calc(100%+4rem)]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-4">
              {colleges.slice(7).map((college, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <img 
                      src={college.imageUrl} 
                      alt={college.name} 
                      className="max-w-full max-h-32 object-contain rounded-t-lg" 
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold mb-1">{college.name}</h3>
                  </div>
                  <div className="text-gray-700 text-lg mt-1 flex items-center space-x-2">
                    <MapPinIcon className="w-5 h-5 text-gray-600" />
                    <span>{college.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredCollege;
