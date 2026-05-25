import HeroCorporate from '../Components/CorporateTraining/HeroCorporate';
import ElevateYourWorkforce from '../Components/CorporateTraining/ElevateYourWorkforce'; 
import CorporateChallenge from '../Components/CorporateTraining/CorporateChallenge';
import CorporateAppoarch from '../Components/CorporateTraining/CorporateAppoarch';
import ContactCorporate from '../Components/CorporateTraining/ContactCorporate';
import ConnectWithUs from '../Components/CollegeTraining/ConnectWithUs';
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
