import React from "react";
import FacultyHero from "./FacultyHero";
import FacultyWhy from "./FacultyWhy";
import FacultyModule from "./FacultyModule";
import ContactForm from "./ContactForm";
import FDPContact from './FDPContact';
import ConnectWithUs from "./ConnectWithUs";


const FacultyTraining = () => {
  return (
    <div>
     <FacultyHero />
     <FacultyWhy />
     <FacultyModule />
     <FDPContact />
     <ContactForm />
     
     <ConnectWithUs />
    </div>
  );
};

export default FacultyTraining;
