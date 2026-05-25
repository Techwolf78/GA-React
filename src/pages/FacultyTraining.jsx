import FacultyHero from "../Components/FacultyTraining/FacultyHero";
import FacultyWhy from "../Components/FacultyTraining/FacultyWhy";
import FacultyModule from "../Components/FacultyTraining/FacultyModule";
import FDPContact from '../Components/FacultyTraining/FDPContact';
import ConnectWithUs from "../Components/CollegeTraining/ConnectWithUs";
import FacultyHeroPara from "../Components/FacultyTraining/FacultyHeroPara";
import FdpCta from "../Components/FacultyTraining/FdpCta";


const FacultyTraining = () => {
  return (
    <div>
     <FacultyHero />
     <FacultyHeroPara />
     <FacultyWhy />
     <FacultyModule />
     <FDPContact />
     <FdpCta />
     <ConnectWithUs />
    </div>
  );
};

export default FacultyTraining;
