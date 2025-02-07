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
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    borderBottom: "1.5px solid #1e3a8a",
    padding: "1rem", // Increased padding for better spacing
    margin: "0",
    width: "auto", // Let the width be determined by content
    maxWidth: "250px", // Optional: limit the max width of each stat card
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  };

  return (
    <div className="bg-[#ffffff]">
      <div id="stats" className="py-4 md:py-8 bg-[#f6f6f4]  mx-auto px-8 md:px-16">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* Left Text Section */}
          <div
            className="w-full sm:w-5/12 text-center sm:text-left mb-12 sm:mb-0"
            data-aos="fade-right"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-6" style={{ color: "#1e3a8a" }}>
              Our Impact
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              For years, we have been pioneering customized training skills
              that help students thrive in the ever-evolving landscape of the
              industry.
            </p>
            <a href="/contact">
              <button className="bg-[#f6f6f4] text-black px-4 py-2 border-2 border-[#1e3a8a] font-semibold hover:bg-[#15306d] hover:text-white transition-colors">
                Contact Us
              </button>
            </a>
          </div>

          {/* Right Grid Section */}
          <div
            className="w-full sm:w-7/12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 justify-items-center"
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
                className="stat-card"
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
                <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
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
