import { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

// College Owners List
const collegeOwners = [
  {
    name: "Dr. Tarita Shankar",
    title: "President Designate - India University & Chairperson and Chief Mentor - Indira Group of Institutes, Pune",
    image: "/MasterClass/tarita-mam.avif",
  },
  {
    name: "Mr. Chetan Wakalkar",
    title: "Academic Advisor - IGI",
    image: "/MasterClass/chetan-sir.avif",
  },
  {
    name: "Mr. Amit Kolhe",
    title: "Managing Trustee - Sanjivani University",
    image: "/MasterClass/amit-sir.avif",
  },
  {
    name: "Dr. Manish Kothari",
    title: "Managing Director - ISBR Business School",
    image: "/MasterClass/manish-sir.avif",
  },
];

// Master Trainers
const masterTrainers = [
  {
    name: "Ms. Ummi Ansari",
    title: "Cofounder - Gryphon Academy",
    image: "/MasterClass/ummi-ansari-mam.avif",
  },
  {
    name: "Mr. K S Sagwan",
    title: "Chair Professor - BITS Pilani",
    image: "/MasterClass/sangwan.jpeg",
  },
  {
    name: "Brigadier Sushil Bhasin",
    title: "Founder and CEO - SB Consulting",
    image: "/MasterClass/Brigadier-Sushil-Bhasin.jpg",
  },
  {
    name: "Mr. Sandip Paul",
    title: "Chief Industrial Designer Founder - Paul Studios",
    image: "/MasterClass/sandip-sir.jpeg",
  },
];

// Guest Speakers
const guestSpeakers = [
  {
    name: "Mr. Vimal Sumbly",
    title: "Business Head Premium & Head Premium Marketing - TVS Motor Company",
    image: "/MasterClass/Vimal-Sumbly.avif",
  },
  {
    name: "Mr. Sushant Kumar",
    title: "Talent Acquisition Manager - Brillio",
    image: "/MasterClass/sushant.jpeg",
  },
  {
    name: "Dr. Santosh Bhave",
    title: "Director - HR & IR - Bharat Forge Ltd.",
    image: "/MasterClass/santosh.jpeg",
  },
  {
    name: "Cdr. Pratap Pawar",
    title: "Director HR & IT",
    image: "/MasterClass/pratapsir.jpeg",
  },
  {
    name: "Mr. Dilip K Choudhary",
    title: "Senior Talent Recruitment Leader - Technology, India - GE Healthcare",
    image: "/MasterClass/dilip.jpeg",
  },
  {
    name: "Mr. Sahil Nayar",
    title: "Senior Associate Director - KPMG",
    image: "/MasterClass/sahil.webp",
  },
  {
    name: "Mr. Ravinder Bhan",
    title: "Business Strategy Leader & Expert Trainer",
    image: "/MasterClass/ravinder.jpeg",
  },
  {
    name: "Mr. Rahul Bagale",
    title: "Vice President Human Resources - Ultra Corpotech Pvt. Ltd.",
    image: "/MasterClass/rahul.jpeg",
  },
  {
    name: "Mr. Urvish Pandey",
    title: "India Head - University Recruitment & Early Talent Engagement, Mastercard",
    image: "/MasterClass/urvish.avif",
  },
  {
    name: "Mr. Upendra Chaturvedi",
    title: "VP & Country HR Head - Saatvik Green Energy Ltd.",
    image: "/MasterClass/upendra.jpeg",
  },
];

// Reusable Section Component
const Section = ({
  title,
  people,
  imageFull = false,
  horizontal = false,
  gridCols = 4,
  noGap = false,
}) => (
  <div className="mb-16" data-aos="fade-up" data-aos-offset="50">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-[#00A59F] inline-block pb-1">
      {title}
    </h3>
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} ${noGap ? "" : "gap-8"}`}>
      {people.map((guest, index) => (
        <div
          key={index}
          className={`bg-gray-50 ${noGap ? "" : "p-4"} shadow hover:shadow-md transition duration-300 ${
            horizontal ? "flex items-center gap-4" : "flex flex-col items-center text-center"
          }`}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          data-aos-offset="50"
        >
          <img
            src={guest.image}
            alt={guest.name}
            className={`${
              imageFull ? "w-full h-80 object-cover" : horizontal ? "w-24 h-24" : "w-24 h-24"
            } ${imageFull ? "rounded-none" : "rounded-full"} ${horizontal ? "" : "mb-1"}`}
          />
          <div className={`${horizontal ? "text-left" : "text-center"} p-2`}>
            <h4 className="text-lg font-semibold text-[#00A59F]">{guest.name}</h4>
            <p className="text-sm text-[#027093]">{guest.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  imageFull: PropTypes.bool,
  horizontal: PropTypes.bool,
  gridCols: PropTypes.number,
  noGap: PropTypes.bool,
};

// GuestSpeakers Component
const GuestSpeakers = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-white py-6 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 text-center" data-aos="fade-up">
        Meet the Leaders Behind the Vision
      </h2>

      <Section title="Academic Leaders" people={collegeOwners} imageFull gridCols={4} noGap />
      <Section title="Master Trainers" people={masterTrainers} horizontal gridCols={4} />
      <Section title="Guest Speakers" people={guestSpeakers} horizontal gridCols={3} />
    </section>
  );
};

export default GuestSpeakers;
