import { useState, useRef } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

const backSideImageUrl = "https://res.cloudinary.com/dcjmaapvi/image/upload/v1729943834/Yellow_Bcakground_jd3l6n.avif";

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
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1729942854/M1_kndj7a.webp",
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
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730194396/M3_xnzwgg.avif",
    },
    {
      title: "CATIA V5",
      description: [
        "Learn surface modeling and solid design for advanced industries.",
        "Handle large assemblies with real-time collaboration features.",

        "Integrate CAD with CAM for seamless manufacturing workflows.",
        "Use CATIA’s tools for automotive and aerospace design.",
      ],
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730194397/M2_yg20yk.avif",
    },
    {
      title: "SolidWorks",
      description: [
        "Develop expertise in 3D part and assembly modeling.",
        "Integrate Finite Element Analysis (FEA) for stress testing.",
        "Design sheet metal components and welded structures.",
        "Create technical drawings with BOM (Bill of Materials) for manufacturing.",
      ],
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730194397/M4_gavdip.avif",
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
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730194397/M5_wrrlft.avif",
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
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730194397/M6_vshu8w.avif",
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
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730683959/M1_2_cozb4g.webp",
    },
    {
      title: "STAAD Pro",
      description: [
        "Perform structural analysis for buildings, bridges, and other structures.",
        "Design earthquake-resistant structures with seismic codes.",
        "Calculate loads for structural safety (wind, dead, and live loads).",
        "Use Finite Element Method (FEM) for detailed structural analysis.",
      ],
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730684160/C3_oahje7_ohro79.webp",
    },
    {
      title: "Revit",
      description: [
        "Master Building Information Modeling (BIM) for civil projects.",
        "Create and modify architectural, structural, and MEP models.",
        "Coordinate real-time collaboration for multi-disciplinary teams.",
        "Detect and resolve clashes between building systems.",
      ],
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730684304/C4_hey6fk_thbvwx.webp",
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
      image: "https://res.cloudinary.com/dcjmaapvi/image/upload/v1730684431/C5_gjn7m9_eq0e4f.webp",
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
      image: "Civil Engineering/C2e.PNG",
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
      image: "computr-science/csfinal/CC1NEW.avif",
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
      image: "computr-science/csfinal/CS 2.avif",
    },
    {
      title: "Programming Languages",
      description: [
        "Learn Python, Java, and C++ for various real-world applications.",
        "Apply object-oriented programming for better software architecture.",

        "Master language-specific frameworks and libraries.",
        "Implement projects in real-world software development environments.",
      ],
      image: "computr-science/csfinal/prog.avif",
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
      image: "computr-science/csfinal/CS 6.avif",
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
      image: "computr-science/csfinal/appweb.avif",
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
      image: "computr-science/csfinal/CS 5.avif",
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
      image: "Electrical Eng/E1.avif",
    },
    {
      "title": "Electrical Vehicle",
      "description": [
        "Learn the fundamentals of electric vehicle (EV) systems and components.",
        "Understand battery management systems (BMS) and charging technologies.",
        "Explore the design and operation of electric motors in EVs.",
        "Master energy conversion and storage techniques in electric vehicles.",
        
      ],
      "image": "Electrical Eng/ev.avif"
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
      image: "Electrical Eng/E3.avif",
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
      image: "Electrical Eng/iotauto.avif",
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
      image: "Electrical Eng/E5.avif",
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
      image: "Electrical Eng/E6.avif",
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


  MBA: [
    {
      title: "Human Resources Management",
      description: [
          "Learn recruitment, talent management, and organizational behavior.",
          "Master employee relations and labor laws.",
          "Develop HR strategies for corporate growth.",
          "Implement training and development programs.",
          "Understand compensation and benefits management."
      ],
      image: "Course/MBA 1 1.png",
      backImage: "Course/hrbackn.PNG"
  }
,  
    {
      title: "Finance",
      description: [
        "Learn financial analysis, budgeting, and forecasting.",
        "Master corporate finance and capital structure management.",
        "Perform risk analysis and portfolio management.",
        "Understand financial markets and investment strategies.",
        "Develop skills in financial reporting and accounting.",
      ],
      image: "Course/MBA 2.png",
      backImage: "path/to/custom/backImage2.png", // Add unique back image URL
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
      image: "Course/MBA 3.png",
      backImage: "path/to/custom/backImage3.png", // Add unique back image URL
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
      image: "Course/MBA 4.png",
      backImage: "path/to/custom/backImage4.png", // Add unique back image URL
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
      image: "Course/MBA 5.png",
      backImage: "path/to/custom/backImage5.png", // Add unique back image URL
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
      image: "Course/MBA 6.png",
      backImage: "path/to/custom/backImage6.png", // Add unique back image URL
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
      image: "Course/MCA/final/PL.avif",
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
      image: "Course/MCA/final/DSAA.avif",
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
      image: "Course/MCA/final/DS.avif",
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
      image: "Course/MCA/final/SD.avif",
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
      image: "Course/MCA/final/NA.avif",
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
      image: "Course/MCA/final/LI.avif",
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
      image: "Course/image.png",
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
      image: "Course/logiTRY.png",
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
      image: "Course/FINtry.png",
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
      image: "Course/dmtry.png",
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
      image: "Course/mmctry.png",
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
      image: "Course/obtry.png",
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
      image: "Course/mdtry.png",
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
      image: "Course/civtry.png",
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
      image: "Course/electry.png",
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
      image: "Course/ittry.png",
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
      image: "Course/autotry.png",
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
      image: "Course/ph/PH1.avif",
    },
    {
      title: "Regulatory Affairs",
      description: [
        "Learn the regulatory framework governing the pharmaceutical industry.",
        "Master the drug approval processes for national and international markets.",
        "Understand Good Manufacturing Practice (GMP) and compliance standards.",
        "Prepare regulatory documents and submissions for health authorities.",
      ],
      image: "Course/ph/P2.avif",
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
      image: "Course/ph/P3.avif",
    },
    {
      title: "Clinical Research",
      description: [
        "Learn about clinical trial phases and their importance in drug development.",
        "Understand ethical and regulatory aspects of conducting clinical trials.",
        "Master data management and statistical analysis in clinical research.",
        "Develop skills for patient recruitment and management during trials.",
      ],
      image: "Course/ph/P4.avif",
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
      image: "Course/ph/P5.avif",
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
      image: "Course/gertry.avif",
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
      image: "Course/japtry.avif",
    },
  ],
  
};

// Button labels
const buttonLabels = {
  MECH: "Mechanical Engineering",
  CIVIL: "Civil Engineering",
  COMP: "Computer Science Engineering",
  ELECT: "Electrical Engineering",
  AIDS: "Artificial Intelligence and Data Science/Machine Learning",
  PHARMA: "Pharmacy",
  MBA: "Master of Business Administration",
  MCA: "Master of Computer Applications",
  BBA: "Bachelor of Business Administration",
  FOREIGN: "Foreign Languages",
  DIPLOMA: "Diploma",
};

const CourseSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("MECH");
  const [showCards, setShowCards] = useState({ MECH: true });
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track image load state

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    source: "MBA Brochure", // Add this line
  });

  const [downloadButtonVisible,] = useState(true);

  // Handle image load event
  const handleImageLoad = () => {
    setIsImageLoaded(true); // Image has loaded
  };

  // Toggle course selection
  const changeCourse = (courseKey) => {
    if (courseKey !== selectedCourse) {
      setShowCards({ [courseKey]: true });
      setSelectedCourse(courseKey);
    } else {
      setShowCards((prev) => ({ ...prev, [courseKey]: !prev[courseKey] }));
    }
  };

  // Toggle accordion open/close
  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  // Download the PDF brochure
  const downloadPDF = () => {
    const url = "Course/MBA - Training Module New 2.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "mba-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show the form modal for downloading the brochure
  const handleDownloadBrochure = () => {
    setFormVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Immediately change the button text to "Submitting..."
    setIsSubmitting(true);
  
    // Close the modal immediately after the user clicks submit (before the toast)
    setTimeout(() => {
      setFormVisible(false); // Close the form modal immediately
    }, 0); // Use 0 delay to close it instantly
    
    // Proceed with form submission
    const formData = new FormData();
    
    // Append form data to FormData object
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    // Include source explicitly (not strictly necessary if included in formState)
    formData.append("source", formState.source);
  
    try {
      // Send the form data to the server (or your chosen endpoint)
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (response.ok) {
        // Show success message via toast notification
        toast.success("Form successfully submitted! Downloading brochure...", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => {
            // Disable the submit button after submission
            setIsSubmitted(true); // Mark as submitted
          },
        });
        
        // Simulate download after submission
        setTimeout(downloadPDF, 0); // Delay download by 1 second
      } else {
        throw new Error("Submission failed.");
      }
    } catch (error) {
      // Show error toast if the submission failed
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Submission error:", error);
    } finally {
      // Ensure the button is re-enabled or stays disabled after the form submission
      if (!isSubmitted) {
        setIsSubmitting(false); // Re-enable the button only if not already submitted
      }
    }
  };
  
  

  // Responsive check for mobile
  const isMobile = window.innerWidth < 1024;

  return (
    <section className="mx-auto px-8 sm:px-16 bg-[#01224F] roboto-regular">
      <ToastContainer position="top-right" autoClose={3000} limit={1} />
      <div className="mb-4 md:mb-8 pt-4"> {/* pt-8 adds padding-top */}
  <p className="text-[#FFC80E] text-2xl sm:text-3xl lg:text-4xl xl:text-4xl text-center font-bold md:mb-4">
    Technical Training
  </p>
</div>

      <div className="container mx-auto flex flex-wrap">
        {/* Accordion for smaller screens */}
        <div className={`accordion-container w-full ${isMobile ? "block pb-8" : "hidden"}`}> {/* Add pb-8 for padding-bottom */}
  {Object.keys(courses).map((key, index) => (
    <div key={key}>
      <button
        onClick={() => toggleAccordion(index)}
        className={`flex justify-between items-center w-full py-3 px-4 transition-all duration-300
        ${accordionOpen === index ? "bg-[#FFC80E] text-[#003073]" : "bg-[#003073] text-white"}
        transform-gpu hover:bg-[#FFC80E] hover:text-[#003073]`}
      >
        <span className="text-left break-words ">{buttonLabels[key]}</span>
        <span className="flex items-center transition-all duration-300 transform hover:scale-105">
          {accordionOpen === index ? <FiChevronDown /> : <FiChevronRight />}
        </span>
      </button>
      {accordionOpen === index && (
        <div className="p-4 bg-[#003073] text-white">
          {courses[key].map((course, courseIndex) => (
            <div key={`${key}-${courseIndex}`} className="bg-white rounded-lg shadow-md p-2 mb-2">
              <h3 className="text-base text-[#003073] text-center">{course.title}</h3>
              <ul className="text-black text-sm text-left ml-4">
                {course.description.map((item, idx) => (
                  <li key={idx} className="list-disc list-outside">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</div>


        {/* Sidebar for larger screens */}
        <div className={`course-sidebar ${isMobile ? "hidden" : "w-1/4"} px-4 mb-8`}>
  <div className="bg-[#01224F] shadow-lg">
    {Object.keys(courses).map((key) => (
      <div key={key}>
        <button
          onClick={() => changeCourse(key)}
          className={`flex justify-between items-center w-full py-2 px-2 transition-all duration-300
          ${selectedCourse === key ? "bg-[#FFC80E] text-[#003073] transform translate-x-2 shadow-2xl" : "bg-[#003073] text-white"}
          transform-gpu hover:bg-[#FFC80E] hover:text-[#003073] hover:translate-x-2 hover:shadow-xl`}
        >
          <span className="text-left break-words text-sm lg:text-xl">{buttonLabels[key]}</span>
          
          {/* Always display the '>' symbol, change color for active button */}
          <span
            className={`ml-2 text-lg ${selectedCourse === key ? "text-[#003073]" : "text-[#FFC80E]"}`}
          >
            &gt;
          </span>
        </button>
      </div>
    ))}
  </div>
</div>


        {/* Content Area - Cards shown to the right of the sidebar */}
        <div
  className={`flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 ${isMobile ? "hidden" : ""}`}
>
  {Object.keys(courses).map(
    (key) =>
      showCards[key] &&
      courses[key].map((course, index) => (
        <div key={`${key}-${index}`} className="flip-card">
          <div className="flip-card-inner">
            {/* Front of the Card */}
            <div className="flip-card-front aspect-[3/2]">
              <div
                className={`w-full h-48 bg-gray-300 rounded dark:bg-gray-700 lg:hidden ${isImageLoaded ? "hidden" : "block"}`}
              ></div>
              <img
                src={course.image}
                alt={course.title}
                className={`object-cover w-full h-full ${isImageLoaded ? "block" : "hidden"}`}
                onLoad={handleImageLoad}
              />
            </div>

            {/* Back of the Card */}
            <div
              className="flip-card-back aspect-[3/2]"
              style={{
                backgroundImage: isMobile || selectedCourse !== "MBA"
                  ? `url('${backSideImageUrl}')`  // Default back image for mobile and non-MBA tabs
                  : `url('${course.backImage || backSideImageUrl}')`, // Custom back image for MBA tab on larger screens
              }}
            >
              {/* Only show description for MBA on smaller screens or larger screens with MBA tab selected */}
              {(isMobile || selectedCourse !== "MBA") && (
                <ul
                  className={`list-disc list-outside text-black text-sm lg:text-base`}
                >
                  {course.description.map((item, idx) => (
                    <li key={idx} className="pl-0">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))
  )}
</div>


      </div>

      {/* Floating Brochure Button */}
{!isMobile && selectedCourse === "MBA" && downloadButtonVisible && !isSubmitted && (
  <button
    onClick={handleDownloadBrochure}
    className="fixed bottom-20 right-6 z-50 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-yellow-400"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2M12 12V4m0 8l-4-4m4 4l4-4" />
    </svg>
    MBA Training Content
  </button>
)}


      {/* Inquiry Form Modal */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-6 text-center">
              Please provide your details:
            </h2>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
              <InputField
                label="Phone"
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
              <SelectField
                label="Category"
                name="category"
                value={formState.category}
                onChange={(e) => setFormState({ ...formState, category: e.target.value })}
              />
              <TextareaField
                label="Inquiry"
                name="message"
                placeholder="Your Inquiry"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
              <div className="flex justify-end mt-4">
              <button
  type="submit"
  className={`bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors ${
    isSubmitting || isSubmitted
      ? "bg-gray-400 cursor-not-allowed"
      : "hover:bg-blue-700"
  }`}
  disabled={isSubmitting || isSubmitted}
>
  {isSubmitting
    ? "Submitting..."
    : isSubmitted
    ? "Already Submitted"  // Updated text after submission
    : "Submit"}
</button>


                <button
                  type="button"
                  className="ml-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => setFormVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
          color: #003073 !important;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
        .flip-card-back ul {
          margin: 10px;
          padding-left: 20px;
          list-style-position: outside;
          list-style-type: disc;
          color: #003073;
        }
        .flip-card-back li {
          margin-left: 0;
          padding-left: 0;
        }
      `}</style>
    </section>
  );
};

const InputField = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    >
      <option value="">Select Category</option>
      <option value="college">College</option>
      <option value="corporate">Corporate</option>
      <option value="university">University</option>
    </select>
  </div>
);

const TextareaField = ({ label, name, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-1" htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      rows="4"
      className="w-full border border-gray-300 rounded-lg p-2 text-black focus:ring-2 focus:ring-yellow-400 transition-all"
    ></textarea>
  </div>
);

export default CourseSection;