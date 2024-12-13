import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScheduleDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing effect
      once: true, // Animate only once
    });
  }, []);

  const schedule = [
    {
      time: "03:00 PM - 04:00 PM",
      event: "High Tea, Networking & Registration",
      icon: "fas fa-users",  // Networking Icon
    },
    {
      time: "04:06 PM - 04:21 PM",
      event: "Know Your Hosts",
      icon: "fas fa-user-tie",  // User tie icon for introduction
    },
    {
      time: "04:21 PM - 04:25 PM",
      event: "Welcome Note",
      icon: "fas fa-graduation-cap",  // Graduation cap for Academia
    },
    {
      time: "04:25 PM - 04:45 PM",
      event: "Key Addressal - Industry",
      icon: "fas fa-university",  // University Icon for Academy
    },
    {
      time: "04:45 PM - 04:55 PM",
      event: "Key Addressal - Academia I",
      icon: "fas fa-industry",  // Factory Icon for Industry
    },
    {
      time: "04:55 PM - 05:25 PM",
      event: "Panel Discussion - Industry",
      icon: "fas fa-users",  // Users Icon for Panel Discussion
    },
    {
      time: "05:25 PM - 05:45 PM",
      event: "Key Addressal - Academia II",
      icon: "fas fa-users",  // Users Icon for Panel Discussion
    },
    {
      time: "05:45 PM - 07:00 PM",
      event: "Ceremony",
      icon: "fas fa-trophy",  // Trophy Icon for Awards
    },
    {
      time: "07:00 PM - 07:10 PM",
      event: "Closing Note",
      icon: "fas fa-glass-cheers",  // Cocktail Icon for Party
    },
    {
      time: "07:10 PM ONWARDS",
      event: "Ghazal Night & Cocktail Party",
      icon: "fas fa-glass-cheers",  // Cocktail Icon for Party
    }
  ];

  return (
    <div className="mx-auto bg-[url('/Event/cool-background.png')] bg-cover bg-center bg-no-repeat px-8 md:px-16 py-6 md:py-12 font-poppins">
      <p className="text-sm text-gray-600 text-center mb-4 md:mb-6">
        SCHEDULE DETAILS
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 md:mb-8">
        Event Schedule
      </h2>
      <div className="overflow-x-auto border border-gray-300">
      <table className="table-auto w-full text-left border-collapse">
  <tbody>
    {schedule.map((item, index) => (
      <tr
        key={index}
        className="border-t border-b border-dashed border-gray-300"
      >
        {/* Time column */}
        <td
          className={`px-4 py-4 text-sm md:text-lg ${
            index % 2 === 0 ? "bg-[#D9B99B] text-black" : "bg-[#C59D6D] text-black"
          } border-r border-gray-300 w-[120px] md:w-[220px] lg:w-[250px] transition-all duration-300 ease-in-out hover:shadow-lg`}
        >
          <p
            className="text-sm md:text-lg"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {item.time}
          </p>
        </td>

        {/* Event column */}
        <td className="px-4 py-4 text-sm md:text-lg text-gray-800">
          <div className="flex flex-col items-start space-y-3">
            {/* Event name */}
            <h4
              className="font-semibold text-lg md:text-2xl text-gray-800 transition-all duration-300 ease-in-out hover:text-[#9C7C4E]"
              data-aos="fade-right"
            >
              {item.event}
            </h4>

            {/* Icon */}
            <div
              className="w-12 h-12 md:w-16 md:h-16 bg-[#D9B99B] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
              data-aos="flip-left"
            >
              <i className={`text-xl md:text-3xl ${item.icon}`}></i>
            </div>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default ScheduleDetails;
