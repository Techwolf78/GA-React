import React from 'react';
import '../assets/CSS/Testimonials.css'; // Import the Testimonials CSS

const testimonials = [
  {
    review: "This service was exceptional. It truly helped my business grow.",
    name: "Neon Jacky",
    designation: "Dean of DSPM",
    rating: "★★★★"
  },
  {
    review: "An amazing experience! The support team was fantastic.",
    name: "Jane Doe",
    designation: "Marketing Manager",
    rating: "★★★★☆"
  },
  {
    review: "Highly recommend! Professional and efficient service.",
    name: "John Smith",
    designation: "Product Lead",
    rating: "★★★★★"
  },
  {
    review: "The results exceeded my expectations. Great job!",
    name: "Alice Johnson",
    designation: "CEO",
    rating: "★★★★☆"
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-100 py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What Others Think of Us
        </h2>
        <p className="text-lg text-gray-600">
          Hear from those who have experienced our exceptional service.
        </p>
      </div>
      <div className="relative overflow-hidden w-full h-64">
        <div className="flex gap-4 animate-slide">
          {/* Render testimonials twice for seamless scrolling */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg w-80 text-center flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl">
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
