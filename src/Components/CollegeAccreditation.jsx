import React from 'react';
import CountUp from 'react-countup';

const cardBackgrounds = {
  naacAPlus: '/Clgimage/new-nac.png',
  naacAPlusPlus: '/Clgimage/naacaplus-new.png',
  nirfRanked: '/Clgimage/nirf.png',
  nmbaAccredited: '/Clgimage/new-nac.png',
};

function CollegeAccreditation() {
  return (
    <div className="relative p-8 bg-[#091327] text-white">
      <p className="text-4xl font-bold text-[#ffc700] mb-6 text-center">PARTNERED COLLEGES ACCREDITATION</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* NAAC A+ */}
        <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-4">
          <img
            src={cardBackgrounds.naacAPlus}
            alt="NAAC A+"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">NAAC A+</h3>
            <div>
              <CountUp start={0} end={9} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>

        {/* NAAC A++ */}
        <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-4">
          <img
            src={cardBackgrounds.naacAPlusPlus}
            alt="NAAC A++"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">NAAC A++</h3>
            <div>
              <CountUp start={0} end={7} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>

        {/* NIRF Ranked */}
        <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-4">
          <img
            src={cardBackgrounds.nirfRanked}
            alt="NIRF Ranked"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-4 text-center text-xl font-bold">
            <h3 className="text-lg mb-2">NIRF Ranked</h3>
            <div>
              <CountUp start={0} end={8} duration={2} /> <span className="text-lg">colleges</span>
            </div>
          </div>
        </div>

        {/* NMBA Accredited */}
        <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg p-4">
          <img
            src={cardBackgrounds.nmbaAccredited}
            alt="NMBA Accredited"
            className="w-full h-48 object-cover rounded-lg"
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
