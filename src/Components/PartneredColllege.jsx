import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';

const PartneredCollege = () => {
  const colleges = [
    { name: 'Indira School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/1-1.png' },
    { name: 'Indira College of Engineering and Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/2-2.png' },
    { name: 'Indira Institute of Management, Pune', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/3-2.png' },
    { name: 'Indira College of Engineering and Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/4-2.png' },
    { name: 'IES College', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/5-2.png' },
    { name: 'D Y Patil College', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/6-2.png' },
    { name: 'D Y Patil College', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/7-2.png' },
    { name: 'Lead College of Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/8-2.png' },
    { name: 'ISBR Bangalore', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/9-2.png' },
    { name: 'Yashoda Technical Campus', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/10-2.png' },
    { name: 'Indira School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/11-2.png' },
    { name: 'Indira Institute of Management, Pune', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/12-2.png' },
    { name: 'Indira College of Engineering and Management', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/13-1.png' },
    { name: 'Indira Institute of Management, Pune', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/14-1.png' },
    { name: 'Indira School Of Communication', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/15-1.png' },
    { name: 'ISBR, Bangalore', location: 'Pune, Maharashtra', imageUrl: 'Clgimage/16-1.png' },
  ];

  return (
    <div className="bg-[#003073] py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-[#ffc700]">FEW PARTNERED COLLEGES</p>
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 gap-x-4">
            {colleges.map((college, index) => (
              <div key={index} className="flex flex-col rounded-3xl overflow-hidden">
                <img 
                  src={college.imageUrl} 
                  alt={college.name} 
                  className="w-full h-auto max-w-full object-cover" 
                />
                <div className="flex flex-col flex-grow p-4 bg-transparent">
                  <div className="flex-grow">
                    {/* Uncomment if you want to display the college name */}
                    {/* <h3 className="text-xl font-bold mb-1 text-center text-black">{college.name}</h3> */}
                  </div>
                  <div className="text-white flex items-center">
                    <MapPinIcon className="w-5 h-5 text-white" />
                    <span className="ml-2 overflow-hidden whitespace-nowrap text-ellipsis" style={{ maxWidth: '150px' }}>
                      {college.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredCollege;
