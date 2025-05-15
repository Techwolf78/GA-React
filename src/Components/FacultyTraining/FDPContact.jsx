import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaLightbulb } from 'react-icons/fa'; // Unique icon representing ideas
import arrowImage from '/placement-bg/arrow.png'; // Arrow image

const FDPContact = () => {
  const headingText = "Invest in Faculty Development Programs to enhance teaching quality, boost faculty morale, and equip educators with the skills needed for modern challenges.";
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to scroll to top and navigate to the contact page
  const handleScrollToTopAndNavigate = () => {
    // Scroll the page to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });

    // Navigate to the /contact page
    navigate('/contact');
  };

  return (
    <section className="flex flex-col items-center justify-center mx-auto px-8 py-4 bg-[#003073]">
      <style>
        {`
          .bg-brochure {
            background-image: url('./placement-bg/knowMore.webp');
            background-size: cover;
            background-position: center;
          }
        `}
      </style>

      <div className="bg-brochure flex flex-col md:flex-row items-center justify-between h-full w-full rounded-3xl shadow-3xl p-6">
        {/* Icon Section */}
        <div className="flex-none w-full md:w-[20%] flex justify-center mb-4">
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-lg">
            <FaLightbulb className="h-12 w-12 text-[#003073]" /> {/* Unique icon */}
          </div>
        </div>
        
        {/* Paragraph Section */}
        <div className="flex-none w-full md:w-[50%] flex flex-col items-start mb-4 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold text-white text-left">{headingText}</h2>
        </div>
        
        {/* Know More Button */}
        <div className="flex-none w-full md:w-[30%] flex justify-center md:justify-end">
          <button
            onClick={handleScrollToTopAndNavigate} // Scroll to top and navigate
            aria-label="Learn more about faculty development programs"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-yellow-400 whitespace-nowrap"
          >
            Know More 
            <img src={arrowImage} alt="Arrow" className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FDPContact;
