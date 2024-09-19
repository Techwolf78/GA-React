import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

// Course data and button labels
const courses = {
  MECH: [
    { title: 'AutoCAD', description: 'Learn the fundamentals of AutoCAD for 2D and 3D drafting and design in mechanical engineering.', image: '/MECH/1.jpg' },
    { title: 'CATIA', description: 'Explore CATIA’s advanced 3D modeling capabilities for designing complex mechanical systems.', image: 'MECH/2.jpg' },
    { title: 'CREO CAD', description: 'Master CREO CAD software for parametric and direct modeling, essential for mechanical design.', image: 'MECH/3.jpg' },
    { title: 'SolidWorks', description: 'Gain skills in SolidWorks for 3D CAD design, including simulation and product data management.', image: 'MECH/4.jpg' }
  ],
  CIVIL: [
    { title: '3D Printing', description: 'Understand the principles and applications of 3D printing in civil engineering for creating prototypes and structures.', image: 'Civil Engineering/1.jpg' },
    { title: 'RVT', description: 'Learn how to use Revit for Building Information Modeling (BIM) in civil engineering projects.', image: 'Civil Engineering/2.jpg' },
    { title: 'Structural Analysis', description: 'Study the methods and techniques for analyzing the structural integrity of buildings and infrastructure.', image: 'Civil Engineering/3.jpg' },
    { title: 'Foundation Engineering', description: 'Explore the design and analysis of foundations, including shallow and deep foundations, for various soil conditions.', image: 'Civil Engineering/4.jpg' },
    { title: 'BIM', description: 'Delve into Building Information Modeling (BIM) for effective planning, design, and management of construction projects.', image: 'Civil Engineering/5.jpg' },
    { title: 'Sustainable Design', description: 'Learn about sustainable design practices in civil engineering to minimize environmental impact and enhance resource efficiency.', image: 'https://via.placeholder.com/150' }
  ],
  COMP: [
    { title: 'Full Stack Development', description: 'Get comprehensive training in full stack development, including both front-end and back-end technologies.', image: 'computr-science/Full Stack Development.jpg' },
    { title: 'IoT', description: 'Explore the Internet of Things (IoT) and how to develop smart devices and systems connected through the internet.', image: 'computr-science/IOT.jpg' },
    { title: 'JAVA', description: 'Learn Java programming language for developing robust, scalable applications and software solutions.', image: 'computr-science/JAVA.jpg' },
    { title: 'Linux', description: 'Gain proficiency in Linux operating system for system administration, scripting, and development.', image: 'computr-science/Linux.jpg' },
    { title: 'MERN', description: 'Master the MERN stack (MongoDB, Express, React, Node.js) for full-stack JavaScript development.', image: 'computr-science/MERN.jpg' },
    { title: 'Python', description: 'Learn Python programming for various applications, including web development, data analysis, and machine learning.', image: 'computr-science/Python.jpg' }
  ],
  ELECT: [
    { title: 'Automation', description: 'Understand automation systems and techniques used in various industrial applications.', image: 'Electrical Eng/1.jpg' },
    { title: 'Electric Vehicles', description: 'Explore the design and technology behind electric vehicles, including power systems and battery management.', image: 'Electrical Eng/2.jpg' },
    { title: 'Wiring Harness', description: 'Learn about the design and manufacturing of wiring harnesses used in electrical systems.', image: 'Electrical Eng/3.jpg' },
    { title: 'IoT', description: 'Study the Internet of Things (IoT) and its applications in electrical engineering, including smart grids and sensors.', image: 'Electrical Eng/4.jpg' },
    { title: 'BMS', description: 'Explore Building Management Systems (BMS) for controlling and monitoring building systems like HVAC and lighting.', image: 'Electrical Eng/5.jpg' },
    { title: 'PIC & SCADA', description: 'Learn about Programmable Interface Controllers (PIC) and Supervisory Control and Data Acquisition (SCADA) systems for automation and control.', image: 'Electrical Eng/6.jpg' }
  ],
  AIDS: [
    {
      title: 'Introduction to Data Science',
      description: 'Learn the basics of data science and how it applies to artificial intelligence.',
      image: 'https://placeholder.com/200x200'
    },
    { title: 'Machine Learning with Python', description: 'Explore machine learning techniques using Python, including regression and classification.', image: 'AIDS/2.jpg' },
    { title: 'Data Visualization', description: 'Understand how to visualize data effectively to gain insights and make decisions.', image: 'AIDS/3.jpg' },
    { title: 'Big Data Analytics', description: 'Learn about big data technologies and how to process and analyze large datasets.', image: 'AIDS/4.jpg' },
    { title: 'Deep Learning', description: 'Dive into deep learning techniques and their applications in various fields.', image: 'AIDS/5.jpg' },
    { title: 'AI Ethics', description: 'Study the ethical implications of artificial intelligence and data science.', image: 'AIDS/6.jpg' }
  ],
  AIML: [
    { title: 'Introduction to Artificial Intelligence', description: 'Get started with the basics of AI, including machine learning and neural networks.', image: 'AIML/1.jpg' },
    { title: 'Deep Learning Specialization', description: 'Dive deep into deep learning techniques and their applications in various fields.', image: 'AIML/2.jpg' },
    { title: 'Natural Language Processing', description: 'Learn how to build systems that understand and generate human language.', image: 'AIML/3.jpg' },
    { title: 'AI for Business', description: 'Explore how AI can be leveraged to solve business problems and drive innovation.', image: 'AIML/4.jpg' },
    { title: 'Computer Vision', description: 'Understand the principles of computer vision and how to build applications that see and interpret the world.', image: 'AIML/5.jpg' },
    { title: 'Reinforcement Learning', description: 'Learn about reinforcement learning and how to train AI agents to make decisions.', image: 'AIML/6.jpg' }
  ],
  PHARMA: [
    { title: 'Pharmacology Basics', description: 'Learn the fundamentals of pharmacology, including drug interactions and side effects.', image: 'PHARMA/1.jpg' },
    { title: 'Clinical Trials Management', description: 'Understand the process of managing clinical trials from start to finish.', image: 'PHARMA/2.jpg' },
    { title: 'Pharmaceutical Regulatory Affairs', description: 'Explore the regulatory landscape and compliance requirements in the pharmaceutical industry.', image: 'PHARMA/3.jpg' },
    { title: 'Drug Development and Approval', description: 'Learn about the drug development process and how new drugs are approved for market.', image: 'PHARMA/4.jpg' },
    { title: 'Quality Control in Pharmaceuticals', description: 'Understand the principles of quality control and assurance in pharmaceutical manufacturing.', image: 'PHARMA/5.jpg' },
    { title: 'Pharmaceutical Marketing', description: 'Explore strategies for marketing pharmaceutical products effectively in a competitive market.', image: 'PHARMA/6.jpg' }
  ],
  MBA: [
    { title: 'Strategic Management', description: 'Learn how to develop business strategies that create competitive advantages.', image: 'MBA/1.jpg' },
    { title: 'Financial Accounting', description: 'Understand financial statements and how to analyze them for better decision-making.', image: 'MBA/2.jpg' },
    { title: 'Marketing Management', description: 'Explore key marketing concepts and strategies to drive customer engagement.', image: 'MBA/3.jpg' },
    { title: 'Operations Management', description: 'Gain insights into optimizing operations to enhance productivity and efficiency.', image: 'MBA/4.jpg' },
    { title: 'Business Ethics', description: 'Delve into ethical issues in business and learn how to navigate them responsibly.', image: 'MBA/5.jpg' },
    { title: 'Leadership and Organizational Behavior', description: 'Develop leadership skills and understand the dynamics of organizational behavior.', image: 'MBA/6.jpg' }
  ],
  MCA: [
    { title: 'Java', description: 'Gain expertise in Java programming language, focusing on object-oriented programming and software development.', image: 'MCA/1.jpg' },
    { title: 'OOPs', description: 'Study Object-Oriented Programming (OOP) principles and their application in software development.', image: 'MCA/2.jpg' },
    { title: 'Python', description: 'Learn Python for data analysis, web development, and automation.', image: 'MCA/3.jpg' },
    { title: 'Database Management', description: 'Understand database systems and management techniques for effective data handling.', image: 'MCA/4.jpg' },
    { title: 'Software Engineering', description: 'Explore software development methodologies and project management practices.', image: 'MCA/5.jpg' },
    { title: 'Web Technologies', description: 'Get hands-on experience with web technologies including HTML, CSS, and JavaScript.', image: 'MCA/6.jpg' }
  ],
  BBA: [
    { title: 'Business Communication', description: 'Develop communication skills essential for business environments.', image: 'BBA/1.jpg' },
    { title: 'Financial Management', description: 'Understand the principles of financial management and how to make sound financial decisions.', image: 'BBA/2.jpg' },
    { title: 'Human Resource Management', description: 'Explore the fundamentals of managing human resources in an organization.', image: 'BBA/3.jpg' },
    { title: 'Marketing Management', description: 'Study marketing strategies and practices used to engage customers and drive business growth.', image: 'BBA/4.jpg' },
    { title: 'Organizational Behavior', description: 'Understand the dynamics of behavior within organizations and how to manage it effectively.', image: 'BBA/5.jpg' },
    { title: 'Business Law', description: 'Learn the legal aspects of running a business, including contracts, liability, and compliance.', image: 'BBA/6.jpg' }
  ],
  DIPLOMA: [
    { title: 'Diploma in Business Administration', description: 'Comprehensive program in business administration with practical and theoretical knowledge.', image: 'Diploma/1.jpg' },
    { title: 'Diploma in Computer Science', description: 'In-depth study of computer science fundamentals and programming.', image: 'Diploma/2.jpg' },
    { title: 'Diploma in Mechanical Engineering', description: 'Focus on mechanical engineering principles and applications.', image: 'Diploma/3.jpg' }
  ],
  FOREIGN: [
    { title: 'German Language Basics', description: 'Introduction to the German language, including basic vocabulary and grammar.', image: 'Germany/1.jpg' },
    { title: 'Japanese Language Basics', description: 'Learn basic Japanese language skills, including essential vocabulary and grammar.', image: 'Japanese/1.jpg' }
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

  const changeCourse = (courseKey) => {
    setSelectedCourse(courseKey);
  };

  return (
    <section className="py-5 bg-[#091327]">
      <div className="mb-8">
        <p className="text-[#ffc700] text-4xl text-center font-bold mb-4 ">TECHNICAL TRAINING</p>
      </div>
      <div className="container mx-auto flex flex-wrap">
        {/* Sidebar */}
        <div className="course-sidebar w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <div className="bg-[#091327] shadow-lg rounded-lg">
            {Object.keys(courses).map((key) => (
              <button
                key={key}
                onClick={() => changeCourse(key)}
                className="block w-full py-3 px-6 mb-2 text-white rounded-lg"
                style={{
                  backgroundColor: '#2e4d80',
                  transition: 'all 0.3s ease-in-out',
                  transform: 'scale(1)',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a3b6c'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2e4d80'}
              >
                {buttonLabels[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="content w-full lg:w-3/4 px-4">
          <div className="course-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses[selectedCourse].map((course, index) => (
              <div key={index} className="card bg-[#2e4d80] rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-[#ffc700] text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-white mb-4">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
