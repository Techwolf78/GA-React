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
    review: "Gryphon holds a special place for me. Over the years, Gryphon has experienced significant growth, and it's been a remarkable journey filled with valuable lessons. I wish them continued success in all their future endeavors.",
    name: "Dr. Tarita Shankar",
    designation: "Chairperson - Indira Group of Institutes, Pune",
    rating: "★★★★★"
  },
  {
    review: "Gryphon Academy has achieved remarkable success in securing placements for our students in prestigious companies such as Tata Technology, KPIT, and Tata Motors, along with Plank and Weave for our students in the real estate sector. Gryphon's tailored training and placement services have opened up diverse opportunities for our students. ",
    name: "Ms. Dhanwantari Wangde",
    designation: "CEO - Dnyanshree Institute of Engineering & Technology, Satara",
    rating: "★★★★★"
  },
  {
    review: "Gryphon Academy's personalized training and placements are exceptional. They prepare students for the industry while shaping their futures with a dedicated commitment to excellence. With more than 2000+ students trained, Gryphon Academy continues to make a significant impact in the realm of education.  ",
    name: "Mr. Amit Kolhe",
    designation: "Managing Trustee - Sanjivani College of Engineering, Kopargaon",
    rating: "★★★★★"
  },
  {
    review: "We recruited 145 fresh engineers batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job. ",
    name: "Mr. Rahul Bagale",
    designation: "Group HR Head Force Motors Ltd.",
    rating: "★★★★★"
  },
  {
    review: "Their commitment to nurturing and grooming exceptional talent is truly commendable. The graduates we've recruited from Gryphon Academy have consistently proven to be skilled, adaptable, and well-prepared for the demands of the industry.",
    name: "Cdr. Pratap Pawar",
    designation: "Director HR & IT Gs lab",
    rating: "★★★★★"
  },
  {
    review: "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent.",
    name: "Mr. Suvarnanidhi Rao",
    designation: "Campus Lead - Indian Sub Continent Philips India",
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
    <section className="relative overflow-hidden bg-[#01224f]">
      <div className="container mx-auto text-center mb-8">
        <h3 className="text-4xl font-bold text-[#FFC80E] mb-4">TESTIMONIALS</h3>
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
      <style jsx>{`
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
