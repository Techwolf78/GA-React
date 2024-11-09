import { useEffect, useRef } from 'react';
import { Typography } from "@material-tailwind/react";

const ADVISORY_DATA = [
  { name: "Dr. K. S. Sangwan", designation: "Chief Professor", location: "Mechanical Engineering Department, BITS Pilani", image: "Advisory/KS Sangwan.avif", logo: "placement-bg/BITS.PNG" },
  { name: "Mr. Mohan Patel", designation: "Project Management Consultant", location: "From IIT-Bombay", image: "Advisory/Mr. Mohan sir 1.avif", logo: "placement-bg/2 2.png" },
  { name: "Dr. Sukanta Bhatt", designation: "Director of Tisory Consulting", location: "From IIT-Kharagpur", image: "Advisory/Sukanta Bhatt.avif", logo: "placement-bg/3 1.png" },
  { name: "Mr. Rahul Bagale", designation: "Group HR Head", location: "Force Motors", image: "Advisory/Rahul Bagale.avif", logo: "placement-bg/4.png" },
  { name: "Mr. Siddharth Moorthy", designation: "Managing Director", location: "Vascon Engineers Ltd.", image: "Advisory/Siddharth.avif", logo: "placement-bg/6.png" },
  { name: "Mr. Ramchandra Honap", designation: "SHRBP-Supply Chain", location: "Hindustan Coca-Cola Beverages", image: "Advisory/Ram Honap.avif", logo: "placement-bg/5.png" },
  { name: "Cdr. Pratap Pawar", designation: "Ex-Director gslab", location: "HR & IT gslab", image: "Advisory/Pratap SirTry.avif", logo: "Logos/4.jpg" },
  { name: "Dr. Anil Kumar", designation: "J C Bose National Fellow & Honorary Professor AcSIR", location: "", image: "Advisory/Anil kumar.avif", logo: "placement-bg/8.png" },
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
    <div className="py-4 bg-[#01224F] roboto-regular">
      <div className="mb-8">
        <h2 className="text-center mb-4 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-[#ffc700]">
          Industry - Academia Advisory Board  
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 advisory-scroll" ref={advisoryRef}>
            {duplicatedData.map((person, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-lg w-64 flex flex-col flex-shrink-0 h-[420px]"
              >
                <div className="w-full bg-[#1e3a8a] h-60">
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
                <div className="flex flex-col items-center mb-0 mt-1">
                  {person.logo && (
                    <div className={`w-full ${person.name === "Dr. K. S. Sangwan" ? 'h-16' : 'h-24'} flex items-center justify-center bg-white overflow-hidden box-border`}>
                      <img 
                        src={person.logo} 
                        alt="Logo" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  )}
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
