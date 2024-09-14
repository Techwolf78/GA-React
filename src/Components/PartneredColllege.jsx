import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';

const PartneredCollege = () => {
  const colleges = [
    { name: 'Indira School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/1-1.png' },
    { name: 'Indira College of Engineering and Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/2-2.png' },
    { name: 'Indira Institute of Management, Pune', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/3-2.png' },
    { name: 'Indira College of Engineering and Management', location: 'Zurich, Switzerland', imageUrl: 'Clgimage/4-2.png' },
    { name: 'IES College', location: 'Bhopal, Madhya Pradesh', imageUrl: 'Clgimage/5-2.png' },
    { name: 'D Y Patil College ', location: 'Kolhapur, Maharashtra', imageUrl: 'Clgimage/6-2.png' },
    { name: 'D Y Patil College', location: 'Navi Mumbai, Maharashtra', imageUrl: 'Clgimage/7-2.png' },
    { name: 'Lead College of Management', location: 'Kerala, India', imageUrl: 'Clgimage/8-2.png' },
    { name: 'ISBR Bangalore ', location: 'Bangalore, Kolkata ', imageUrl: 'Clgimage/9-2.png' },
    { name: 'Yashoda Technical Campus', location: 'Maharashtra, India', imageUrl: 'Clgimage/10-2.png' },
    { name: 'Indira School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/11-2.png' },
    { name: 'Indira Institute of Management, Pune', location: 'London, UK', imageUrl: 'Clgimage/12-2.png' },
    { name: 'Indira College of Engineering and Management', location: 'New York, USA', imageUrl: 'Clgimage/13-1.png' },
    { name: 'Indira Institute of Management, Pune', location: 'Paris, France', imageUrl: 'Clgimage/14-1.png' },
    { name: 'Indira School Of Communication', location: 'Berlin, Germany', imageUrl: 'Clgimage/15-1.png' },
    { name: 'ISBR, Banglore', location: 'Banglore, Kolkata', imageUrl: 'Clgimage/16-1.png' },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-purple-50 to-purple-100 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <p className="text-4xl font-bold mb-10 text-center text-black">FEW PARTNERED COLLEGES</p>
        <div className="relative overflow-hidden">
          {Array.from({ length: Math.ceil(colleges.length / 6) }).map((_, rowIndex) => (
            <div key={rowIndex} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-8 gap-x-4">
                {colleges.slice(rowIndex * 6, rowIndex * 6 + 6).map((college, index) => (
                  <div key={index} className="flex flex-col rounded-3xl overflow-hidden">
                    <img 
                      src={college.imageUrl} 
                      alt={college.name} 
                      className="w-full h-auto max-w-full object-cover" 
                    />
                    <div className="flex flex-col flex-grow p-4 bg-transparent">
                      <div className="flex-grow">
                        {/* <h3 className="text-xl font-bold mb-1 text-center text-black">{college.name}</h3> */}
                      </div>
                      <div style={{ fontSize: '0.9rem' }} className="text-gray-700 flex items-center justify-center space-x-2  ">
                        <MapPinIcon className="w-5 h-5 text-gray-600" />
                        <span className="">{college.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartneredCollege;
