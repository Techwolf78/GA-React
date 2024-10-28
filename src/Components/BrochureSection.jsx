import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const vectorImage = './Training Page/BrochureBook.png';
const brochurePDF = './Training Page/Gryphon-Academy-Brochure.pdf';

const BrochureSection = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = brochurePDF;
    link.download = 'Gryphon-Academy-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadBrochure = () => {
    setFormVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyuXURJAJrCfyYBIhYtOpcOrPy4zjmLmTLVHofgR6_zV6isMzP5BW0h_7V8uipANhLT/exec", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.dismiss();
        toast.success("Form successfully submitted! Downloading brochure...", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => {
            setFormState({ name: "", email: "", phone: "", category: "", message: "" });
            setFormVisible(false);
          }
        });

        setTimeout(downloadPDF, 1000);
      } else {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message || 'Submission failed.'}`);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Submission error:", error);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4">
      <style>
        {`
          .bg-brochure {
            background-image: url('./Training Page/BrochureBg.png');
            background-size: cover;
            background-position: center;
          }
          .bg-brochure-small {
            background-image: url('./Training Page/BrochureBgSmall.png');
            background-size: cover;
            background-position: center;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
            border-radius: 1.5rem; /* Match rounded corners */
          }
        `}
      </style>
  
      {/* Brochure Display */}
      <div className="bg-brochure hidden md:flex flex-col md:flex-row items-center justify-center h-full w-full rounded-3xl shadow-3xl p-6 relative">
        <div className="overlay" />
        
        {/* Horizontal Layout for Medium and Large Screens */}
        <div className="flex-none w-full md:w-1/4 flex justify-center mb-4 md:mb-0 relative z-10">
          <img src={vectorImage} alt="Vector" className="h-20 max-h-20" />
        </div>
        <div className="flex-none w-full md:w-2/4 flex flex-col items-center text-white text-center md:text-left relative z-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#FFD700]">
            Download Brochure for More Information
          </h2>
        </div>
        <div className="flex-none w-full md:w-1/4 flex justify-center md:justify-end relative z-10">
          <button
            onClick={handleDownloadBrochure}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12V4m0 8l-4-4m4 4l4-4" />
            </svg>
            Download Brochure
          </button>
        </div>
      </div>
  
      {/* Vertical Layout for Small Screens */}
      <div className="bg-brochure-small flex md:hidden flex-col items-center justify-center h-full w-full rounded-3xl shadow-3xl p-6 relative">
        <div className="overlay" />
        
        <div className="flex-none w-full flex justify-center mb-4 relative z-10">
          <img src={vectorImage} alt="Vector" className="h-20 max-h-20" />
        </div>
        <div className="flex-none w-full flex flex-col items-center text-white relative z-10">
          <h2 className="text-xl font-bold mb-2">
            Download Brochure for More Information
          </h2>
          <button
            onClick={handleDownloadBrochure}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12V4m0 8l-4-4m4 4l4-4" />
            </svg>
            Download Brochure
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full md:w-1/3">
            <button onClick={() => setFormVisible(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
            <h3 className="text-lg font-bold mb-4">Please provide your details:</h3>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))} />
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))} />
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formState.phone}
                onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))} />
              <SelectField
                label="Category"
                name="category"
                value={formState.category}
                onChange={(e) => setFormState(prev => ({ ...prev, category: e.target.value }))} />
              <TextareaField
                label="Inquiry"
                name="message"
                placeholder="Your Inquiry"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))} />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full">
                Send Details
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        closeOnClick={true}
        draggable={true}
        theme="light"
      />
    </div>
  );
};

const InputField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    >
      <option value="">Select Category</option>
      <option value="college">College</option>
      <option value="corporate">Corporate</option>
      <option value="university">University</option>
    </select>
  </div>
);

const TextareaField = ({ label, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      rows="4"
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    ></textarea>
  </div>
);

export default BrochureSection;
