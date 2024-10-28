// About.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";

import ImpactSection from "./ImpactSection";
import AboutGal from "./AboutGal";
import Testimonials from "./Testimonials"; // Import the Testimonials component
// import JourneySection from "./JourneySection";
import MissionVisionSection from "./MissionVisionSection";
import AboutIntro from "./AboutIntro";
import AboutHero from "./AboutHero";
import AboutOffer from "./AboutOffer";
import AboutLeaders from "./AboutLeaders";
import AboutAwards from "./AboutAwards";
import ConnectWithUs from "./ConnectWithUs";

const About = () => {
  return (
    <div>
      <AboutHero />
      <MissionVisionSection />
      <AboutLeaders />
      <AboutAwards />
      <AboutIntro />
    
      {/* Our Impact Section */}
      <ImpactSection />
      <AboutOffer />

      <AboutGal />
      {/* <JourneySection /> */}
      <Testimonials />
      <ConnectWithUs />
    </div>
  );
};


export default About;
