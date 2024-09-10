import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#7a3be7] text-white py-6 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start lg:w-1/4 mb-6 lg:mb-0">
            <img
              src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png"
              alt="Gryphon Academy Logo"
              className="w-full max-w-xs"
            />
          </div>

          {/* Useful Links Section */}
          <div className="lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
            <span className="block text-xl font-bold mb-4">Useful Links</span>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/gax" className="hover:text-gray-300 transition duration-300">GAX</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-gray-300 transition duration-300">Training</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gray-300 transition duration-300">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
            <span className="block text-xl font-bold mb-4">Follow Us</span>
            <div className="flex justify-center lg:justify-start space-x-4">
              {['facebook', 'instagram', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href={`https://www.${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl"
                >
                  <FontAwesomeIcon
                    icon={platform === 'facebook' ? faFacebook : platform === 'instagram' ? faInstagram : faLinkedin}
                    className={`text-${platform === 'facebook' ? '[#2602ed]' : platform === 'instagram' ? '[#e1306c]' : '[#0077b5]'}`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="lg:w-1/4 text-center lg:text-left lg:mt-0">
            <span className="block text-xl font-bold mb-4">Contact Us</span>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                <p className="text-sm">
                  <a href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8" className="hover:underline">9th Floor, Olympia Business House (Achalare), Next to Supreme HQ, Mumbai - Bangalore Highway Baner, Pune Maharashtra - 411045</a>
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
                <p className="text-sm"><a href="tel:+91 89836 14509" className="hover:underline">+91 89836 14509 / 8983339099</a></p>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                <p className="text-sm"><a href="mailto:gryphonx@gryphonacademy.co.in" className="hover:underline">gryphonx@gryphonacademy.co.in</a></p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 text-gray-300">
          <p>&copy; {new Date().getFullYear()} Gryphon Academy Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
