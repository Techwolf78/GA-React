import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Pointers() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 50,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const stats = [
    { value: "65,000+", label: "Students" },
    { value: "270+", label: "Trainers" },
    { value: "10,000+", label: "Hours" },
    { value: "4.5/5", label: "Average Rating" },
  ];

  return (
    <div className="bg-white py-2 md:py-6 px-4 md:px-16">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        data-aos="fade-up"
      >
        {stats.map((stat, index) => {
          const isEven = index % 2 === 0;
          const cardBg = isEven ? "bg-gray-50" : "bg-[#00A59F]";
          const valueColor = isEven ? "text-[#00A59F]" : "text-white";
          const labelColor = isEven ? "text-gray-700" : "text-[#f0faf9]";

          return (
            <div
              key={index}
              className="relative"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-offset="50"
            >
              {/* Background card shadow */}
              <div className="absolute left-[6px] bottom-[-6px] right-[-6px] z-0 bg-[#00BFA6] h-full rounded-md"></div>

              {/* Foreground card */}
              <div
                className={`relative z-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md py-3 px-4 border border-[#00A59F] ${cardBg} rounded-md`}
              >
                <div
                  className={`text-2xl md:text-3xl font-extrabold ${valueColor}`}
                >
                  {stat.value}
                </div>
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
