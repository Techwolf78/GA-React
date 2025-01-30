import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const statCardStyle = {
    backgroundColor: "#f3f9fc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "1.5rem",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderBottom: "1.5px solid #1e3a8a", // Add bottom border
  };
  

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div id="stats" className="py-12 bg-[#f5f4f4]">
      {/* Container with max-width and consistent padding */}
      <div className="mx-auto px-8 md:px-16 ">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Text Section */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            data-aos="fade-right"
          >
            <p className="text-sm md:text-base text-black mb-1">OUR IMPACT</p>
            <h3
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "#1e3a8a" }}
            >
              Transforming Education Through Technology
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              For over a decade, we've been pioneering digital learning
              solutions that empower institutions, educators, and students to
              thrive in the modern educational landscape.
            </p>
            <a href="/contact">
              <button className="bg-[#f3f9fc] text-black px-2 py-2 border-2 border-[#1e3a8a] font-semibold hover:bg-[#15306d] hover:text-white transition-colors">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Grid Section */}
          <div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            data-aos="fade-left"
          >
            {[
              {
                icon: "user-graduate",
                color: "#ffc700",
                value: "60,000+",
                label: "Students Trained",
              },
              {
                icon: "calendar-alt",
                color: "#ffc700",
                value: "65,000+",
                label: "Training Hours",
              },
              {
                icon: "building",
                color: "#ffc700",
                value: "450+",
                label: "Corporate Partners",
              },
              {
                icon: "university",
                color: "#ffc700",
                value: "55+",
                label: "Educational Partners",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="stat-card p-4"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                style={statCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = hoverStyle.transform;
                  e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
              >
                <i
                  className={`fas fa-${stat.icon} text-4xl mb-3`}
                  style={{ color: stat.color }}
                ></i>
                <h3 className="text-3xl font-bold text-black">{stat.value}</h3>
                <p className="text-md text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
