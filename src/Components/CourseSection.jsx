import { useState, useRef } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';

const backSideImageUrl = '/MECH/Yellow Bcakground.png';

// Course data and button labels
const courses = {
  MECH: [
    { 
      title: 'AutoCAD', 
      description: [
        'Learn 2D and 3D mechanical drafting techniques for component design.',
        'Master industry-standard layering and annotations.',
        'Create precise mechanical drawings for manufacturing.',
        'Understand parametric design and modifications.',
        'Integrate AutoCAD designs with other engineering software.'
      ],
      image: '/MECH/M1.png'
    },
    { 
      title: 'Creo', 
      description: [
        'Master parametric 3D modeling for mechanical components.',
        'Learn advanced simulation for stress and motion analysis.',
        'Design and develop sheet metal components.',
        'Perform detailed assembly design and testing.',
        'Automate repetitive tasks through Creo’s customization tools.'
      ],
      image: 'MECH/M3.png'
    },
    { 
      title: 'CATIA V5', 
      description: [
        'Learn surface modeling and solid design for advanced industries.',
        'Handle large assemblies with real-time collaboration features.',
        
        'Integrate CAD with CAM for seamless manufacturing workflows.',
        'Use CATIA’s tools for automotive and aerospace design.'
      ],
      image: 'MECH/M2.png'
    },
    { 
      title: 'SolidWorks', 
      description: [
        'Develop expertise in 3D part and assembly modeling.',
        'Integrate Finite Element Analysis (FEA) for stress testing.',
        'Design sheet metal components and welded structures.',
        'Create technical drawings with BOM (Bill of Materials) for manufacturing.',
        
      ],
      image: 'MECH/M4.png'
    },
    { 
      title: 'CAD & CAM', 
      description: [
        'Learn how to integrate CAD designs with CAM processes.',
        'Master CNC programming and machining simulation.',
        'Design tooling and fixtures for production.',
        'Prepare models for 3D printing and rapid prototyping.',
        'Simulate machining operations to minimize errors.'
      ],
      image: 'MECH/M5.png'
    },
    { 
      title: 'Assembly', 
      description: [
        'Master component mating and constraint techniques.',
        'Perform tolerance stack-up analysis for precision assemblies.',
        'Create exploded views for clear assembly instructions.',
        'Simulate motion and mechanics of assembled parts.',
        'Automate Bill of Materials (BOM) generation for complex assemblies.'
      ],
      image: 'MECH/M6.png'
    }
]
,
CIVIL: [
  { 
    title: 'AutoCAD', 
    description: [
      'Learn 2D and 3D drafting for civil projects like site plans and layouts.',
      'Integrate survey data for site development and planning.',
      'Develop structural detailing for civil infrastructure.',
      'Create cross-sectional drawings and elevation views.',
      'Generate documentation and annotations per civil standards.'
    ],
    image: '/MECH/M1.png'
  },
  { 
    title: 'STAAD Pro', 
    description: [
      'Perform structural analysis for buildings, bridges, and other structures.',
      'Design earthquake-resistant structures with seismic codes.',
      'Calculate loads for structural safety (wind, dead, and live loads).',
      'Use Finite Element Method (FEM) for detailed structural analysis.',
      
    ],
    image: 'Civil Engineering/C3.png'
  },
  { 
    title: 'Revit', 
    description: [
      'Master Building Information Modeling (BIM) for civil projects.',
      'Create and modify architectural, structural, and MEP models.',
      'Coordinate real-time collaboration for multi-disciplinary teams.',
      'Detect and resolve clashes between building systems.',
      
    ],
    image: 'Civil Engineering/C4.png'
  },
  { 
    title: 'BIM', 
    description: [
      'Implement collaborative workflows for integrated project delivery.',
      'Manage project life cycles from concept to construction.',
      'Use 4D scheduling and 5D cost estimation within BIM models.',
      'Perform sustainability analysis to ensure energy efficiency.',
      'Ensure compliance with BIM standards in large-scale projects.'
    ],
    image: 'Civil Engineering/C5.png'
  },
  { 
    title: '3D Max', 
    description: [
      'Create realistic visualizations of architectural and civil designs.',
      'Learn lighting, material, and texture settings for photorealistic renderings.',
      'Develop walkthrough animations for client presentations.',
      'Design outdoor environments and landscapes.',
      'Integrate 3D models with BIM for detailed visualization.'
    ],
    image: 'Civil Engineering/C6.png'
  },
  { 
    title: 'Estimation and Costing', 
    description: [
      'Learn techniques for accurate quantity takeoffs and cost estimation.',
      'Develop budgets for civil engineering projects.',
      'Understand material and labor costing for construction management.',
      'Use estimation software for project tracking and reporting.',
      'Prepare financial reports for bidding and tenders.'
    ],
    image: 'Civil Engineering/C2.png'
  }
],

COMP: [
  { 
    title: 'Full Stack Development', 
    description: [
      'Learn front-end technologies like HTML, CSS, and JavaScript.',
      'Master back-end development with Node.js, Express.js, and databases.',
      'Build dynamic, responsive web applications with real-world projects.',
      'Integrate API development and management.',
      'Deploy full-stack applications on cloud platforms.'
    ],
    image: 'computr-science/CC1.png'
  },
  { 
    title: 'MERN', 
    description: [
      'Master MongoDB for database management.',
      'Learn Express.js for server-side frameworks.',
      'Develop with React.js for efficient front-end user interfaces.',
      'Implement Node.js for scalable back-end applications.',
      'Create and manage RESTful APIs for seamless data flow.'
    ],
    image: 'computr-science/CC5.png'
  },
  { 
    title: 'Programming Languages', 
    description: [
      'Learn Python, Java, and C++ for various real-world applications.',
      'Apply object-oriented programming for better software architecture.',
      
      'Master language-specific frameworks and libraries.',
      'Implement projects in real-world software development environments.'
    ],
    image: 'computr-science/CC3.png'
  },
  { 
    title: 'DSA (Data Structures & Algorithms)', 
    description: [
      'Learn data structures like arrays, linked lists, and hashmaps.',
      'Master sorting, searching, and graph algorithms.',
      'Optimize algorithms for time and space complexity.',
      'Apply dynamic programming techniques for problem-solving.',
      'Prepare for coding interviews with real-world examples.'
    ],
    image: 'computr-science/CC6.png'
  },
  { 
    title: 'App Development', 
    description: [
      'Develop cross-platform mobile applications using React Native and Flutter.',
      'Learn Android and iOS development with platform-specific tools.',
      'Integrate databases and APIs into mobile applications.',
      'Master UI/UX design principles for mobile applications.',
      'Deploy apps on app stores with continuous integration.'
    ],
    image: 'computr-science/CC2.png'
  },
  { 
    title: 'Linux', 
    description: [
      'Learn Linux system administration for server management.',
      'Master shell scripting for automating tasks.',
      'Configure Linux environments for software development.',
      'Manage users, processes, and permissions in Linux.',
      'Implement Linux-based solutions in cloud and networking environments.'
    ],
    image: 'computr-science/CC4.png'
  }
],

ELECT: [
  { 
    title: 'PLC SCADA', 
    description: [
      'Learn to program and configure PLC systems for industrial automation.',
      'Master SCADA systems for real-time process monitoring and control.',
      'Understand protocols and communication for industrial networks.',
      'Design and troubleshoot control systems in real-world applications.',
      'Develop HMI (Human Machine Interface) systems for user interaction.'
    ],
    image: 'Electrical Eng/E1.png'
  },
  { 
    title: 'GTNT', 
    description: [
      'Learn grounding and transient network testing for electrical safety.',
      'Master techniques for analyzing grounding systems in electrical networks.',
      'Troubleshoot transient faults and ensure equipment protection.',
      'Perform power quality analysis for better system reliability.',
      'Understand the use of protective devices in grounding networks.'
    ],
    image: 'Electrical Eng/E2.png'
  },
  { 
    title: 'BMS (Building Management System)', 
    description: [
      'Learn how to manage and control building automation systems.',
      'Integrate HVAC, lighting, and security systems for optimal performance.',
      'Monitor energy usage and improve building efficiency.',
      'Configure BMS software for real-time monitoring and control.',
      'Implement smart building technologies using IoT.'
    ],
    image: 'Electrical Eng/E3.png'
  },
  { 
    title: 'IoT', 
    description: [
      'Learn to design IoT solutions for home automation and industrial systems.',
      'Understand sensor networks and data collection processes.',
      'Master communication protocols like MQTT and CoAP for IoT devices.',
      'Develop real-time monitoring solutions with cloud integration.',
      'Implement security measures in IoT networks.'
    ],
    image: 'computr-science/CC2.png'
  },
  { 
    title: 'Transformers & Circuits', 
    description: [
      'Learn the design and operation of transformers and electrical circuits.',
      'Analyze transformer performance in various electrical systems.',
      'Master circuit analysis techniques for AC and DC circuits.',
      'Understand fault detection and maintenance of transformers.',
      'Design circuits with proper load balancing and protection.'
    ],
    image: 'Electrical Eng/5.jpg'
  },
  { 
    title: 'Wiring Harness', 
    description: [
      'Learn to design wiring harnesses for automotive and industrial systems.',
      'Master the principles of wiring routing and connector selection.',
      'Develop wiring schematics for various applications.',
      'Understand signal integrity and voltage drop in wiring systems.',
      'Implement testing and troubleshooting for wiring harnesses.'
    ],
    image: 'Electrical Eng/E6.png'
  }
],


  AIDS: [
    { 
      title: 'Introduction to Data Science', 
      description: [
        'Learn the basics of data science and how it applies to artificial intelligence.'
      ],
      image: 'https://placeholder.com/200x200'
    },
    { 
      title: 'Machine Learning with Python', 
      description: [
        'Explore machine learning techniques using Python, including regression and classification.'
      ],
      image: 'AIDS/2.jpg' 
    },
    { 
      title: 'Data Visualization', 
      description: [
        'Understand how to visualize data effectively to gain insights and make decisions.'
      ],
      image: 'AIDS/3.jpg' 
    },
    { 
      title: 'Big Data Analytics', 
      description: [
        'Learn about big data technologies and how to process and analyze large datasets.'
      ],
      image: 'AIDS/4.jpg' 
    },
    { 
      title: 'Deep Learning', 
      description: [
        'Dive into deep learning techniques and their applications in various fields.'
      ],
      image: 'AIDS/5.jpg' 
    },
    { 
      title: 'AI Ethics', 
      description: [
        'Study the ethical implications of artificial intelligence and data science.'
      ],
      image: 'AIDS/6.jpg' 
    }
  ],

  AIML: [
    { 
      title: 'Introduction to Artificial Intelligence', 
      description: [
        'Get started with the basics of AI, including machine learning and neural networks.'
      ],
      image: 'AIML/1.jpg' 
    },
    { 
      title: 'Deep Learning Specialization', 
      description: [
        'Dive deep into deep learning techniques and their applications in various fields.'
      ],
      image: 'AIML/2.jpg' 
    },
    { 
      title: 'Natural Language Processing', 
      description: [
        'Learn how to build systems that understand and generate human language.'
      ],
      image: 'AIML/3.jpg' 
    },
    { 
      title: 'AI for Business', 
      description: [
        'Explore how AI can be leveraged to solve business problems and drive innovation.'
      ],
      image: 'AIML/4.jpg' 
    },
    { 
      title: 'Computer Vision', 
      description: [
        'Understand the principles of computer vision and how to build applications that see and interpret the world.'
      ],
      image: 'AIML/5.jpg' 
    },
    { 
      title: 'Reinforcement Learning', 
      description: [
        'Learn about reinforcement learning and how to train AI agents to make decisions.'
      ],
      image: 'AIML/6.jpg' 
    }
  ],

  PHARMA: [
    { 
      title: 'Pharmacology Basics', 
      description: [
        'Learn the fundamentals of pharmacology, including drug interactions and side effects.'
      ],
      image: 'PHARMA/1.jpg' 
    },
    { 
      title: 'Clinical Trials Management', 
      description: [
        'Understand the process of managing clinical trials from start to finish.'
      ],
      image: 'PHARMA/2.jpg' 
    },
    { 
      title: 'Pharmaceutical Regulatory Affairs', 
      description: [
        'Explore the regulatory landscape and compliance requirements in the pharmaceutical industry.'
      ],
      image: 'PHARMA/3.jpg' 
    },
    { 
      title: 'Drug Development and Approval', 
      description: [
        'Learn about the drug development process and how new drugs are approved for market.'
      ],
      image: 'PHARMA/4.jpg' 
    },
    { 
      title: 'Quality Control in Pharmaceuticals', 
      description: [
        'Understand the principles of quality control and assurance in pharmaceutical manufacturing.'
      ],
      image: 'PHARMA/5.jpg' 
    },
    { 
      title: 'Pharmaceutical Marketing', 
      description: [
        'Explore strategies for marketing pharmaceutical products effectively in a competitive market.'
      ],
      image: 'PHARMA/6.jpg' 
    }
  ],

  MBA: [
    { 
      title: 'Strategic Management', 
      description: [
        'Learn how to develop business strategies that create competitive advantages.'
      ],
      image: 'MBA/1.jpg' 
    },
    { 
      title: 'Financial Accounting', 
      description: [
        'Understand financial statements and how to analyze them for better decision-making.'
      ],
      image: 'MBA/2.jpg' 
    },
    { 
      title: 'Marketing Management', 
      description: [
        'Explore key marketing concepts and strategies to drive customer engagement.'
      ],
      image: 'MBA/3.jpg' 
    },
    { 
      title: 'Operations Management', 
      description: [
        'Gain insights into optimizing operations to enhance productivity and efficiency.'
      ],
      image: 'MBA/4.jpg' 
    },
    { 
      title: 'Business Ethics', 
      description: [
        'Delve into ethical issues in business and learn how to navigate them responsibly.'
      ],
      image: 'MBA/5.jpg' 
    },
    { 
      title: 'Leadership and Organizational Behavior', 
      description: [
        'Develop leadership skills and understand the dynamics of organizational behavior.'
      ],
      image: 'MBA/6.jpg' 
    }
  ],

  MCA: [
    { 
      title: 'Java', 
      description: [
        'Gain expertise in Java programming language, focusing on object-oriented programming and software development.'
      ],
      image: 'MCA/1.jpg' 
    },
    { 
      title: 'OOPs', 
      description: [
        'Study Object-Oriented Programming (OOP) principles and their application in software development.'
      ],
      image: 'MCA/2.jpg' 
    },
    { 
      title: 'Python', 
      description: [
        'Learn Python for data analysis, web development, and automation.'
      ],
      image: 'MCA/3.jpg' 
    },
    { 
      title: 'Database Management', 
      description: [
        'Understand database systems and management techniques for effective data handling.'
      ],
      image: 'MCA/4.jpg' 
    },
    { 
      title: 'Software Engineering', 
      description: [
        'Explore software development methodologies and project management practices.'
      ],
      image: 'MCA/5.jpg' 
    },
    { 
      title: 'Web Technologies', 
      description: [
        'Get hands-on experience with web technologies including HTML, CSS, and JavaScript.'
      ],
      image: 'MCA/6.jpg' 
    }
  ],

  BBA: [
    { 
      title: 'Business Communication', 
      description: [
        'Develop communication skills essential for business environments.'
      ],
      image: 'BBA/1.jpg' 
    },
    { 
      title: 'Financial Management', 
      description: [
        'Understand the principles of financial management and how to make sound financial decisions.'
      ],
      image: 'BBA/2.jpg' 
    },
    { 
      title: 'Human Resource Management', 
      description: [
        'Explore the fundamentals of managing human resources in an organization.'
      ],
      image: 'BBA/3.jpg' 
    },
    { 
      title: 'Marketing Management', 
      description: [
        'Study marketing strategies and practices used to engage customers and drive business growth.'
      ],
      image: 'BBA/4.jpg' 
    },
    { 
      title: 'Organizational Behavior', 
      description: [
        'Understand the dynamics of behavior within organizations and how to manage it effectively.'
      ],
      image: 'BBA/5.jpg' 
    },
    { 
      title: 'Business Law', 
      description: [
        'Learn the legal aspects of running a business, including contracts, liability, and compliance.'
      ],
      image: 'BBA/6.jpg' 
    }
  ],

  DIPLOMA: [
    { 
      title: 'Diploma in Business Administration', 
      description: [
        'Comprehensive program in business administration with practical and theoretical knowledge.'
      ],
      image: 'MECH/M2.png' 
    },
    { 
      title: 'Diploma in Computer Science', 
      description: [
        'In-depth study of computer science fundamentals and programming.'
      ],
      image: 'MECH/M2.png' 
    },
    { 
      title: 'Diploma in Mechanical Engineering', 
      description: [
        'Focus on mechanical engineering principles and applications.'
      ],
      image: 'MECH/M2.png' 
    }
  ],

  FOREIGN: [
    { 
      title: 'German Language Basics', 
      description: [
        'Introduction to the German language, including basic vocabulary and grammar.'
      ],
      image: 'Germany/1.jpg' 
    },
    { 
      title: 'Japanese Language Basics', 
      description: [
        'Learn basic Japanese language skills, including essential vocabulary and grammar.'
      ],
      image: 'Japanese/1.jpg' 
    }
  ]
};

  
  // Button labels
  const buttonLabels = {
  MECH: 'MECHANICAL ENGINEERING',
  CIVIL: 'CIVIL ENGINEERING',
  COMP: 'COMPUTER SCIENCE ENGINEERING',
  ELECT: 'ELECTRICAL ENGINEERING',
  AIDS: 'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
  AIML: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING',
  PHARMA: 'PHARMACY',
  MBA: 'MASTER OF BUSINESS ADMINISTRATION',
  MCA: 'MASTER OF COMPUTER APPLICATIONS',
  BBA: 'BACHELOR OF BUSINESS ADMINISTRATION',
  FOREIGN: 'FOREIGN LANGUAGES',
  DIPLOMA: 'DIPLOMA'
  };

const CourseSection = () => {
    const [selectedCourse, setSelectedCourse] = useState('MECH');
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
                <p className="text-[#FFC80E] text-4xl text-center font-bold mb-4">TECHNICAL TRAINING</p>
            </div>
            <div className="container mx-auto flex flex-wrap">
                

                {/* Accordion for smaller screens */}
                <div className={`accordion-container w-full ${isMobile ? 'block' : 'hidden'}`}>
                    {Object.keys(courses).map((key, index) => (
                        <div key={key}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`flex justify-between items-center w-full py-3 px-4 transition-all duration-300 
                                ${accordionOpen === index ? 'bg-[#FFC80E] text-[#003073]' : 'bg-[#003073] text-white'} 
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
                                        <div key={`${key}-${courseIndex}`} className="bg-white rounded-lg shadow-md p-1 mb-2">
                                            <h3 className="text-base  text-[#003073]">{course.title}</h3>
                                            <ul className="text-black text-sm text-left  ">
                                                {course.description.map((item, idx) => (
                                                    <li key={idx} className="list-disc list-inside pl-2">
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

                <div className={`container mx-auto flex flex-wrap ${isMobile ? 'block' : 'flex'} ${showCards[selectedCourse] ? 'flex-row' : 'flex-col'}`}>
    {/* Sidebar for larger screens */}
    <div className={`course-sidebar ${isMobile ? 'hidden' : 'w-1/4'} px-4 mb-8`}>
        <div className="bg-[#091327] shadow-lg">
            {Object.keys(courses).map((key) => (
                <div key={key}>
                    <button
                        onClick={() => changeCourse(key)}
                        aria-expanded={showCards[key]}
                        className={`flex justify-between items-center w-full py-3 px-4 transition-all duration-300
                        ${selectedCourse === key ? 'bg-[#FFC80E] text-[#003073] transform translate-x-2 shadow-2xl' : 'bg-[#003073] text-white'}
                        transform-gpu hover:bg-[#FFC80E] hover:text-[#003073] hover:translate-x-2 hover:shadow-xl`}
                    >
                        <span className="text-left break-words text-sm lg:text-xl ">{buttonLabels[key]}</span>
                        <span className="flex items-center transition-all duration-300 transform hover:scale-105 hover:translate-x-1 hover:shadow-xl">
                            <FiChevronRight className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            ))}
        </div>
    </div>

    {/* Content Area - Cards shown to the right of the sidebar */}
    <div className={`flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ${isMobile ? 'hidden' : ''}`}>
        {Object.keys(courses).map(
            (key) =>
                showCards[key] &&
                courses[key].map((course, index) => (
                    <div key={`${key}-${index}`} className="flip-card" ref={(el) => (cardRefs.current[index] = el)}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front aspect-[3/2]">
                                <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
                            </div>
                            <div className="flip-card-back aspect-[3/2]">
                                <ul className="text-black text-sm lg:text-base text-left space-y-2">
                                    {course.description.map((item, idx) => (
                                        <li key={idx} className="list-disc list-inside pl-4 ">
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
                    padding: 20px;
                    color: #003073;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                }

                .flip-card-back ul {
                    padding: 0;
                    margin: 0;
                    text-align: left;
                    list-style-position: inside;
                    color: #ffffff;
                }
            `}</style>
        </section>
    );
};

export default CourseSection;
