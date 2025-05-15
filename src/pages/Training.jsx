import HeroTraining from "../components/Training/HeroTraining";
import TrainingAbout from "../components/Training/TrainingAbout"; 
import WhyTraining from "../components/Training/WhyTraining";
import LearningOutcomes from "../components/Training/LearningOutcomes";
import SlidingCollege from "../components/CollegeTraining/SlidingCollege";
import ContactForm from "../components/Training/ContactForm";
import ConnectWithUs from "../components/CollegeTraining/ConnectWithUs";
import BrochureSection from "../components/Training/BrochureSection";

const LearningAndDevelopment = () => {
  return (
    <div>
      <HeroTraining />
      <TrainingAbout />
      <WhyTraining />
      <LearningOutcomes />
      <SlidingCollege />
      <BrochureSection />
      <ContactForm />
      <ConnectWithUs />
    </div>
  );
};

export default LearningAndDevelopment;
