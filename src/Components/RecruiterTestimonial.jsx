import React from 'react';

const testimonials = [
  {
    review: "Gryphon Academy provided me with the skills and knowledge I needed to excel in my career.",
    name: "Sarah Lewis",
    rating: "★★★★★",
    companyLogo: "Logos/1.jpg",
    companyName: "Force Motors"
  },
  {
    review: "The mentorship and resources at Gryphon Academy are top-notch. My time here was invaluable.",
    name: "Suchitra Sharma",
    rating: "★★★★☆",
    companyLogo: "Logos/2.jpg",
    companyName: "Reliance Industries"
  },
  {
    review: "Gryphon Academy offers a transformative learning experience.",
    name: "Emily Davis",
    rating: "★★★★★",
    companyLogo: "Logos/3.jpg",
    companyName: "Tata Group"
  },
  {
    review: "Attending Gryphon Academy was a pivotal moment in my academic career.",
    name: "Prabhas Kumar",
    rating: "★★★★☆",
    companyLogo: "Logos/4.jpg",
    companyName: "gslab"
  },
  {
    review: "The mentorship and resources at Gryphon Academy are top-notch. My time here was invaluable.",
    name: "Shakti Desai",
    rating: "★★★★☆",
    companyLogo: "Logos/5.jpg",
    companyName: "Hettich"
  }
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
    marginTop: '16px'
  };

  const logoStyle = {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
    marginRight: '8px'
  };

  return (
    <section style={{ background: '#091327', padding: '64px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3 className="text-4xl font-bold text-[#FFC80E] mb-4">
          RECRUITER TESTIMONIALS
        </h3>
        <h4 className="text-2xl text-white mb-4">
          What Our Graduates Say
        </h4>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '320px' }}>
        <div style={{ display: 'flex', gap: '16px', animation: 'slide 20s linear infinite' }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} style={cardStyle}>
              <p style={{ fontSize: '18px', color: '#ffffff', marginBottom: '16px' }}>{`"${testimonial.review}"`}</p>
              <p style={{ color: '#FFC80E', fontSize: '24px', marginBottom: '16px' }}>{testimonial.rating}</p>
              <p style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '16px' }}>{testimonial.name}</p>
              <div style={flexContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
                <p style={{ color: '#ffffff' }}>{testimonial.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
