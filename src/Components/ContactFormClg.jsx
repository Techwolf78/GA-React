import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";

// Testimonials Data
const testimonials = [
  {
    message: "Gryphon holds a special place for me. Over the years, Gryphon has experienced significant growth, and it's been a journey filled with valuable lessons. I wish them continued success in all their future endeavors.",
    name: "Dr. Tarita Shankar",
    title: "Founder, Secretary & Chief Managing Trustee Shree Chanakya Education Society. Chairperson",
    institution: "Indira Group of Institutes, Pune",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "Gryphon Academy has achieved remarkable success in securing placements for our students in prestigious companies such as Tata Technology, KPIT, and Tata Motors, along with Plank and Weave for our students in the real estate sector. Gryphon's tailored training and placement services have opened up diverse opportunities for our students.",
    name: "Ms. Dhanwantari Wangde",
    title: "CEO",
    institution: "Dnyanshree Institute of Engineering & Technology, Satara",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "Gryphon Academy's personalized training and placements are exceptional. They prepare students for the industry while shaping their futures with a dedicated commitment to excellence. With more than 2000+ students trained, Gryphon Academy continues to make a significant impact in the realm of education. ",
    name: "Mr. Amit Kolhe",
    title: "Managing Trustee",
    institution: "Sanjivani College of Engineering, Kopargaon",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "Dr. J. J. Magdum College Of Engineering Jaysingpur, Kolhapur, has partnered with Gryphon Academy for over three years now. Together, we are dedicated to providing comprehensive services to students across all domains. Gryphon's proven track record in delivering outstanding results for various institutions has impressed us.",
    name: "Dr. S. S. Admuthe",
    title: "Campus Director",
    institution: "Dr. J. J. Magdum College of Engineering Jaysingpur, Kolhapur",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "ICEM is associated with Gryphon Academy for the past three years, benefiting from over 3000 hours of training annually for students. Gryphon Academy has extended invaluable industry support, particularly for our students seeking core engineering job placements.",
    name: "Ms. Meenakshi Madgunaki",
    title: "Head L&D",
    institution: "Indira College of Engineering & Management (ICEM), Pune",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "In academia and the corporate world, Gryphon Academy stands as a leader driven by vision and dedication. Gryphon Academy's training and placements are outstanding, lighting the path towards a brighter future for students.",
    name: "Dr. Thomas George",
    title: "Director",
    institution: "Lead College of Management, Palakkad, Kerala",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "Gryphon Academy's training kindles potential. Our students' achievements in the competitive world validate Gryphon's commitment to excellence. The expertise of their experienced trainers from various fields is second to none.",
    name: "Dr. Kuldip S Charak",
    title: "Director",
    institution: "Dr. D. Y. Patil Institute of Management Studies (DYPIMS), Pune",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "Thanks to Gryphon's industry-focused training and the expertise of their trainers, our students have embarked on an incredible journey from classrooms to successful careers.",
    name: "Dr. S. P. Borde",
    title: "Dean",
    institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
    profilePic: "journey/Ankita.jpeg",
  },
  {
    message: "Gryphon's training isn't just a curriculum; it's a compass guiding students toward a prosperous future. their commitment to excellence aligns with our vision of nurturing future leaders. a huge Thanks to Gryphon Academy for their exclusive trainings and placements.",
    name: "Dr. A. Padmaja",
    title: "Dean",
    institution: "Vidya Jyothi Institute of Technology, (VJIT) Hyderabad",
    profilePic: "journey/Ankita.jpeg",
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
        COLLEGE TESTIMONIALS
      </h2>
      <div className="relative overflow-hidden sm:h-[60vh] xs:h-[60vh] md:h-[60vh] lg:h-[100vh]">
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
              <div className="w-full lg:h-auto flex flex-col lg:flex-row justify-center items-center mb-4 relative">
                <h1 className="md:text-5xl text-2xl font-bold text-center text-white mb-4 lg:mb-0 lg:mr-4">
                  Ready to enhance your <span className="text-[#FFC80E]">curriculum? </span>
                  <br />
                  Contact us <span className="text-[#FFC80E]">Today! </span>
                </h1>
                <img
                  src="LandingImage/contactform.png"
                  alt="Salesperson illustration"
                  className="w-96 max-w-md h-auto object-cover rounded-lg"
                />

                <img
                  src="LandingImage/union-design-img.svg"
                  alt="Rotating Triangle"
                  className="absolute top-0 w-12 h-12 left-0 md:left-18"
                  style={{
                    margin: "10px",
                    animation: "spin 2s linear infinite",
                  }}
                />

                <img
                  src="LandingImage/union-design-img.svg"
                  alt="Rotating Triangle Bottom Right"
                  className="absolute bottom-0 right-0 w-12 h-12"
                  style={{
                    margin: "10px",
                    marginRight: "20px",
                    animation: "spin 2s linear infinite",
                  }}
                />

                <img
                  src="LandingImage/curve-lines.svg"
                  alt="Waving Design"
                  className="absolute bottom-0 left-0 w-24 h-auto md:bottom-0 md:left-64"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "10px",
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