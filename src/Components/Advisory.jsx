import React, { useEffect, useRef } from 'react';
import { Typography } from "@material-tailwind/react";

const ADVISORY_DATA = [
  { name: "Dr. K. S. Sangwan", designation: "Chair Professor", location: "Mechanical Engineering Department, BITS Pilani", image: "Advisory/KS Sangwan.png", logo: "Logos/1.jpg" },
  { name: "Mr. Mohan Patel", designation: "Project Management Consultant", location: "From IIT-Bombay", image: "Advisory/Mr. Mohan sir 1.png", logo: "Logos/1.jpg" },
  { name: "Dr. Sukanta Bhatt", designation: "Director of Tisory Consulting", location: "From IIT-Kharagpur", image: "Advisory/Sukanta Bhatt.png", logo: "Logos/1.jpg" },
  { name: "Mr. Rahul Bagale", designation: "Group HR Head", location: "Force Motors", image: "Advisory/Rahul Bagale.png", logo: "Logos/1.jpg" },
  { name: "Mr. Siddharth Moorthy", designation: "Managing Director", location: "Vascon Engineers Ltd.", image: "Advisory/Siddharth.png", logo: "Logos/1.jpg" },
  { name: "Mr. Ramchandra Honap", designation: "SHRBP-Supply Chain", location: "Hindustan Coca-Cola Beverages", image: "Advisory/Ram Honap.png", logo: "Logos/1.jpg" },
  { name: "Cdr. Pratap Pawar", designation: "Director", location: "HR & IT gslab", image: "Advisory/Pratap Sir.png", logo: "Logos/1.jpg" },
  { name: "Dr. Anil Kumar", designation: "J C Bose National Fellow & Honorary Professor AcSIR", location: "", image: "Advisory/Anil kumar.png", logo: "Logos/1.jpg" },
];

const Advisory = () => {
  const advisoryRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = advisoryRef.current;
    const totalWidth = scrollContainer.scrollWidth / 2; // half of total width for seamless effect
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // adjust this value for speed
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

      if (scrollAmount >= totalWidth) {
        scrollAmount = 0; // Reset scroll
      }

      requestAnimationFrame(scroll);
    };

    scroll(); // Start scrolling

    return () => cancelAnimationFrame(scroll); // Clean up on unmount
  }, []);

  const duplicatedData = [...ADVISORY_DATA, ...ADVISORY_DATA]; // Keep the structure

  return (
    <div className="py-4 bg-[#091327] roboto-regular">
      <div className="mb-12">
        <h2 className="text-center mb-6 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-[#ffc700]">
          OUR ADVISORY BOARD
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 advisory-scroll" ref={advisoryRef}>
            {duplicatedData.map((person, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg w-64 flex flex-col flex-shrink-0 h-96"
              >
                <div className="w-full bg-[#003073] h-60 ">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-center flex-grow">
                  <Typography className="text-lg font-bold break-words">{person.name}</Typography>
                  <Typography className="text-gray-600 break-words">{person.designation}</Typography>
                  {person.location && <Typography className="text-gray-600 font-bold break-words">{person.location}</Typography>}
                </div>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-10 flex items-center justify-center bg-white overflow-hidden">
                    <img src={person.logo} alt="Logo" className="w-full h-full object-contain" />
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

export default Advisory;
