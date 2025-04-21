import React from "react";
import skillWorkshop from "../../../public/MasterClass/o1.jpg";
import studentCollab from "../../../public/MasterClass/o2.jpg";
import instructorSession from "../../../public/MasterClass/o4.jpg";
import realProjects from "../../../public/MasterClass/o3.jpg";
import inside3 from "../../../public/MasterClass/5.jpg";

function Overview() {
  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'BritannicBold';
            src: url('/fonts/BritannicBold-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          .embedded-number {
            font-family: 'BritannicBold', sans-serif;
            font-size: 140px;
            font-weight: 800;
            background-image: url(${inside3});
            background-size: cover;
            background-position: center;
            color: transparent;
            -webkit-text-stroke: 2px #00BFA6;
            -webkit-background-clip: text;
            background-clip: text;
            text-fill-color: transparent; /* fallback */
            -webkit-text-fill-color: transparent; /* Chrome, Safari */
          }
        `}
      </style>

      <section className="flex flex-col md:flex-row w-full bg-white px-6 md:px-16 py-12 gap-10">
        {/* Left Side: Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          {/* Heading + 3.0 side by side */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#027093]">
              Bridging Skills with Opportunity
            </h2>
            <h1 className="embedded-number leading-none">3.0</h1>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Masterclass 3.0 empowers both trainers and students by bridging the gap between education and industry needs. The program equips trainers with innovative teaching methods, while providing students with hands-on, industry-relevant skills that enhance their employability. This initiative ensures that graduates are well-prepared to meet the demands of today’s competitive job market.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-md">
            <li>Project-based learning with real-world relevance</li>
            <li>Mentorship by top industry professionals</li>
            <li>Cross-functional team collaboration</li>
            <li>Outcome-first skill validation</li>
          </ul>
        </div>

        {/* Right Side: Bento Image Layout */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 auto-rows-[150px]">
          <div className="row-span-2 bg-[#d1f5f3] rounded-xl overflow-hidden">
            <img
              src={skillWorkshop}
              alt="Skill Workshop"
              className="w-full h-full object-cover object-left"
            />
          </div>
          <div className="bg-[#fef3c7] rounded-xl overflow-hidden">
            <img
              src={studentCollab}
              alt="Student Collaboration"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="bg-[#fcd5ce] rounded-xl overflow-hidden">
            <img
              src={instructorSession}
              alt="Instructor"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="col-span-2 bg-[#e0f2fe] rounded-xl overflow-hidden">
            <img
              src={realProjects}
              alt="Real Projects"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
