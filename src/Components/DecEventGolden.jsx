import React, { useState } from 'react';

const GoldText = () => {
  const [text, setText] = useState("Winner");

  // Update data-heading when the text is changed
  const handleTextChange = (e) => {
    setText(e.target.innerText);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-yellow-900 via-yellow-700 to-black">
      <h1
        contentEditable
        suppressContentEditableWarning
        onInput={handleTextChange}
        className="relative text-transparent bg-clip-text text-6xl font-serif uppercase font-normal"
        style={{
          background: 'linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: 'calc(18vw + .5rem)',
          margin: 0,
        }}
      >
        {text}
        <span
          className="absolute inset-0 text-shadow-sm"
          style={{
            content: `"${text}"`,
            zIndex: -1,
            top: 0,
            left: 0,
            textShadow: `
              -1px 0 1px #c6bb9f, 
              0 1px 1px #c6bb9f, 
              5px 5px 10px rgba(0, 0, 0, 0.4),
              -5px -5px 10px rgba(0, 0, 0, 0.4)
            `,
          }}
        ></span>
      </h1>
    </div>
  );
};

export default GoldText;
