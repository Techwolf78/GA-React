import React from "react";


const Highlights = () => {
  return (
    <div className="px-2 md:px-8 py-4 bg-white font-poppins">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold py-0 md:py-6 mb-2">Event Highlights</h1>
      <div className="grid grid-cols-12 gap-4">
        {/* First Column (Large Image on Top, Small Images Below) */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <div className="relative w-full h-72 group">
            <img
              src="Event/h5.avif"
              alt="Main Event Highlight"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 left-0 text-white text-sm md:text-base font-semibold p-4">
                Event Highlight
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative w-1/2 h-56 group">
              <img
                src="Event/h1.avif"
                alt="Ground Zero Session"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
                <p className="absolute top-0 left-0 text-white text-sm font-semibold p-4">
                Ground Zero Session
                </p>
              </div>
            </div>
            <div className="relative w-1/2 h-56 group">
              <img
                src="Event/h3.avif"
                alt="Networking Event"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
                <p className="absolute top-0 left-0 text-white text-sm font-semibold p-4">
                  Celebrating HR Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column (Tall Event Image with Small One Below) */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
          {/* First Tall Image */}
          <div className="relative w-full h-80 group">
            <img
              src="Event/h4.avif"
              alt="Guest Speaker Session"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute top-0 left-0 text-white text-lg font-semibold p-4">
                Welcome Note
              </p>
            </div>
          </div>

          {/* Second Smaller Image */}
          <div className="relative w-full h-48 group">
            <img
              src="Event/h2.avif"
              alt="Panel Discussion"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute top-0 left-0 text-white text-sm font-semibold p-4">
                Panel Discussion
              </p>
            </div>
          </div>
        </div>

        {/* Third Column (Wide Event Image with Small One Below and Another Image) */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          {/* First Wide Image */}
          <div className="relative w-full h-60 group">
            <img
              src="Event/h6.avif"
              alt="Closing Note"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 left-0 text-white text-base md:text-lg font-semibold p-4">
                Closing Note
              </p>
            </div>
          </div>

          {/* Second Smaller Image */}
          <div className="relative w-full h-24 group">
            <img
              src="Event/h7.avif"
              alt="Academic Addressal"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 right-0 text-white text-sm font-semibold p-4">
                Academic Addressal
              </p>
            </div>
          </div>

          {/* Third Image (Additional Image Below) */}
          <div className="relative w-full h-40 group">
            <img
              src="Event/h8.avif"
              alt="Networking"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition-opacity duration-1000">
              <p className="absolute bottom-0 left-0 text-white text-sm font-semibold p-4">
                Networking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
