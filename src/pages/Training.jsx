import HeroTraining from "../Components/Training/HeroTraining";
import TrainingAbout from "../Components/Training/TrainingAbout"; 
import WhyTraining from "../Components/Training/WhyTraining";
import LearningOutcomes from "../Components/Training/LearningOutcomes";
import SlidingCollege from "../Components/CollegeTraining/SlidingCollege";
import ContactForm from "../Components/Training/ContactForm";
import ConnectWithUs from "../Components/CollegeTraining/ConnectWithUs";
import BrochureSection from "../Components/Training/BrochureSection";

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
