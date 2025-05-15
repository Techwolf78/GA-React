import HeroCorporate from '../components/CorporateTraining/HeroCorporate';
import ElevateYourWorkforce from '../components/CorporateTraining/ElevateYourWorkforce'; 
import CorporateChallenge from '../components/CorporateTraining/CorporateChallenge';
import CorporateAppoarch from '../components/CorporateTraining/CorporateAppoarch';
import ContactCorporate from '../components/CorporateTraining/ContactCorporate';
import ConnectWithUs from '../components/CollegeTraining/ConnectWithUs';
// import CorporateTrainers from './CorporateTrainers';

const CorporateTraining = () => {
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
