import PropTypes from "prop-types";
import chetanWakalkar from "../../../public/MasterClass/chetan-sir.jpg";
import amitKolhe from "../../../public/MasterClass/amit-sir.jpg";
import pratapPawar from "../../../public/MasterClass/pratapsir.jpeg";
import manishKothari from "../../../public/MasterClass/manish-sir.jpg";
import vimalSumbly from "../../../public/MasterClass/Vimal-Sumbly.jpg";
import dilipChoudhary from "../../../public/MasterClass/dilip.jpeg";
import sahilNayar from "../../../public/MasterClass/sahil.webp";
import sushantKumar from "../../../public/MasterClass/sushant.jpeg";
import santoshBhave from "../../../public/MasterClass/santosh.jpeg";
import taritaShankar from "../../../public/MasterClass/tarita-mam.jpg";
import ummiAnsari from "../../../public/MasterClass/ummi-ansari-mam.jpg";
import sangwan from "../../../public/MasterClass/sangwan.jpeg";
import sushilBhasin from "../../../public/MasterClass/Brigadier-Sushil-Bhasin.jpg";
import sandeep from "../../../public/MasterClass/sandip-sir.jpeg";
import ravinder from "../../../public/MasterClass/ravinder.jpeg";
import rahul from "../../../public/MasterClass/rahul.jpeg";
import urvish from "../../../public/MasterClass/urvish.jpeg";
import upendra from "../../../public/MasterClass/upendra.jpeg";

// College Owners List
const collegeOwners = [
  {
    name: "Dr. Tarita Shankar",
    title: "Chairperson & Chief Mentor, Indira Group of Institutes, Pune",
    image: taritaShankar,
  },
  {
    name: "Mr. Chetan Wakalkar",
    title: "Academic Advisor - IGI",
    image: chetanWakalkar,
  },
  {
    name: "Mr. Amit Kolhe",
    title: "Managing Trustee - Sanjivani University",
    image: amitKolhe,
  },
  {
    name: "Dr. Manish Kothari",
    title: "Managing Director - ISBR Business School",
    image: manishKothari,
  },
];

// ✅ Updated Master Trainers List (only 4)
const masterTrainers = [
  {
    name: "Mrs. Ummi Ansari",
    title: "Cofounder - Gryphon Academy",
    image: ummiAnsari,
  },
  {
    name: "Mr. K S Sagwan",
    title: "Chair Professor - BITS Pilani",
    image: sangwan, // Add image path if available
  },
  {
    name: "Brigadier Sushil Bhasin",
    title: "Founder and CEO - SB Consulting",
    image: sushilBhasin, // Add image path if available
  },
  {
    name: "Mr. Sandip Paul",
    title: "Chief Industrial Designer Founder - Paul Studios",
    image: sandeep, // Add image path if available
  },
];

// ✅ All others moved to Guest Speakers
const guestSpeakers = [
  {
    name: "Mr. Vimal Sumbly",
    title: "Business Head Premium & Head Premium Marketing - TVS Motor Company",
    image: vimalSumbly,
  },
  {
    name: "Mr. Sushant Kumar",
    title: "Talent Acquisition Manager - Brillio",
    image: sushantKumar,
  },
  {
    name: "Dr. Santosh Bhave",
    title: "Director - HR & IR - Bharat Forge Ltd.",
    image: santoshBhave,
  },
  {
    name: "Cdr. Pratap Pawar",
    title: "Director HR & IT",
    image: pratapPawar,
  },
  {
    name: "Mr. Dilip K Choudhary",
    title:
      "Senior Talent Recruitment Leader - Technology, India - GE Healthcare",
    image: dilipChoudhary,
  },
  {
    name: "Mr. Sahil Nayar",
    title: "Senior Associate Director - KPMG",
    image: sahilNayar,
  },
  {
    name: "Mr. Ravinder Bhan",
    title: "Business Strategy Leader & Expert Trainer",
    image: ravinder,
  },
  {
    name: "Mr. Rahul Bagale",
    title: "Vice President Human Resources - Ultra Corpotech Pvt. Ltd.",
    image: rahul,
  },
  {
    name: "Mr. Urvish Pandey",
    title:
      "Mr. Urvish Pandey India Head-University Recruitment & Early Talent Engagement, Mastercard",
    image: urvish,
  },
  {
    name: "Mr. Upendra Chaturvedi",
    title: "VP & Country HR Head - Saatvik Green Energy Ltd.",
    image: upendra,
  },
];

// Section Component
const Section = ({
  title,
  people,
  imageFull = false,
  horizontal = false,
  gridCols = 4,
  noGap = false,
}) => (
  <div className="mb-16">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[#00A59F] inline-block pb-1">
      {title}
    </h3>
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} ${
        noGap ? "" : "gap-8"
      }`}
    >
      {people.map((guest, index) => (
        <div
          key={index}
          className={`bg-gray-50 ${
            noGap ? "" : "p-4"
          } shadow hover:shadow-md transition duration-300  ${
            horizontal
              ? "flex items-center gap-4"
              : "flex flex-col items-center text-center"
          }`}
        >
          <img
            src={guest.image}
            alt={guest.name}
            className={`${
              imageFull
                ? "w-full h-80 object-cover"
                : horizontal
                ? "w-24 h-24"
                : "w-24 h-24"
            } ${imageFull ? "rounded-none" : "rounded-full"} ${
              horizontal ? "" : "mb-1"
            }`}
          />
          <div className={`${horizontal ? "text-left" : "text-center"} p-2`}>
            <h4 className="text-lg font-semibold text-[#00A59F]">
              {guest.name}
            </h4>
            <p className="text-sm text-[#027093]">{guest.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// PropTypes Validation
Section.propTypes = {
  title: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  imageFull: PropTypes.bool,
  horizontal: PropTypes.bool,
  gridCols: PropTypes.number,
  noGap: PropTypes.bool,
};

// Main GuestSpeakers Component
const GuestSpeakers = () => {
  return (
    <section className="bg-white py-6 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6 text-center">
        Meet the Leaders Behind the Vision
      </h2>

      <Section
        title="College Owners"
        people={collegeOwners}
        imageFull
        gridCols={4}
        noGap
      />
      <Section
        title="Master Trainers"
        people={masterTrainers}
        horizontal
        gridCols={4}
      />
      <Section
        title="Guest Speakers"
        people={guestSpeakers}
        horizontal
        gridCols={4}
      />
    </section>
  );
};

export default GuestSpeakers;
