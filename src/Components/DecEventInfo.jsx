import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function DecEventInfo() {
  return (
    <div className="relative bg-cover bg-center bg-[url('Event/spark.jpg')] p-8">
      {/* Overlay over the background image */}
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      {/* Main Container with Golden Background */}
      <div className="relative flex flex-col items-center space-y-10 z-30"> {/* Ensure the content appears on top */}
        
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
          <div className="flex items-center gap-4 p-6 rounded-2xl shadow-xl transition-transform duration-500 ease-out bg-black hover:scale-105 hover:shadow-2xl" >
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
          <p className="text-[#FFC80E] font-bold text-4xl mb-8">KEY FACTS</p>
          
          {/* Modern Circular Layout for Key Facts */}
          <div className="flex justify-center items-center space-x-8">
            {/* Circle 1 */}
            <div
              className="w-60 h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]"
              style={{ backgroundImage: 'url(Event/s1.jpg)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-xl p-4 relative z-10">
              The Grandest HR Summit 
              </div>
            </div>

            {/* Circle 2 */}
            <div
              className="w-60 h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]"
              style={{ backgroundImage: 'url(Event/s1.jpg)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-xl p-4 relative z-10">
              3 prestigious academic giants Spanning India's educational landscape
              </div>
            </div>

            {/* Circle 3 */}
            <div
              className="w-60 h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]"
              style={{ backgroundImage: 'url(Event/s1.jpg)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-xl p-4 relative z-10">
              100+ Corporate Brands  
              </div>
            </div>

            {/* Circle 4 */}
            <div
              className="w-60 h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]"
              style={{ backgroundImage: 'url(Event/s1.jpg)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-xl p-4 relative z-10">
              50+ HR Awards  
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DecEventInfo;
