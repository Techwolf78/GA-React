import  { useState,  useRef } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'; // Importing React Icons
import 'tailwindcss/tailwind.css';

// Add this image URL for the back side of all cards
const backSideImageUrl = '/MECH/Yellow Bcakground.png'; // Update this with your actual image path

// Course data and button labels
const courses = {
  MECH: [
    { 
      title: 'AUTOCAD', 
      description: [
        'Learn AutoCAD for both 2D drafting and 3D design.',
        'Understand basic and advanced drawing techniques.',
        'Master tools for dimensioning, annotations, and layout planning.',
        'Use AutoCAD for mechanical design in various industries.'
      ],
      image: '/MECH/M1.png'
    },
    { 
      title: 'CREO', 
      description: [
        'Master CREO CAD software for parametric modeling.',
        'Learn both direct modeling and generative design techniques.',
        'Understand the integration of CREO with other PLM tools.',
        'Apply CREO to solve real-world mechanical design challenges.'
      ],
      image: 'MECH/M3.png'
    },
    { 
      title: 'CATIA V5', 
      description: [
        'Explore CATIA’s advanced 3D modeling capabilities.',
        'Design complex mechanical systems using parametric and direct modeling.',
        'Gain proficiency in creating assembly and part design.',
        'Understand how to leverage CATIA for engineering simulations.'
      ],
      image: 'MECH/M2.png'
    },
    { 
      title: 'SOLIDWORKS', 
      description: [
        'Learn 3D CAD design using SolidWorks.',
        'Understand product data management and version control.',
        'Gain skills in simulation and structural analysis.',
        'Master the tools for assembly design and optimization.'
      ],
      image: 'MECH/M4.png'
    },
    { 
      title: 'CAD & CAM', 
      description: [
        'Learn the fundamentals of Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM).',
        'Understand the integration of design and manufacturing processes.',
        'Study the role of CAD/CAM in optimizing mechanical engineering workflows.',
        'Gain hands-on experience in designing and fabricating prototypes.'
      ],
      image: 'MECH/M5.png'
    },
    { 
      title: 'Assembly', 
      description: [
        'Study the principles of mechanical assembly.',
        'Learn how to design efficient and optimized mechanical systems.',
        'Understand the impact of tolerances and fits in assembly design.',
        'Analyze and troubleshoot assembly processes in real-world applications.'
      ],
      image: 'MECH/M6.png'
    }
  ],

  CIVIL: [
    { 
      title: 'AUTO CAD', 
      description: [
        'Learn the fundamentals of AutoCAD for civil engineering drafting.',
        'Understand how to create and modify 2D and 3D designs.',
        'Explore layer management, annotations, and plotting techniques.',
        'Study best practices for accurate and efficient design representation.'
      ],
      image: '/MECH/M1.png'
    },
 
    { 
      title: 'STAAD PRO', 
      description: [
        'Master the use of STAAD Pro for structural analysis and design.',
        'Learn to model, analyze, and design complex structures.',
        'Explore various load cases and their impact on structural performance.',
        'Understand the integration of design codes and standards in analysis.'
      ],
      image: 'Civil Engineering/C3.png'
    },
    { 
      title: 'REVIT', 
      description: [
        'Gain proficiency in Revit for advanced Building Information Modeling (BIM).',
        'Explore the creation and management of 3D architectural models.',
        'Learn how to collaborate effectively in multidisciplinary teams.',
        'Understand the importance of documentation and visualization in projects.'
      ],
      image: 'Civil Engineering/C4.png'
    },
    { 
      title: 'BIM', 
      description: [
        'Delve deeper into Building Information Modeling for project management.',
        'Understand the workflow and benefits of BIM in civil engineering.',
        'Learn to coordinate between different disciplines using BIM tools.',
        'Explore the future of construction with integrated data and modeling.'
      ],
      image: 'Civil Engineering/C5.png'
    },
    { 
      title: 'MAX 3D', 
      description: [
        'Discover the application of 3ds Max in visualizing civil engineering projects.',
        'Learn to create realistic renderings and animations of designs.',
        'Explore the use of lighting, materials, and textures for presentations.',
        'Understand how to communicate design intent effectively through 3D visuals.'
      ],
      image: 'Civil Engineering/C6.png'
    },
    { 
      title: 'ESTIMATION & COSTING', 
      description: [
        'Understand the principles of project estimation and budgeting.',
        'Learn how to prepare detailed cost estimates for civil projects.',
        'Explore methods for analyzing project expenses and resources.',
        'Study the impact of accurate estimation on project success.'
      ],
      image: 'Civil Engineering/C2.png'
    }
],


  COMP: [
    { 
      title: 'FULL STACK DEVELOPMENT', 
      description: [
        'Get comprehensive training in both front-end and back-end development.',
        'Learn HTML, CSS, JavaScript for building web interfaces.',
        'Explore backend technologies like Node.js, Express, and databases.',
        'Understand how to integrate web applications with APIs and cloud services.'
      ],
      image: 'computr-science/CC1.png'
    },
    { 
      title: 'IoT', 
      description: [
        'Learn about the Internet of Things (IoT) and smart devices.',
        'Understand the technologies behind connected systems and devices.',
        'Study protocols for communication between IoT devices (MQTT, HTTP, etc.).',
        'Gain hands-on experience in building IoT applications and solutions.'
      ],
      image: 'computr-science/CC2.png'
    },
    { 
      title: 'JAVA', 
      description: [
        'Master the Java programming language for developing robust applications.',
        'Understand object-oriented programming (OOP) principles.',
        'Learn about Java libraries, frameworks, and tools for development.',
        'Gain experience building enterprise-level applications and systems.'
      ],
      image: 'computr-science/CC3.png'
    },
    { 
      title: 'LINUX', 
      description: [
        'Gain proficiency in Linux system administration and command line tools.',
        'Understand file systems, user management, and process management.',
        'Learn to script with Bash and automate tasks.',
        'Understand the role of Linux in servers, networks, and development environments.'
      ],
      image: 'computr-science/CC4.png'
    },
    { 
      title: 'MERN', 
      description: [
        'Master the MERN stack (MongoDB, Express, React, Node.js).',
        'Learn JavaScript for full-stack web development.',
        'Understand the integration of front-end and back-end technologies.',
        'Build dynamic and scalable web applications using modern frameworks.'
      ],
      image: 'computr-science/CC5.png'
    },
    { 
      title: 'PYTHON', 
      description: [
        'Learn Python programming for a wide range of applications.',
        'Explore Python for web development, data analysis, and machine learning.',
        'Understand how to build automation scripts and data pipelines.',
        'Gain skills in Python’s extensive library ecosystem for data science and development.'
      ],
      image: 'computr-science/CC6.png'
    }
  ],

  ELECT: [
    { 
      title: 'Automation', 
      description: [
        'Study automation systems used in industrial applications.',
        'Learn the principles behind programmable logic controllers (PLCs).',
        'Explore sensors, actuators, and control systems in automation.',
        'Understand how automation improves efficiency and reduces errors.'
      ],
      image: 'Electrical Eng/E1.png'
    },
    { 
      title: 'Electric Vehicles', 
      description: [
        'Explore the design of electric vehicles and their power systems.',
        'Understand battery management systems and charging technologies.',
        'Learn about electric drive systems and energy efficiency in EVs.',
        'Study the future of electric mobility and the challenges ahead.'
      ],
      image: 'Electrical Eng/E2.png'
    },
    { 
      title: 'Wiring Harness', 
      description: [
        'Learn the design and manufacturing process of wiring harnesses.',
        'Understand the role of wiring harnesses in electrical systems.',
        'Study materials, tools, and technologies used in wiring harnesses.',
        'Explore the challenges in producing reliable and cost-effective harnesses.'
      ],
      image: 'Electrical Eng/E3.png'
    },
    { 
      title: 'IoT', 
      description: [
        'Study the applications of IoT in electrical engineering.',
        'Learn about sensors, networks, and cloud integration for IoT systems.',
        'Explore smart grids, energy management, and automation in IoT.',
        'Understand security and data management challenges in IoT systems.'
      ],
      image: 'computr-science/CC2.png'
    },
    { 
      title: 'BMS', 
      description: [
        'Learn about Building Management Systems (BMS).',
        'Understand the integration of HVAC, lighting, and other building systems.',
        'Study energy management, security, and monitoring with BMS.',
        'Gain skills in configuring and optimizing BMS for smart buildings.'
      ],
      image: 'Electrical Eng/5.jpg'
    },
    { 
      title: 'PIC & SCADA', 
      description: [
        'Study Programmable Interface Controllers (PIC) and SCADA systems.',
        'Understand the fundamentals of industrial automation and control.',
        'Learn how SCADA systems are used for monitoring and control in real-time.',
        'Explore the use of PICs in embedded systems and automation projects.'
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
    const cardRefs = useRef([]);
  
    const changeCourse = (courseKey) => {
      if (courseKey !== selectedCourse) {
        setShowCards({ [courseKey]: true });
        setSelectedCourse(courseKey);
      } else {
        setShowCards((prev) => ({ ...prev, [courseKey]: !prev[courseKey] }));
      }
    };
  
    const isMobile = window.innerWidth < 768;
  
    return (
      <section className="mx-auto px-8 sm:px-16 bg-[#091327] roboto-regular">
        <div className="mb-8">
          <p className="text-[#FFC80E] text-4xl text-center font-bold mb-4">TECHNICAL TRAINING</p>
        </div>
        <div className="container mx-auto flex flex-wrap">
          {/* Sidebar */}
          <div className="course-sidebar w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
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
                    <span className="text-left break-words font-semibold">{buttonLabels[key]}</span>
                    <span className="flex items-center transition-all duration-300 transform hover:scale-105 hover:translate-x-1 hover:shadow-xl">
                      {isMobile ? (showCards[key] ? <FiChevronDown /> : <FiChevronRight />) : (
                        <FiChevronRight className="w-4 h-4 transition-transform transform hover:scale-125" />
                      )}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
  
          {/* Content Area - Cards shown to the right of the sidebar */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        <ul className="text-black text-base text-left space-y-2">
                          {course.description.map((item, idx) => (
                            <li key={idx} className="list-disc list-inside pl-4">
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
  
        <style>{`
/* Flip card styles */
.flip-card {
    perspective: 1000px;
    width: 100%;
    max-width: 300px; /* Set a max width for better layout */
    height: 330px; /* Set a fixed height for the card */
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%; /* Ensure height is defined */
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
    height: 100%; /* Ensure both sides take full height */
    backface-visibility: hidden;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Prevent overflow */
}

.flip-card-front {
    background-color: #f8f8f8;
}

.flip-card-back {
    background-image: url('${backSideImageUrl}'); /* Set the background image */
    background-size: cover; /* Ensure the image covers the card without cropping */
    background-repeat: no-repeat; /* Prevent image repetition */
    background-position: center; /* Center the image */
    transform: rotateY(180deg);
    padding: 20px; /* Add padding for content */
    color: #003073; /* Set text color */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

/* Adjust styles for bullet points to overlay directly on the background image */
.flip-card-back ul {
    padding: 0; /* Remove padding to allow direct overlay */
    margin: 0; /* Remove margin for better positioning */
    text-align: left; /* Align text to the left */
    list-style-position: inside; /* Position bullets inside */
    color: #ffffff; /* Change text color for better visibility on the image */
}

/* Media Queries for better responsiveness */
@media (max-width: 768px) {
    .course-sidebar {
        flex: 1 1 100%; /* Full width on mobile */
    }

    .flex-grow {
        flex: 1 1 100%; /* Full width on mobile */
    }
}
`}</style>

      </section>
    );
  };
  
  export default CourseSection;