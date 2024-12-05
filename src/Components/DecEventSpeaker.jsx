import PropTypes from "prop-types";

// Updated speaker data with type differentiation
const speakers = [
  {
    name: "Dr. Tarita Shankar",
    title: "Chairperson & Chief Mentor | Indira Group of Institutes, Pune",
    imgSrc: "Event/clgIndira2.PNG",
    type: "academic",
  },
  {
    name: "Mr. Amit Kolhe",
    title: "Chancellor | Sanjivani Group of Institutes, Kopargaon",
    imgSrc: "Event/clgSanjivani.png",
    type: "academic",
  },
  {
    name: "Dr. Manish Kothari",
    title: "Managing Director | ISBR Business School, Bangalore",
    imgSrc: "Event/clgISBR.png",
    type: "academic",
  },
  {
    name: "Mr. S. N. Rao",
    title: "Lead Early Careers Talent India | Philips",
    imgSrc: " Event/suvarnanidhi-rao.png",
    type: "industry",
  },
  {
    name: "Mr. Tushar Desai",
    title: "Sr. Director - Talent Acquisition, India & Philippines | FIS Global",
    imgSrc: "Event/Mr. Tushar Desai.png",
    type: "industry",
  },
];

// Speaker Component with PropTypes for type-checking
const Speaker = ({ speaker }) => {
  return (
    <div className="flex flex-col items-center p-4">
      {/* Circular Image */}
      <div className="w-60 h-60 mb-4 overflow-hidden rounded-full shadow-md bg-amber-100">
        <img
          className="w-full h-full object-contain"
          src={speaker.imgSrc}
          alt={`Image of ${speaker.name}`}
        />
      </div>

      {/* Speaker Details */}
      <h3 className="text-lg font-semibold text-center">
        <p className="text-white hover:text-yellow-400">{speaker.name}</p>
      </h3>
      <p className="text-sm text-gray-200 text-center">{speaker.title}</p>
    </div>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

const DecEventSpeaker = () => {
  // Split the speakers into academic and industry
  const academicSpeakers = speakers.filter((speaker) => speaker.type === "academic");
  const industrySpeakers = speakers.filter((speaker) => speaker.type === "industry");

  return (
    <section className="font-poppins relative py-8 px-8 md:px-16 bg-gray-100 flex flex-col items-center bg-cover lg:bg-fill bg-[url('/Event/speakerbgmob.jpg')] lg:bg-[url('Event/spark.jpg')] roboto-regular">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      <p className="text-sm font-bold text-center text-yellow-100 mb-4 z-20">
        LISTEN TO THE
      </p>

      {/* Heading for Academic Speakers */}
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8 z-20">
        Academic Speakers
      </h2>

      {/* Academic Speakers list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 z-20">
        {academicSpeakers.map((speaker) => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </div>

      {/* Heading for Industry Speakers */}
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8 z-20">
        Industry Speakers
      </h2>

      {/* Industry Speakers list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-20">
        {industrySpeakers.map((speaker) => (
          <Speaker key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </section>
  );
};

export default DecEventSpeaker;
