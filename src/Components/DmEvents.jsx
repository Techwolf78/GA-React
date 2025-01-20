import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const SplideCarousel = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const sectionData = [
    { title: "Section 1", description: "This is the description for Section 1." },
    { title: "Section 2", description: "This is the description for Section 2." },
    { title: "Section 3", description: "This is the description for Section 3." },
    { title: "Section 4", description: "This is the description for Section 4." },
    { title: "Section 5", description: "This is the description for Section 5." },
  ];

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage: 1,
      arrows: false,
      autoScroll: { speed: 1 },
      direction: "ttb", // Top-to-bottom (vertical)
      heightRatio: 1,
    }).mount({ AutoScroll });

    return () => {
      splide.destroy();
    };
  }, []);

  const handleSectionClick = (index) => {
    setSelectedSection(index); // Update the state when a section is clicked
  };

  return (
    <div className="splide-carousel-container">
      <div className="carousel-left">
        <div className="section-stack">
          {sectionData.map((section, index) => (
            <div
              key={index}
              className={`section-item ${selectedSection === index ? "active" : ""}`}
              onClick={() => handleSectionClick(index)}
            >
              <h3>{section.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Middle section containing the title and description */}
      <div className="section-details">
        <h3>{sectionData[selectedSection].title}</h3>
        <p>{sectionData[selectedSection].description}</p>
      </div>

      {/* Right side for the image gallery */}
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div className="slider-item">
                <img src="/journey/g1.jpg" alt="Journey 1" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="slider-item">
                <img src="/journey/g2.jpg" alt="Journey 2" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="slider-item">
                <img src="/journey/g3.jpg" alt="Journey 3" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="slider-item">
                <img src="/journey/g4.jpg" alt="Journey 4" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="slider-item">
                <img src="/journey/g5.jpg" alt="Journey 5" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .splide-carousel-container {
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Left panel (section stack) */
          .carousel-left {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 20px;
            background-color: #222;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }

          .section-stack {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .section-item {
            background-color: #333;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .section-item:hover {
            background-color: #555;
            transform: translateX(5px);
          }

          .section-item.active {
            background-color: #ff6347;
            transform: translateX(10px);
          }

          /* Middle panel (title and description) */
          .section-details {
            width: 35%;
            text-align: center;
            color: white;
            background-color: rgba(0, 0, 0, 0.5); /* Slightly transparent */
            padding: 40px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            margin: 0 20px;
          }

          .section-details h3 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #ff6347;
          }

          .section-details p {
            font-size: 1.1rem;
            color: #ddd;
          }

.splide-carousel-container {
  display: flex;
  height: 100vh; /* This is good, it will ensure the whole viewport is used */
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
}

/* Right side (carousel) */
.splide {
  width: 40%;
  height: 100%; /* Ensure this takes 100% of the parent's height */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.splide__track {
  position: relative;
  height: 100%; /* Ensures the track is the same height as the splide container */
  overflow: hidden;
}

.splide__list {
  display: block;
  margin: 0;
  padding: 0;
  height: 100%; /* Makes sure the list takes up the full height of the track */
}

.splide__slide {
  position: relative;
  list-style: none;
  width: 100%;
  height: 100%; /* Ensures each slide takes the full height */
}

.slider-item {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.slider-item img {
  width: 100%;
  height: 100%; /* Ensure images take up 100% height of the container */
  object-fit: cover;
  border-radius: 8px;
  transition: opacity 0.5s ease-in-out;
}


          /* Optional: Responsive Styling */
          @media (max-width: 768px) {
            .splide-carousel-container {
              flex-direction: column;
              align-items: center;
            }

            .carousel-left, .splide, .section-details {
              width: 100%;
              height: auto;
            }

            .splide {
              height: 50vh;
            }

            .section-details {
              margin-top: 20px;
            }

            .carousel-left {
              width: 100%;
              padding: 10px;
            }

            .section-stack {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 8px;
            }

            .section-item {
              flex: 1;
              min-width: 48%;
              padding: 8px 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SplideCarousel;
