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
      time: "8:30 AM - 9:30 AM",
      event: "Morning Yoga",
      description:
        "Join us for a refreshing morning yoga session to start your day with energy.",
      icon: "fas fa-sun",
    },
    {
      time: "9:30 AM - 10:30 AM",
      event: "Breakfast and Networking",
      description:
        "Enjoy a delicious breakfast and connect with fellow attendees.",
      icon: "fas fa-utensils",
    },
    {
      time: "10:30 AM - 12:00 PM",
      event: "Keynote Speech",
      description:
        "Listen to the keynote speaker's inspiring thoughts on the future of the industry.",
      icon: "fas fa-microphone-alt",
    },
    {
      time: "12:00 PM - 1:00 PM",
      event: "Lunch Break",
      description:
        "Relax and refuel with a variety of lunch options available.",
      icon: "fas fa-pizza-slice",
    },
    {
      time: "1:00 PM - 2:00 PM",
      event: "Panel Discussion",
      description: "Engage in a lively panel discussion with industry experts.",
      icon: "fas fa-users",
    },
    {
      time: "2:00 PM - 3:30 PM",
      event: "Workshops",
      description:
        "Participate in interactive workshops to gain hands-on experience.",
      icon: "fas fa-chalkboard-teacher",
    },
    {
      time: "3:30 PM - 4:30 PM",
      event: "Afternoon Tea",
      description: "Take a break with a refreshing afternoon tea and snacks.",
      icon: "fas fa-tea",
    },
    {
      time: "4:30 PM - 5:00 PM",
      event: "Closing Remarks",
      description:
        "Wrap up the event with final thoughts and a look forward to future events.",
      icon: "fas fa-flag-checkered",
    },
  ];

  return (
    <div className="mx-auto bg-[url('/Event/cool-background.png')] bg-cover bg-center bg-no-repeat px-8 md:px-16 py-6 md:py-12 font-poppins">
      <p className="text-sm text-gray-600 text-center mb-4 md:mb-6">
        SCHEDULE DETAILS
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6 md:mb-8">
        Information of Event Schedules
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
                  className={`px-4 py-4 text-sm md:text-lg text-black border-r border-gray-300 ${
                    index % 2 === 0 ? "bg-yellow-400" : "bg-yellow-500"
                  } w-[120px] md:w-[220px] lg:w-[250px]`}
                >
                  <p
                    className="text-sm md:text-lg text-black"
                    data-aos="zoom-in"
                    data-aos-delay="100" // Add delay if necessary
                  >
                    {item.time}
                  </p>
                </td>

                {/* Event column */}
                <td className="px-4 py-4 text-sm md:text-lg text-gray-800">
                  <div className="flex flex-col items-start space-y-3">
                    {/* Event name */}
                    <h4
                      className="font-semibold text-lg md:text-2xl"
                      data-aos="fade-right"
                    >
                      {item.event}
                    </h4>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center"
                      data-aos="flip-left" // Apply AOS animation to the icon
                    >
                      <i className={`text-xl md:text-3xl ${item.icon}`}></i>
                    </div>

                    {/* Description */}
                    <p
                      className="text-xs md:text-sm text-gray-600"
                      data-aos="fade-left"
                    >
                      {item.description}
                    </p>
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
