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
    rating: "★★★★☆",
    companyLogo: "Logos/2.jpg",
    companyName: "Director HR & IT Gs lab"
  },
  {
    review: "The talent pool Gryphon offers is a testament to their dedication in producing industry-ready graduates. We thank Gryphon Academy for consistently providing us with such outstanding talent.",
    name: "Mr. Suvarnanidhi Rao",
    rating: "★★★★★",
    companyLogo: "Logos/3.jpg",
    companyName: "Campus Lead - Indian Sub Continent Philips India"
  },
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
    rating: "★★★★☆",
    companyLogo: "Logos/2.jpg",
    companyName: "Director HR & IT Gs lab"
  },
];

const Testimonials = () => {
  const cardStyle = {
    backgroundColor: '#003073',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: 'none',
    width: '320px',
    textAlign: 'center',
    flexShrink: 0,
    margin: '0 8px'
  };

  const flexContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8px'
  };

  const logoStyle = {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
    marginRight: '8px'
  };

  return (
    <section style={{ background: '#091327', padding: '12px 0' }} className='roboto-regular'>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${testimonials.length * 320}px); }
          }
          .slide {
            animation: slide 20s linear infinite;
            display: flex;
            gap: 16px;
          }
        `}
      </style>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] mb-4">
          RECRUITER TESTIMONIALS
        </h3>
      
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '320px' }}>
        <div className="slide">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} style={cardStyle}>
              <p style={{ fontSize: '16px', color: '#ffffff', marginBottom: '8px' }}>
                {`"${testimonial.review}"`}
              </p>
              <p style={{ color: '#FFC80E', fontSize: '18px', marginBottom: '8px' }}>
                {testimonial.rating}
              </p>
              <p style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '16px', marginBottom: '16px' }}>
                {testimonial.name}
              </p>
              <div style={flexContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
                <p style={{ color: '#ffffff', fontSize: '14px' }}>{testimonial.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
