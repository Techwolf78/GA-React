import React from "react";
import Icon from "/Testimonials/arrow.svg";

const testimonials = [
  {
    review:
      "My experience at Gryphon Academy was fantastic! I got placed at Force Motors, and I'm truly grateful to Gryphon Academy for their incredible support during my placement. Thank you!",
    name: "Mr. Rahul Agal",
    companyLogo: "/Logos/1.jpg",
    companyName: "Mechanical Engineering",
    rating: "★★★★★",
  },
  {
    review:
      "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
    name: "Mr. Sonu Kambhire",
    companyLogo: "/Logos/41.jpg",
    companyName: "Mechanical Engineering",
    rating: "★★★★★",
  },
  {
    review:
      "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Shubham Borse",
    companyLogo: "/Logos/1.jpg",
    companyName: "Electrical Engineering",
    rating: "★★★★★",
  },
  {
    review:
      "Gryphon Academy has changed me for the better. Their encompassing aptitude, soft skills and technical prowess prepared me for industry challenges.",
    name: "Mr. Niket Gawali ",
    companyLogo: "/Logos/42new.jpg",
    companyName: "Civil Engineering",
    rating: "★★★★★",
  },
  {
    review:
      "The trainings on aptitude and soft skills proved to be highly beneficial, equipping us with valuable objects and preparing us knowledge across various subjects for the industry demands.",
    name: "Mr. Kishor Turkane ",
    companyLogo: "/Logos/5.jpg",
    companyName: "Civil Engineering",
    rating: "★★★★★",
  },
  {
    review:
      "Gryphon Academy made my placement journey smooth with their informative and simplified teaching style. I'm grateful for the opportunity to learn and gain essential industry skills.",
    name: "Mr. Rahul Hiwale ",
    companyLogo: "/Logos/7.jpg",
    companyName: "Mechanical Engineering",
    rating: "★★★★★",
  },
  {
    review:
      "Gryphon Academy doesn't just teach; they empower. I owe my career to their exceptional training and the fantastic placement options they offer.",
    name: "Mr. Chinmay Gosavi",
    companyLogo: "/Logos/43.png",
    companyName: "Finance & Minor - Marketing",
    rating: "★★★★★",
  },
];

const cardColors = [
  "#F1FAF9", // very light teal
  "#FFF9E8", // very light orange
  "#F2FBFF", // very light blue
  "#F6F0FC", // very light lavender
  "#FCEDEE", // very light blush
  "#F4FBFF", // very light sky blue
  "#FDEDF2", // very light pink
];



const Testimonials = () => {
  const cardStyle = {
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "none",
    width: "300px",
    textAlign: "left",
    flexShrink: 0,
    margin: "0 8px",
    border: "2px dashed #003073",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "350px",
    transition: "transform 0.3s",
   
  };

  const logoStyle = {
    width: "auto",
    height: "52px",
    objectFit: "contain",
    marginBottom: "12px",
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "12px",
  };

  return (
    <section style={{ background: "#01224f", padding: "12px 0" }} className="roboto-regular">
      <div style={{ textAlign: "center", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] mb-4"> 
          <span className="text-white">Students</span> Spotlight
        </h3>
      </div>

      <div style={{ position: "relative", overflow: "hidden", width: "100%", height: "400px", paddingTop: "20px" }}>
        <div className="slide" style={{ display: "flex", gap: "1px", animation: "slide 30s linear infinite" }}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                background: `linear-gradient(to bottom, ${cardColors[index % cardColors.length]} 0%, white 100%)`,
                // Add hover style here
                '&:hover': {
                  transform: 'rotate(0deg)', // Reset tilt on hover
                },
              }}
            >
              <div style={logoContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
              </div>
              <p style={{ fontSize: "16px", color: "#000000", marginBottom: "8px", fontStyle: "italic", flexGrow: 1 }}>
                {`"${testimonial.review}"`}
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <p style={{ color: "#000000", fontWeight: "bold", fontSize: "16px", marginBottom: "0" }}>
                  {testimonial.name}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0" }}>
                  {testimonial.companyName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${testimonials.length * 300}px); }
          }
       
        `}
      </style>
    </section>
  );
};

export default Testimonials;
