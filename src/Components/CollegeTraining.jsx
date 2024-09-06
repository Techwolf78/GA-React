import React, { useEffect, useState } from 'react';
import '../assets/CSS/CollegeTraining.css';

const courses = {
  MECH: [
    { title: 'AutoCAD', description: 'Learn the fundamentals of AutoCAD for 2D and 3D drafting and design in mechanical engineering.', image: 'MECH/1.jpg' },
    { title: 'CATIA', description: 'Explore CATIA’s advanced 3D modeling capabilities for designing complex mechanical systems.', image: 'MECH/2.jpg' },
    { title: 'CREO CAD', description: 'Master CREO CAD software for parametric and direct modeling, essential for mechanical design.', image: 'MECH/3.jpg' },
    { title: 'SolidWorks', description: 'Gain skills in SolidWorks for 3D CAD design, including simulation and product data management.', image: 'MECH/4.jpg' }
  ],
  // ... other courses
};

function CollegeTraining() {
  const [selectedCourse, setSelectedCourse] = useState('MECH');
  const [courseCards, setCourseCards] = useState([]);

  useEffect(() => {
    setCourseCards(courses[selectedCourse]);
  }, [selectedCourse]);

  const changeCourse = (courseKey) => {
    setSelectedCourse(courseKey);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4">Making You Corporate Ready</h1>
            <button
              className="cta-button mb-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => window.location.href = 'contact.html'}
            >
              Connect With Us
            </button>
          </div>
          <div className="lg:w-1/2">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="faculty-img/Make You Corporate Training .jpg" className="d-block w-full" alt="Classroom Image 1" />
                </div>
                {/* Add more carousel items here */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="stat">
            <h2 className="text-4xl font-bold" id="stat1">0+</h2>
            <p>Clients Partnered</p>
          </div>
          {/* Add more stats */}
        </div>
      </section>

      {/* About Training Section */}
      <section className="about-training-section py-10 bg-[#091327] text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl text-yellow-400 mb-4">About Our College Training Program</h1>
          <p className="text-lg">
            Our college training program is meticulously designed to bridge the gap between academic learning and industry requirements...
          </p>
        </div>
      </section>

      {/* Training Cards Section */}
      <section className="py-10 bg-[#091327]">
        <div className="container mx-auto">
          <h2 className="text-white text-2xl mb-6 text-center">Soft Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Soft Skills Cards */}
            <div className="card">
              <img src="Training Page/Corporate etiquettes and Mannerism.jpg" alt="Corporate etiquettes" className="w-full" />
              <h6 className="text-lg">Corporate etiquettes and Mannerism</h6>
            </div>
            {/* Add more cards */}
          </div>
        </div>
      </section>

      {/* Technical Training Section */}
      <section className="py-10 bg-slate-900 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            {/* Course Buttons */}
            <button
              className="block w-full py-2 px-4 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => changeCourse('MECH')}
            >
              MECHANICAL ENGINEERING
            </button>
            {/* Add more buttons */}
          </div>
          <div className="lg:w-3/4">
            <div className="course-card">
              {courseCards.map(course => (
                <div key={course.title} className="card mb-4">
                  <img src={course.image} alt={course.title} className="w-full" />
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Our College Partners</h2>
          <div className="logo-slider overflow-hidden">
            <div className="flex space-x-4 animate-marquee">
              {/* Logo items */}
              <img src="Clgimage/1-1.png" alt="College Logo" className="w-24 h-24" />
              {/* Add more logo items */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Gryphon Academy. Pvt.Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CollegeTraining;
