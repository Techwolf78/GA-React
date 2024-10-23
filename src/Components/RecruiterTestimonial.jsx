import React from 'react';

const testimonials = [
  {
    review: "We recruited 145 fresh engineers batch 2022-23 with the support of Gryphon and got reliable source of talent for our company. Team Gryphon is doing a fabulous job.",
    name: "Mr. Rahul Bagale",
    rating: "★★★★★",
    companyLogo: "Logos/1.jpg",
    companyName: "Group HR Head Force Motors Ltd."
  },
  {
    review: "Their commitment to nurturing and grooming exceptional talent is truly commendable. The graduates we've recruited from Gryphon Academy have consistently proven to be skilled, adaptable, and well-prepared for the demands of the industry.",
    name: "Cdr. Pratap Pawar",
    rating: "★★★★★",
    companyLogo: "Logos/4.jpg",
    companyName: "Director HR & IT Gs lab"
  },
  {
    review: "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent.",
    name: "Mr. Suvarnanidhi Rao",
    rating: "★★★★★",
    companyLogo: "Logos/23.jpg",
    companyName: "Campus Lead - Indian Sub Continent Philips India"
  },
  {
    review: "Gryphon Academy trained students are well-prepared for the demands of the engineering industry, with a strong foundation in both technical and professional skills.",
    name: "Mr. Sushant Kumar",
    rating: "★★★★★",
    companyLogo: "Logos/40.jpg",
    companyName: "Talent Acquisition Manager, Brillio"
  },
  {
    review: "Our experience with Gryphon Academy has been nothing short of exceptional. I appreciate the effort they put into producing graduates. They have made our recruitment process smoother and more effective.",
    name: "Dr. Sunaina Dutta",
    rating: "★★★★★",
    companyLogo: "Logos/5.jpg",
    companyName: "Head HR, Hettich India"
  },
  {
    review: "We've had the opportunity to undergo Gryphon Academy's training process, extending its reach to candidates from various regions. Gryphon's high-quality training program has undeniably enhanced student skills.",
    name: "Mr. Shipra Pandit",
    rating: "★★★★★",
    companyLogo: "Logos/12.jpg",
    companyName: "Director - HR, Juspay"
  },
];

const Testimonials = () => {
  const cardStyle = {
    backgroundColor: '#003073',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    width: '320px',
    textAlign: 'center',
    flexShrink: 0,
    margin: '0 16px'
  };

  return (
    <section style={{ background: '#091327', padding: '40px 0' }} className='roboto-regular'>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${testimonials.length * 320}px); }
          }
          .slide {
            animation: slide 20s linear infinite;
            display: flex;
            gap: 24px;
          }
        `}
      </style>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] mb-4">
          RECRUITER'S TESTIMONIALS
        </h3>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '360px' }}>
        <div className="slide">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} style={cardStyle}>
              <p style={{ fontSize: '16px', color: '#ffffff', marginBottom: '12px', fontStyle: 'italic' }}>
                {`"${testimonial.review}"`}
              </p>
              <p style={{ color: '#FFC80E', fontSize: '20px', marginBottom: '8px' }}>
                {testimonial.rating}
              </p>
              <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px', marginBottom: '4px' }}>
                {testimonial.name}
              </p>
              <p style={{ color: '#ffffff', fontSize: '14px', marginBottom: '12px' }}>
                {testimonial.companyName}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={{ width: 'auto', height: '52px', objectFit: 'contain' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
