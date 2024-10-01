import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';


const profiles = [
    {
      id: 1,
      name: "Ankita Agrawal",
      role: "Design Associate",
      company: "PhonePe",
      tooltip:
        "I was able to switch my career from being an architect to a product designer.",
      profileImageUrl: "journey/Ankita.jpeg",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Product Manager",
      company: "Google",
      tooltip: "Worked on cutting-edge projects in tech.",
      profileImageUrl: "journey/Shatakshi.webp",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Growth Specialist",
      company: "Flipkart",
      tooltip: "Led teams to achieve growth targets and enhance user retention.",
      profileImageUrl: "journey/rimpi.jpeg",
    },
    {
      id: 4,
      name: "Sam Wilson",
      role: "UX Designer",
      company: "Walmart",
      tooltip: "Designed user experiences for e-commerce platforms.",
      profileImageUrl: "journey/Swati.webp",
    },
    {
      id: 5,
      name: "Chris Evans",
      role: "Tech Lead",
      company: "Nykaa",
      tooltip: "Leading tech teams and innovating e-commerce features.",
      profileImageUrl: "journey/Mridhiba.jpeg",
    },
    {
      id: 6,
      name: "Elena Gilbert",
      role: "Senior Analyst",
      company: "Moneyview",
      tooltip: "Data-driven insights for business growth.",
      profileImageUrl: "journey/Ankita.jpeg",
    },
    {
      id: 7,
      name: "Bruce Wayne",
      role: "CEO",
      company: "Vivo",
      tooltip: "Building global tech solutions.",
      profileImageUrl: "journey/Shatakshi.webp",
    },
    {
      id: 8,
      name: "Clark Kent",
      role: "Software Engineer",
      company: "Teachmint",
      tooltip: "Developing solutions for educational platforms.",
      profileImageUrl: "journey/rimpi.jpeg",
    },
    {
      id: 9,
      name: "Tony Stark",
      role: "Product Manager",
      company: "Amazon",
      tooltip: "Worked on cutting-edge projects in tech.",
      profileImageUrl: "journey/Swati.webp",
    },
    {
      id: 10,
      name: "Natasha Romanoff",
      role: "Growth Specialist",
      company: "Swiggy",
      tooltip: "Led teams to achieve growth targets and enhance user retention.",
      profileImageUrl: "journey/Mridhiba.jpeg",
    },
    {
      id: 11,
      name: "Steve Rogers",
      role: "UX Designer",
      company: "Zomato",
      tooltip: "Designed user experiences for e-commerce platforms.",
      profileImageUrl: "journey/Ankita.jpeg",
    },
    {
      id: 12,
      name: "Wanda Maximoff",
      role: "Tech Lead",
      company: "Ola",
      tooltip: "Leading tech teams and innovating e-commerce features.",
      profileImageUrl: "journey/Shatakshi.webp",
    },
    {
      id: 13,
      name: "Peter Parker",
      role: "Senior Analyst",
      company: "Paytm",
      tooltip: "Data-driven insights for business growth.",
      profileImageUrl: "journey/rimpi.jpeg",
    },
    {
      id: 14,
      name: "Bruce Banner",
      role: "CEO",
      company: "Myntra",
      tooltip: "Building global tech solutions.",
      profileImageUrl: "journey/Swati.webp",
    },
  ];

  const Tooltip = ({ profile, position }) => {
    const positions = {
      top: { bottom: "110%", left: "50%", transform: "translateX(-50%)" },
      bottom: { top: "110%", left: "50%", transform: "translateX(-50%)" },
      left: { top: "50%", right: "110%", transform: "translateY(-50%)" },
      right: { top: "50%", left: "110%", transform: "translateY(-50%)" },
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg text-xs w-56 z-50"
        style={positions[position]}
      >
        <p className="mt-1 text-sm">{profile.tooltip}</p>
        <p className="font-semibold text-base">{profile.name}</p>
        <p className="text-gray-300 text-sm">
          {profile.role} @ {profile.company}
        </p>
      </motion.div>
    );
  };
  
  // Prop types validation
  Tooltip.propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      tooltip: PropTypes.string.isRequired,
      profileImageUrl: PropTypes.string.isRequired,
    }).isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  };
  

const Guest = () => {
  const [visibleCards, setVisibleCards] = useState(
    new Array(profiles.length).fill(false)
  );
  const [hoveredProfile, setHoveredProfile] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState("bottom");
  const profileRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => {
              const newVisibleCards = [...prev];
              newVisibleCards[index] = true;
              return newVisibleCards;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    profileRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (hoveredProfile) {
      const hoveredElement = profileRefs.current[hoveredProfile.id];
      const rect = hoveredElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      let position = "bottom";
      if (rect.bottom + 150 > windowHeight) position = "top";
      else if (rect.top < 100) position = "bottom";
      else if (rect.left < 100) position = "right";
      else if (rect.right > windowWidth - 100) position = "left";

      setTooltipPosition(position);
    }
  }, [hoveredProfile]);

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Background gradient */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Left Section */}
      <div className="flex w-full h-full">
      <div className="w-full lg:w-1/3 flex flex-col justify-center h-auto lg:h-[100vh] bg-white p-6">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-800 leading-tight hidden lg:block">
    Become
    <br />
    the Top
    <br />
    1%
  </h1>
  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 hidden lg:block">
    Whether it is Product, Growth, Design, Management, Business, Tech &
    Data, GrowthSchool is the place to learn from top experts in the
    field.
  </p>
  <Link
    to="#"
    className="hidden lg:inline-flex relative items-center justify-center px-4 py-2 rounded-lg bg-yellow-500 text-white transform transition-transform duration-300 ease-in-out hover:scale-105 ml-2 text-sm sm:text-base md:text-lg lg:text-xl"
    style={{ width: "12.5rem" }} // 200px in rem
  >
    <span className="absolute inset-0 bg-black rounded-lg shadow-lg opacity-30 transform translate-x-1 translate-y-1 transition duration-200 ease-in-out" />
    <span className="absolute inset-0 bg-yellow-500 rounded-lg shadow-md" />
    <span className="relative z-10">Explore Programs</span>
  </Link>

  {/* Mobile Heading and Paragraph */}
  <h1 className="text-5xl mb-4 text-gray-800 leading-tight lg:hidden">
    Become the Top 1%
  </h1>
  <p className="text-2xl mb-4 lg:hidden">
    Whether it is Product, Growth, Design, Management, Business, Tech &
    Data, GrowthSchool is the place to learn from top experts in the
    field.
  </p>
</div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 px-10 flex flex-col justify-center items-center">
          <div className="grid grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-0 w-full">
            {Array.from({ length: 28 }).map((_, index) => {
              const profileIndex = Math.floor(index / 2);
              const isCard = index % 2 === 0 && profileIndex < profiles.length;

              return (
                <div
                  key={index}
                  ref={(el) =>
                    isCard &&
                    (profileRefs.current[profiles[profileIndex].id] = el)
                  }
                  className={`relative group w-28 h-28`}
                  onMouseEnter={
                    isCard
                      ? () => setHoveredProfile(profiles[profileIndex])
                      : undefined
                  }
                  onMouseLeave={
                    isCard ? () => setHoveredProfile(null) : undefined
                  }
                  data-index={profileIndex}
                >
                  {isCard ? (
                    <div
                      className={`card ${
                        visibleCards[profileIndex] ? "flipped" : ""
                      }`}
                    >
                      <div className="front flex justify-center items-center w-full h-full bg-gray-200 rounded-lg shadow-lg">
                        <img
                          src={`journey/arrow.svg`}
                          alt="Common"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="back flex justify-center items-center w-full h-full bg-gray-200 rounded-lg shadow-lg">
                        <img
                          src={profiles[profileIndex].profileImageUrl}
                          alt={profiles[profileIndex].name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-transparent" />
                  )}
                  <AnimatePresence>
                    {hoveredProfile?.id === profiles[profileIndex]?.id &&
                      isCard && (
                        <Tooltip
                          profile={profiles[profileIndex]}
                          position={tooltipPosition}
                        />
                      )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     {/* Styles for Card Flip and Responsive Design */}
     <style>{`
        .card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s; /* Changed from 0.6s to 1s */
  }
  .card.flipped {
    transform: rotateY(180deg);
  }
  .card .front,
  .card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .card .back {
    transform: rotateY(180deg);
  }

        @media (max-width: 768px) {
          .min-h-screen {
            flex-direction: column;
          }
          .lg\\:w-1\\/3 {
            width: 100%;
            height: auto;
          }
          .lg\\:w-2\\/3 {
            width: 100%;
            padding: 0;
          }
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          .grid > div:nth-child(2n) {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .grid > div:nth-child(3n) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Guest;