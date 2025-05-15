import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CorporateApproach = () => {
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );
  const ref = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animations only happen once
    });

    const handleResize = () => {
      setIsMediumOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const approaches = [
    {
      title: "Easy to Implement",
      items: [
        {
          imgSrc: "CorporatePage/1.png",
          text: "Streamlined Training Delivery: Our offline and blended learning formats seamlessly integrate into your existing curriculum, minimizing disruption.",
          aosEffect: "fade-right",
        },
        {
          imgSrc: "CorporatePage/2.png",
          text: "Flexible Scheduling: Modular courses and on-demand access allow for customization to fit your organization's schedule.",
          aosEffect: "fade-up",
        },
        {
          imgSrc: "CorporatePage/3.png",
          text: "Enhanced Employee Engagement: Our engaging and interactive training programs foster a culture of learning and development.",
          aosEffect: "fade-left",
        },
      ],
    },
    {
      title: "Customized Content",
      items: [
        {
          imgSrc: "CorporatePage/1.png",
          text: "Needs Assessment: We work with you to identify specific skill gaps and tailor training to address your college's unique requirements.",
          aosEffect: "zoom-in",
        },
        {
          imgSrc: "CorporatePage/2.png",
          text: "Industry-Specific Modules: Choose from a diverse range of modules aligned with current industry trends and job demands.",
          aosEffect: "flip-up",
        },
        {
          imgSrc: "CorporatePage/3.png",
          text: "Alignment with Goals: Our customized approach ensures training aligns with your strategic objectives.",
          aosEffect: "fade-down",
        },
      ],
    },
    {
      title: "Industry Relevant",
      items: [
        {
          imgSrc: "CorporatePage/1.png",
          text: "Advisory Board: Our board comprises industry experts who ensure our training programs stay current.",
          aosEffect: "slide-up",
        },
        {
          imgSrc: "CorporatePage/2.png",
          text: "Real-World Case Studies: Students tackle authentic industry challenges through project-based learning.",
          aosEffect: "fade-in",
        },
        {
          imgSrc: "CorporatePage/3.png",
          text: "Improved Productivity: By addressing skills gaps, we empower employees to perform at their peak.",
          aosEffect: "zoom-out",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="corporate-approach-container bg-[#01224F] py-8 md:py-12 lg:py-16"
    >
      <div className="corporate-approach-content container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="corporate-approach-header flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
          <h1
            className="heading-text text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffc700] text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The Approach
          </h1>
          <div
            className="divider w-16 h-1 bg-[#ffc700] mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="corporate-approach-grid grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="approach-card bg-white text-gray-800 p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100 + 300}
            >
              <h2 className="card-heading text-lg sm:text-xl md:text-xl font-semibold mb-4 text-center text-[#01224F]">
                {approach.title}
              </h2>
              <div className="space-y-4">
                {approach.items.map((item, itemIndex) => (
                  <div
                    className="card-item flex items-start"
                    key={itemIndex}
                    data-aos={isMediumOrLarger ? item.aosEffect : "fade-up"}
                    data-aos-delay={itemIndex * 50 + index * 50 + 300}
                  >
                    <div className="icon-container bg-[#ffffff]  rounded-full flex-shrink-0">
                      <img
                        src={item.imgSrc}
                        alt=""
                        className="icon w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                    <p className="card-text ml-1 text-sm sm:text-base">
                      <span className="font-medium text-[#01224F]">
                        {item.text.split(":")[0]}:
                      </span>{" "}
                      {item.text.split(":")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateApproach;