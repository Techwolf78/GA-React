import React from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <section className="contact-section">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="contact-info flex flex-col items-start mb-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Our Office</h3>
                  <p>Seasons Business Square</p>
                  <p>Office no 301, 3rd floor</p>
                  <p>Seasons Rd, Sanewadi, Aundh</p>
                  <p>Pune, Maharashtra 411007</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p>
                    <a href="tel:+918983614509">+91 89836 14509</a>
                  </p>
                  <p>
                    <a href="tel:+918983339099">+91 89833 39099</a>
                  </p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p>
                    <a href="mailto:gryphonx@gryphonacademy.co.in">
                      gryphonx@gryphonacademy.co.in
                    </a>
                  </p>
                </div>
              </div>
              {/* Register Button */}
              <div className="mt-8">
                <Link to="/registrationform" className="btn ">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
