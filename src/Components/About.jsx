// About.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import ImpactSection from "./ImpactSection";
import HomeAbout from "./HomeAbout";
import Testimonials from "./Testimonials"; // Import the Testimonials component
import JourneySection from "./JourneySection";
import Revolution from "./Revolution";
import MissionVisionSection from "./MissionVisionSection";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutStats />
      <HomeAbout />
      <MissionVisionSection />
      {/* Our Impact Section */}
      <ImpactSection />
      <Revolution />
      <JourneySection />
      <Testimonials />
    </div>
  );
};

export default About;
