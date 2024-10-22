import { useState, useRef } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import "tailwindcss/tailwind.css";

const backSideImageUrl = "/MECH/Yellow Bcakground.png";

// Course data and button labels
const courses = {
  MECH: [
    {
      title: "AutoCAD",
      description: [
        "Learn 2D and 3D mechanical drafting techniques for component design.",
        "Master industry-standard layering and annotations.",
        "Create precise mechanical drawings for manufacturing.",
        "Understand parametric design and modifications.",
        "Integrate AutoCAD designs with other engineering software.",
      ],
      image: "/MECH/M1.png",
    },
    {
      title: "Creo",
      description: [
        "Master parametric 3D modeling for mechanical components.",
        "Learn advanced simulation for stress and motion analysis.",
        "Design and develop sheet metal components.",
        "Perform detailed assembly design and testing.",
        "Automate repetitive tasks through Creo’s customization tools.",
      ],
      image: "MECH/M3.png",
    },
    {
      title: "CATIA V5",
      description: [
        "Learn surface modeling and solid design for advanced industries.",
        "Handle large assemblies with real-time collaboration features.",

        "Integrate CAD with CAM for seamless manufacturing workflows.",
        "Use CATIA’s tools for automotive and aerospace design.",
      ],
      image: "MECH/M2.png",
    },
    {
      title: "SolidWorks",
      description: [
        "Develop expertise in 3D part and assembly modeling.",
        "Integrate Finite Element Analysis (FEA) for stress testing.",
        "Design sheet metal components and welded structures.",
        "Create technical drawings with BOM (Bill of Materials) for manufacturing.",
      ],
      image: "MECH/M4.png",
    },
    {
      title: "CAD & CAM",
      description: [
        "Learn how to integrate CAD designs with CAM processes.",
        "Master CNC programming and machining simulation.",
        "Design tooling and fixtures for production.",
        "Prepare models for 3D printing and rapid prototyping.",
        "Simulate machining operations to minimize errors.",
      ],
      image: "MECH/M5.png",
    },
    {
      title: "Assembly",
      description: [
        "Master component mating and constraint techniques.",
        "Perform tolerance stack-up analysis for precision assemblies.",
        "Create exploded views for clear assembly instructions.",
        "Simulate motion and mechanics of assembled parts.",
        "Automate Bill of Materials (BOM) generation for complex assemblies.",
      ],
      image: "MECH/M6.png",
    },
  ],
  CIVIL: [
    {
      title: "AutoCAD",
      description: [
        "Learn 2D and 3D drafting for civil projects like site plans and layouts.",
        "Integrate survey data for site development and planning.",
        "Develop structural detailing for civil infrastructure.",
        "Create cross-sectional drawings and elevation views.",
        "Generate documentation and annotations per civil standards.",
      ],
      image: "/MECH/M1.png",
    },
    {
      title: "STAAD Pro",
      description: [
        "Perform structural analysis for buildings, bridges, and other structures.",
        "Design earthquake-resistant structures with seismic codes.",
        "Calculate loads for structural safety (wind, dead, and live loads).",
        "Use Finite Element Method (FEM) for detailed structural analysis.",
      ],
      image: "Civil Engineering/C3.png",
    },
    {
      title: "Revit",
      description: [
        "Master Building Information Modeling (BIM) for civil projects.",
        "Create and modify architectural, structural, and MEP models.",
        "Coordinate real-time collaboration for multi-disciplinary teams.",
        "Detect and resolve clashes between building systems.",
      ],
      image: "Civil Engineering/C4.png",
    },
    {
      title: "BIM",
      description: [
        "Implement collaborative workflows for integrated project delivery.",
        "Manage project life cycles from concept to construction.",
        "Use 4D scheduling and 5D cost estimation within BIM models.",
        "Perform sustainability analysis to ensure energy efficiency.",
        "Ensure compliance with BIM standards in large-scale projects.",
      ],
      image: "Civil Engineering/C5.png",
    },
    {
      title: "3D Max",
      description: [
        "Create realistic visualizations of architectural and civil designs.",
        "Learn lighting, material, and texture settings for photorealistic renderings.",
        "Develop walkthrough animations for client presentations.",
        "Design outdoor environments and landscapes.",
        "Integrate 3D models with BIM for detailed visualization.",
      ],
      image: "Civil Engineering/C6.png",
    },
    {
      title: "Estimation and Costing",
      description: [
        "Learn techniques for accurate quantity takeoffs and cost estimation.",
        "Develop budgets for civil engineering projects.",
        "Understand material and labor costing for construction management.",
        "Use estimation software for project tracking and reporting.",
        "Prepare financial reports for bidding and tenders.",
      ],
      image: "Civil Engineering/C2.png",
    },
  ],

  COMP: [
    {
      title: "Full Stack Development",
      description: [
        "Learn front-end technologies like HTML, CSS, and JavaScript.",
        "Master back-end development with Node.js, Express.js, and databases.",
        "Build dynamic, responsive web applications with real-world projects.",
        "Integrate API development and management.",
        "Deploy full-stack applications on cloud platforms.",
      ],
      image: "computr-science/CC1.png",
    },
    {
      title: "MERN",
      description: [
        "Master MongoDB for database management.",
        "Learn Express.js for server-side frameworks.",
        "Develop with React.js for efficient front-end user interfaces.",
        "Implement Node.js for scalable back-end applications.",
        "Create and manage RESTful APIs for seamless data flow.",
      ],
      image: "computr-science/CS 2.png",
    },
    {
      title: "Programming Languages",
      description: [
        "Learn Python, Java, and C++ for various real-world applications.",
        "Apply object-oriented programming for better software architecture.",

        "Master language-specific frameworks and libraries.",
        "Implement projects in real-world software development environments.",
      ],
      image: "computr-science/CS 3.png",
    },
    {
      title: "DSA (Data Structures & Algorithms)",
      description: [
        "Learn data structures like arrays, linked lists, and hashmaps.",
        "Master sorting, searching, and graph algorithms.",
        "Optimize algorithms for time and space complexity.",
        "Apply dynamic programming techniques for problem-solving.",
        "Prepare for coding interviews with real-world examples.",
      ],
      image: "computr-science/CS 6.png",
    },
    {
      title: "App Development",
      description: [
        "Develop cross-platform mobile applications using React Native and Flutter.",
        "Learn Android and iOS development with platform-specific tools.",
        "Integrate databases and APIs into mobile applications.",
        "Master UI/UX design principles for mobile applications.",
        "Deploy apps on app stores with continuous integration.",
      ],
      image: "computr-science/CS 4.png",
    },
    {
      title: "Linux",
      description: [
        "Learn Linux system administration for server management.",
        "Master shell scripting for automating tasks.",
        "Configure Linux environments for software development.",
        "Manage users, processes, and permissions in Linux.",
        "Implement Linux-based solutions in cloud and networking environments.",
      ],
      image: "computr-science/CS 5.png",
    },
  ],

  ELECT: [
    {
      title: "PLC SCADA",
      description: [
        "Learn to program and configure PLC systems for industrial automation.",
        "Master SCADA systems for real-time process monitoring and control.",
        "Understand protocols and communication for industrial networks.",
        "Design and troubleshoot control systems in real-world applications.",
        "Develop HMI (Human Machine Interface) systems for user interaction.",
      ],
      image: "Electrical Eng/E1.png",
    },
    {
      title: "GTNT",
      description: [
        "Learn grounding and transient network testing for electrical safety.",
        "Master techniques for analyzing grounding systems in electrical networks.",
        "Troubleshoot transient faults and ensure equipment protection.",
        "Perform power quality analysis for better system reliability.",
        "Understand the use of protective devices in grounding networks.",
      ],
      image: "Electrical Eng/E2.png",
    },
    {
      title: "BMS (Building Management System)",
      description: [
        "Learn how to manage and control building automation systems.",
        "Integrate HVAC, lighting, and security systems for optimal performance.",
        "Monitor energy usage and improve building efficiency.",
        "Configure BMS software for real-time monitoring and control.",
        "Implement smart building technologies using IoT.",
      ],
      image: "Electrical Eng/E3.png",
    },
    {
      title: "IoT",
      description: [
        "Learn to design IoT solutions for home automation and industrial systems.",
        "Understand sensor networks and data collection processes.",
        "Master communication protocols like MQTT and CoAP for IoT devices.",
        "Develop real-time monitoring solutions with cloud integration.",
        "Implement security measures in IoT networks.",
      ],
      image: "Electrical Eng/E4.png",
    },
    {
      title: "Transformers & Circuits",
      description: [
        "Learn the design and operation of transformers and electrical circuits.",
        "Analyze transformer performance in various electrical systems.",
        "Master circuit analysis techniques for AC and DC circuits.",
        "Understand fault detection and maintenance of transformers.",
        "Design circuits with proper load balancing and protection.",
      ],
      image: "Electrical Eng/E5.png",
    },
    {
      title: "Wiring Harness",
      description: [
        "Learn to design wiring harnesses for automotive and industrial systems.",
        "Master the principles of wiring routing and connector selection.",
        "Develop wiring schematics for various applications.",
        "Understand signal integrity and voltage drop in wiring systems.",
        "Implement testing and troubleshooting for wiring harnesses.",
      ],
      image: "Electrical Eng/E6.png",
    },
  ],

  AIDS: [
    {
      title: "Machine Learning",
      description: [
        "Learn supervised, unsupervised, and reinforcement learning models.",
        "Master algorithm implementation for real-world applications.",
        "Perform data preprocessing and feature engineering.",
        "Understand model evaluation and optimization techniques.",
        "Apply machine learning to predictive analytics.",
      ],
      image: "computr-science/A1.png",
    },
    {
      title: "Mathematics & Linear Algebra",
      description: [
        "Master linear algebra concepts essential for data science.",
        "Learn matrix operations, eigenvalues, and eigenvectors.",
        "Apply linear algebra in solving optimization problems.",
        "Understand vector spaces and transformations for machine learning.",
        "Use mathematics for solving regression and classification tasks.",
      ],
      image: "computr-science/A6.png",
    },
    {
      title: "Statistics",
      description: [
        "Learn probability theory and statistical inference for data analysis.",
        "Master hypothesis testing, p-values, and confidence intervals.",
        "Apply statistical models in machine learning algorithms.",
        "Understand descriptive and inferential statistics for data science.",
        "Perform regression analysis and ANOVA in real-world data.",
      ],
      image: "computr-science/A2.png",
    },
    {
      title: "Big Data Analytics",
      description: [
        "Learn big data tools like Hadoop and Spark for data processing.",
        "Master distributed computing for large-scale data analysis.",
        "Develop data pipelines for real-time data processing.",
        "Apply big data analytics in business intelligence.",
        "Implement data lakes and warehouses for efficient storage.",
      ],
      image: "computr-science/A3.png",
    },
    {
      title: "Data Visualization",
      description: [
        "Master data visualization tools like Tableau and Power BI.",
        "Learn to present data insights effectively using charts and graphs.",
        "Apply storytelling techniques in data presentation.",
        "Visualize complex data using advanced visualization techniques.",
        "Develop dashboards for real-time data monitoring.",
      ],
      image: "computr-science/A4.png",
    },
    {
      title: "RDBMS",
      description: [
        "Learn relational database management with SQL.",
        "Master database design, normalization, and indexing.",
        "Perform complex queries for data retrieval and manipulation.",
        "Understand transaction management and concurrency control.",
        "Develop applications with database integration.",
      ],
      image: "computr-science/A5.png",
    },
  ],
  PHARMA: [
    {
      title: "Pharmaceutical Management",
      description: [
        "Learn the fundamentals of managing pharmaceutical operations.",
        "Master inventory control and supply chain management in pharma.",
        "Understand regulatory compliance and drug approval processes.",
        "Develop skills in pharmacy financial management and budgeting.",
        "Implement quality control and risk management in pharmaceutical environments.",
      ],
      image: "PHARMA/Management.jpg",
    },
    {
      title: "Regulatory Affairs",
      description: [
        "Learn the regulatory framework governing the pharmaceutical industry.",
        "Master the drug approval processes for national and international markets.",
        "Understand Good Manufacturing Practice (GMP) and compliance standards.",
        "Prepare regulatory documents and submissions for health authorities.",
      ],
      image: "PHARMA/Regulatory.jpg",
    },
    {
      title: "Pharmaceutical Marketing",
      description: [
        "Learn strategies for marketing pharmaceutical products.",
        "Master the principles of product lifecycle management in the pharma industry.",
        "Develop skills in digital marketing for pharmaceuticals.",
        "Understand regulatory restrictions on pharmaceutical advertising.",
        "Implement salesforce and healthcare professional engagement strategies.",
      ],
      image: "PHARMA/Marketing.jpg",
    },
    {
      title: "Clinical Research",
      description: [
        "Learn about clinical trial phases and their importance in drug development.",
        "Understand ethical and regulatory aspects of conducting clinical trials.",
        "Master data management and statistical analysis in clinical research.",
        "Develop skills for patient recruitment and management during trials.",
      ],
      image: "PHARMA/ClinicalResearch.jpg",
    },
    {
      title: "Pharmacovigilance",
      description: [
        "Learn drug safety monitoring and adverse event reporting processes.",
        "Understand global pharmacovigilance regulations and compliance.",
        "Master risk management and signal detection techniques in drug safety.",
        "Develop skills in data collection, assessment, and reporting.",
        "Implement systems for post-market surveillance and safety assessments.",
      ],
      image: "PHARMA/Pharmacovigilance.jpg",
    },
  ],

  MBA: [
    {
      title: "Human Resources Management",
      description: [
        "Learn recruitment, talent management, and organizational behavior.",
        "Master employee relations and labor laws.",
        "Develop HR strategies for corporate growth.",
        "Implement training and development programs.",
        "Understand compensation and benefits management.",
      ],
      image: "MBA/HR.jpg",
    },
    {
      title: "Finance",
      description: [
        "Learn financial analysis, budgeting, and forecasting.",
        "Master corporate finance and capital structure management.",
        "Perform risk analysis and portfolio management.",
        "Understand financial markets and investment strategies.",
        "Develop skills in financial reporting and accounting.",
      ],
      image: "MBA/Finance.jpg",
    },
    {
      title: "Marketing",
      description: [
        "Master digital marketing, social media, and branding strategies.",
        "Learn consumer behavior and market research techniques.",
        "Develop product development and go-to-market strategies.",
        "Implement salesforce management and customer relationship management (CRM).",
        "Use analytics for marketing performance evaluation.",
      ],
      image: "MBA/Marketing.jpg",
    },
    {
      title: "Operations Management",
      description: [
        "Learn supply chain management and logistics optimization.",
        "Master project management tools and techniques.",
        "Understand inventory management and lean operations.",
        "Develop process optimization strategies for manufacturing and service industries.",
        "Implement quality control measures using Six Sigma.",
      ],
      image: "MBA/Operations.jpg",
    },
    {
      title: "International Business",
      description: [
        "Learn global trade regulations and international market entry strategies.",
        "Master cross-cultural communication and management.",
        "Develop international marketing and supply chain strategies.",
        "Understand foreign exchange risk and management.",
        "Implement strategies for global expansion and partnerships.",
      ],
      image: "MBA/InternationalBusiness.jpg",
    },
    {
      title: "Analytical Decision Making",
      description: [
        "Learn data analysis and statistical tools for business decision-making.",
        "Master financial modeling and forecasting.",
        "Perform market trend analysis using advanced analytical tools.",
        "Develop strategies based on data-driven insights.",
        "Implement analytics for business performance optimization.",
      ],
      image: "MBA/Analytics.jpg",
    },
  ],

  MCA: [
    {
      title: "Programming Languages",
      description: [
        "Learn core languages like Java, Python, and C++ for software development.",
        "Master object-oriented programming principles.",
        "Implement software applications with real-world projects.",
        "Develop skills in mobile, web, and system software development.",
        "Apply algorithms and data structures to optimize software solutions.",
      ],
      image: "MCA/Programming.jpg",
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      description: [
        "Master key data structures for efficient program execution.",
        "Learn algorithms for sorting, searching, and dynamic programming.",
        "Solve complex computational problems using advanced algorithms.",
        "Prepare for technical interviews with coding challenges.",
        "Implement algorithmic solutions in real-world applications.",
      ],
      image: "MCA/DSA.jpg",
    },
    {
      title: "Data Science",
      description: [
        "Learn machine learning algorithms and statistical modeling.",
        "Master data mining, data preprocessing, and feature selection.",
        "Implement predictive models using Python and R.",
        "Develop skills in deep learning and AI applications.",
        "Use data visualization tools to interpret results.",
      ],
      image: "MCA/DataScience.jpg",
    },
    {
      title: "Software Development",
      description: [
        "Learn software development methodologies, including Agile and Waterfall.",
        "Master full software lifecycle management from design to deployment.",
        "Develop applications using modern programming frameworks.",
        "Implement version control and continuous integration.",
        "Perform software testing and debugging for reliable solutions.",
      ],
      image: "MCA/SoftwareDevelopment.jpg",
    },
    {
      title: "Networking Administration",
      description: [
        "Learn network protocols, routing, and switching.",
        "Master network security measures, including firewalls and VPNs.",
        "Implement server management and configuration.",
        "Understand cloud computing architectures and services.",
        "Monitor and troubleshoot networks for efficient performance.",
      ],
      image: "MCA/Networking.jpg",
    },
    {
      title: "Linux",
      description: [
        "Master Linux system administration for servers and workstations.",
        "Learn shell scripting for automation.",
        "Configure and manage user roles, permissions, and file systems.",
        "Implement network services like DNS, FTP, and web servers on Linux.",
        "Perform system security and updates for Linux environments.",
      ],
      image: "MCA/Linux.jpg",
    },
  ],
  BBA: [
    {
      title: "International Business",
      description: [
        "Learn global trade strategies and regulations.",
        "Master international marketing and market entry tactics.",
        "Develop cross-border supply chain management skills.",
        "Understand currency exchange and risk management.",
        "Implement strategies for global business expansion.",
      ],
      image: "BBA/InternationalBusiness.jpg",
    },
    {
      title: "Logistics",
      description: [
        "Learn supply chain and logistics management.",
        "Master warehouse management and inventory control.",
        "Understand transportation systems and distribution strategies.",
        "Develop skills in procurement and supplier management.",
        "Implement technology in logistics for better efficiency.",
      ],
      image: "BBA/Logistics.jpg",
    },
    {
      title: "Finance",
      description: [
        "Learn financial management and corporate finance.",
        "Master budgeting, forecasting, and financial analysis.",
        "Perform investment analysis and portfolio management.",
        "Understand risk management and financial planning.",
        "Develop skills in accounting and financial reporting.",
      ],
      image: "BBA/Finance.jpg",
    },
    {
      title: "Digital Marketing",
      description: [
        "Learn online marketing strategies, including SEO and SEM.",
        "Master social media marketing and content strategies.",
        "Develop analytics-driven marketing campaigns.",
        "Implement tools like Google Analytics and AdWords.",
        "Understand e-commerce and digital branding.",
      ],
      image: "BBA/DigitalMarketing.jpg",
    },
    {
      title: "Mass Media Communication",
      description: [
        "Learn public relations and media planning.",
        "Master advertising and content development.",
        "Understand communication strategies for digital and print media.",
        "Develop skills in journalism and news reporting.",
        "Implement audience research for targeted communication.",
      ],
      image: "BBA/MassMediaCommunication.jpg",
    },
    {
      title: "Organizational Behavior",
      description: [
        "Learn the dynamics of individual and group behavior in organizations.",
        "Master motivation, leadership, and team-building techniques.",
        "Understand organizational culture and change management.",
        "Develop strategies for conflict resolution and communication.",
        "Implement management practices for employee engagement.",
      ],
      image: "BBA/OrganizationalBehavior.jpg",
    },
  ],
  DIPLOMA: [
    {
      title: "Mechanical Diploma",
      description: [
        "Learn the fundamentals of mechanical drafting and CAD.",
        "Master workshop practices and machining processes.",
        "Understand the principles of thermodynamics and fluid mechanics.",
        "Develop skills in maintenance and troubleshooting of mechanical systems.",
        "Apply theoretical knowledge to practical projects and industry scenarios.",
      ],
      image: "DIPLOMA/Mechanical.jpg",
    },
    {
      title: "Civil Diploma",
      description: [
        "Learn drafting techniques for civil engineering structures.",
        "Master surveying methods and use of surveying equipment.",
        "Understand construction materials and building technologies.",
        "Develop skills in structural analysis and design for small projects.",
        "Implement project management techniques for civil construction projects.",
      ],
      image: "DIPLOMA/Civil.jpg",
    },
    {
      title: "Electrical Diploma",
      description: [
        "Learn the basics of electrical circuits and systems.",
        "Master wiring and electrical installation techniques.",
        "Understand electrical machines and their operation.",
        "Develop skills in troubleshooting and repairing electrical equipment.",
        "Gain knowledge of industrial automation, PLC, and SCADA systems.",
      ],
      image: "DIPLOMA/Electrical.jpg",
    },
    {
      title: "IT Diploma",
      description: [
        "Learn programming languages like Python, Java, or C++.",
        "Master web development fundamentals, including HTML, CSS, and JavaScript.",
        "Understand database management and SQL.",
        "Develop skills in networking and system administration.",
        "Apply IT concepts to practical software development and troubleshooting projects.",
      ],
      image: "DIPLOMA/IT.jpg",
    },
    {
      title: "Automobile Diploma",
      description: [
        "Learn the fundamentals of automobile systems and components.",
        "Master engine maintenance, repair, and diagnostics.",
        "Understand vehicle dynamics and design principles.",
        "Develop skills in the use of diagnostic tools and technology.",
        "Implement knowledge of automotive electronics and hybrid vehicles.",
      ],
      image: "DIPLOMA/Automobile.jpg",
    },
  ],
  FOREIGN: [
    {
      title: "German Language Basics",
      description: [
        "Learn everyday German phrases and vocabulary.",
        "Master basic grammar and sentence construction.",
        "Practice conversational skills for real-world situations.",
        "Understand German culture and customs.",
        "Develop skills for reading, writing, and listening in German.",
      ],
      image: "Germany/1.jpg",
    },
    {
      title: "Japanese Language Basics",
      description: [
        "Learn key Japanese phrases and basic grammar.",
        "Master hiragana, katakana, and kanji characters.",
        "Practice speaking and listening skills for daily conversations.",
        "Understand Japanese culture and etiquette.",
        "Develop reading and writing skills for simple texts.",
      ],
      image: "Japanese/1.jpg",
    },
  ],
  
};

// Button labels
const buttonLabels = {
  MECH: "MECHANICAL ENGINEERING",
  CIVIL: "CIVIL ENGINEERING",
  COMP: "COMPUTER SCIENCE ENGINEERING",
  ELECT: "ELECTRICAL ENGINEERING",
  AIDS: "ARTIFICIAL INTELLIGENCE AND DATA SCIENCE/MACHINE LEARNING",
  PHARMA: "PHARMACY",
  MBA: "MASTER OF BUSINESS ADMINISTRATION",
  MCA: "MASTER OF COMPUTER APPLICATIONS",
  BBA: "BACHELOR OF BUSINESS ADMINISTRATION",
  FOREIGN: "FOREIGN LANGUAGES",
  DIPLOMA: "DIPLOMA",
};

const CourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("MECH");
  const [showCards, setShowCards] = useState({ MECH: true });
  const [accordionOpen, setAccordionOpen] = useState(null);
  const cardRefs = useRef([]);

  const changeCourse = (courseKey) => {
    if (courseKey !== selectedCourse) {
      setShowCards({ [courseKey]: true });
      setSelectedCourse(courseKey);
    } else {
      setShowCards((prev) => ({ ...prev, [courseKey]: !prev[courseKey] }));
    }
  };

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  const isMobile = window.innerWidth < 768;

  return (
    <section className="mx-auto px-8 sm:px-16 bg-[#091327] roboto-regular">
      <div className="mb-8">
        <p className="text-[#FFC80E] text-4xl text-center font-bold mb-4">
          TECHNICAL TRAINING
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap">
        {/* Accordion for smaller screens */}
        <div
          className={`accordion-container w-full ${
            isMobile ? "block" : "hidden"
          }`}
        >
          {Object.keys(courses).map((key, index) => (
            <div key={key}>
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center w-full py-3 px-4 transition-all duration-300 
                        ${
                          accordionOpen === index
                            ? "bg-[#FFC80E] text-[#003073]"
                            : "bg-[#003073] text-white"
                        } 
                        transform-gpu hover:bg-[#FFC80E] hover:text-[#003073]`}
              >
                <span className="text-left break-words ">
                  {buttonLabels[key]}
                </span>
                <span className="flex items-center transition-all duration-300 transform hover:scale-105">
                  {accordionOpen === index ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  )}
                </span>
              </button>
              {accordionOpen === index && (
                <div className="p-4 bg-[#003073] text-white">
                  {courses[key].map((course, courseIndex) => (
                    <div
                      key={`${key}-${courseIndex}`}
                      className="bg-white rounded-lg shadow-md p-2 mb-2" // Increased padding for better centering
                    >
                      <h3 className="text-base text-[#003073] text-center">
                        {" "}
                        {/* Centering title */}
                        {course.title}
                      </h3>
                      <ul className="text-black text-sm text-left ml-4">
                        {course.description.map((item, idx) => (
                          <li key={idx} className="list-disc list-outisde ">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`container mx-auto flex flex-wrap ${
            isMobile ? "block" : "flex"
          } ${showCards[selectedCourse] ? "flex-row" : "flex-col"}`}
        >
          {/* Sidebar for larger screens */}
          <div
            className={`course-sidebar ${
              isMobile ? "hidden" : "w-1/4"
            } px-4 mb-8`}
          >
            <div className="bg-[#091327] shadow-lg">
              {Object.keys(courses).map((key) => (
                <div key={key}>
                  <button
                    onClick={() => changeCourse(key)}
                    aria-expanded={showCards[key]}
                    className={`flex justify-between items-center w-full py-2 px-2 transition-all duration-300
                        ${
                          selectedCourse === key
                            ? "bg-[#FFC80E] text-[#003073] transform translate-x-2 shadow-2xl"
                            : "bg-[#003073] text-white"
                        }
                        transform-gpu hover:bg-[#FFC80E] hover:text-[#003073] hover:translate-x-2 hover:shadow-xl`}
                  >
                    <span className="text-left break-words text-sm lg:text-xl ">
                      {buttonLabels[key]}
                    </span>
                    <span className="flex items-center transition-all duration-300 transform hover:scale-105 hover:translate-x-1 hover:shadow-xl">
                      <FiChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area - Cards shown to the right of the sidebar */}
          <div
            className={`flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
              isMobile ? "hidden" : ""
            }`}
          >
            {Object.keys(courses).map(
              (key) =>
                showCards[key] &&
                courses[key].map((course, index) => (
                  <div
                    key={`${key}-${index}`}
                    className="flip-card"
                    ref={(el) => (cardRefs.current[index] = el)}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front aspect-[3/2]">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flip-card-back aspect-[3/2]">
                        <ul className="list-disc list-outside text-black text-sm lg:text-base">
                          {course.description.map((item, idx) => (
                            <li key={idx} className="pl-0">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>

      <style>{`
                /* Flip card styles */
                .flip-card {
                    perspective: 1000px;
                    width: 100%;
                    max-width: 300px;
                    height: 330px;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }

                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }

                .flip-card-front,
                .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .flip-card-front {
                    background-color: #f8f8f8;
                }

                .flip-card-back {
                    background-image: url('${backSideImageUrl}');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    transform: rotateY(180deg);
                    padding: 0px;
                    color: #003073 !important; /* Ensure this is applied */
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                  
                }

                .flip-card-back ul {
                  margin: 10px; /* Remove margin from ul */
                  padding-left: 20px; /* Space for bullet points */
                  list-style-position: outside; /* Ensure bullet points are outside the list item */
                  list-style-type: disc; /* Optional: specify the bullet type */
                  color: #003073; /* Set text color for the list items */
                }

                .flip-card-back li {
                  margin-left: 0; /* Remove any left margin from li */
                  padding-left: 0; /* Remove any padding */
                }
            `}</style>
    </section>
  );
};

export default CourseSection;
