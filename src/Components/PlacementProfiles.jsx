import React from "react";

const engineeringProfiles = [
  "Associate Android Developer",
  "Associate Software Developer",
  "Associate Technical Consultant",
  "BIM Engineer",
  "Cyber Security Engineer",
  "Electrical Design Engineer",
  "Electronics Hardware Engineer",
  "Embedded Firmware Developer",
  "Graduate Engineer Trainee",
  "GET - Product Design and Development",
  "GET - Engine Dataset Management",
  "Full Stack Developer",
  "Jr. Robotics Engineer",
  "MES Support Engineer",
  "PHP Developer",
  "Project Engineer",
  "Purchase Associate",
  "Quality Management Executive",
  "Software Engineer",

  "Trainee - Quality Management",
];

const mbaProfiles = [
  "Analyst",
  "Area Operations Manager",
  "Associate - HR operations",
  "Associate Business Analyst",
  "Corporate Relations",
  "Operations Associate",
  "Presales Executive",
  "Brand Partnership & Alliances",
  "Compliance Associate",
  "Employer Branding & Recruitment Marketing Executive",
  "Finance Executive",
  "HR (Campus Hiring Team)",
  "HR Operations Associate",
  "Learning and Development Coordinator",
  "Management Trainee - Research Associate",
  "Management Trainee - Project Management",
  "Management Trainee - Product Management",
  "MT - Business Process Re-Engineering",
  "Project Accounting Admin",
  "Trainee - Logistics and Supply Chain Management",

];

const PlacementProfiles = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-800 to-blue-500 py-8">
      <h1 className=" sm:text-3xl lg:text-4xl xl:text-4xl font-bold xl:mb-8 md:mb-6 sm:mb-4 xs:mb-2 text-center text-[#FFC80E]">
        PROFILES WE TRAIN FOR
      </h1>

      <section className="mb-12 mx-auto px-8 sm:px-8 md:px-16 lg:px-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-center font-bold mb-4 text-white">
          Engineering:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {engineeringProfiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-yellow-400"
            >
              <span className="font-semibold">{profile}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto px-8 sm:px-8 md:px-16 lg:px-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold mb-4 text-white text-center">
          MBA:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mbaProfiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-yellow-400"
            >
              <span className="font-semibold">{profile}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementProfiles;
