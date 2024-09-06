import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="home-footer">
      <style>
        {`
          .home-footer {
            background: #6f3ef5;
            color: #ffff;
            padding: 2rem 0;
            font-family: Arial, sans-serif;
          }

          .footer-logo img {
            width: 120px; /* Adjust size as needed */
            height: auto;
          }

          .footer-nav {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .footer-nav a {
            color: #ffff;
            font-size: 1rem;
            text-decoration: none;
            display: block;
            margin: 0.5rem 0;
          }

          .footer-nav a:hover {
            color: #ffff; /* Keep the same color on hover */
          }

          .social-media a {
            font-size: 1.5rem;
            margin: 0 0.5rem;
            text-decoration: none;
            color: inherit; /* Use inherited color */
          }

          .social-media i.fab.fa-facebook {
            color: #2602ed; /* Facebook brand color */
          }

          .social-media i.fab.fa-instagram {
            color: #e1306c; /* Instagram brand color */
          }

          .social-media i.fab.fa-linkedin {
            color: #0077b5; /* LinkedIn brand color */
          }

          .social-media a:hover i {
            color: #ffff; /* White color on hover */
          }

          .contact-info p {
            margin: 0.5rem 0;
          }

          .contact-info a {
            color: #ffff; /* White color for links */
            text-decoration: none;
          }

          .contact-info a:hover {
            text-decoration: underline;
          }

          .footer-heading {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #ffff; /* White color for headings */
          }

          .footer-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
          }

          .footer-column {
            flex: 1;
            min-width: 200px;
            margin: 1rem 0;
          }

          .footer-column ul {
            margin: 0;
            padding: 0;
          }

          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              align-items: center;
            }

            .footer-column {
              margin: 1rem 0;
            }
          }
        `}
      </style>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo footer-column">
            <img src="https://gryphonacademy.co.in/wp-content/uploads/2022/06/Ashar-1-e1656757693750.png" alt="Gryphon Academy Logo" />
          </div>
          <div className="footer-column">
            <span className="footer-heading">Useful Links</span>
            <ul className="footer-nav">
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition-all duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/gax" className="hover:text-gray-300 transition-all duration-300">GAX</Link>
              </li>
              <li>
                <Link to="/learningAndDevelopment" className="hover:text-gray-300 transition-all duration-300">Learning and Development</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-gray-300 transition-all duration-300">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <span className="footer-heading">Follow Us</span>
            <div className="social-media">
              {['facebook', 'instagram', 'linkedin'].map((platform) => (
                <a key={platform} href={`https://www.${platform}.com`} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-column">
            <span className="footer-heading">Contact Us</span>
            <ul className="contact-info">
              <li>
                <p> <a href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8">
                9th Floor, Olympia Business House (Achalare), Next to Supreme HQ, Mumbai - Banglore, Highway Baner, Pune Maharashtra - 411045 </a></p>
              </li>
              <li>
                <p>Phone: <a href="tel:+91 89836 14509 ">+91 89836 14509 / 8983339099</a></p>
              </li>
              <li>
                <p>Email: <a href="mailto:gryphonx@gryphonacademy.co.in">gryphonx@gryphonacademy.co.in</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-white-600">
          <p>&copy; {new Date().getFullYear()} Gryphon Academy Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
