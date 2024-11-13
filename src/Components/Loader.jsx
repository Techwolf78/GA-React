import React, { useState, useEffect } from 'react';

const Loader = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const wordSequence = ["First", "Second", "Third"];
    
    // Track the index where each word should be shown
    wordSequence.forEach((word, index) => {
      setTimeout(() => {
        setStep(index + 1); // Update step to show the next word
      }, index * 1000); // Transition between words every 1 second
    });

    // After the last word (Third) is shown, call onFinish
    setTimeout(() => {
      onFinish(); // This will hide the loader and show the next component
    }, wordSequence.length * 1000); // Finish after all words have been displayed (3 words * 1 sec each)

  }, [onFinish]);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex justify-center items-center z-50">
      <div className="text-6xl font-bold" style={{
        background: 'linear-gradient(to right, #FFC80E, #ed9c61)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}>
        {step === 1 && "CREATIVITY"}
        {step === 2 && "MARKETING"}
        {step === 3 && "NETWORKING"}
      </div>
    </div>
  );
};

export default Loader;
