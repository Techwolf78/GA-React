import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function DecEventInfo() {
  return (
    <div className="bg-gray-900 p-6 ">
      {/* Main Container with Golden Background */}
      <div className="flex flex-col items-center space-y-8">
        
        {/* Capsules Section */}
        <div className="flex gap-36 justify-center items-center my-4">
          {/* Capsule 1: WHERE IS THE EVENT */}
          <div className="flex items-center gap-4 p-6 rounded-xl shadow-xl w-auto bg-slate-100 hover:shadow-2xl hover:scale-105 transition-all transform duration-500 ease-out bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700">
            {/* Yellow box for the icon with glowing effect */}
            <div className="bg-[#223645] p-4 rounded-2xl flex items-center justify-center glow-effect">
              <FaMapMarkerAlt size={28} className="text-[#ffffff] glow-icon" />
            </div>
            
            {/* Text Section with Golden Gradient */}
            <div className="flex flex-col text-left w-full text-white">
              <div
                className="font-bold text-5xl whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  background: 'linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ritz Carlton
              </div>
            </div>
          </div>

          {/* Capsule 2: WHEN IS THE EVENT */}
          <div className="flex items-center gap-4 p-6 rounded-xl shadow-xl w-auto bg-slate-100 hover:shadow-2xl hover:scale-105 transition-all transform duration-500 ease-out bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700">
            {/* Yellow box for the icon with glowing effect */}
            <div className="bg-[#223645] p-4 rounded-2xl flex items-center justify-center glow-effect">
              <FaCalendarAlt size={28} className="text-white glow-icon" />
            </div>
            
            {/* Text Section */}
            <div className="flex flex-col text-left w-full text-white">
              <div
                className="font-bold text-5xl whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  background: 'linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)',
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
        <div className="text-center py-4">
  <p className="text-[#ffffff] font-bold text-3xl mb-4">KEY FACTS</p>
  <div className="flex justify-center items-center space-x-[-30px]">
    <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full text-2xl font-semibold border-4 border-white p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out">
      <div className="text-center text-black glow-text">Over 1 million users</div>
    </div>
    <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full text-2xl font-semibold border-4 border-white p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out">
      <div className="text-center text-black glow-text">24/7 customer support</div>
    </div>
    <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full text-2xl font-semibold border-4 border-white p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out">
      <div className="text-center text-black glow-text">Free delivery worldwide</div>
    </div>
    <div className="w-60 h-60 bg-[#FFC80E] flex justify-center items-center rounded-full text-2xl font-semibold border-4 border-white p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out">
      <div className="text-center text-black glow-text">Eco-friendly materials</div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default DecEventInfo;
