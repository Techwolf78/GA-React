// About.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";

import ImpactSection from "./ImpactSection";
import HomeAbout from "./AboutIntro";
import Testimonials from "./Testimonials"; // Import the Testimonials component
import JourneySection from "./JourneySection";
import MissionVisionSection from "./MissionVisionSection";
import AboutIntro from "./AboutIntro";
import AboutHero from "./AboutHero";
import AboutOffer from "./AboutOffer";
import AboutGallery from "./AboutGallery";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <MissionVisionSection />
      {/* Our Impact Section */}
      <ImpactSection />
      <AboutOffer />
      <AboutGallery />
      <JourneySection />
      <Testimonials />
    </div>
  );
};


export default About;
