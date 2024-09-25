import React from 'react';
import HeroCorporate from './HeroCorporate';
import CorporateChallenge from './CorporateChallenge';
import CorporateAppoarch from './CorporateAppoarch';
import GetInTouch from './GetInTouch'; // Import the new component

const CorporateTraining = () => {
  return (
    <div>
      <HeroCorporate />
      <CorporateChallenge />
      <CorporateAppoarch />
      <GetInTouch /> {/* Call the GetInTouch component */}
    </div>
  );
};

export default CorporateTraining;
