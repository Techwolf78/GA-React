import React from "react";
import HeroTraining from "./HeroTraining"; // Adjust the path according to where your HeroTraining component is located
import TrainingAbout from "./TrainingAbout"; // Adjust the path according to where your TrainingAbout component is located
import WhyTraining from "./WhyTraining";
import LearningOutcomes from "./LearningOutcomes";
import AcrossIndia from "./AcrossIndia";
import SlidingCollege from "./SlidingCollege";

const LearningAndDevelopment = () => {
  return (
    <div>
      <HeroTraining />
      <TrainingAbout />
      <div className="bg-dark-blue py-8 px-4 sm:px-6 lg:px-8">
  <WhyTraining />
</div>

      <LearningOutcomes />
      <AcrossIndia />
      <SlidingCollege />

      {/* You can add other content here if needed */}
    </div>
  );
};

export default LearningAndDevelopment;
