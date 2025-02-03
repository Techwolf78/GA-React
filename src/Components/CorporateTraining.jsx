import { useEffect } from 'react';
import HeroCorporate from './HeroCorporate';
import ElevateYourWorkforce from './ElevateYourWorkforce'; 
import CorporateChallenge from './CorporateChallenge';
import CorporateAppoarch from './CorporateAppoarch';
import ContactCorporate from './ContactCorporate';
import ConnectWithUs from './ConnectWithUs';
// import CorporateTrainers from './CorporateTrainers';

const CorporateTraining = () => {
  useEffect(() => {
    const loadComponents = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    };

    loadComponents();
  }, []);

  return (
    <div>
      <HeroCorporate />
      <ElevateYourWorkforce />
      <CorporateChallenge />
      <CorporateAppoarch />
      {/* <CorporateTrainers /> */}
      <ContactCorporate />
      <div style={{ margin: '20px 0' }}> {/* Add margin above and below */}
        <ConnectWithUs />
      </div>
    </div>
  );
};

export default CorporateTraining;
