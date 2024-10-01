import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/CSS/TrainingAbout.css";

// Animation Variants
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TrainingAbout = () => {
  return (
    <div className="about-us roboto-regular">
      <motion.div
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <motion.div className="about-left" variants={fadeInFromLeft}>
          <p className="about-head">BRIDGING ALL GAPS</p>
          <h1 className="about-text roboto-regular">
            OUR 360<sup>°</sup> APPROACH TO SKILL DEVELOPMENT
          </h1>
        </motion.div>

        <motion.div className="about-right" variants={fadeInFromRight}>
          <p>
            Gryphon specializes in tailored training solutions across three key
            sectors. Our aim is to bridge the skill gap and create a more
            educated and employable workforce.
          </p>
          <motion.p
            className="underline-effect text-new"
            variants={fadeInFromBottom}
          >
            OUR TRI-SECTOR TRAINING APPROACH
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="feature-card" variants={fadeInFromLeft}>
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h4 className="feature-header-link">COLLEGE TRAININGS</h4>
          </div>
          <p>Bridging the campus-to-career gap.</p>
          <Link to="/collegeTraining" className="more-about-link mt-2">
            LEARN MORE
          </Link>
        </motion.div>

        <motion.div className="feature-card" variants={fadeInFromRight}>
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4 className="feature-header-link">CORPORATE TRAININGS</h4>
          </div>
          <p>Elevating workforce potential, one skill at a time.</p>
          <Link to="/corporateTraining" className="more-about-link mt-2">
            LEARN MORE
          </Link>
        </motion.div>

        <motion.div className="feature-card" variants={fadeInFromLeft}>
          <div className="feature-card-header">
            <div className="feature-card-icon">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h4 className="feature-header-link">
              FACULTY DEVELOPMENT PROGRAMME
            </h4>
          </div>
          <p>Reshaping education for the digital age.</p>
          <Link to="/facultyTraining" className="more-about-link mt-2">
            LEARN MORE
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrainingAbout;
