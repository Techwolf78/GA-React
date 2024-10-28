// Components/NotFound.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
            <svg className="absolute top-0 left-0 w-full h-full -z-10" viewBox="0 0 1440 320">
                <path fill="rgba(255, 255, 255, 0.2)" fillOpacity="1" d="M0,64L30,80C60,96,120,128,180,144C240,160,300,160,360,154.7C420,149,480,139,540,122.7C600,107,660,85,720,90.7C780,96,840,128,900,144C960,160,1020,160,1080,144C1140,128,1200,96,1260,90.7C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V64Z"></path>
            </svg>
            <motion.div 
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1 className="text-9xl font-bold" 
                    initial={{ y: -50 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    404
                </motion.h1>
                <motion.p className="text-2xl md:text-3xl" 
                    initial={{ y: -50 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Page Not Found
                </motion.p>
                <motion.p className="mt-4 text-lg md:text-xl" 
                    initial={{ y: -50 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Sorry, the page you&apos;re looking for doesn&apos;t exist.
                </motion.p>
                <motion.a 
                    href="/" 
                    className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition"
                    initial={{ y: 20 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Go to Home
                </motion.a>
            </motion.div>
        </div>
    );
};

export default NotFound;
