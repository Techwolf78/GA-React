import FacultyHero from "../components/FacultyTraining/FacultyHero";
import FacultyWhy from "../components/FacultyTraining/FacultyWhy";
import FacultyModule from "../components/FacultyTraining/FacultyModule";
import FDPContact from '../components/FacultyTraining/FDPContact';
import ConnectWithUs from "../components/CollegeTraining/ConnectWithUs";
import FacultyHeroPara from "../components/FacultyTraining/FacultyHeroPara";
import FdpCta from "../components/FacultyTraining/FdpCta";


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
