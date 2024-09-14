import React from 'react';

const SuccessfulDrives = () => {
  return (
    <div className="relative p-5 bg-cover bg-center" style={{ backgroundImage: "url('/drive.avif')" }}>
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold mb-8 text-center underline text-cyan-400 ">OUR SUCCESSFUL DRIVES</h1>

        <div className="flex justify-between">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 pr-5">
            <h1 className="text-2xl font-bold text-white mb-4 text-center">Company Drives</h1>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">Force Motors</h3>
              <p className="text-gray-200">Force Motors had an impressive drive this year, showcasing their latest models with advanced features.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">Reliance</h3>
              <p className="text-gray-200">Reliance Industries demonstrated their new initiatives in sustainable energy and technology advancements.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">TopCorp</h3>
              <p className="text-gray-200">TopCorp's drive was focused on innovation in tech solutions, presenting their new products and services.</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 pl-5">
            <h1 className="text-2xl font-bold text-white mb-4 text-center">Creative Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg shadow-lg">
                  <img
                    src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
                    alt={`Placeholder ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulDrives;
