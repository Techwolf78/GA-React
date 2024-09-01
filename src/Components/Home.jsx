import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./HomeNavbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer
import bgImage1 from "../assets/Landing-Pages-1.png"; // Import Image 1
import bgImage2 from "../assets/Landing-Pages-2.png"; // Import Image 2
import bgImage3 from "../assets/Landing-Pages-3.png"; // Import Image 3
import bgImage4 from "../assets/Landing-Pages-4.png"; // Import Image 4
import bgImage5 from "../assets/Landing-Pages-5.png"; // Import Image 5
import "../assets/css/home.css"; // Import CSS file

const Home = () => {
  return (
    <div>
      <HomeNavbar /> {/* Add new animated Navbar */}
      {/* Section 1 */}
      <section
        className="section section1"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        <div className="content">
          <h2>Welcome to Gryphon Academy!</h2>
          <p>
            Where our approach is to make students industry ready with our
            curated Industry Specific Training programmes which make them
            competitive in the job market.
          </p>
          <Link to="/contact" className="btn">
            Connect Now
          </Link>
        </div>
      </section>
      {/* Section 2 */}
      <section
        className="section section2"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <div className="content">
          <h2>About Us</h2>
          <p>
            As India's premier non-ed-tech organization, we are committed to
            bridging the gap between industry and academia. We provide
            customized training solutions as per the Industry-centric needs
            which helps your academic institution facilitate smooth transition
            into the industry with ease.
          </p>
          <Link to="/about" className="btn">
            Know More
          </Link>
        </div>
      </section>
      {/* Section 3 */}
      <section
        className="section section3"
        style={{ backgroundImage: `url(${bgImage3})` }}
      >
        <div className="content">
          <h2>Learning and Development</h2>
          <p>
            Gryphon Academy empowers students, professionals, and educators
            through customized training programs. Our trainings being
            traditional, ensures that our participants are industry ready for
            dynamic roles and responsibilities and are backed by substantive
            hands-on experience that the current industry requires.
          </p>
          <Link to="/training" className="btn">
            Know More
          </Link>
        </div>
      </section>
      {/* Section 4 */}
      <section
        className="section section4"
        style={{ backgroundImage: `url(${bgImage4})` }}
      >
        <div className="content">
          <h2>Placement</h2>
          <p>
            Your dream job awaits! We go beyond training; we launch careers. Our
            guaranteed placement assistance connects you with your ideal path,
            all at zero cost to partnered colleges.
          </p>
          <Link to="/placement" className="btn">
            Know More
          </Link>
        </div>
      </section>
      {/* Section 5 */}
      <section
        className="section section5"
        style={{ backgroundImage: `url(${bgImage5})` }}
      >
        <div className="content">
          <h2>Brand Positioning</h2>
          <p>
            Step into the industry spotlight with Gryphon Academy. We don't just
            train; we transform. Elevate your brand and achieve your true
            potential with our strategically designed programs.
          </p>
          <Link to="/brand-positioning" className="btn">
            Know More
          </Link>
        </div>
      </section>
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
};

export default Home;
