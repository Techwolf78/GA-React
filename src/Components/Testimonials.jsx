import React, { useEffect, useState } from 'react';
import '../assets/CSS/Testimonials.css'; // Import the Testimonials CSS

const testimonials = [
  {
    review: "Gryphon Academy provided me with the skills and knowledge I needed to excel in my career.",
    name: "Sarah Lewis",
    designation: "Software Engineer",
    rating: "★★★★★"
  },
  {
    review: "The mentorship and resources at Gryphon Academy are top-notch. My time here was invaluable.",
    name: "Suchitra Sharma",
    designation: "Digital Marketer",
    rating: "★★★★☆"
  },
  {
    review: "Gryphon Academy offers a transformative learning experience.",
    name: "Emily Davis",
    designation: "Entrepreneur",
    rating: "★★★★★"
  },
  {
    review: "Attending Gryphon Academy was a pivotal moment in my academic career.",
    name: "Prabhas Kumar",
    designation: "Research Scientist",
    rating: "★★★★☆"
  },
  {
    review: "The mentorship and resources at Gryphon Academy are top-notch. My time here was invaluable.",
    name: "Shakti Desai",
    designation: "Design Engineer",
    rating: "★★★★☆"
  }
];

const Testimonials = () => {
  const [animationDuration, setAnimationDuration] = useState('10s');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setAnimationDuration('5s'); // Faster for mobile
      } else {
        setAnimationDuration('10s'); // Normal for larger screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  return (
    <section className="relative overflow-hidden  roboto-regular">
      <div className="container mx-auto text-center mb-8">
        <h3 className="text-4xl font-bold text-[#FFC80E] mb-4">
          TESTIMONIALS
        </h3>
      </div>
      <div className="relative overflow-hidden w-full h-64">
        <div className="flex gap-4 animate-slide" style={{ animationDuration }}>
          {/* Render testimonials twice for seamless scrolling */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg w-80 text-center flex-shrink-0">
              <p className="text-lg text-gray-800 mb-4">"{testimonial.review}"</p>
              <p className="text-yellow-500 text-xl mb-2">{testimonial.rating}</p>
              <p className="text-gray-700 font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
