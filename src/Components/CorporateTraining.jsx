import React from 'react';
import HeroCorporate from './HeroCorporate';
import ElevateYourWorkforce from './ElevateYourWorkforce'; // Adjust the path as needed
import CorporateChallenge from './CorporateChallenge';
import CorporateAppoarch from './CorporateAppoarch';
import ContactForm from './ContactForm';
import ConnectWithUs from './ConnectWithUs';

const CorporateTraining = () => {
  return (
    <div>
      <HeroCorporate />
      {/* New Section */}
      <ElevateYourWorkforce />
      <CorporateChallenge />
      <CorporateAppoarch />
      <ContactForm />
      <ConnectWithUs />
    </div>
  );
};

export default CorporateTraining;
