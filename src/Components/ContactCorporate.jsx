import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";

// Testimonials Data
const testimonials = [
  {
    message:
      "We recruited 145 fresh engineers batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job.",
    name: "Mr. Rahul Bagale",
    title:
      "Group HR Head",
    institution: "Force Motors Ltd.",
    profilePic: "Testimonials/user.png",
  },
  {
    message:
      "Their commitment to nurturing and grooming exceptional talent is truly commendable. The graduates we've recruited from Gryphon Academy have consistently proven to be skilled, adaptable, and well-prepared for the demands of the industry.",
    name: "Cdr. Pratap Pawar",
    title: "Director HR & IT ",
    institution: "Gs lab",
    profilePic: "Testimonials/user.png",
  },
  {
    message:
      "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent. ",
    name: "Mr. Suvarnanidhi Rao",
    title: "Campus Lead - Indian Sub Continent ",
    institution: "Philips India",
    profilePic: "Testimonials/user.png",
  },
  {
    message:
      "Gryphon Academy trained students are well-prepared for the demands of the engineering industry, with a strong foundation in both technical and professional skills.",
    name: "Mr. Sushant Kumar",
    title: "Talent Acquisition Manager",
    institution: "Brillio",
    profilePic: "Testimonials/user.png",
  },
  {
    message:
      "Our experience with Gryphon Academy has been nothing short of exceptional. I appreciate the effort they put into producing graducates. They have made our recruitment process smoother and more effective.",
    name: "Dr. Sunaina Dutta",
    title: "Head HR",
    institution: "Hettich India",
    profilePic: "Testimonials/user.png",
  },
  {
    message:
      "We've had the opputunity to undergo Gryphon Academy's training process, extending its reach to candidates from various regions. Gryphon's high-quality training program has undeniably enhanced student skills.",
    name: "Mr. Shipra Pandit",
    title: "Director - HR",
    institution: "Juspay",
    profilePic: "Testimonials/user.png",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card bg-white text-black p-4 rounded-lg shadow-lg mb-4 lg:mb-6 w-full">
    <p className="testimonial-message mb-2 italic">“{testimonial.message}”</p>
    <div className="flex items-center mt-4">
      <img
        src={testimonial.profilePic}
        alt={`Profile of ${testimonial.name}`}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold text-lg">{testimonial.name}</h3>
        <p className="text-sm">{testimonial.title}</p>
        <p className="text-sm">{testimonial.institution}</p>
      </div>
    </div>
  </div>
);

// Testimonials Component
const Testimonials = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 hidden sm:block">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        RECRUITER&apos;S TESTIMONIALS
      </h2>
      <div className="relative overflow-hidden sm:h-[60vh] xs:h-[60vh] md:h-[60vh] lg:h-[90vh]">
        <div className="flex flex-col animate-slide">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`dup-${index}`} testimonial={testimonial} />
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

          setFormState({
            name: "",
            email: "",
            phone: "",
            category: "",
            message: "",
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
  .animate-slide:hover {
          animation-play-state: paused;
        }

          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            clip: rect(0 0 0 0);
            clip-path: inset(50%);
            overflow: hidden;
          }
          .testimonial-slider-container {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            width: 100%;
          }
          .testimonial-card {
            width: 100%;
            flex-shrink: 0;
          }
          .testimonial-message {
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        `}
      </style>

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 roboto-regular">
        <div className="flex flex-col lg:flex-row gap-8">
          <Testimonials />
          <div ref={ref} className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full p-4 lg:p-6 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-lg text-white overflow-auto mt-20">
              <div className="w-full lg:h-auto flex flex-col lg:flex-row justify-between items-center mb-4 relative p-4">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-white mb-4 lg:mb-0 lg:mr-4 flex-1">
                  <span className="text-[#FFC80E]">Elevate </span> Your Team:
                  Learn More About Gryphon's{" "}
                  <span className="text-[#FFC80E]">
                    Corporate Training Programs
                  </span>{" "}
                  Today!
                  <br />
                </h1>

                <img
                  src="LandingImage/contactform.png"
                  alt="Salesperson illustration"
                  className="w-64 md:w-72 lg:w-80 xl:w-96 max-w-full h-auto object-cover rounded-lg flex-1"
                  style={{ minWidth: "150px" }} // Adjust as needed
                />

                <img
                  src="LandingImage/union-design-img.svg"
                  alt="Rotating Triangle"
                  className="absolute top-0 w-10 h-10 md:w-12 md:h-12 left-0 md:left-18"
                  style={{
                    margin: "10px",
                    animation: "spin 2s linear infinite",
                  }}
                />

                <img
                  src="LandingImage/union-design-img.svg"
                  alt="Rotating Triangle Bottom Right"
                  className="absolute bottom-0 right-0 w-10 h-10 md:w-12 md:h-12"
                  style={{
                    margin: "10px",
                    marginRight: "20px",
                    animation: "spin 2s linear infinite",
                  }}
                />

                <img
                  src="LandingImage/curve-lines.svg"
                  alt="Waving Design"
                  className="absolute bottom-0 left-0 w-20 h-auto md:w-24 md:bottom-0 md:left-64"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
                    // Add responsive width adjustments if necessary
                    maxWidth: "100%", // Ensure it scales down to fit smaller screens
                    height: "auto", // Maintain aspect ratio
                  }}
                />
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  fadeInStyle={fadeInStyle}
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  fadeInStyle={fadeInStyle}
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  fadeInStyle={fadeInStyle}
                />
                <SelectField
                  label="Category"
                  name="category"
                  value={formState.category}
                  onChange={(e) =>
                    setFormState({ ...formState, category: e.target.value })
                  }
                  fadeInStyle={fadeInStyle}
                />
                <TextareaField
                  label="Message"
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  fadeInStyle={fadeInStyle}
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Input, Select, and Textarea Fields

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  fadeInStyle,
}) => (
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
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
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
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    >
      <option value="">Select Category</option>
      <option value="college">College</option>
      <option value="corporate">Corporate</option>
      <option value="university">University</option>
    </select>
  </div>
);

const TextareaField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  fadeInStyle,
}) => (
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
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    ></textarea>
  </div>
);

export default ContactForm;
