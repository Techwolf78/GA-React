import React, { useState } from "react";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      img: "https://www.digitalsilk.com/wp-content/uploads/2022/11/Digital-marketing-agency-services-marketing-strategy-1820x559.jpg",
      alt: "Digital marketing agency services digital marketing",
      title: "Marketing Strategy",
      description:
        "Create effective marketing strategies for growth. We help you to create a marketing strategy that will help you to grow your business.",
      bgColor: "#ab598f", // Add a custom background color for each slide
    },
    {
      img: "https://www.digitalsilk.com/wp-content/uploads/2022/11/Digital-marketing-agency-services-SEO-1-1820x559.jpg",
      alt: "Digital marketing agency services SEO",
      title: "SEO Services",
      description:
        "Optimize your website for better search rankings. We help you to optimize your website for better search rankings.",
      bgColor: "#4a61dd", // Custom background color
    },
    {
      img: "https://www.digitalsilk.com/wp-content/uploads/2022/11/Digital-marketing-agency-services-Social-and-paid-Media-1820x559.jpg",
      alt: "Digital marketing agency services social and paid media",
      title: "Social & Paid Media",
      description:
        "Drive engagement with targeted social and paid campaigns. We help you to drive engagement with targeted social and paid campaigns.",
      bgColor: "#a00ab2", // Custom background color
    },
    {
      img: "https://www.digitalsilk.com/wp-content/uploads/2022/11/Digital-marketing-agency-services-Copywriting-1-1820x559.jpg",
      alt: "Digital marketing agency services copywriting and content creation",
      title: "Content Creation",
      description:
        "Create high-quality copy for engaging content. We help you to create high-quality copy for engaging content.",
      bgColor: "#0fb0a9", // Custom background color
    },
  ];

  const handleColumnHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="services-section roboto-regular"
      style={{
        backgroundColor: slides[activeIndex].bgColor, // Dynamically change background color of the section
        transition: "background-color 0.3s ease", // Smooth transition for the background color
      }}
    >
      <div className="container px-8 md:px-16">
        <div className="text-center text-semibold text-4xl">
          <h1>
            Digital Marketing Services
            <br />
            At a Glance
          </h1>
        </div>
        {/* Background change on hover effect */}
        <div className="slider-container">
          <div
            className="slider-background"
            style={{
              backgroundImage: `url(${slides[activeIndex].img})`,
            }}
          >
            <div className="columns">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`column ${activeIndex === index ? "active" : ""}`}
                  onMouseEnter={() => handleColumnHover(index)}
                >
                  <h3 className="column-title">
                    <span className="number">{`0${index + 1}`}</span>{" "}
                    {/* Add yellow number */}
                    {` ${slide.title}`}
                  </h3>
                  <p className="column-description">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Internal styles */}
      <style>{`
.services-section {
  color: white;
  padding: 3rem 0;
  position: relative;
  transition: background-color 0.3s ease; /* Smooth transition for background */
}

.container {
  width: 100%;
  margin: 0 auto;
}

.text-center h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
  font-weight: bold;
  color: white;
}

.slider-container {
  position: relative;
  height: 400px; /* Fixed height for the background image */
  background-color: #333;
  transition: background-image 0.3s ease;
}

.slider-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.9;  /* To make sure text is visible */
  z-index: 1;
}

.columns {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2; /* Ensure text appears above the background */
  height: 100%; /* Make columns fill the height of the slider container */
}

.column {
  flex: 1;
  height: 100%;  /* Ensure columns take the full height of the slider container */
  cursor: pointer;
  transition: transform 0.3s ease;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Position the title at the bottom initially */
  background-color: rgba(0, 0, 0, 0);  /* No overlay by default */
  border: 1px solid #333;  /* Optional: add a border for better visibility */
  overflow: hidden; /* Prevent content from overflowing */
}

.column.active {
  background-color: rgba(0, 0, 0, 0.3); /* Black overlay only for the active column */
}

.column-title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  display: flex;
  flex-direction: column; /* Stack number and title */
  align-items: flex-start; /* Align both the number and title to the left */
  transition: transform 0.3s ease, padding-bottom 0.3s ease; /* Smooth transition for title movement */
}

.number {
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
  color: #FFCC00; /* Yellow color for the number */
  line-height: 1; /* Prevent the number from taking up extra space */
  margin-bottom: 0.25rem; /* Space between the number and the title */
}

.column-title span {
  white-space: normal; /* Allow wrapping of the title */
  word-wrap: break-word; /* Break long words if necessary */
}

.column-description {
  font-size: 1rem;
  margin-top: 0.5rem;
  opacity: 0;  /* Start hidden */
  visibility: hidden;  /* Ensure the description doesn't take space */
  transform: translateY(20px);  /* Start below the viewport */
  transition: opacity 0.3s ease, visibility 0s ease 0.3s, transform 0.3s ease; /* Smooth transition for description */
}

/* New style for the yellow number */
.column-title .number {
  color: #FFCC00; /* Yellow color for the number */
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Hover Effects */
.column.active .column-title {
  transform: translateY(-20px); /* Move the title up */
 
}

.column.active .column-description {
  opacity: 1; /* Make description visible */
  visibility: visible; /* Make it take space */
  transform: translateY(0); /* Bring the description into view */
  transition: opacity 0.3s ease, visibility 0s ease 0s, transform 0.3s ease; /* Smooth transition for description */
}

      `}</style>
    </section>
  );
};

export default ServicesSection;
