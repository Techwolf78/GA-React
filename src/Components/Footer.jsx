import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import "animate.css"; // Ensure animate.css is imported globally
import "../assets/css/footer.css"; // Ensure the path is correct

const Footer = () => {
  return (
    <section className="bg-black text-gray-300 py-12">
      <footer>
        <section
          id="footer"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo Section */}
          <div className="logo-container flex justify-center md:justify-start mb-8 lg:mb-0">
            <a href="about-us.html">
              <img
                src="./src/assets/images/gaxlogo.png"
                alt="Gryphon Academy Logo"
                className="logo-footer animate__animated animate__fadeIn"
              />
            </a>
          </div>

          {/* Useful Links */}
          <div className="w-full flex flex-col items-center md:items-start mb-8 lg:mb-0">
            <div className="useful-link animate__animated animate__fadeIn animate__delay-1s text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
              <ul className="use-links space-y-2 md:space-y-1">
                <li>
                  <a href="index.html" className="hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about-us.html" className="hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="training copy.html"
                    className="hover:text-yellow-400"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="hover:text-yellow-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full flex flex-col items-center md:items-start mb-8 lg:mb-0">
            <div className="social-links animate__animated animate__fadeIn animate__delay-2s text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="social-icons flex flex-col space-y-2">
                <a
                  href="https://www.facebook.com/gryphonnacademy/"
                  className="flex items-center text-gray-300 hover:text-yellow-400"
                >
                  <i className="bx bxl-facebook text-xl mr-2"></i> Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/gryphonacademy/"
                  className="flex items-center text-gray-300 hover:text-yellow-400"
                >
                  <i className="bx bxl-linkedin text-xl mr-2"></i> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/gryphon_academy/"
                  className="flex items-center text-gray-300 hover:text-yellow-400"
                >
                  <i className="bx bxl-instagram text-xl mr-2"></i> Instagram
                </a>
                {/* If you need other social media icons, consider using FontAwesome or similar */}
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="w-full flex flex-col items-center md:items-start mb-8 lg:mb-0">
            <div className="address animate__animated animate__fadeIn animate__delay-3s text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <ul className="address-links space-y-2">
                <li>
                  <a
                    href="https://maps.app.goo.gl/ftpdk38mzttVv9Kv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-yellow-400"
                  >
                    <i className="bx bx-map text-xl mr-2"></i>
                    Seasons Business Square
                    <br />
                    by Naiknavare Office no 301,
                    <br />
                    3rd floor, Seasons Rd, Sanewadi,
                    <br />
                    Aundh, Pune, Maharashtra 411007
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918983614509"
                    className="flex items-center text-white hover:text-yellow-400"
                  >
                    <PhoneIcon className="h-6 w-6 mr-2" /> +91 89836 14509 /
                    8983339099
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:gryphonx@gryphonacademy.co.in"
                    className="flex items-center text-white hover:text-yellow-400"
                  >
                    <EnvelopeIcon className="h-6 w-6 mr-2" />{" "}
                    gryphonx@gryphonacademy.co.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <div className="copy-right-sec bg-black text-white py-4 text-center">
          <p>&copy; 2024 Gryphon Academy.Pvt.Ltd. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
