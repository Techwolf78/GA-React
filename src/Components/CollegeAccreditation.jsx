import React from 'react';
import CountUp from 'react-countup';

const cardBackgrounds = {
  naacAPlus: '/Clgimage/new-nac.png',
  naacAPlusPlus: '/Clgimage/new-nac.png',
  nirfRanked: '/Clgimage/new-nac.png',
  nmbaAccredited: '/Clgimage/new-nac.png',
};

function CollegeAccreditation() {
  return (
    <div className="relative p-8 bg-gradient-to-b from-white via-purple-50 to-purple-100">
      <p className="text-3xl font-semibold text-purple-700 mb-6 text-center underline">Partnered Colleges Accreditation</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-opacity-0">
        {/* NAAC A+ */}
        <div className="flex flex-col items-center">
          <img
            src={cardBackgrounds.naacAPlus}
            alt="NAAC A+"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">NAAC A+</h3>
            <div>
              <CountUp start={0} end={9} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>

        {/* NAAC A++ */}
        <div className="flex flex-col items-center">
          <img
            src={cardBackgrounds.naacAPlusPlus}
            alt="NAAC A++"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">NAAC A++</h3>
            <div>
              <CountUp start={0} end={7} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>

        {/* NIRF Ranked */}
        <div className="flex flex-col items-center">
          <img
            src={cardBackgrounds.nirfRanked}
            alt="NIRF Ranked"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">NIRF Ranked</h3>
            <div>
              <CountUp start={0} end={8} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>

        {/* NMBA Accredited */}
        <div className="flex flex-col items-center">
          <img
            src={cardBackgrounds.nmbaAccredited}
            alt="NMBA Accredited"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">MBA Accredited</h3>
            <div>
              <CountUp start={0} end={7} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeAccreditation;
