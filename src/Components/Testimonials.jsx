import { useEffect, useState } from "react";

// Update testimonials array to include batch, department, and college
const testimonials = [
  {
    review: "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
    name: "Mr. Siddhant Kadam",
    companyLogo: "/Logos/12.jpg",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2024",
    department: "B.E Computer Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },
 
  {
    review: "The trainings on aptitude and soft skills proved to be highly beneficial, equipping us with valuable objects and preparing us knowledge across various subjects for the industry demands.",
    name: "Ms. Kritika Raina",
    companyLogo: "/Logos/22.png",
    companyName: "Mastercard",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Human Resource",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "I feel fortunate to have undergone Gryphon's Industry Readiness Program . It equipped me with not just the skills to excel but also the mindset to adapt growth . It was perfect preparation for a successful MBA graduate.",

    name: "Mr. Amitsingh Tanwar",
    companyLogo: "/Logos/12.jpg",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2025",
    department: "B.E Computer Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },

 
  {
    review:'The placement I secured were directly due to the comprehensive training at the Gryphon Academy , They helped me identify my strengths , overcome my weaknesses , and present myself as a well-rounded professional to recruiters.',
    name: "Ms. Pranali Kudche",
    companyLogo: "/Logos/2.jpg",
    companyName: "thyssenkrupp",
    rating: "★★★★★",
    batch: "2025",
    department: "Diploma - Electronics",
    college: "DKTE Society's Textile & Engineering Institute, Ichalkaranji",
  },

  {
    review: "The Industry Readiness Program at Gryphon Academy was a game-changer for my career. From softskills to technical expertise, every session was designed to prepare us for real-world challenges . It gave me the confidence to excel in the interviews and thrive in my new role .",
    name: "Mr. Omkar Hatte",
    companyLogo: "/Logos/piaggio.png",
    companyName: "Piaggio",
    rating: "★★★★★",
    batch: "2025",
    department: "Mechanical Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Thanks to Gryphon Academy , I transitioned from a student to a professional seamlessly. The practical insights ,resume workshops and mock interview helped me secure a role at my dream company. the training was invaluable.",
    name: "Mr. Arjun Mahamuni",
    companyLogo: "/Logos/28.png",
    companyName: "Philips",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA",
    college: "Indira College of Engineering & Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Ms. Poornima Theurkar",
    companyLogo: "/Logos/12.jpg",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2025",
    department: "B.E Computer Engineering",
    college: "Indira College of Engineering & Management, Pune",
  },

  {
    review: "The tailored approach of Gryphon's Industry Readiness Program was exactly what I needed.The focus on current industry trends and in-demand skills has only made me confident but also made me confident but also highly competitive in the job market.",

    name: "Ms. Trisha Chowdhary",
    companyLogo: "/Logos/faurecia.png",
    companyName: "Faurecia",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Finance",
    college: "iFEEL - Institute of Future Education, Entrepreneurship & Leadership, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr. Kushal Jha",
    companyLogo: "/Logos/findestination.jpeg",
    companyName: "FinDestination",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Marketing",
    college: "RIIM - Ramachandran International Institute of Management, Pune",
  },
  {
    review: "The sessions at the gryphon academy were intense , informative and incredibly rewarding. From mock interviews to skill-specific training , everything was geared towards making us industry-ready. Its the best decision I made during my MBA journey.",

    name: "Mr. Ajinkya Joshi",
    companyLogo: "/Logos/12.jpg",
    companyName: "Juspay",
    rating: "★★★★★",
    batch: "2025",
    department: "PGDM - Marketing",
    college: "ISBS - Indira School of Business, Pune",
  },
  {
    review: "The program was more than just training ; it was a transformation. Gryphon Academy helped me refine ,my skills, build my confidence and understand what the industry truly expects from professionals like me.",
    name: "Mr. Rithik Prakash",
    companyLogo: "/Logos/IDFC.png",
    companyName: "IDFC First Bank",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Marketing",
    college: "LEAD College of Management, Pune",
  },
  {
    review: "Gryphon has provided with best training. The teachers were super helping and punctual. They have given us lessons for life. I would extend a special thanks to the trainers who motivated us at every step.",
    name: "Mr. Rohit Mulik",
    companyLogo: "/Logos/daloopa.png",
    companyName: "daloopa",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA - Finance",
    college: "RIIM-Ramchandran International Institute of Management, Pune",
  },
  {
    review: "I feel fortunate to have undergone Gryphon's Industry Readiness Program . It equipped me with not just the skills to excel but also the mindset to adapt growth . It was perfect preparation for a successful MBA graduate.",
    name: "Ms.Srushti Ainpure",
    companyLogo: "/Logos/2.jpg",
    companyName: "thyssenkrupp",
    rating: "★★★★★",
    batch: "2025",
    department: "Diploma-Electronics",
    college: "DKTE Society's Textile & Engineering Institute, Ichalkaranji",
  },
  {
    review: "The sessions at the gryphon academy were intense , informative and incredibly rewarding. From mock interviews to skill-specific training , everything was geared towards making us industry-ready. Its the best decision I made during my MBA journey.",
    name: "Mr. Aniket Khatore",
    companyLogo: "/Logos/28.png",
    companyName: "Philips",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA -",
    college: "Indira Institute of Management, Pune",
  },
  {
    review: "Gryphon Academy provided me with best opportunities. Their trainings and teachers were very helpful for us in building our profession.",
    name: "Mr.Rushikesh Bhabad",
    companyLogo: "/Logos/ceasefire.png",
    companyName: "Cease Fire",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA -Marketing",
    college: "Sanjivani College Of Engineering , Kopargaon",
  },
  {
    review: "Gryphon Academy's industry readiness sessions were tailored to current market trends and the mentors provided valuable insights. From sharpening my aptitude to enhancing my interpersonal skills, every module was designed to ensure we are job-ready.",
    companyLogo: "/Logos/HDFC.png",
    companyName: "HDFC",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA -Marketing",
    college: "Lexicon Management Institute of Leadership and Excellence, Pune",
  },
  {
    review: "The trainings on aptitude and soft skills proved to be highly beneficial, equipping us with valuable objects and preparing us knowledge across various subjects for the industry demands.",
    name: "Mr.Vishal Thorat",
    companyLogo: "/Logos/ceasefire.png",
    companyName: "Cease Fire",
    rating: "★★★★★",
    batch: "2025",
    department: "MBA -Marketing Management",
    college: "Symbiosis Institute of Management Studies,Pune",
  },
];

const companyColors = {
  "Juspay": "#cae7fa", // Light blue (as per Juspay's logo)
  "Mastercard": "#f7e8df", // Light red (as per Mastercard's logo)
  "thyssenkrupp": "#dfeff7", // Light purple
  "Piaggio": "#edfdff", // Light orange
  "Philips": "#d6e9ff", // Light cyan
  "Faurecia": "#edf8ff", // Light green
  "FinDestination": "#e1edfa", // Light yellow
  "IDFC First Bank": "#f7e0da", // Light blue
  "daloopa": "#dee6fa", // Light coral
  "Cease Fire": "#faedeb", // Light red
  "HDFC": "#ebeffa", // Light blue
  // Add more companies and their colors as needed
};

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

  const cardStyle = (companyName) => ({
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
    height: "auto",
    background: `linear-gradient(to bottom, ${companyColors[companyName] || "#FFFFFF"} 0%, white 100%)`, // Fallback to white if company not found
  });

  const logoStyle = {
    width: "auto",
    height: "52px",
    objectFit: "contain",
    marginBottom: "10px",
  };

  const logoContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px",
  };

  return (
    <section style={{ background: "#01224f", padding: "6px 0" }} className="roboto-regular">
      <div style={{ textAlign: "center", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h3 className="text-2xl  lg:text-4xl  font-bold text-[#FFC80E]  mt-2"> 
          <span className="text-white">Students</span> Spotlight
        </h3>
      </div>

      <div className="testimonials_outer_container" style={{ position: "relative", overflow: "hidden", width: "100%", height: "auto", paddingTop: "10px" }}>
        <div className={`testimonials_track ${isVisible ? 'testimonials_animate' : ''}`}>
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={cardStyle(testimonial.companyName)}
              className="testimonial_card"
            >
              <div style={logoContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
              </div>
              <p style={{ fontSize: "13px", color: "#000000", marginBottom: "8px", fontStyle: "italic", flexGrow: 1 }}>
                {`"${testimonial.review}"`}
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ color: "#000000", fontWeight: "bold", fontSize: "13px", marginBottom: "0" }}>
                  {testimonial.name}
                </p>
                <p style={{ color: "#000000", fontSize: "11px", marginBottom: "0" }}>
                  {`Batch: ${testimonial.batch}`}
                </p>
                <p style={{ color: "#000000", fontSize: "11px", marginBottom: "0" }}>
                  {testimonial.department}
                </p>
                <p style={{ color: "#000000", fontSize: "11px", marginBottom: "0px" }}>
                  {testimonial.college}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              style={cardStyle(testimonial.companyName)}
              className="testimonial_card"
            >
              <div style={logoContainerStyle}>
                <img src={testimonial.companyLogo} alt={testimonial.companyName} style={logoStyle} />
              </div>
              <p style={{ fontSize: "13px", color: "#000000", marginBottom: "8px", fontStyle: "italic", flexGrow: 1 }}>
                {`"${testimonial.review}"`}
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ color: "#000000", fontWeight: "bold", fontSize: "13px", marginBottom: "0" }}>
                  {testimonial.name}
                </p>
                <p style={{ color: "#000000", fontSize: "11px", marginBottom: "0" }}>
                  {`Batch: ${testimonial.batch}`}
                </p>
                <p style={{ color: "#000000", fontSize: "11px", marginBottom: "0" }}>
                  {testimonial.department}
                </p>
                <p style={{ color: "#000000", fontSize: "11px", marginBottom: "0px" }}>
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