

const guests = [
  {
    name: 'Ananya Mehta',
    title: 'VP of Engineering, TechNova',
    image: 'https://randomuser.me/api/portraits/women/68.jpg', // Dummy image URL
  },
  {
    name: 'Rohit Khanna',
    title: 'Director of Learning, EduSphere',
    image: 'https://randomuser.me/api/portraits/men/32.jpg', // Dummy image URL
  },
  {
    name: 'Meera Iyer',
    title: 'Lead Data Scientist, NexaAI',
    image: 'https://randomuser.me/api/portraits/women/8.jpg', // Dummy image URL
  },
];

const GuestSpeakers = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8 relative inline-block">
        Meet Last Year&apos;s Visionaries
        <span className="block h-1 w-12 bg-[#00A59F] mt-2 rounded-full"></span>
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
              <h3 className="text-lg font-semibold text-[#00A59F]">{guest.name}</h3>
              <p className="text-sm text-[#027093]">{guest.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestSpeakers;
