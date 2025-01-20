import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

const sponsorsData = [
  {
    logos: [
      { 
        src: 'Event/Guest/ramchandra.avif', 
        name: 'Mr. Ramchandra Honap', 
        designation: 'National Head HR', 
        companyImage: 'Event/came/8.avif' 
      },
      { 
        src: 'Event/Guest/piyushnaik.avif', 
        name: 'Mr. Piyush Naik', 
        designation: 'Associate Director - Talent Insights, Sourcing & Early Careers', 
        companyImage: 'Event/came/25.avif' 
      },
      { 
        src: 'Event/Guest/chiraganeja.avif', 
        name: 'Mr. Chirag Aneja', 
        designation: 'Deputy Manager', 
        companyImage: 'Event/came/9.avif' 
      },
      { 
        src: 'Event/Guest/Prernaarora.avif', 
        name: 'Ms. Prerna Arora', 
        designation: 'Sr. Business HR', 
        companyImage: 'Event/came/15.avif' 
      },
      { 
        src: 'Event/Guest/urvish.png', 
        name: 'Mr. Urvish Pandey', 
        designation: 'Director - Talent Acquisition', 
        companyImage: 'Event/came/22.avif' 
      },
      { 
        src: 'Event/Guest/manroopsingh.avif', 
        name: 'Mr. Manroop Singh', 
        designation: 'Head TA Operations & University Relations', 
        companyImage: 'Event/came/37.avif' 
      },
      { 
        src: 'Event/Guest/rajendraraut.avif', 
        name: 'Mr Rajendra Raut', 
        designation: 'HR and Talent Acquisition', 
        companyImage: 'Event/came/19.avif' 
      },
      { 
        src: 'Event/Guest/snrao.png', 
        name: 'Mr. Suvarnanidhi Rao ', 
        designation: 'Lead Early Careers Talent India', 
        companyImage: 'Event/came/2n.avif' 
      },
      { 
        src: 'Event/Guest/10.avif', 
        name: 'Mr. Shashank Vyas', 
        designation: 'Assistant Manager - Campus Hiring & Talent Acquisition', 
        companyImage: 'Event/came/38.avif' 
      },
      { 
        src: 'Event/Guest/yashpal.avif', 
        name: 'Mr. Yashpal Singh Parihar', 
        designation: 'Head Talent Acquisition - CoE, APAC', 
        companyImage: 'Event/came/29.avif' 
      },
      { 
        src: 'Event/Guest/13.avif', 
        name: 'Mr. Paritosh Bakshi', 
        designation: 'Head - HR and Talent Acquisition', 
        companyImage: 'Event/came/34.avif' 
      },
      { 
        src: 'Event/Guest/14.avif', 
        name: 'Mr. Vishwesh Ransing ', 
        designation: 'Talent Advisor', 
        companyImage: 'Event/came/30.avif' 
      },
      { 
        src: 'Event/Guest/15.avif', 
        name: 'Mr. Vikram Chopra', 
        designation: 'Vice President and Head TA', 
        companyImage: 'Event/came/10.avif' 
      },
      { 
        src: 'Event/Guest/16.avif', 
        name: 'Mr. Rakesh Tiwari', 
        designation: 'Sr. HRBP', 
        companyImage: 'Event/came/20.avif' 
      },
      { 
        src: 'Event/Guest/pravinawant.jpeg', 
        name: 'Mr. Pravin Sawant', 
        designation: 'CHRO & Sr Vice President', 
        companyImage: 'Event/came/3.avif' 
      },
      { 
        src: 'Event/Guest/19.avif', 
        name: 'Mr. Amol Joshi', 
        designation: 'Assocoiate Director - Human Resource', 
        companyImage: 'Event/came/13.avif' 
      },
      { 
        src: 'Event/Guest/20.avif', 
        name: 'Mr. Hemant Sethia', 
        designation: 'TA India Lead', 
        companyImage: 'Event/came/21.avif' 
      },
      { 
        src: 'Event/Guest/22.avif', 
        name: 'Mr. Shirish Bavdekar', 
        designation: 'Global Talent Sourcing Leader', 
        companyImage: 'Event/came/11.avif' 
      },
      { 
        src: 'Event/Guest/23.avif', 
        name: 'Ms. Tina Mathew', 
        designation: 'Head HR', 
        companyImage: 'Event/came/24.avif' 
      },
      { 
        src: 'Event/Guest/24.avif', 
        name: 'Mr. Unmesh Pawar', 
        designation: 'Chief People Officer South Asia', 
        companyImage: 'Event/came/12.avif' 
      },
      { 
        src: 'Event/Guest/26.avif', 
        name: 'Mr. Sandeep Choubey', 
        designation: 'Senior Campus Recruiter', 
        companyImage: 'Event/came/7.avif' 
      },
      { 
        src: 'Event/Guest/30.avif', 
        name: 'Mr. Sahil Kapoor', 
        designation: 'Assistant Director - Talent Attraction & Acquisition', 
        companyImage: 'Event/came/54.avif' 
      },
      { 
        src: 'Event/Guest/31.avif', 
        name: 'Mr. Ashish Khole', 
        designation: 'Head Of Human Resources', 
        companyImage: 'Event/came/32.avif' 
      },
      { 
        src: 'Event/Guest/atulbhadange.jpeg', 
        name: 'Mr. Atul Bhadange', 
        designation: 'Learning & Development Lead', 
        companyImage: 'Event/came/24.avif' 
      },
      { 
        src: 'Event/Guest/33.avif', 
        name: 'Ms. Shilpa Pai', 
        designation: 'Sr. Vice President & Global Head HR', 
        companyImage: 'Event/came/1.avif' 
      },
      { 
        src: 'Event/Guest/35.avif', 
        name: 'Mr. Swapnil Jain', 
        designation: 'Chief Operating Officer', 
        companyImage: 'Event/came/2.avif' 
      },
      { 
        src: 'Event/Guest/38.avif', 
        name: 'Mr. Sushant Kumar', 
        designation: 'TA Leader - University Relations', 
        companyImage: 'Event/came/40.avif' 
      },
      { 
        src: 'Event/Guest/39.avif', 
        name: 'Mr. Tushar Desai', 
        designation: 'Sr. Director - Talent Acquisition, India & Philippines', 
        companyImage: 'Event/came/43.avif' 
      },
      { 
        src: 'Event/Guest/40.avif', 
        name: 'Mr Raman Koul', 
        designation: 'SVP & Head of SAARC', 
        companyImage: 'Event/came/39.avif' 
      },
      { 
        src: 'Event/Guest/41.avif', 
        name: 'Mr. Sanjay Dcosta', 
        designation: 'Talent Acquisition Leader - Campus Recruiting', 
        companyImage: 'Event/came/50.avif' 
      },
      { 
        src: 'Event/Guest/42.avif', 
        name: 'Mr. Kamlesh Jagdale', 
        designation: 'Head of Campus Hiring', 
        companyImage: 'Event/came/47.avif' 
      },
      { 
        src: 'Event/Guest/44.avif', 
        name: 'Mr. Bharat Aswani', 
        designation: 'Managing Director', 
        companyImage: 'Event/came/44.avif' 
      },
      { 
        src: 'Event/Guest/45.avif', 
        name: 'Mr. Avinash Talreja', 
        designation: 'Deputy General Manager Human Resource', 
        companyImage: 'Event/came/51.avif' 
      },
      { 
        src: 'Event/Guest/46.avif', 
        name: 'Mr. Sahil Nayar', 
        designation: 'Sr. Director', 
        companyImage: 'Event/came/48.avif' 
      },
      { 
        src: 'Event/Guest/50.avif', 
        name: 'Ms. Aarti Gupta', 
        designation: 'Manager - HR', 
        companyImage: 'Event/came/7.avif' 
      },
      { 
        src: 'Event/Guest/53.avif', 
        name: 'Mr. Rajesh Arora', 
        designation: 'Senior Director Human Resources', 
        companyImage: 'Event/came/41.avif' 
      },
      { 
        src: 'Event/Guest/54.avif', 
        name: 'Mr. Andrews Simon', 
        designation: 'Head - Talent Acquisition', 
        companyImage: 'Event/came/42.avif' 
      },
      { 
        src: 'Event/Guest/55.avif', 
        name: 'Mr. Ajay Mudliar', 
        designation: 'Head Talent Acquisition, Centre of Excellence', 
        companyImage: 'Event/came/53.avif' 
      },
      { 
        src: 'Event/Guest/56.avif', 
        name: 'Mr. Rahul Bagale', 
        designation: 'Vice President - Human Resources', 
        companyImage: 'Event/came/55.jpeg' 
      },
      { 
        src: 'Event/Guest/59.avif', 
        name: 'Mr. Akhil Emmanuel Vazhapilly', 
        designation: 'Manager - Talent Development', 
        companyImage: 'Event/came/56.avif' 
      },
      { 
        src: 'Event/Guest/60.avif', 
        name: 'Mr. Sachin Dhavale', 
        designation: 'Human Resources Director', 
        companyImage: 'Event/came/57.png' 
      },
      { 
        src: 'Event/Guest/62.avif', 
        name: 'Mr. Manish Kumar Pipalwa', 
        designation: 'Manager Talent Acquisition', 
        companyImage: 'Event/came/56.avif' 
      },
      { 
        src: 'Event/Guest/63.avif', 
        name: 'Ms. Savita Shetty', 
        designation: 'Director talent Acquisition', 
        companyImage: 'Event/came/58.avif' 
      },
      { 
        src: 'Event/Guest/65.avif', 
        name: 'Ms. Aanchal Tandon', 
        designation: 'Manager HR', 
        companyImage: 'Event/came/46.avif' 
      },
      { 
        src: 'Event/Guest/68.avif', 
        name: 'Mr. Diwesh Diwakar Sahay', 
        designation: 'General Manager Human Resources', 
        companyImage: 'Event/came/59.png' 
      },
      { 
        src: 'Event/Guest/69.avif', 
        name: 'Mr. Ruchika Singh Tanwar', 
        designation: 'Associater Director Talent Acquisition', 
        companyImage: 'Event/came/60.png' 
      },
      { 
        src: 'Event/Guest/70.avif', 
        name: 'Mr. Vinay Srikant Guwada', 
        designation: 'Manager- Talent Acquisition and Campus Hiring', 
        companyImage: 'Event/came/61.avif' 
      },
      { 
        src: 'Event/Guest/71.avif', 
        name: 'Mr. Saurabh Ahuja', 
        designation: 'Vice President Talent Acquisition', 
        companyImage: 'Event/came/62.avif' 
      },
      { 
        src: 'Event/Guest/79.avif', 
        name: 'Mr. Anil Choubey', 
        designation: 'Head of People Operations', 
        companyImage: 'Event/came/63.png' 
      },
    //   { 
    //     src: 'Event/Guest/81.png', 
    //     name: 'Mr. Ankit Gupta', 
    //     designation: 'Talent Acquisition Manager', 
    //     companyImage: 'Event/came/34.avif' 
    //   },
      { 
        src: 'Event/Guest/83.avif', 
        name: 'Ms. Annie Bhatia', 
        designation: 'Chief Human Resources Officer', 
        companyImage: 'Event/came/64.png' 
      },
      { 
        src: 'Event/Guest/84.avif', 
        name: 'Ms. Khushboo Shinagare', 
        designation: 'Director', 
        companyImage: 'Event/came/65.webp '
      },
      { 
        src: 'Event/Guest/85.avif', 
        name: 'Mr. Lawrence Anthony', 
        designation: 'Talent Acquisition Leader - APAC', 
        companyImage: 'Event/came/66.avif' 
      },
      { 
        src: 'Event/Guest/86.avif', 
        name: 'Ms. Deepa Shetty', 
        designation: 'Global Group Head - Human Capital Management', 
        companyImage: 'Event/came/67.avif' 
      },
      { 
        src: 'Event/Guest/87.avif', 
        name: 'Mr. Neeraj Kumar Gupta', 
        designation: 'Director HR, Administration, HSE', 
        companyImage: 'Event/came/82.png' 
      },
      { 
        src: 'Event/Guest/88.avif', 
        name: 'Mr. Ambrish Kanungo', 
        designation: 'Head HR', 
        companyImage: 'Event/came/69.png' 
      },
      { 
        src: 'Event/Guest/90.avif', 
        name: 'Mr. Shubham Ishwarkatti Rana', 
        designation: 'Senior Recruiter - Campus Hiring, India', 
        companyImage: 'Event/came/70.avif' 
      },
      { 
        src: 'Event/Guest/92.avif', 
        name: 'Mr. Anand Dhruv', 
        designation: 'Assocoiate Director - HR', 
        companyImage: 'Event/came/71.png' 
      },
      { 
        src: 'Event/Guest/95.avif', 
        name: 'Mr. Kamlesh Bhosale', 
        designation: 'Manager - Campus Recruitment & University Relations', 
        companyImage: 'Event/came/54.avif' 
      },
    //   { 
    //     src: 'Event/Guest/96.png', 
    //     name: 'Mr. Yogesh Shah', 
    //     designation: 'Talent Acquisition Specialist', 
    //     companyImage: 'Event/came/72.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/100.png', 
    //     name: 'Ms. Sweta Ghosh', 
    //     designation: 'Manager,Talent Acquisition - Campus & Lateral', 
    //     companyImage: 'Event/came/73.jpg' 
    //   },
    //   { 
    //     src: 'Event/Guest/102.png', 
    //     name: 'Mr Subramanian S', 
    //     designation: 'Senior Lead - Early Talent', 
    //     companyImage: 'Event/came/74.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/105.png', 
    //     name: 'Mr. Prafull J', 
    //     designation: 'Director of HR (People & Places)', 
    //     companyImage: 'Event/came/75.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/106.png', 
    //     name: 'Mr. Kamal Vatnani', 
    //     designation: 'AVP Talent Acquisition - HR & Admin', 
    //     companyImage: 'Event/came/76.jpeg' 
    //   },
    //   { 
    //     src: 'Event/Guest/107.png', 
    //     name: 'Mr. Yogesh Dharmalingam', 
    //     designation: 'Group Talent Acquisition Specialist', 
    //     companyImage: 'Event/came/77.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/109.png', 
    //     name: 'Mr. Milind Mutalik', 
    //     designation: 'Ex CHRO', 
    //     companyImage: '' 
    //   },
    //   { 
    //     src: 'Event/Guest/110.png', 
    //     name: 'Ms. Isha Vispute', 
    //     designation: 'Lead- Campus Relations', 
    //     companyImage: 'Event/came/78.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/119.png', 
    //     name: 'Mr. Ujjwal Mane', 
    //     designation: 'Lead HR', 
    //     companyImage: 'Event/came/kpit.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/127.png', 
    //     name: 'Ms Tanya Aurora', 
    //     designation: 'Associate - Learning and Organizational Development', 
    //     companyImage: 'Event/came/12.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/130.png', 
    //     name: 'Mr. Vignesh Paramasivam', 
    //     designation: 'Manager People Partner', 
    //     companyImage: 'Event/came/80.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/131.png', 
    //     name: 'Dr. Santosh Kumar Rout', 
    //     designation: 'Group Head - HR', 
    //     companyImage: 'Event/came/sorigin.png' 
    //   },
    //   { 
    //     src: 'Event/Guest/132.png', 
    //     name: 'Ms. Ashlesha Gupte ', 
    //     designation: 'Vice President Human Resources', 
    //     companyImage: 'Event/came/81.jpg' 
    //   },
    ],
  },
];

const App = () => {
  // Slider settings to display 1 chunk per slide
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Function to chunk logos into groups of 4
  const chunkLogos = (logos, size) => {
    const chunks = [];
    for (let i = 0; i < logos.length; i += size) {
      chunks.push(logos.slice(i, i + size));
    }
    return chunks;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (in milliseconds)
      once: true,     // Trigger animation only once when it enters the viewport
    });
  }, []);

  return (
    <div className="flex flex-col items-center py-4 sm:py-8 md:py-12 bg-white px-4 sm:px-8 md:px-12 font-poppins ">
      {/* Heading with AOS Animation */}
      <h2 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10"
        data-aos="fade-up" // AOS animation applied to heading only
      >
        Our Distinguished Guests
      </h2>

      <Slider {...settings} className="w-full ">
        {sponsorsData.map((slide, index) => {
          const logoChunks = chunkLogos(slide.logos, 4); // Create chunks of 4 logos per slide
          return logoChunks.map((chunk, chunkIndex) => (
            <div key={`${index}-${chunkIndex}`} className="flex justify-center items-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center w-full px-4 sm:px-6 md:px-8">
                {chunk.map((logo, idx) => (
                  <div key={idx} className="relative flex flex-col justify-center items-center text-center">
                    {/* Smaller Circular Container for Sponsor Profile Image */}
                    <div className="w-16 h-16  md:w-40 md:h-40 flex justify-center items-center overflow-hidden rounded-full bg-gray-800 shadow-md mb-2 sm:mb-3 md:mb-4">
                      <img
                        src={logo.src}
                        alt={`Sponsor ${logo.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Sponsor Name and Designation */}
                    <div className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">{logo.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 md:mb-4">{logo.designation}</div>

                    {/* Smaller Rectangle Company Image Below */}
                    <div className="w-20  md:w-28 h-6 md:h-14 overflow-hidden bg-transparent mb-2 sm:mb-3 md:mb-4">
                      <img
                        src={logo.companyImage}
                        alt={`Company ${logo.name}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ));
        })}
      </Slider>
    </div>
  );
};

export default App;