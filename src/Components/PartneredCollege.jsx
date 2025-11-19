import React from 'react';

const PartneredCollege = () => {
  const colleges = [
    { name: 'Indira College of Engineering and Management', imageUrl: 'placement-bg/Collegelogo1.png' },
    { name: 'Indira School Of Communication', imageUrl: 'placement-bg/College logo 2 1.png' },
    { name: 'Indira Institute of Management, Pune', imageUrl: 'placement-bg/College logo 3 1.png' },
    { name: 'Indira College of Commerce and Science', imageUrl: 'placement-bg/College logo 4 1.png' },
    { name: 'D Y Patil International University', imageUrl: 'Clgimage/5-2.png' },
    { name: 'D Y Patil College of Engineering & Technology', imageUrl: 'placement-bg/College logo 7.png' },
    { name: 'Institute of Industrial and Computer Management and Research', imageUrl: 'Clgimage/iicmrnew.png' },
    { name: 'Dnyanshree Institute Of Engineering & Technology', imageUrl: 'Clgimage/dietnew.png' },
    { name: 'Sanjivani KBP Polytechnic', imageUrl: 'Clgimage/sce.png' },
    { name: 'Pune Business School', imageUrl: 'Clgimage/pbs.png' },
    { name: 'Dr. J. J. Magdum College Of Engineering Jaysingpur', imageUrl: 'Clgimage/jjm.png' },
    { name: 'Jayawant Shikshan Prasarak Mandal', imageUrl: 'Clgimage/jspm.png' },
    { name: 'LEAD College of Management', imageUrl: 'Clgimage/13-1.png' },
    { name: 'Savitribai Phule Pune University', imageUrl: 'Clgimage/sppu.png' },
    { name: 'S. B. Patil Institute of Management', imageUrl: 'Clgimage/sbp.png' },
    { name: 'Ajeenkya DY Patil University', imageUrl: 'Clgimage/16-1.png' },
    { name: 'Ramachandran International Institute of Management', imageUrl: 'placement-bg/College logo 5 1.png' },
    { name: 'Yashoda Technical Campus', imageUrl: 'placement-bg/College logo 6 1.png' },
    { name: 'ASM\'s IBMR Pune Institute of Management & Research', imageUrl: 'Clgimage/ASM\'s IBMR Pune Institute of Management & Research.avif' },
    { name: 'Ideal Institute Of Technology', imageUrl: 'Clgimage/Ideal Institute Of Technology.avif' },
    { name: 'Indira University', imageUrl: 'Clgimage/Indira University.avif' },
    { name: 'International School of Management Excellence', imageUrl: 'Clgimage/International School of Management Excellence.avif' },
    { name: 'Mauli College of Engineering & Technology', imageUrl: 'Clgimage/Mauli College of Engineering & Technology.avif' },
    { name: 'Nagpur Institute of Technology', imageUrl: 'Clgimage/Nagpur Institute of Technology.avif' },
    { name: 'P. R. Pote Patil College of Engineering and Management', imageUrl: 'Clgimage/P. R. Pote Patil College of Engineering and Management.avif' },
    { name: 'Pune District Education Association College Of Engineering', imageUrl: 'Clgimage/Pune District Education Association College Of Engineering.avif' },
    { name: 'Sharda University', imageUrl: 'Clgimage/Sharda University.avif' },
    { name: 'Shri Ramdeobaba College of Engineering and Management', imageUrl: 'Clgimage/Shri Ramdeobaba College of Engineering and Management.avif' },
    { name: 'Sri Eshwar College of Engineering', imageUrl: 'Clgimage/Sri Eshwar College of Engineering.avif' },
    { name: 'Sanjivani KBP Polytechnic', imageUrl: 'Clgimage/sce.png' },
  ];

  return (
    <div className="bg-[#01224F] py-8 roboto-regular">
      <div className="container mx-auto px-8 sm:px-8 md:px-16 lg:px-16 xl:px-16">
        <p className="text-2xl md:text-4xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8 text-center text-[#ffc700]">
          Partnered Colleges
        </p>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-3  lg:gap-y-6 gap-x-4">
            {colleges.map((college, index) => (
              <div key={index} className="flex flex-col items-center overflow-hidden">
                <div className="h-20 sm:h-28 flex items-center">
                  <img 
                    src={college.imageUrl} 
                    alt={college.name} 
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Capsule for "See More" below the logos */}
          <div className="sm-mt-0 md:mt-4 text-end pr-2">
            <div className="bg-[#01224F] text-white font-semibold text-sm py-1 px-2 rounded-full shadow inline-block hover:scale-105">
            and many more...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredCollege;
