import React from 'react';

const PartneredCollege = () => {
  const colleges = [
    { name: 'Indira College of Engineering and Management', imageUrl: 'placement-bg/Collegelogo1.png' },
    { name: 'Indira School Of Communication', imageUrl: 'placement-bg/College logo 2 1.png' },
    { name: 'Indira Institute of Management, Pune', imageUrl: 'placement-bg/College logo 3 1.png' },
    { name: 'Indira College of Commerce and Science', imageUrl: 'placement-bg/College logo 4 1.png' },
    { name: 'D Y Patil International University', imageUrl: 'Clgimage/5-2.png' },
    { name: 'D Y Patil College of Engineering & Technology', imageUrl: 'placement-bg/College logo 7.png' },
    { name: 'Institute of Industrial and Computer Management and Research', imageUrl: 'Clgimage/7-2.png' },
    { name: 'Dnyanshree Institute Of Engineering & Technology', imageUrl: 'Clgimage/8-2.png' },
    { name: 'Sanjivani KBP Polytechnic', imageUrl: 'Clgimage/9-2.png' },
    { name: 'Pune Business School', imageUrl: 'Clgimage/10-2.png' },
    { name: 'Dr. J. J. Magdum College Of Engineering Jaysingpur', imageUrl: 'Clgimage/11-2.png' },
    { name: 'Jayawant Shikshan Prasarak Mandal', imageUrl: 'Clgimage/12-2.png' },
    { name: 'LEAD College of Management', imageUrl: 'Clgimage/13-1.png' },
    { name: 'Savitribai Phule Pune University', imageUrl: 'Clgimage/14-1.png' },
    { name: 'S. B. Patil Institute of Management', imageUrl: 'Clgimage/15-1.png' },
    { name: 'Ajeenkya DY Patil University', imageUrl: 'Clgimage/16-1.png' },
    { name: 'Ramachandran International Institute of Management', imageUrl: 'placement-bg/College logo 5 1.png' },
    { name: 'Yashoda Technical Campus', imageUrl: 'placement-bg/College logo 6 1.png' },
  ];

  return (
    <div className="bg-[#003073] py-8 roboto-regular">
      <div className="container mx-auto px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16">
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold sm:mb-2 md:mb-4 lg:mb-6 xl:mb-8 text-center text-[#ffc700]">
          PARTNERED COLLEGES
        </p>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-y-5 lg:gap-y-6 gap-x-4">
            {colleges.map((college, index) => (
              <div key={index} className="flex flex-col items-center overflow-hidden">
                <div className="h-28 flex items-center">
                  <img 
                    src={college.imageUrl} 
                    alt={college.name} 
                    className="max-h-full max-w-full object-contain"
                  />
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
