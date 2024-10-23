import React, { useEffect, useState } from "react";

const TRAINER_DATA = [
  {
    name: "Cdr. Pratap Pawar",
    designation: "HR & IT Trainer",
    location: "gslab",
    experience: "20 years",
    specialties: "Recruitment, IT Management",
    image: "Advisory/Pratap SirTry.png",
    logo: "placement-bg/7.png",
  },
  {
    name: "Ms. Ummeaiman Ansari",
    designation: "Co-founder",
    location: "Gryphon Academy Pvt. Ltd.",
    experience: "10+ years",
    specialties: "Leadership, Management",
    image: "About/cf.PNG",
    logo: "placement-bg/BITS.PNG",
  },
  {
    name: "Mr. Mohan Patel",
    designation: "Corporate Skills Trainer",
    location: "From IIT-Bombay",
    experience: "8 years",
    specialties: "Communication, Teamwork",
    image: "Testimonials/user.png",
    logo: "placement-bg/2 2.png",
  },
  {
    name: "Dr. Sukanta Bhatt",
    designation: "Leadership Development Coach",
    location: "From IIT-Kharagpur",
    experience: "15 years",
    specialties: "Strategic Planning, Team Leadership",
    image: "Testimonials/user.png",
    logo: "placement-bg/3 1.png",
  },
];

const Trainers = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Inline styles
  const containerStyle = {
    transition: "opacity 0.5s",
    opacity: fadeIn ? 1 : 0,
  };

  const cardStyle = {
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    width: "256px",
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s, box-shadow 0.3s",
    overflow: "hidden",
  };

  return (
    <div className="py-4 mx-auto px-8 sm:px-16 bg-[#091327] roboto-regular">
      <div className="mb-8" style={containerStyle}>
        <h2 className="text-center mb-4 font-bold text-2xl sm:text-3xl lg:text-4xl text-[#ffc700]">
          CORPORATE TRAINERS
        </h2>
        <div className="flex flex-wrap justify-center items-stretch space-x-4">
          {TRAINER_DATA.map((trainer, index) => (
            <div
              key={index}
              style={cardStyle}
              className={`flex flex-col flex-shrink-0 transition-transform duration-300 ease-in-out`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={{ backgroundColor: "#003073", height: "240px", overflow: "hidden", position: "relative" }}>
              <img
  src={trainer.image}
  alt={trainer.name}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain", 
    transition: "transform 0.3s",
    position: "absolute",
    bottom: 0, // Anchored to the bottom
    left: "50%",
    transform: "translate(-50%, 0) scale(0.9)", // Center horizontally and scale down
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translate(-50%, 0) scale(1)"; // Scale to original size on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translate(-50%, 0) scale(0.9)"; // Back to scaled down
  }}
/>


              </div>
              <div className="flex flex-col text-left flex-grow p-4">
                <p className="text-black mb-2">
                  <strong>Name:</strong> {trainer.name}
                </p>
                <p className="text-black mb-2">
                  <strong>Designation:</strong> {trainer.designation}
                </p>
                <p className="text-black mb-2">
                  <strong>Company:</strong> {trainer.location}
                </p>
                <p className="text-black mb-2">
                  <strong>Experience:</strong> {trainer.experience}
                </p>
                <p className="text-black mb-2">
                  <strong>Specialties:</strong> {trainer.specialties}
                </p>
              </div>
              <div className="flex flex-col items-center mb-0 mt-1">
                <div className="w-36 h-28 flex items-center justify-center bg-white overflow-hidden box-border -mt-2">
                  <img
                    src={trainer.logo}
                    alt="Logo"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
