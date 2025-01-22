import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';  
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const categoryOptions = [
    { value: 'student', label: 'Student' },
    { value: 'company', label: 'Company' },
    { value: 'college', label: 'College' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    formData.append('source', 'DM Contact Form');
    formData.append('category', category?.value);

    fetch('https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          toast.success('Form successfully submitted!');
          setIsFormSubmitted(true);
          setTimeout(() => {
            e.target.reset();
            setCategory(null);
            setIsSubmitting(false);
          }, 2000);
        } else {
          toast.error(`Error: ${data.message}`);
          setIsSubmitting(false);
        }
      })
      .catch(() => {
        toast.error('Error submitting form. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />

      {/* Contact Us Section with Background Image */}
      <section className="py-16 bg-cover bg-center text-white relative" style={{ backgroundImage: 'url(journey/Background-SEO-Traffic.jpg)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          <div className="text-center md:text-left">
            {/* Rocket Image */}
            <img src="journey/rocket.png" alt="rocket image" className="w-full h-auto mb-4 floating-image" style={{ maxHeight: '5rem', objectFit: 'contain' }} />

            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white text-center md:text-left">
              Get In <span className="text-[#FFC80E]">Touch</span> With <span className="text-[#FFC80E]">Us</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-white">
              Getting in touch with a professional and reliable digital marketing company is an important step that can help you to create and implement useful digital marketing strategies that can help to increase your visibility and reach new customers.
            </p>

            {/* Cloud Image */}
            <img src="journey/sky2.png" alt="cloud" className="w-full h-auto mt-4 floating-cloud" style={{ maxHeight: '5rem', objectFit: 'contain' }} />
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg  mx-auto md:mx-0">
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border-2 border-gray-300 bg-white text-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC80E] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border-2 border-gray-300 bg-white text-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC80E] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full border-2 border-gray-300 bg-white text-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC80E] focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Category */}
              <div>
                <Select
                  id="category"
                  name="category"
                  value={category}
                  onChange={setCategory}
                  options={categoryOptions}
                  placeholder="Select Category"
                  className="react-select-container"
                  classNamePrefix="react-select"
                  isSearchable={false}
                  styles={{
                    control: (styles) => ({
                      ...styles,
                      borderColor: '#D1D5DB',
                      borderRadius: '8px',
                      padding: '2px',
                      minHeight: '40px',
                      backgroundColor: '#ffffff',
                      '&:focus': {
                        borderColor: '#FFC80E',
                        boxShadow: '0 0 0 2px rgba(255, 200, 14, 0.4)',
                      },
                    }),
                    placeholder: (styles) => ({
                      ...styles,
                      color: '#A0AEC0',
                    }),
                    singleValue: (styles) => ({
                      ...styles,
                      color: '#4A5568',
                    }),
                    option: (styles) => ({
                      ...styles,
                      color: '#4A5568',
                      backgroundColor: '#ffffff',
                      '&:hover': {
                        backgroundColor: '#F7FAFC',
                      },
                    }),
                    menu: (styles) => ({
                      ...styles,
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                    }),
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full border-2 border-gray-300 bg-white text-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC80E] focus:border-transparent text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isFormSubmitted}
                className={`w-full py-3 rounded-md font-semibold text-white transition-all duration-300 ${isSubmitting || isFormSubmitted ? 'bg-gradient-to-r from-[#FFC80E] to-[#e0a800] opacity-50 cursor-not-allowed' : 'bg-gradient-to-r from-[#FFC80E] to-[#ffab00] hover:scale-105 hover:from-[#ff9a00] hover:to-[#f4a261]'}`}
              >
                {isSubmitting ? 'Submitting...' : isFormSubmitted ? 'Submitted' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CSS for Floating Effect and Horizontal Movement */}
      <style>{`
        .floating-image {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-1.5rem);
          }
          100% {
            transform: translateY(0);
          }
        }

        .floating-cloud {
          animation: floatHorizontal 7s ease-in-out infinite;
        }

        @keyframes floatHorizontal {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3rem);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
