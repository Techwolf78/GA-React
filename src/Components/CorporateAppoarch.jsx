import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CorporateApproach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(window.innerWidth >= 768);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasAnimated) {
        const { top, bottom, height } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleHeight = Math.max(0, Math.min(windowHeight, bottom) - Math.max(0, top));
        const visiblePercentage = (visibleHeight / height) * 100;

        if (visiblePercentage >= 50) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  const fadeInText = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const approaches = [
    {
      title: "Easy to Implement",
      items: [
        {
          imgSrc: "CorporatePage/1.png",
          text: "Streamlined Training Delivery: Our offline and blended learning formats seamlessly integrate into your existing curriculum, minimizing disruption.",
        },
        {
          imgSrc: "CorporatePage/2.png",
          text: "Flexible Scheduling: Modular courses and on-demand access allow for customization to fit your organization’s schedule.",
        },
        {
          imgSrc: "CorporatePage/3.png",
          text: "Enhanced Employee Engagement: Our engaging and interactive training programs foster a culture of learning and development, leading to a more motivated and engaged workforce.",
        },
      ],
    },
    {
      title: "Customized Content",
      items: [
        {
          imgSrc: "CorporatePage/1.png",
          text: "Needs Assessment: We work with you to identify specific skill gaps and tailor training to address your college’s unique requirements.",
        },
        {
          imgSrc: "CorporatePage/2.png",
          text: "Industry-Specific Modules: Choose from a diverse range of modules aligned with current industry trends and job demands.",
        },
        {
          imgSrc: "CorporatePage/3.png",
          text: "Alignment with Organizational Goals: Our customized approach ensures that training programs are directly aligned with your strategic objectives, propelling your organization towards achieving its goals.",
        },
      ],
    },
    {
      title: "Industry Relevant",
      items: [
        {
          imgSrc: "CorporatePage/1.png",
          text: "Advisory Board: Our board comprises industry experts who ensure our training programs stay current and prepare students for in-demand skills.",
        },
        {
          imgSrc: "CorporatePage/2.png",
          text: "Real-World Case Studies: Students tackle authentic industry challenges through project-based learning, gaining practical experience.",
        },
        {
          imgSrc: "CorporatePage/3.png",
          text: "Improved Productivity & Performance: By addressing skills gaps and equipping employees with the necessary tools, we empower them to perform at their peak, boosting overall productivity and efficiency.",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="corporate-approach-container bg-[#091327] py-4 roboto-regular">
      <div className="corporate-approach-content container mx-auto px-8 sm:px-8 md:px-16 lg:px-16">
        <div className="corporate-approach-header flex flex-col items-center mb-12">
          <motion.h1
            className="heading-text text-3xl md:text-4xl font-bold text-[#ffc700] text-center"
            initial="hidden"
            animate={isMediumOrLarger && isVisible ? "show" : "hidden"}
            variants={fadeInText}
            custom={0}
          >
            THE APPROACH
          </motion.h1>
        </div>

        <div className="corporate-approach-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="approach-card bg-[#ffffff] text-[#000000] p-6 rounded-lg shadow-lg flex flex-col transition-transform duration-300 hover:shadow-xl hover:bg-[#f8f9fa]"
              initial={{ opacity: 0 }}
              animate={isMediumOrLarger ? (isVisible ? { opacity: 1 } : { opacity: 0 }) : { opacity: 1 }} // Always visible on small screens
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="card-heading text-xl font-semibold mb-4 text-center"
                initial="hidden"
                animate={isMediumOrLarger && isVisible ? "show" : "hidden"}
                variants={fadeInText}
                custom={1}
              >
                {approach.title}
              </motion.h2>
              {approach.items.map((item, itemIndex) => (
                <div className="card-item flex items-start mb-2" key={itemIndex}>
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="icon w-14 h-14 transition-transform duration-300 hover:scale-110"
                  />
                  <p className="card-text ml-2 transition-opacity duration-300 hover:opacity-75">
                    <strong>{item.text.split(":")[0]}:</strong> {item.text.split(":")[1]}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateApproach;
