import React from "react";

const HookLine = () => {
  const hookLines = [
    <span key="0"><strong className="font-semibold roboto-regular">Zero Cost Involved</strong> During All Stages of Recruitment</span>,
    <span key="1"><strong>Industry-Aligned Customized</strong> Training Programmes</span>,
    <span key="2">Direct Engagement <strong>Without Vendor Registration</strong> or <strong>Empanelment Fees</strong></span>,
  ];
  
  // Duplicate the hookLines to create the infinite effect
  const combinedHookLines = [...hookLines, ...hookLines];

  const containerStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0.5rem', // Equivalent to py-2
    backgroundColor: '#DFF1FD',
  };

  const hookLineStyle = {
    display: 'inline-flex', // Change to inline-flex for alignment
    alignItems: 'center',
    color: '#000000',
    fontSize: '1.25rem', // Equivalent to text-xl
    animation: 'scroll 20s linear infinite',
  };

  const dividerStyle = {
    height: '30px', // Adjust height as needed
    width: '3px',   // Increase width for a bolder divider
    backgroundColor: '#000000',
    margin: '0 0.5rem', // Space around the divider
  };

  return (
    <div style={containerStyle}>
      <div style={hookLineStyle}>
        {combinedHookLines.map((hookLine, index) => (
          <React.Fragment key={index}>
            {hookLine}
            {index < combinedHookLines.length - 1 && (
              <span style={dividerStyle}></span> // Bold vertical divider as a span
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
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HookLine;
