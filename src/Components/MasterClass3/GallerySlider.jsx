const GallerySlider = () => {
  const column1Images = [
    "/MasterClass/1.avif",
    "/MasterClass/2.avif",
    "/MasterClass/3.avif",
    "/MasterClass/4.avif",
    "/MasterClass/5.avif",
    "/MasterClass/6.avif",
    "/MasterClass/7.avif",
    "/MasterClass/8.avif",
  ];

  const column2Images = [
    "/MasterClass/9.avif",
    "/MasterClass/10.avif",
    "/MasterClass/11.avif",
    "/MasterClass/12.avif",
    "/MasterClass/13.avif",
    "/MasterClass/14.avif",
    "/MasterClass/15.avif",
    "/MasterClass/16.avif",
  ];

  const doubledColumn1 = [...column1Images, ...column1Images];
  const doubledColumn2 = [...column2Images, ...column2Images];

  return (
    <div
      className="w-full md:w-1/2 flex justify-center overflow-hidden h-[600px] md:h-screen bg-[#00A59F] space-x-2 relative"
      data-aos="fade-left"
    >
      {/* Column 1 */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute animate-scrollUp">
          <div className="flex flex-col gap-4">
            {doubledColumn1.map((src, idx) => (
              <img
                key={`col1-${idx}`}
                src={src}
                alt={`Gallery Left ${idx}`}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute animate-scrollUp">
          <div
            className="flex flex-col gap-4"
            style={{ transform: "translateY(8rem)" }}
          >
            {doubledColumn2.map((src, idx) => (
              <img
                key={`col2-${idx}`}
                src={src}
                alt={`Gallery Right ${idx}`}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#00BFA6] to-transparent animate-fadeOutUp"></div>

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
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fadeOutUp {
          animation: fadeOutUp 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;
