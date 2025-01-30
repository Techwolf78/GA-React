import { useEffect, useState } from "react";

// Update testimonials array to include batch, department, and college
const testimonials = [
  {
    review: "My experience at Gryphon Academy was fantastic! I got placed at Force Motors, and I'm truly grateful to Gryphon Academy for their incredible support during my placement. Thank you!",
    name: "Mr. Siddhant Kadam",
    companyLogo: "/Logos/juspay.png",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2024",
    department: "B.E Computer Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
    name: "Mr. Amitsingh Tanwar",
    companyLogo: "/Logos/",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2025",
    department: "B.E Computer Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Ms. Poornima Theurkar",
    companyLogo: "/Logos/1.jpg",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2025",
    department: "B.E Computer Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Ajinkya Joshi",
    companyLogo: "/Logos/",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2025",
    department: "PGDM - Marketing",
    college: "ISBS - International School of Business, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Ms. Kritika Raina",
    companyLogo: "/Logos/",
    companyName: "Mastercard",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Human Resource",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Shravani Jadhav",
    companyLogo: "/Logos/",
    companyName: "Tender",
    rating: "★★★★★",
    batch: "2025",
    department: "Computer Science",
    college: "Sanjivani College of Engineering, Kopargaon",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Ms. Pranali Kudche",
    companyLogo: "/Logos/",
    companyName: "thyssenkrupp",
    rating: "★★★★★",
    batch: "2025",
    department: "Diploma - Electronics",
    college: "DKTE Society's Textile & Engineering Institute, Ichalkaranji",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Omkar Hatte",
    companyLogo: "/Logos/",
    companyName: "Piaggio",
    rating: "★★★★★",
    batch: "2025",
    department: "Mechanical Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Arjun Mahamuni",
    companyLogo: "/Logos/",
    companyName: "Philips",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Ms. Trisha Chowdhary",
    companyLogo: "/Logos/",
    companyName: "Faurecia",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Finance",
    college: "iFEEL - Institute of Future Education, Entrepreneurship & Leadership, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Kushal Jha",
    companyLogo: "/Logos/",
    companyName: "FinDestination",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Marketing",
    college: "RIIM - Ramachandran International Institute of Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Rithik Prakash",
    companyLogo: "/Logos/",
    companyName: "IDFC First Bank",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Marketing",
    college: "LEAD College of Management, Pune",
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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const cardStyle = {
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "none",
    width: "300px",
    textAlign: "center",
    flexShrink: 0,
    margin: "0 8px",
    border: "2px dashed #003073",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s",
    height: "auto", // Remove fixed height
   
  };
  
  const logoStyle = {
    width: "auto",
    height: "52px",
    objectFit: "contain",
    marginBottom: "12px",
  };
  
  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
  };

  return (
    <section style={{ background: "#01224f", padding: "12px 0" }} className="roboto-regular">
      <div style={{ textAlign: "center", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] mb-2 mt-2"> 
          <span className="text-white">Students</span> Spotlight
        </h3>
      </div>

      <div className="testimonials_outer_container" style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto", paddingTop: "20px" }}>
        <div className={`testimonials_track ${isVisible ? 'testimonials_animate' : ''}`}>
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                background: `linear-gradient(to bottom, ${cardColors[index % cardColors.length]} 0%, white 100%)`,
              }}
              className="testimonial_card"
            >
              <div style={logoContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
              </div>
              <p style={{ fontSize: "16px", color: "#000000", marginBottom: "8px", fontStyle: "italic", flexGrow: 1 }}>
                {`"${testimonial.review}"`}
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ color: "#000000", fontWeight: "bold", fontSize: "16px", marginBottom: "0" }}>
                  {testimonial.name}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0" }}>
                  {`Batch: ${testimonial.batch}`}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0" }}>
                  {testimonial.department}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0px" }}>
  {testimonial.college}
</p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              style={{
                ...cardStyle,
                background: `linear-gradient(to bottom, ${cardColors[index % cardColors.length]} 0%, white 100%)`,
              }}
              className="testimonial_card"
            >
              <div style={logoContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
              </div>
              <p style={{ fontSize: "16px", color: "#000000", marginBottom: "8px", fontStyle: "italic", flexGrow: 1 }}>
                {`"${testimonial.review}"`}
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ color: "#000000", fontWeight: "bold", fontSize: "16px", marginBottom: "0" }}>
                  {testimonial.name}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0" }}>
                  {`Batch: ${testimonial.batch}`}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0" }}>
                  {testimonial.department}
                </p>
                <p style={{ color: "#000000", fontSize: "14px", marginBottom: "0px" }}>
  {testimonial.college}
</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials_track {
          display: flex;
          gap: 1px;
          transform: translateX(calc(-300px * ${testimonials.length}));
        }

        .testimonials_track.testimonials_animate {
          animation: testimonials_scroll 30s linear infinite;
        }

        .testimonial_card:hover {
          transform: translateY(-5px);
        }

        @keyframes testimonials_scroll {
          0% {
            transform: translateX(calc(-300px * ${testimonials.length}));
          }
          100% {
            transform: translateX(0);
          }
        }

        .testimonials_outer_container:hover .testimonials_track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonials_track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
