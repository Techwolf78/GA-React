import { useEffect, useState } from "react";
import skillWorkshop from "../../../public/MasterClass/o1.webp";
import studentCollab from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241742/o2_cqidtk.webp";
import instructorSession from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241740/o4_y21exh.webp";
import realProjects from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241740/o3_nxevy5.webp";
import inside3 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241728/5_p24yqh.webp";
import img6 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241729/6_opakln.webp";
import img7 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241726/7_exbppl.webp";
import img8 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241726/8_an4mtt.webp";
import img9 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241732/9_g8pwyv.webp";
import img10 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241726/10_kklp0d.webp";
import img11 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241728/11_rn1p7y.webp";
import img12 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241728/12_agyrsh.webp";
import img13 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241727/13_v49nh0.webp";
import img14 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241727/14_kbfcjw.webp";
import img15 from "https://res.cloudinary.com/dcjmaapvi/image/upload/v1745241738/15_luutxe.webp";

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
    }, 1000); // switch all every 1 second

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
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
          }

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

      <section className="flex flex-col md:flex-row w-full bg-white px-6 md:px-16 py-12 gap-10 md:items-stretch">
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

            <h1 className="embedded-number leading-none">3.0</h1>
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
