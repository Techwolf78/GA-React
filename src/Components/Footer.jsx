import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 roboto-regular">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/4">
          <img
            src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png"
            alt="Gryphon Academy Logo"
            className="w-48 md:w-64"
          />
        </div>

{/* Useful Links Section */}
<div className="mb-8 md:mb-0 md:w-1/4">
  <h2 className="text-xl font-bold mb-4 text-center md:text-left">Useful Links</h2>
  <ul className="flex flex-col items-center md:items-start space-y-2">
    {[
      { name: 'Contact Us', path: '/contact' },
      { name: 'About Us', path: '/about' },
      { name: 'Training', path: '/training' },
      { name: 'Placement', path: '/placement' },
      { name: 'Blogs', path: '/blogs' }
    ].map((link, index) => (
      <li key={index} className="relative group">
        <Link
          to={link.path}
          className="relative z-10 text-white hover:text-[#FFC80E] transition duration-300"
        >
          {link.name}
        </Link>
        <span className="absolute left-0 bottom-0 w-6 h-0.5 bg-[#FFC80E] transform group-hover:w-full transition-all duration-300"></span>
      </li>
    ))}
  </ul>
</div>


        {/* Follow Us Section */}
        <div className="mb-8 md:mb-0 md:w-1/4">
          <h2 className="text-xl font-bold mb-4 text-center md:text-left">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#4267B2] hover:text-[#365899] transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#E1306C] hover:text-[#C13584] transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-[#0077B5] hover:text-[#005582] transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

  {/* Contact Us Section */}
<div className="md:w-1/4">
  <h2 className="text-xl font-bold mb-4 text-center md:text-left">Contact Us</h2>
  <ul className="space-y-2">
    <li className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-custom-yellow" />
      <p className="text-sm">
        <a href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8" className="hover:underline hover:text-[#FFC80E] transition duration-300 border-b-2 border-[#FFC80E]">
          9th Floor, Olympia Business House (Achalare), Next to Supreme HQ, Mumbai - Bangalore Highway Baner, Pune Maharashtra - 411045
        </a>
      </p>
    </li>
    <li className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-custom-yellow" />
      <p className="text-sm">
        <a href="tel:+91 89836 14509" className="hover:underline hover:text-[#FFC80E] transition duration-300 border-b-2 border-[#FFC80E]">+91 89836 14509 / 8983339099</a>
      </p>
    </li>
    <li className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faEnvelope} className="text-xl text-custom-yellow" />
      <p className="text-sm">
        <a href="mailto:gryphonx@gryphonacademy.co.in" className="hover:underline hover:text-[#FFC80E] transition duration-300 border-b-2 border-[#FFC80E]">gryphonx@gryphonacademy.co.in</a>
      </p>
    </li>
  </ul>
</div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-300">
        <p>Copyright &copy; {new Date().getFullYear()} Gryphon Academy Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
