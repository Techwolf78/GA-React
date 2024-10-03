import React from "react";
import HeroTraining from "./HeroTraining"; // Adjust the path according to where your HeroTraining component is located
import TrainingAbout from "./TrainingAbout"; // Adjust the path according to where your TrainingAbout component is located
import WhyTraining from "./WhyTraining";
import LearningOutcomes from "./LearningOutcomes";
import AcrossIndia from "./AcrossIndia";
import SlidingCollege from "./SlidingCollege";
import ContactForm from "./ContactForm";
import ConnectWithUs from "./ConnectWithUs";


const LearningAndDevelopment = () => {
  return (
    <div>
      <HeroTraining />
      <TrainingAbout />
      <WhyTraining />
      <LearningOutcomes />
    
      <SlidingCollege />
      <ContactForm />
      <ConnectWithUs />

      {/* You can add other content here if needed */}
    </div>
  );
};

export default LearningAndDevelopment;
