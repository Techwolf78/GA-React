import chetanWakalkar from "../../../public/MasterClass/chetan-sir.jpg";
import amitKolhe from "../../../public/MasterClass/amitsir.jpg";
import pratapPawar from "../../../public/MasterClass/pratapsir.jpeg";
import manishKothari from "../../../public/MasterClass/manish.jpeg";
import vimalSumbly from "../../../public/MasterClass/Vimal-Sumbly.jpg";
import dilipChoudhary from "../../../public/MasterClass/dilip.jpeg";
import sahilNayar from "../../../public/MasterClass/sahil.webp";
import sushantKumar from "../../../public/MasterClass/sushant.jpeg";
import santoshBhave from "../../../public/MasterClass/santosh.jpeg";


const guests = [
  {
    name: "Mr. Chetan Wakalkar",
    title: "Academic Advisor",
    image: chetanWakalkar,
  },
  {
    name: "Mr. Amit Kolhe",
    title: "Managing Trustee",
    image: amitKolhe,
  },
  {
    name: "Cdr. Pratap Pawar",
    title: "Director HR & IT",
    image: pratapPawar,
  },
  {
    name: "Dr. Manish Kothari",
    title: "Managing Director",
    image: manishKothari,
  },
  {
    name: "Mr. Vimal Sumbly",
    title: "Business Head Premium",
    image: vimalSumbly,
  },
  {
    name: "Mr. Dilip K Choudhary",
    title: "Talent Acquisition Leader",
    image: dilipChoudhary,
  },
  {
    name: "Mr. Sahil Nayar",
    title: "Senior Associate Director",
    image: sahilNayar,
  },
  {
    name: "Mr. Sushant Kumar",
    title: "Talent Acquisition Manager",
    image: sushantKumar,
  },
  {
    name: "Dr. Santosh Bhave",
    title: "Director - HR & IR",
    image: santoshBhave,
  },
];



const GuestSpeakers = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 relative inline-block leading-snug">
        <span className="relative inline-block">
          Meet
          <span className="absolute left-0 bottom-[-4px]  h-1 w-12 bg-[#00A59F] rounded-full"></span>
        </span>{" "}
        Last Year&#39;s Visionaries
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {guests.map((guest, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 p-6  shadow hover:shadow-md transition duration-300"
          >
            {/* Profile Image */}
            <img
              src={guest.image}
              alt={guest.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-[#00BFA6] mr-6"
            />
            {/* Text Info (Name and Title) */}
            <div>
              <h3 className="text-lg font-semibold text-[#00A59F]">
                {guest.name}
              </h3>
              <p className="text-sm text-[#027093]">{guest.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestSpeakers;
