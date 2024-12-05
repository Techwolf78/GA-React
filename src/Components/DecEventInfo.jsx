

function DecEventInfo() {
  return (
    <div className=" font-poppins relative bg-cover bg-center bg-[url('https://res.cloudinary.com/dcjmaapvi/image/upload/v1732619381/spark_fhrbre.avif')] py-4 md:py-6 px-8 md:px-16" type="image/avif">
      {/* Overlay over the background image */}
      <div className="absolute inset-0 bg-black opacity-70 z-20"></div>

      {/* Main Container with Golden Background */}
      <div className="relative flex flex-col items-center space-y-6 sm:space-y-10 z-30">

        {/* Key Facts Section */}
        <div className="text-center ">
          <p className="text-[#FFC80E] font-bold text-3xl sm:text-4xl mb-6 sm:mb-8">Key Facts</p>
          
          {/* Modern Circular Layout for Key Facts */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
            {/* Circle 1 */}
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]" type="image/avif"
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dcjmaapvi/image/upload/v1732619203/s1_ljdhyy.avif)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-lg sm:text-xl p-4 relative z-10">
                The Grandest HR Summit 
              </div>
            </div>

            {/* Circle 2 */}
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]" type="image/avif"
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dcjmaapvi/image/upload/v1732619203/s1_ljdhyy.avif)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-lg sm:text-xl p-4 relative z-10">
                Three Academic Partners, One HR Summit
              </div>
            </div>

            {/* Circle 3 */}
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]" type="image/avif"
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dcjmaapvi/image/upload/v1732619203/s1_ljdhyy.avif)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-lg sm:text-xl p-4 relative z-10">
                100+ Corporate Brands  
              </div>
            </div>

            {/* Circle 4 */}
            <div
              className="w-48 h-48 sm:w-60 sm:h-60 bg-cover bg-center flex justify-center items-center rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out relative border-4 border-[#FFC80E]" type="image/avif"
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dcjmaapvi/image/upload/v1732619203/s1_ljdhyy.avif)' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>

              {/* Text Content */}
              <div className="text-center text-white font-semibold text-lg sm:text-xl p-4 relative z-10">
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
