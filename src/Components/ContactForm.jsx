import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';


// Testimonials Data
const testimonials = [
  {
    message:
      "Gryphon holds a special place for me. Over the years, Gryphon has experienced significant growth, and it's been a journey filled with valuable lessons. I wish them continued success in all their future endeavors.",
    name: "Dr. Tarita Shankar",
    title:
      "Founder, Secretary & Chief Managing Trustee Shree Chanakya Education Society. Chairperson",
    institution: "Indira Group of Institutes, Pune",
    profilePic: "Testimonials/Tarita_shankar.jpg",
  },
  {
    message:
      "Gryphon Academy has achieved remarkable success in securing placements for our students in prestigious companies such as Tata Technology, KPIT, and Tata Motors, along with Plank and Weave for our students in the real estate sector. Gryphon's tailored training and placement services have opened up diverse opportunities for our students.",
    name: "Ms. Dhanwantari Wangde",
    title: "CEO",
    institution: "Dnyanshree Institute of Engineering & Technology, Satara",
    profilePic: "Testimonials/Dhanwantari Wangde.jpg",
  },
  {
    message:
      "Gryphon Academy's personalized training and placements are exceptional. They prepare students for the industry while shaping their futures with a dedicated commitment to excellence. With more than 2000+ students trained, Gryphon Academy continues to make a significant impact in the realm of education. ",
    name: "Mr. Amit Kolhe",
    title: "Managing Trustee",
    institution: "Sanjivani College of Engineering, Kopargaon",
    profilePic: "Testimonials/Amit Kolhe.jpg",
  },
  {
    message:
      "Dr. J. J. Magdum College Of Engineering Jaysingpur, Kolhapur, has partnered with Gryphon Academy for over three years now. Together, we are dedicated to providing comprehensive services to students across all domains. Gryphon's proven track record in delivering outstanding results for various institutions has impressed us.",
    name: "Dr. S. S. Admuthe",
    title: "Campus Director",
    institution: "Dr. J. J. Magdum College of Engineering Jaysingpur, Kolhapur",
    profilePic: "Testimonials/Dr. S S Admute JJ Magdum.jpeg",
  },
  {
    message:
      "ICEM is associated with Gryphon Academy for the past three years, benefiting from over 3000 hours of training annually for students. Gryphon Academy has extended invaluable industry support, particularly for our students seeking core engineering job placements.",
    name: "Ms. Meenakshi Madgunaki",
    title: "Head L&D",
    institution: "Indira College of Engineering & Management (ICEM), Pune",
    profilePic: "Testimonials/user.png",
  },
  {
    message:
      "In academia and the corporate world, Gryphon Academy stands as a leader driven by vision and dedication. Gryphon Academy's training and placements are outstanding, lighting the path towards a brighter future for students.",
    name: "Dr. Thomas George",
    title: "Director",
    institution: "Lead College of Management, Palakkad, Kerala",
    profilePic: "Testimonials/Dr Thomas Ceorge - LEAD.png",
  },
  {
    message:
      "Gryphon Academy's training kindles potential. Our students' achievements in the competitive world validate Gryphon's commitment to excellence. The expertise of their experienced trainers from various fields is second to none.",
    name: "Dr. Kuldip S Charak",
    title: "Director",
    institution:
      "Dr. D. Y. Patil Institute of Management Studies (DYPIMS), Pune",
    profilePic: "Testimonials/Dr Kuldip Charak .png",
  },
  {
    message:
      "Thanks to Gryphon's industry-focused training and the expertise of their trainers, our students have embarked on an incredible journey from classrooms to successful careers.",
    name: "Dr. S. P. Borde",
    title: "Dean",
    institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
    profilePic: "Testimonials/Dr. S P Borde JSPMS.png",
  },
  {
    message:
      "Gryphon's training isn't just a curriculum; it's a compass guiding students toward a prosperous future. their commitment to excellence aligns with our vision of nurturing future leaders. a huge Thanks to Gryphon Academy for their exclusive trainings and placements.",
    name: "Dr. A. Padmaja",
    title: "Dean",
    institution: "Vidya Jyothi Institute of Technology, (VJIT) Hyderabad",
    profilePic: "Testimonials/Dr A Padmaja Dean VJIT.jpeg",
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

// Prop Types validation for TestimonialCard
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    message: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
  }).isRequired,
};

// Testimonials Component
const Testimonials = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 hidden sm:block">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        College Testimonials
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
    source: "L&D Contact Form", // Permanent value for the source
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Append the source value to formData
    formData.append("source", formState.source);

    if (isSubmitting) return;

    setIsSubmitting(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
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
            source: "L&D Contact Form", // Reset source to default
          });
          e.target.reset();
        } else {
          toast.error(`Error: ${data.message}`, {
            position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
            autoClose: 2000,
            className: window.innerWidth <= 768 ? "text-sm" : "",
          });
        }
      })
      .catch(() => {
        toast.error("Error submitting form. Please try again.", {
          position: window.innerWidth <= 768 ? "bottom-center" : "top-center",
          autoClose: 2000,
          className: window.innerWidth <= 768 ? "text-sm" : "",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
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
                  Eager to tap into a network of over 450+{" "}
                  <span className="text-[#FFC80E]">Recruiters?</span>
                  <br />
                  Contact us <span className="text-[#FFC80E]">Today!</span>
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
                    maxWidth: "100%",
                    height: "auto",
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
                  className={`bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
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

// Prop Types validation
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fadeInStyle: PropTypes.object,
};


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
      className="w-full border border-gray-300 rounded-lg p-1 lg:p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all bg-white"
      style={{
        backgroundColor: 'white', // Keeps the background white
        color: value === '' ? '#9da0a6' : '#1F2937', // Gray color for placeholder text, black for other options
        padding: '0.5rem', // Optional padding to space the text
        fontSize: '1rem', // Optional font size adjustment
        borderRadius: '0.375rem', // Tailwind's rounded-lg equivalent
      }}
    >
      <option value="" disabled className="text-gray-500">
        Select Category
      </option>
      <option value="college" className="text-black">
        College
      </option>
      <option value="corporate" className="text-black">
        Corporate
      </option>
      <option value="university" className="text-black">
        University
      </option>
    </select>
  </div>
);

// Prop Types validation
SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fadeInStyle: PropTypes.object,
};



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

// Prop Types validation
TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fadeInStyle: PropTypes.object,
};


export default ContactForm;
