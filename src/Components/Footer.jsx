import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img
            src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1732608342/NewLogo_glaelo.webp"
            alt="Gryphon Academy Logo"
            className="w-48 md:w-64"
          />
        </div>

        {/* Useful Links Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Useful Links</h2>
          <ul className="space-y-2 text-center md:text-left">
            {[
              { name: 'Contact Us', path: '/contact' },
              { name: 'About Us', path: '/about-us' },
              { name: 'Learning & Development', path: '/training' },
              { name: 'Campus Placement', path: '/placement' },
              { name: 'Blogs', path: '/blogs' }
            ].map((link, index) => (
              <li key={index} className="relative">
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className="text-white transition duration-300 text-lg border-b-2 border-transparent hover:border-yellow-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Contact Us</h2>
          <ul className="space-y-4 text-center md:text-left">
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 mr-2 ml-10 sm:ml-0" />
              <p className="text-sm">
                <a href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8" className="hover:underline hover:text-yellow-400 transition duration-300">
                  9th Floor, Olympia Business House, Mumbai - Bangalore Highway, Pune - 411045
                </a>
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faMobileAlt} className="text-yellow-400 mr-2" />
              <p className="text-sm">
                <a href="tel:+918983614509" className="hover:underline hover:text-yellow-400 transition duration-300">+91 89836 14509 / 8983339099</a>
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 mr-2" />
              <p className="text-sm">
                <a href="mailto:connect@gryphonacademy.co.in" className="hover:underline hover:text-yellow-400 transition duration-300">connect@gryphonacademy.co.in</a>
              </p>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/gryphonnacademy" target="_blank" rel="noopener noreferrer">
              <img src="/LandingImage/social-fb.svg" alt="Facebook" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/gryphon_academy/" target="_blank" rel="noopener noreferrer">
              <img src="/LandingImage/social-ig.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/gryphonacademy/" target="_blank" rel="noopener noreferrer">
              <img src="/LandingImage/social-in.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition duration-300" />
            </a>
            <a href="https://www.youtube.com/channel/UCVn2uVWEHg8cMFd8ht3CQBw" target="_blank" rel="noopener noreferrer">
              <img src="/LandingImage/youtube.png" alt="YouTube" className="w-8 h-8 hover:opacity-80 transition duration-300" />
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
