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
        {stats.map((stat, index) => {
          const isEven = index % 2 === 0;
          const cardBg = isEven ? 'bg-gray-50' : 'bg-[#00A59F]';
          const valueColor = isEven ? 'text-[#00A59F]' : 'text-white';
          const labelColor = isEven ? 'text-gray-700' : 'text-[#f0faf9]';
          
          return (
            <div key={index} className="relative">
              {/* Background card shadow */}
              <div className="absolute left-[6px] bottom-[-6px] right-[-6px] z-0 bg-[#00BFA6] h-full rounded-md"></div>

              {/* Foreground card */}
              <div
                className={`relative z-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md py-3 px-4 border border-[#00A59F] ${cardBg} rounded-md`}
              >
                <div className={`text-3xl font-extrabold ${valueColor}`}>{stat.value}</div>
                <div className={`mt-2 text-sm ${labelColor}`}>{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pointers;
