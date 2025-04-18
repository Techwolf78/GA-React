import { useEffect } from "react";
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
      event: "Networking",
      icon: "Event/connection.png", // Use your custom image here
    },
    {
      time: "04:06 PM - 04:10 PM",
      event: "Welcome Note & Introduction",
      host: {
        name: "Mr. Ummeaiman Ansari",
        title: "Co-Founder - Gryphon Academy",
        image: "Event/cf.avif" // Replace with actual image path
      }
    },
    {
      time: "05:15 PM - 05:35 PM",
      event: "Key Addressal – Industry",
      hosts: [
        {
          name: "Mr. Tushar Desai",
          title: "Senior Director - Talent Acquisition India & Philippines - FIS",
          image: "Event/tushardesai.png"
        },
        {
          name: "Mr. S.N Rao",
          title: "Lead Early Careers Talent India - Philips",
          image: "Event/snrao.png"
        }
      ]
    },
    {
      time: "05:35 PM - 06:30 PM",
      event: "The Skill Gap Dilemma: Between Industry & Academia",
      hosts: [
        {
          name: "Prof. Chetan Wakalkar",
          title: "Academic Advisor - IGI",
          image: "Event/chetan-sir.jpg"
        },
        {
          name: "Mr. Andrews Simon",
          title: "Head - Talent Acquisition - eClerx",
          image: "Event/andrew.png"
        },
        {
          name: "Mr. Ramchandra Honap",
          title: "Head HR - Coca Cola",
          image: "Advisory/Ram Honap.avif"
        },
        {
          name: "Ms. Aanchal Tandon",
          title: "India Lead HR - HCLTech",
          image: "Event/aanchal.jpeg"
        },
        {
          name: "Mr. Urvish Pandey",
          title: "Director - Talent Acquisition - Mastercard",
          image: "Event/urvish.png"
        },
        {
          name: "Mr. Hemant Sethia",
          title: "TA India Lead - M & G Global Services",
          image: "Event/hemant.png"
        },
        {
          name: "Dr. Manish Kothari",
          title: "Managing Director - ISBR Business School",
          image: "Event/manish.jpeg"
        }
      ]
    },
    {
      time: "04:10 PM - 05:00 PM",
      event: "Key Addressal – Academia",
      hosts: [
        {
          name: "Dr. Pandit Mali",
          title: "Chief Executive Officer - Indira Group of Institutes",
          image: "Event/panditmali.jpeg"
        },
        {
          name: "Dr. Manish Kothari",
          title: "Managing Director - ISBR Business School",
          image: "Event/manish.jpeg"
        },
        {
          name: "Mr. Amit Kolhe",
          title: "Managing Trustee - Sanjivani University",
          image: "Event/amitkolhe.jpeg"
        }
      ]
    },
    {
      time: "06:45 PM - 07:15 PM",
      event: "Celebrating HR Excellence",
      icon: "Event/trophy.png", // Trophy icon for ceremony
    },
    {
      time: "07:15 PM - 07:30 PM",
      event: "Closing Note",
      host: {
        name: "Mr. Shashi Bhat",
        title: "Founder - Gryphon Academy",
        image: "Event/foun.avif"
      }
    },
    {
      time: "07:30 PM Onwards",
      event: "Ghazal Night",
      host: {
        name: "Jazim Sharma",
        title: "Artist/Singer",
        image: "Event/jazam.jpg"
      }
    }
  ];

  return (
    <div className="mx-auto bg-white px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-12 font-poppins">
      <p className="text-xs sm:text-sm text-gray-800 text-left mb-2 sm:mb-4 break-words">EVENT SUMMARY</p>
      
      {/* Heading with AOS applied and aligned left */}
      <h2
        className="text-2xl  md:text-3xl lg:text-4xl font-semibold text-left mb-6 sm:mb-8 text-black break-words"
        data-aos="fade-up" // AOS applied here
      >
        Event Agenda
        <span className="block h-1 w-12 bg-[#00A59F] mt-2 rounded-full"></span>
      </h2>


      <div
        className="overflow-x-auto border-8 shadow-[8px_8px_10px_rgba(255,255,255,0.6),-8px_-8px_10px_rgba(255,255,255,0.6),8px_-8px_10px_rgba(255,255,255,0.4),-8px_8px_10px_rgba(255,255,255,0.4)]"
        style={{
          borderImage: "linear-gradient(to bottom, #00A59F, #00A59F) 1",
          position: 'relative',
        }}
      >
        <div
          className="absolute inset-y-0 right-0 w-[80px] sm:w-[120px] md:w-[200px] lg:w-[250px] bg-wave-pattern bg-contain bg-no-repeat"
          style={{
            backgroundImage: 'url("LandingImage/vector 1.webp")',
            zIndex: -1,
          }}
        ></div>

        <table className="table-auto w-full text-left border-collapse">
          <tbody>
            {schedule.map((item, index) => (
              <tr
                key={index}
                className="border-t border-b border-dashed border-[#00A59F]"
              >
                {/* Time column with AOS for text only */}
                <td
                  className={`px-4 sm:px-6 md:px-8 py-4 text-xs sm:text-sm md:text-lg ${
                    index % 2 === 0
                      ? "bg-[#F0F8F8] text-[#027093]"
                      : "bg-[#F0F8F8] text-[#027093]"
                  } border-r border-[#00A59F] w-[80px] sm:w-[140px] md:w-[180px] transition-all duration-300 ease-in-out hover:shadow-2xl break-words`}
                >
                  <span className="font-bold" data-aos="zoom-in" data-aos-delay="100">
                    {item.time}
                  </span>
                </td>

                {/* Event column with AOS */}
                <td
                  className={`px-4 sm:px-6 md:px-8 py-4 text-xs sm:text-sm md:text-lg text-[#027093] ${
                    index % 2 === 0
                      ? "bg-[#F0F8F8] text-[#027093]"
                      : "bg-[#F0F8F8] text-[#027093]"
                  } transition-all duration-300 ease-in-out hover:shadow-2xl break-words`}
                >
                  <div className="flex flex-col items-start space-y-3">
                    {/* Event name */}
                    <h4
                      className="font-semibold text-sm sm:text-lg md:text-2xl text-[#027093] transition-all duration-300 ease-in-out break-words"
                      data-aos="fade-right"
                    >
                      {item.event}
                    </h4>

                    {/* If hosts are defined, display them */}
                    {item.hosts || item.host ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {(item.hosts || [item.host]).map((host, index) => (
                          <div key={index} className="flex items-center space-x-2 break-words">
                            <img
                              src={host.image}
                              alt={host.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border-2 border-[#00BFA6]"
                            />
                            <div>
                              <p className="text-sm sm:text-base font-semibold text-[#027093]">{host.name}</p>
                              <p className="text-xs sm:text-sm text-[#027093]">{host.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : item.icon ? (
                      <div
                        className="w-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#fefefe] to-[#ffffff] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                        data-aos="flip-left"
                      >
                        <img
                          src={item.icon}
                          alt={item.event}
                          className="w-auto h-auto object-contain p-1"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#00A59F] to-[#027093] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
                        data-aos="flip-left"
                      >
                        <i className={`text-xl sm:text-2xl md:text-3xl ${item.icon}`}></i>
                      </div>
                    )}
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
