const GallerySlider = () => {
  const column1Images = [
    "/MasterClass/1.webp",
    "/MasterClass/2.webp",
    "/MasterClass/3.webp",
    "/MasterClass/4.webp",
    "/MasterClass/5.webp",
    "/MasterClass/6.webp",
    "/MasterClass/7.webp",
    "/MasterClass/8.webp",
  ];

  const column2Images = [
    "/MasterClass/9.webp",
    "/MasterClass/10.webp",
    "/MasterClass/11.webp",
    "/MasterClass/12.webp",
    "/MasterClass/13.webp",
    "/MasterClass/14.webp",
    "/MasterClass/15.webp",
    "/MasterClass/16.webp",
  ];

  const doubledColumn1 = [...column1Images, ...column1Images];
  const doubledColumn2 = [...column2Images, ...column2Images];

  return (
    <div className="w-full md:w-1/2 flex justify-center overflow-hidden h-[600px] md:h-screen bg-[#00A59F] space-x-2  relative">
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

      {/* Column 2 - funky offset, no animation delay */}
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
