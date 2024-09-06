import React, { useState } from 'react';

const Contact = () => {
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('https://script.google.com/macros/s/AKfycbyuXURJAJrCfyYBIhYtOpcOrPy4zjmLmTLVHofgR6_zV6isMzP5BW0h_7V8uipANhLT/exec', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        setNotification('Form successfully submitted!');
        setTimeout(() => {
          setNotification('');
          e.target.reset();
        }, 2000);
      })
      .catch(() => {
        setNotification('Error submitting form. Please try again.');
      });
  };

  return (
    <>
      {/* Contact Us Section */}
      <section className="py-16 bg-[#e9e5ff] mx-auto mt-6 mb-6 px-4 md:max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
          <h1 className="text-5xl font-bold text-gray-800 text-center ">
           Let's <span className="text-[#000000]">Bridge</span> <br />
            <span className="text-orange-500 text-center">the Gap</span>
          </h1>
          </div>

          <div>
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-purple-200 focus:border-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-purple-200 focus:border-purple-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-gray-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-purple-200 focus:border-purple-500"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block mb-1 font-medium text-gray-800">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-purple-200 focus:border-purple-500"
                >
                  <option value="">Select Category</option>
                  <option value="student">Student</option>
                  <option value="company">Company</option>
                  <option value="college">College</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-purple-200 focus:border-purple-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Notification */}
            {notification && (
              <div className="mt-3 text-center text-lg text-green-600">{notification}</div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <i className="bx bx-location-plus text-4xl text-purple-700 mb-4"></i>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Address</h4>
            <p className="text-gray-600">Seasons business square, Office no 301, Aundh, Pune, Maharashtra 411007</p>
          </div>

          {/* Phone */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <i className="bx bx-phone text-4xl text-purple-700 mb-4"></i>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Phone</h4>
            <p className="text-gray-600">+91 89836 14509 / 8983339099</p>
          </div>

          {/* Email */}
          <div className="p-6 text-center bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
            <i className="bx bx-envelope text-4xl text-purple-700 mb-4"></i>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Email</h4>
            <p className="text-gray-600">gryphonx@gryphonacademy.co.in</p>
          </div>
        </div>
      </div>

  {/* Get in Touch Section */}
<section className="py-24 bg-white"> {/* Increased padding for more height */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> {/* Increased gap and width */}
    <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg"> {/* Increased height of the map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4536495747366!2d73.76831887436869!3d18.553575668166875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab4cb7fb73c5c4ff%3A0x14e62cad775d447b!2sGryphon%20Academy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1724220761014!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <h1 className="text-7xl font-bold text-gray-800 text-center md:text-center"> {/* Increased font size */}
      Get <span className="text-[#000000]">in</span> <br />
      <span className="text-orange-500">Touch</span>
    </h1>
  </div>
</section>

    </>
  );
};

export default Contact;
