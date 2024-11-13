import React from "react";

const HookLine = () => {
  const hookLines = [
    <span key="0"><strong className="font-semibold roboto-regular">ENVIRONMENTS</strong></span>,
    <span key="1"><strong>EXPERIENCES</strong></span>,
    <span key="2"><strong>CONTENT</strong></span>,
    <span key="3"><strong className="font-semibold roboto-regular">ENVIRONMENTS</strong></span>,
    <span key="4"><strong>EXPERIENCES</strong></span>,
    <span key="5"><strong>CONTENT</strong></span>,
    <span key="6"><strong className="font-semibold roboto-regular">ENVIRONMENTS</strong></span>,
    <span key="7"><strong>EXPERIENCES</strong></span>,
    <span key="8"><strong>CONTENT</strong></span>,
  ];

  // Duplicate the hookLines to create the infinite effect (3 sets of lines)
  const combinedHookLines = [...hookLines, ...hookLines, ...hookLines]; // 3 sets

  const containerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0.5rem', // Equivalent to py-2
    backgroundColor: '#DFF1FD',
    position: 'relative',
  };

  const hookLineStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#000000',
    fontSize: '101px', // Font size set to 101px
    fontFamily: 'Neu, sans-serif', // Neu font style (use Google Fonts or custom font)
    fontWeight: 'normal',
    animation: 'scroll 20s linear infinite',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Light shadow for a soft, 3D effect (neumorphism style)
  };

  const dividerStyle = {
    height: '70px',  // Height of the circle
    width: '70px',   // Width of the circle
    backgroundColor: 'red', // Red color for the circle
    borderRadius: '50%', // Make it a circle
    margin: '0 1rem',  // Space around the circle
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.5)', // Neumorphism shadow
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
