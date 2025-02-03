import React from 'react';

const HookLine = ({ scrollDirection }) => {
  const hookLines = [
    <span key="0" className="messinasans-regular">Innovation</span>,
    <span key="1">Engagement</span>,
    <span key="2">Conversion</span>,
    <span key="3" className="messinasans-regular">Optimization</span>,
    <span key="4">Insights</span>,
    <span key="5">Strategy</span>,
    <span key="6" className="messinasans-regular">Disruption</span>,
    <span key="7">Transformation</span>,
    <span key="8">Growth</span>,
    <span key="9" className="messinasans-regular">Leadership</span>,
    <span key="10">Collaboration</span>,
    <span key="11" className="messinasans-regular">Masterclass</span>,
    <span key="12">Networking</span>,
    <span key="13" className="messinasans-regular">Branding</span>,
    <span key="14">Synergy</span>,
    <span key="15" className="messinasans-regular">Connection</span>,
    <span key="16">Empowerment</span>,
    <span key="17" className="messinasans-regular">Inspiration</span>,
    <span key="18">Events</span>,
    <span key="19" className="messinasans-regular">Opportunities</span>,
  ];

  const combinedHookLines = [...hookLines, ...hookLines, ...hookLines]; // 3 sets for the infinite effect

  return (
    <div className="w-full overflow-hidden relative">
      <div className={`inline-flex items-center text-white font-normal text-xl md:text-3xl lg:text-4xl animate-scroll ${scrollDirection === 'right' ? 'reverse' : ''}`}>
        {combinedHookLines.map((hookLine, index) => (
          <React.Fragment key={index}>
            {hookLine}
            {index < combinedHookLines.length - 1 && (
              <span className="bg-white rounded-full h-2 md:h-4 w-2 md:w-4 mx-4 md:mx-6"></span> // Divider with responsive margin
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .reverse {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
};

export default HookLine;
