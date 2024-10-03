import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";

// Testimonials Data
const testimonials = [
  {
  message:
  "Partnering with Gryphon Academy has transformed the way our students approach their career readiness. Their support has been invaluable in bridging the gap between academics and industry.",
  name: "Dr. Anjali Mehta",
  title: "Director",
  institution: "Vivekananda College of Engineering, Bangalore",
  profilePic: "journey/Ankita.jpeg",
  },
  {
  message:
  "Gryphon Academy has equipped our faculty with the necessary tools to better prepare students for the job market. Their workshops and resources are top-notch. Highly recommend their services!",
  name: "Prof. Ramesh Singh",
  title: "Dean of Academic Affairs",
  institution: "National Institute of Technology, Delhi",
  profilePic: "journey/Mridhiba.jpeg",
  },
  {
  message:
  "The team at Gryphon Academy is extremely professional and knowledgeable. They have helped us in setting up a robust placement cell and have been instrumental in securing internships and placements for our students.",
  name: "Dr. Kavita Sharma",
  title: "Principal",
  institution: "St. Xavier's College, Mumbai",
  profilePic: "journey/Ankita.jpeg",
  },
  {
  message:
  "Gryphon Academy has been a game-changer for our college. Their training programs have helped our students develop essential skills and secure internships at top companies. We are extremely satisfied with their services.",
  name: "Prof. Anil Kumar",
  title: "Placement Officer",
  institution: "Indian Institute of Technology, Kanpur",
  profilePic: "journey/Mridhiba.jpeg",
  },
  {
    message:
    "Gryphon Academy has been a game-changer for our college. Their training programs have helped our students develop essential skills and secure internships at top companies. We are extremely satisfied with their services.",
    name: "Prof. Anil Kumar",
    title: "Placement Officer",
    institution: "Indian Institute of Technology, Kanpur",
    profilePic: "journey/Mridhiba.jpeg",
    },
    {
  message:
  "Gryphon Academy has been a game-changer for our college. Their training programs have helped our students develop essential skills and secure internships at top companies. We are extremely satisfied with their services.",
  name: "Prof. Anil Kumar",
  title: "Placement Officer",
  institution: "Indian Institute of Technology, Kanpur",
  profilePic: "journey/Mridhiba.jpeg",
  },
  ];
  

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-4 lg:mb-6">
    <p className="italic mb-2">"{testimonial.message}"</p>
    <div className="flex items-center mt-4">
      <img
        src={testimonial.profilePic}
        alt={`Profile of ${testimonial.name}`}
        className="w-14 h-14 rounded-full mr-4 object-cover"
      />
      <div>
        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.title}</p>
        <p className="text-sm text-gray-600">{testimonial.institution}</p>
      </div>
    </div>
  </div>
);

// Testimonials Component
const Testimonials = () => {
  return (
    <div className="w-full lg:w-1/2 p-6 sm:p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        College Owner Testimonials
      </h2>
      <div className="relative overflow-hidden h-auto sm:h-[40vh] xs:h-[30vh] md:h-[60vh] lg:h-[100vh]">
        <div className="flex flex-col space-y-6 animate-slide">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};



// Contact Form Component
const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
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

  // Animation Styles (for fade-in effect)
  const fadeInStyle = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-20px)",
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  };

  return (
    <>
      <ToastContainer />
      <style>
        {`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        `}
      </style>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Testimonials */}
          <Testimonials />

          {/* Right Side - Contact Form */}
          <div ref={ref} className="w-full lg:w-1/2 flex flex-col items-center bg-gradient-to-r from-blue-800 to-blue-600 p-6 rounded-lg shadow-lg text-white">
            <h1 className="text-3xl font-bold text-center mb-6">We'd Love to Hear from You!</h1>
            <div className="relative w-full h-72 flex justify-center items-center mb-6">
              <img
                src="LandingImage/contactform.png"
                alt="Salesperson illustration"
                className="w-auto h-64 object-cover rounded-lg"
              />
              <img
                src="LandingImage/union-design-img.svg"
                alt="Rotating Triangle"
                className="absolute top-0 left-0 w-12 h-12 animate-spin"
                style={{ animationDuration: "2s" }}
              />
              <img
                src="LandingImage/union-design-img.svg"
                alt="Rotating Triangle Bottom Right"
                className="absolute bottom-0 right-0 w-12 h-12 animate-spin"
                style={{ animationDuration: "2s" }}
              />
              <img
                src="LandingImage/curve-lines.svg"
                alt="Waving Design"
                className="absolute bottom-0 left-0 w-24 h-24"
                style={{ marginBottom: '10px', marginLeft: '10px' }}
              />
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <InputField
                label="Name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                fadeInStyle={fadeInStyle}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                fadeInStyle={fadeInStyle}
              />
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                fadeInStyle={fadeInStyle}
              />
              <SelectField
                label="Category"
                name="category"
                value={formState.category}
                onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                fadeInStyle={fadeInStyle}
              />
              <TextareaField
                label="Message"
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                fadeInStyle={fadeInStyle}
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-800 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Input, Select, and Textarea Fields (as before)

const InputField = ({ label, type, name, placeholder, value, onChange, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="visually-hidden" htmlFor={name}>
      {label}
    </label>
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

const SelectField = ({ label, name, value, onChange, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="visually-hidden" htmlFor={name}>
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    >
      <option value="">Select Category</option>
      <option value="student">Student</option>
      <option value="company">Company</option>
      <option value="college">College</option>
    </select>
  </div>
);

const TextareaField = ({ label, name, placeholder, value, onChange, fadeInStyle }) => (
  <div style={fadeInStyle}>
    <label className="visually-hidden" htmlFor={name}>
      {label}
    </label>
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

export default ContactForm;
