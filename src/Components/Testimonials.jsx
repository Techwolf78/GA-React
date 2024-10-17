import React from 'react';

const testimonials = [
  {
  review: "My experience with Gryphon Academy was incredible. I got placed in Force Motors and I would love to thank Gryphon Academy for being such an amazing partner for my placement opportunity.",
  name: "Mr. Rahul Agal",
 companyLogo: "Logos/1.jpg",
    companyName: "Mechanical Engineering",
  rating: "★★★★★"
  },
  {
  review: "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
  name: "Mr. Sonu Kambhire",
  companyLogo: "Logos/41.jpg",
    companyName: "Mechanical Engineering",
  rating: "★★★★★"
  },
  {
  review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
  name: "Mr. Shubham Borse",
  companyLogo: "Logos/1.jpg",
    companyName: "Electrical Engineering",
  rating: "★★★★★"
  },
  {
  review: "Gryphon Academy has changed me for the better. Their encompassing aptitude, soft skills and technical prowess, prepared me for industry challenges. ",
  name: "Mr. Niket Gawali ",
  companyLogo: "Logos/42.png",
  companyName: "Civil Engineering",
  rating: "★★★★★"
  },
  {
  review: "The trainings on aptitude and soft skills proved to be highly beneficial, equipping us with valuabile bjects and preparing us knowledge across various subjects for the industry demands. ",
  name: "Mr. Kishor Turkane ",
  companyLogo: "Logos/5.jpg",
  companyName: "Civil Engineering",
  rating: "★★★★★"
  },
  {
  review: "It was a great experience with Gryphon Academy. The informative and simplifed teaching style of trainers made our placement Journey smooth. Grateful to Gryphon Academy for providing the opportunity to learn and aquire industry skillet.",
  name: "Mr. Rahul Hiwale ",
  companyLogo: "Logos/7.jpg",
    companyName: "Mechanical Engineering",
  rating: "★★★★★"
  },
  {
  review: "Gryphon Academy doesn't just teach; they empower. I owe my career to their exceptional training and the fantastic placement options they offer.",
  name: "Mr. Chinmay Gosavi",
  companyLogo: "Logos/43.png",
  companyName: "Finance & Minor - Marketing",
  rating: "★★★★★"
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
    <section style={{ background: '#01224f', padding: '12px 0' }} className='roboto-regular'>
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
          TESTIMONIALS
        </h3>
      
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '320px' }}>
        <div className="slide">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} style={cardStyle}>
              <p style={{ fontSize: '16px', color: '#ffffff', marginBottom: '8px',fontStyle: 'italic' }}>
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
                <p style={{ color: '#ffffff', fontSize: '14px' , }}>{testimonial.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
