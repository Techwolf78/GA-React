import { useEffect, useState } from "react";
import skillWorkshop from "../../../public/MasterClass/o1.webp";
import studentCollab from "../../../public/MasterClass/o2.webp";
import instructorSession from "../../../public/MasterClass/o4.webp";
import realProjects from "../../../public/MasterClass/o3.webp";
import inside3 from "../../../public/MasterClass/5.webp";
import img6 from "../../../public/MasterClass/6.webp";
import img7 from "../../../public/MasterClass/7.webp";
import img8 from "../../../public/MasterClass/8.webp";
import img9 from "../../../public/MasterClass/9.webp";
import img10 from "../../../public/MasterClass/10.webp";
import img11 from "../../../public/MasterClass/11.webp";
import img12 from "../../../public/MasterClass/12.webp";
import img13 from "../../../public/MasterClass/13.webp";
import img14 from "../../../public/MasterClass/14.webp";
import img15 from "../../../public/MasterClass/15.webp";

const allImages = [
  skillWorkshop,
  studentCollab,
  instructorSession,
  realProjects,
  inside3,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

function Overview() {
  const [visibleImages, setVisibleImages] = useState(() =>
    getRandomImages(9)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages(getRandomImages(9));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function getRandomImages(count) {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <>
      <style>
        {`
          .circle-grid-3x3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            width: 100%;
            height: 100%;
            gap: 0;
          }

          .circle-grid-3x3 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: opacity 0.3s ease-in-out;
          }
        `}
      </style>

      <section
  id="overview"
  className="scroll-mt-24 flex flex-col md:flex-row w-full bg-white px-6 md:px-16 py-12 gap-10 md:items-stretch"
>


        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#027093]">
              <span className="inline-block">
                <span className="inline-block relative">
                  Bridging
                  <span className="absolute left-0 bottom-0 h-1 w-12 bg-[#00A59F] my-2 rounded-full translate-y-2"></span>
                </span>
              </span>{" "}
              Skills with Opportunity
            </h2>
          </div>

          <p className="text-xl text-gray-700 mb-6">
            Masterclass 3.0 empowers both trainers and students by bridging the
            gap between education and industry needs. The program equips
            trainers with innovative teaching methods, while providing students
            with hands-on, industry-relevant skills that enhance their
            employability. This initiative ensures that graduates are
            well-prepared to meet the demands of today’s competitive job market.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-lg">
            <li>Project-based learning with real-world relevance</li>
            <li>Mentorship by top industry professionals</li>
            <li>Cross-functional team collaboration</li>
            <li>Outcome-first skill validation</li>
          </ul>
        </div>

        {/* Right Side: Circle w/ Live Grid */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[500px] aspect-square md:aspect-auto md:h-full rounded-full overflow-hidden shadow-xl">
            <div className="circle-grid-3x3 w-full h-full">
              {visibleImages.map((img, idx) => (
                <img key={idx} src={img} alt={`Grid Img ${idx}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
