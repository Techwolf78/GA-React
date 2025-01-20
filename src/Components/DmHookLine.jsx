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
  ];

  // Duplicate the hookLines to create the infinite effect (3 sets of lines)
  const combinedHookLines = [...hookLines, ...hookLines, ...hookLines]; // 3 sets

  const containerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0.5rem', // Equivalent to py-2
    position: 'relative',
  };

  const hookLineStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#ffffff',
    fontSize: '60px', // Font size set to 101px
    fontFamily: 'Messina Sans, sans-serif', // Messina Sans font style
    fontWeight: 'normal',
    animation: `scroll 30s linear infinite ${scrollDirection === 'right' ? 'reverse' : 'normal'}`,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Light shadow for a soft, 3D effect (neumorphism style)
    transition: 'transform 1s ease-in-out',

  };

  const dividerStyle = {
    height: '15px',  // Height of the circle
    width: '15px',   // Width of the circle
    backgroundColor: '#ffffff', // Circle color
    borderRadius: '50%', // Make it a circle
    margin: '0 1rem',  // Space around the circle
  };

  return (
    <div style={containerStyle}>
      <div style={hookLineStyle}>
        {combinedHookLines.map((hookLine, index) => (
          <React.Fragment key={index}>
            {hookLine}
            {index < combinedHookLines.length - 1 && (
              <span style={dividerStyle}></span> // Red circular divider with neumorphism
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Inline CSS styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Adjust to scroll by 1/3rd of the content */
          }
        }
      `}</style>
    </div>
  );
};

export default HookLine;
