import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    review: "My experience with Gryphon Academy was incredible. I got placed in Force Motors and I would love to thank Gryphon Academy for being such an amazing partner for my placement opportunity.",
    name: "Mr. Rahul Agal",
    designation: "Mechanical Engineering",
    rating: "★★★★★"
  },
  {
    review: "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
    name: "Mr. Sonu Kambhire",
    designation: "Mechanical Engineering",
    rating: "★★★★★"
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Shubham Borse",
    designation: "Electrical Engineering",
    rating: "★★★★★"
  },
  {
    review: "Gryphon Academy has changed me for the better. Their encompassing aptitude, soft skills and technical prowess, prepared me for industry challenges. ",
    name: "Mr. Niket Gawali ",
    designation: "Civil Engineering",
    rating: "★★★★★"
  },
  {
    review: "The trainings on aptitude and soft skills proved to be highly beneficial, equipping us with valuabile bjects and preparing us knowledge across various subjects for the industry demands. ",
    name: "Mr. Kishor Turkane ",
    designation: "Civil Engineering",
    rating: "★★★★★"
  },
  {
    review: "It was a great experience with Gryphon Academy. The informative and simplifed teaching style of trainers made our placement Journey smooth. Grateful to Gryphon Academy for providing the opportunity to learn and aquire industry skillet.",
    name: "Mr. Rahul Hiwale ",
    designation: "Mechanical Engineering ",
    rating: "★★★★★"
  },
  {
    review: "Gryphon Academy doesn't just teach; they empower. I owe my career to their exceptional training and the fantastic placement options they offer.",
    name: "Mr. Chinmay Gosavi", 
    designation: "Finance & Minor-Marketing",
 
    rating: "★★★★★"
  },
];

const Testimonials = () => {
  const [animationDuration, setAnimationDuration] = useState('10s');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setAnimationDuration('5s');
      } else {
        setAnimationDuration('10s');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#01224f] mt-10">
      <div className="container mx-auto text-center mb-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#ffc700] mb-4">TESTIMONIALS</h3>
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-4 animate-slide" style={{ animationDuration }}>
          {/* Render testimonials twice for seamless scrolling */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg w-80 text-center flex-shrink-0 flex flex-col">
              <p className="text-lg text-gray-800 mb-4 flex-grow italic">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <p className="text-yellow-500 text-xl mb-2">{testimonial.rating}</p>
              <p className="text-gray-700 font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.designation}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
