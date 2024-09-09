import React from 'react';
import { Typography } from "@material-tailwind/react";

const ADVISORS = [
  { name: "Mr. Rahul Bagale", designation: "Group HR Head - Force Motors", imgSrc: "https://via.placeholder.com/150" },
  { name: "Mr. Siddharth Moorthy", designation: "Managing Director Vascon Engineers Ltd.", imgSrc: "https://via.placeholder.com/150" },
  { name: "Mr. Ramchandra Honap", designation: "SHRBP-Supply Chain, Hindustan Coca-Cola Beverages", imgSrc: "https://via.placeholder.com/150" },
  { name: "Cdr. Pratap Pawar", designation: "Director - HR & IT gslab", imgSrc: "https://via.placeholder.com/150" },
  { name: "Dr. Anil Kumar", designation: "J C Bose National Fellow & Honorary Professor AcSIR.", imgSrc: "https://via.placeholder.com/150" },
];

const Advisory = () => {
  return (
    <div className="p-8 bg-[#e9e5ff]">
      <Typography variant="h2" color="blue-gray" className="text-center mb-12 font-bold">
        Our Advisory Board
      </Typography>

      <div className="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto">
        {/* Left Column */}
        <div className="flex flex-col space-y-8 items-start">
          {ADVISORS.slice(0, 3).map(({ name, designation, imgSrc }, index) => (
            <div
              key={name}
              className="flex items-start"
            >
              <img src={imgSrc} alt={name} className="w-36 h-36 rounded-full border-4 border-blue-gray-300 shadow-lg mr-4" />
              <div className="flex flex-col justify-center text-left min-h-[144px]">
                <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
                  {name}
                </Typography>
                <div className="border-t-2 border-black my-2" /> {/* Black line divider */}
                <Typography variant="small" color="blue-gray" className="font-light">
                  {designation}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8 items-end">
          {ADVISORS.slice(3).map(({ name, designation, imgSrc }, index) => (
            <div
              key={name}
              className={`flex items-start ${index === 0 ? 'mt-20' : index === 1 ? 'mt-4' : ''}`} // Staggered effect for right column
            >
              <div className="flex flex-col justify-center text-right mr-4 min-h-[144px]">
                <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
                  {name}
                </Typography>
                <div className="border-t-2 border-black my-2" /> {/* Black line divider */}
                <Typography variant="small" color="blue-gray" className="font-light">
                  {designation}
                </Typography>
              </div>
              <img src={imgSrc} alt={name} className="w-36 h-36 rounded-full border-4 border-blue-gray-300 shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisory;
