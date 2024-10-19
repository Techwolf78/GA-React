import React from "react";
import FacultyHero from "./FacultyHero";
import FacultyWhy from "./FacultyWhy";
import FacultyModule from "./FacultyModule";
import ContactForm from "./ContactForm";
import FDPContact from './FDPContact';
import ConnectWithUs from "./ConnectWithUs";
import FacultyHeroPara from "./FacultyHeroPara";


const FacultyTraining = () => {
  return (
    <div>
     <FacultyHero />
     <FacultyHeroPara />
     <FacultyWhy />
     <FacultyModule />
     <FDPContact />
     <ContactForm />
     
     <ConnectWithUs />
    </div>
  );
};

export default FacultyTraining;
