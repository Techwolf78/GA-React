import React from 'react';

const Footer = () => {
  return (
    <footer className="home-footer">
      <style>
        {`
          .home-footer {
            background: #333;
            color: #fff;
          }

          .footer-logo {
            font-size: 2rem;
          }

          .footer-nav a {
            color: #fff;
            font-size: 1rem;
          }

          .footer-nav a:hover {
            color: #ddd;
          }

          .social-media a {
            font-size: 1.5rem;
          }

          .social-media a:hover {
            color: #ddd;
          }
        `}
      </style>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="footer-logo text-2xl font-bold text-white mb-4 md:mb-0">
            Gryphon Academy
          </div>
          <ul className="footer-nav flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            {['Home', 'About', 'GAX', 'Blogs'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-gray-300 transition-all duration-300">{item}</a>
              </li>
            ))}
          </ul>
          <div className="social-media flex space-x-4">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
              <a key={platform} href="#" className="text-white hover:text-gray-300 transition-all duration-300">
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-4 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gryphon Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
