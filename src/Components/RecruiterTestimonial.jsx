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
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '320px',
    textAlign: 'center',
    flexShrink: 0,
    transition: 'transform 0.3s, box-shadow 0.3s',
    margin: '0 8px'
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
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
    <section style={{ background: 'linear-gradient(to bottom, white, #e1d2fc)', padding: '64px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '16px', textDecoration: 'underline' }}>
          RECRUITER TESTIMONIALS
        </h3>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '320px' }}>
        <div style={{ display: 'flex', gap: '16px', animation: 'slide 20s linear infinite' }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              style={{ ...cardStyle, ...(index % 2 === 0 ? cardHoverStyle : {}) }}
            >
              <p style={{ fontSize: '18px', color: '#333', marginBottom: '16px' }}>{`"${testimonial.review}"`}</p>
              <p style={{ color: '#f39c12', fontSize: '24px', marginBottom: '16px' }}>{testimonial.rating}</p>
              <p style={{ color: '#555', fontWeight: 'bold', marginBottom: '16px' }}>{testimonial.name}</p>
              <div style={flexContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
                <p style={{ color: '#555' }}>{testimonial.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
