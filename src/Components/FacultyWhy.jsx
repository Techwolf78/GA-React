import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Import PropTypes for validation

// FeatureCard component for better reusability
const FeatureCard = ({ feature, index }) => (
  <motion.div
    className="relative bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
  >
    <div className="absolute top-0 left-0 w-1 bg-[#ffc700] h-16 rounded-r-xl"></div>
    <h2 className="text-xl sm:text-2xl font-semibold text-[#091327] mb-4 relative group">
      {feature.title}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ffc700] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-[#091327] leading-relaxed flex-grow">
      {feature.description}
    </p>
  </motion.div>
);

// Add PropTypes for validation
FeatureCard.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function FacultyWhy() {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const updateVisibleFeatures = () => {
      const width = window.innerWidth;
      const featureCount = width >= 1024 ? 9 : width >= 768 ? 10 : 6;
      setVisibleFeatures(keyFeatures.slice(0, featureCount));
    };

    updateVisibleFeatures();
    
    const handleResize = debounce(updateVisibleFeatures, 200);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 mx-auto bg-[#091327] py-8 shadow-2xl roboto-regular">
      <h1 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#ffc700] text-center mb-8">
        Why Choose Gryphon Academy&apos;s FDP?
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {visibleFeatures.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
}

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Updated data for the key features
const keyFeatures = [
  {
    title: 'New Learning Methods',
    description: 'Incorporate blended learning techniques that combine online and in-person instruction for enhanced engagement.',
  },
  {
    title: 'Industry Insights',
    description: 'Facilitate workshops with industry leaders to provide faculty with current trends and practices relevant to their fields.',
  },
  {
    title: 'Innovative Teaching Techniques',
    description: 'Train educators in active learning strategies, such as flipped classrooms and project-based learning, to enhance student participation.',
  },
  {
    title: 'Industry-Aligned Curriculum Development',
    description: 'Collaborate with industry experts to design curricula that reflect the latest skills and competencies required in the job market.',
  },
  {
    title: 'Teaching-Learning Methodologies',
    description: 'Introduce evidence-based teaching methods that improve student retention and understanding of complex concepts.',
  },
  {
    title: 'Interdisciplinary Approach',
    description: 'Promote collaboration between departments to create interdisciplinary programs that prepare students for diverse career paths.',
  },
  {
    title: 'Pedagogy Inculcation',
    description: 'Implement best practices from leading institutions like IIMs and IITs to enrich teaching methodologies and enhance educational outcomes.',
  },
  {
    title: 'Continuous Professional Development',
    description: 'Offer ongoing training sessions to keep faculty updated on emerging educational technologies and pedagogical strategies.',
  },
  {
    title: 'Peer Learning Opportunities',
    description: 'Establish mentorship programs where experienced faculty can guide newer educators in effective teaching practices.',
  },
  {
    title: 'Feedback Mechanisms',
    description: 'Create structured feedback systems that allow faculty to assess their teaching effectiveness and make necessary adjustments based on student performance.',
  },
];

export default FacultyWhy;
