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
// import AboutAwards from "./AboutAwards";
import ConnectWithUs from "./ConnectWithUs";
import AboutNew from "./AboutNew";

const About = () => {
  return (
    <div className="roboto-regular">
      <AboutHero />
      <AboutNew />
      {/* <MissionVisionSection /> */}
      <AboutLeaders />
      {/* <AboutAwards /> */}
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
