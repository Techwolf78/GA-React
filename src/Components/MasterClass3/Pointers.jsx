

function Pointers() {
  const stats = [
    { value: '10,000+', label: 'Students' },
    { value: '200+', label: 'Trainers' },
    { value: '10,000+', label: 'Hours' },
    { value: '4.5/5', label: 'Average Rating' },
  ];

  return (
    <div className="bg-white py-6 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8 relative inline-block">
        Stay Ahead of the Curve
        <span className="block h-1 w-12 bg-[#00A59F] mt-2 rounded-full"></span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md py-3 px-4  border border-[#00A59F] bg-gray-50 "
          >
            <div className="text-3xl font-extrabold text-[#00A59F]">{stat.value}</div>
            <div className="mt-2 text-sm text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pointers;
