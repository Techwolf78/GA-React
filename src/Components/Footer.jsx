import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-8 px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">

        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/4">
          <img
            src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png"
            alt="Gryphon Academy Logo"
            className="w-48 md:w-64"
          />
        </div>

        {/* Links and Contact Section */}
        <div className="flex flex-col md:flex-row md:w-2/4 mb-8 md:mb-0">
          {/* Useful Links Section */}
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">Useful Links</h2>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'About Us', path: '/about' },
                { name: 'Learning & Development', path: '/training' },
                { name: 'Campus Placement', path: '/placement' },
                { name: 'Blogs', path: '/blogs' }
              ].map((link, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="relative z-10 text-white hover:text-yellow-400 transition duration-300"
                  >
                    {link.name}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-yellow-400 transform group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:w-1/2 mx-20">
            <h2 className="text-xl font-bold mb-4 text-center md:text-left">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-yellow-400" />
                <p className="text-sm">
                  <a href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8" className="hover:underline hover:text-yellow-400 transition duration-300">
                    9th Floor, Olympia Business House, Mumbai - Bangalore Highway, Pune - 411045
                  </a>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-yellow-400" />
                <p className="text-sm">
                  <a href="tel:+918983614509" className="hover:underline hover:text-yellow-400 transition duration-300">+91 89836 14509 / 8983339099</a>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-yellow-400" />
                <p className="text-sm">
                  <a href="mailto:gryphonx@gryphonacademy.co.in" className="hover:underline hover:text-yellow-400 transition duration-300">connect@gryphonacademy.co.in</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="mb-8 md:mb-0 md:w-1/4">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/gryphonnacademy" target="_blank" rel="noopener noreferrer">
              <img src="./LandingImage/social-fb.svg" alt="Facebook" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/gryphon_academy/" target="_blank" rel="noopener noreferrer">
              <img src="./LandingImage/social-ig.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/gryphonacademy/" target="_blank" rel="noopener noreferrer">
              <img src="./LandingImage/social-in.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
            <a href="https://www.youtube.com/channel/UCVn2uVWEHg8cMFd8ht3CQBw" target="_blank" rel="noopener noreferrer">
              <img src="./LandingImage/youtube.png" alt="YouTube" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400">
        <p>Copyright &copy; {new Date().getFullYear()} Gryphon Academy Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
