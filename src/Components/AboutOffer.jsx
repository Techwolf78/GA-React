import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaUsers, FaCog, FaShieldAlt, FaRocket } from 'react-icons/fa';

function AboutOffer() {
  const offers = [
    {
      icon: <FaCheckCircle className="text-green-400 w-12 h-12" />,
      description: 'Ensuring the highest quality standards in all our products and services.',
    },
    {
      icon: <FaStar className="text-yellow-400 w-12 h-12" />,
      description: 'Our main goal is to keep our customers happy and satisfied.',
    },
    {
      icon: <FaUsers className="text-blue-400 w-12 h-12" />,
      description: 'Our team is composed of industry experts with years of experience.',
    },
    {
      icon: <FaCog className="text-gray-400 w-12 h-12" />,
      description: 'Providing innovative and effective solutions tailored to your needs.',
    },
    {
      icon: <FaShieldAlt className="text-red-400 w-12 h-12" />,
      description: 'Prioritizing security in every project to protect your data and privacy.',
    },
    {
      icon: <FaRocket className="text-purple-400 w-12 h-12" />,
      description: 'Guaranteeing timely delivery of all projects without compromising quality.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
      <div className="flex flex-col items-start relative"> {/* Maintain left alignment */}
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start mb-6 relative" // Maintain left alignment
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-full flex items-center justify-center w-16 h-16 mb-2">
              {offer.icon}
            </div>
            <p className="text-lg text-white text-left z-10">{offer.description}</p>
            {index < offers.length - 1 && (
              <div className="absolute left-8 top-16 w-1 h-16 bg-white z-0"></div> 
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutOffer;
