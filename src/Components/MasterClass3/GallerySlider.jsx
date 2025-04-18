const GallerySlider = () => {
    const column1Images = [
      "/MasterClass/1.jpg",
      "/MasterClass/2.jpg",
      "/MasterClass/3.jpg",
      "/MasterClass/4.jpg",
      "/MasterClass/5.jpg",
      "/MasterClass/6.jpg",
      "/MasterClass/7.jpg",
      "/MasterClass/8.jpg",
    ];
  
    const column2Images = [
      "/MasterClass/9.JPG",
      "/MasterClass/10.JPG",
      "/MasterClass/11.JPG",
      "/MasterClass/12.JPG",
      "/MasterClass/13.JPG",
      "/MasterClass/14.JPG",
      "/MasterClass/15.JPG",
      "/MasterClass/16.JPG",
    ];
  
    // Duplicate arrays for seamless loop
    const doubledColumn1 = [...column1Images, ...column1Images];
    const doubledColumn2 = [...column2Images, ...column2Images];
  
    return (
      <div className="w-1/2 flex justify-center overflow-hidden h-screen bg-[#00A59F] space-x-2 px-2 relative">
        {/* Column 1 */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute animate-scrollUp">
            <div className="flex flex-col gap-4">
              {doubledColumn1.map((src, idx) => (
                <img
                  key={`col1-${idx}`}
                  src={src}
                  alt={`Gallery Left ${idx}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
  
        {/* Column 2 with offset */}
        <div className="w-1/2 relative overflow-hidden">
          <div className="absolute animate-scrollUp delay-anim">
            <div
              className="flex flex-col gap-4"
              style={{ transform: "translateY(8rem)" }}
            >
              {doubledColumn2.map((src, idx) => (
                <img
                  key={`col2-${idx}`}
                  src={src}
                  alt={`Gallery Right ${idx}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
  
        {/* Common shading at the bottom for both columns */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#00BFA6] to-transparent animate-fadeOutUp"></div>
  
        {/* Custom animation */}
        <style>{`
          @keyframes scrollUp {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
  
          .animate-scrollUp {
            animation: scrollUp 40s linear infinite;
          }
  
          @keyframes fadeOutUp {
            0% {
              opacity: 1; /* Fully opaque */
            }
            100% {
              opacity: 0; /* Fully transparent */
            }
          }
  
          .animate-fadeOutUp {
            animation: fadeOutUp 40s linear infinite;
          }
        `}</style>
      </div>
    );
  };
  
  export default GallerySlider;
