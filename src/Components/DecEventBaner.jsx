import PropTypes from 'prop-types';
import CountUp from "react-countup";

// Reusable StatsCard Component
const StatsCard = ({ count, label }) => (
  <div className="flex flex-col items-center md:w-1/3 mb-8 md:mb-0 z-30"> {/* Added z-30 to ensure it's above the overlay */}
    <div className="text-center">
      <div className="flex items-center justify-center mt-4 font-poppins">
        <span className="text-4xl md:text-6xl font-bold text-white">
          <CountUp start={0} end={count} duration={2} separator="," />
        </span>
        {count !== 0 && <span className="text-4xl md:text-6xl font-bold text-white">+</span>}
      </div>
      <div className="text-xl md:text-2xl font-semibold text-white font-poppins">{label}</div>
    </div>
  </div>
);

// Prop types validation
StatsCard.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

const DecEventBanner = () => {
  const statsData = [
    { count: 500, label: "TA Professionals and Leaders" },
    { count: 20, label: "Speakers" },
    { count: 10, label: "Sessions" },
  ];

  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-8 md:py-16 bg-black roboto-regular relative" // Added relative to section
      style={{ backgroundImage: 'url("Event/top-banner4.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* PNG image placed above the background */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          backgroundImage: 'url("Event/clrstrip.png")',
          backgroundSize: 'cover', // Adjust based on your image size
          backgroundRepeat: 'no-repeat',
          height: '400px', // Adjust the height as needed
          width: 'full',
        }}
      ></div>

      {/* Black overlay above the background image */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Stats content above the overlay */}
      {statsData.map((stat, index) => (
        <StatsCard 
          key={index} 
          count={stat.count} 
          label={stat.label} 
        />
      ))}
    </section>
  );
};

export default DecEventBanner;
