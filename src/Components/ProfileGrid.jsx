import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Guest from "../assets/CSS/Guest.css";
// Sample data for the profile cards
const profiles = [
  { id: 1, name: "Ankita Agrawal", role: "Design Associate", company: "PhonePe", tooltip: "I was able to switch my career from being an architect to a product designer." },
  { id: 2, name: "John Doe", role: "Product Manager", company: "Google", tooltip: "Worked on cutting-edge projects in tech." },
  // Add more profiles as needed
];

// Tooltip Component
const Tooltip = ({ profile }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="absolute bg-white p-4 rounded-lg shadow-lg text-sm w-64 z-50"
    style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}
  >
    <p className="font-bold">{profile.name}</p>
    <p className="text-gray-500">{profile.role} @ {profile.company}</p>
    <p className="mt-2">{profile.tooltip}</p>
  </motion.div>
);

export const ProfileGrid = () => {
  const [hoveredProfile, setHoveredProfile] = useState(null);

  return (
    <div className="grid grid-cols-4 gap-4 relative">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="relative group"
          onMouseEnter={() => setHoveredProfile(profile.id)}
          onMouseLeave={() => setHoveredProfile(null)}
        >
          {/* Profile Image */}
          <img
            src={`https://via.placeholder.com/100?text=${profile.name.charAt(0)}`}
            alt={profile.name}
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />

          {/* Tooltip */}
          <AnimatePresence>
            {hoveredProfile === profile.id && (
              <Tooltip profile={profile} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default ProfileGrid;