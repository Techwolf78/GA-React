import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function DecEventInfo() {
  return (
    <div className="bg-gray-900 p-8">
      {/* Main Container with Golden Background */}
      <div className="flex flex-col items-center space-y-10">
        
        {/* Capsules Section */}
        <div className="flex gap-10 justify-center items-center my-6">
          {/* Capsule 1: WHERE IS THE EVENT */}
          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-xl transition-transform duration-500 ease-out bg-black hover:scale-105 hover:shadow-2xl">
            {/* Yellow box for the icon with glowing effect */}
            <div className="bg-[#223645] p-4 rounded-xl flex items-center justify-center glow-effect">
              <FaMapMarkerAlt size={30} className="text-white glow-icon" />
            </div>
            
            {/* Text Section with Golden Gradient */}
            <div className="flex flex-col text-left w-full text-white">
              <div
                className="font-bold text-3xl whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  background: 'linear-gradient(to bottom, #c8a85b 25%, #f1d35f 50%, #755107 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ritz Carlton
              </div>
            </div>
          </div>

          {/* Capsule 2: WHEN IS THE EVENT */}
          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-xl transition-transform duration-500 ease-out bg-black hover:scale-105 hover:shadow-2xl">
            {/* Yellow box for the icon with glowing effect */}
            <div className="bg-[#223645] p-4 rounded-xl flex items-center justify-center glow-effect">
              <FaCalendarAlt size={30} className="text-white glow-icon" />
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col text-left w-full text-white">
              <div
                className="font-bold text-3xl whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  background: 'linear-gradient(to bottom, #c8a85b 25%, #f1d35f 50%, #755107 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                16th December
              </div>
            </div>
          </div>
        </div>

        {/* Key Facts Section */}
        <div className="text-center py-6">
          <p className="text-white font-bold text-4xl mb-8">KEY FACTS</p>
          
          {/* Modern Circular Layout for Key Facts */}
          <div className="flex justify-center items-center space-x-8">
            {/* Circle 1 */}
            <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
              <div className="text-center text-black font-semibold text-xl p-4">
                Lorem ipsum dolor sit
              </div>
            </div>

            {/* Circle 2 */}
            <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
              <div className="text-center text-black font-semibold text-xl p-4">
                Lorem vitae leo
              </div>
            </div>

            {/* Circle 3 */}
            <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
              <div className="text-center text-black font-semibold text-xl p-4">
                Lorem plagd cera elit leo
              </div>
            </div>

            {/* Circle 4 */}
            <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out">
              <div className="text-center text-black font-semibold text-xl p-4">
                Lorem eget dui tincidunt
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DecEventInfo;
