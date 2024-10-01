import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(
      "https://script.google.com/macros/s/AKfycbyuXURJAJrCfyYBIhYtOpcOrPy4zjmLmTLVHofgR6_zV6isMzP5BW0h_7V8uipANhLT/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          toast.success("Form successfully submitted!", {
            position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
            autoClose: 2000,
            className: window.innerWidth <= 768 ? "text-sm" : "",
          });
          e.target.reset();
        } else {
          throw new Error("Error submitting form.");
        }
      })
      .catch(() => {
        toast.error("Error submitting form. Please try again.", {
          position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
          autoClose: 2000,
          className: window.innerWidth <= 768 ? "text-sm" : "",
        });
      });
  };

  const fadeInStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  };

  return (
    < >
      <ToastContainer />
      <section
        ref={ref}
        className="relative flex flex-col min-h-screen items-center p-10 bg-gradient-to-r from-blue-800 to-blue-600  mx-8 md:mx-16 my-4 rounded-lg shadow-lg text-white"
        style={fadeInStyle}
      >
        <h1 className="text-3xl font-bold text-center mb-4 lg:mb-6">
          We'd Love to Hear from You!
        </h1>

        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:flex-1 flex flex-col items-center justify-center mb-4 lg:mb-0 relative">
            <img
              src="LandingImage/contactform.png"
              alt="Vector Graphic"
              className="w-full h-auto max-w-md"
            />
            <img
              src="LandingImage/union-design-img.svg" // Update with your triangle image path
              alt="Rotating Triangle"
              className="absolute top-0 left-0 w-12 h-12 "
              style={{
                margin: "10px",
                animation: "spin 2s linear infinite", // Adjust the duration here
              }} // Adjust margin as needed
            />
            <img
              src="LandingImage/curve-lines.svg" // Update with your wave image path
              alt="Waving Design"
              className="absolute bottom-0 left-0 w-24 h-24"
              style={{ marginBottom: "10px", marginLeft: "10px" }} // Adjust as needed
            />
            <img
              src="LandingImage/union-design-img.svg" // Update with your second triangle image path
              alt="Rotating Triangle Bottom Right"
              className="absolute bottom-0 right-0 w-12 h-12"
              style={{
                margin: "10px",
                marginRight: "20px", // Adjust this value to shift it further right
                animation: "spin 2s linear infinite", // Adjust the duration here
              }}
            />
          </div>
          <div className="lg:flex-1 flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <InputField
                label="Name"
                type="text"
                name="name"
                placeholder="Your Name"
                fadeInStyle={fadeInStyle}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Your Email"
                fadeInStyle={fadeInStyle}
              />
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                fadeInStyle={fadeInStyle}
              />
              <SelectField
                label="Category"
                name="category"
                fadeInStyle={fadeInStyle}
              />
              <TextareaField
                label="Message"
                name="message"
                placeholder="Your Message"
                fadeInStyle={fadeInStyle}
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-800 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const InputField = ({ label, type, name, placeholder, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring focus:ring-yellow-400 transition-all"
    />
  </div>
);

const SelectField = ({ label, name, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="block mb-1">{label}</label>
    <select
      name={name}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring focus:ring-yellow-400 transition-all"
    >
      <option value="">Select Category</option>
      <option value="student">Student</option>
      <option value="company">Company</option>
      <option value="college">College</option>
    </select>
  </div>
);

const TextareaField = ({ label, name, placeholder, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="block mb-1">{label}</label>
    <textarea
      name={name}
      rows="4"
      placeholder={placeholder}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring focus:ring-yellow-400 transition-all"
    ></textarea>
  </div>
);

export default ContactForm;
