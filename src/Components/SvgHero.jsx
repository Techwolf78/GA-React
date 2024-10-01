import React from 'react';

// SVG Components
const ArrowAnimationTop = () => (
  <div className="arrow arrow--top">
    <svg xmlns="http://www.w3.org/2000/svg" width="20vw" height="70vh" overflow="visible">
      <g className="item-to bounce-1">
        <path className="geo-arrow draw-in" d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z" />
      </g>
      <circle className="geo-arrow item-to bounce-2" cx="194.65" cy="69.54" r="1.5vw" />
      <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="1.5vw" />
      <circle className="geo-arrow item-to bounce-3" cx="194.65" cy="9.46" r="1.5vw" />
      <g className="geo-arrow item-to bounce-2">
        <path className="draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
      </g>
    </svg>
  </div>
);

const ArrowAnimationBottom = () => (
  <div className="arrow arrow--bottom">
    <svg xmlns="http://www.w3.org/2000/svg" width="10vw" height="70vh" overflow="visible">
      <g className="item-to bounce-1">
        <circle className="geo-arrow item-to bounce-3" cx="15.5" cy="580.36" r="1.5vw" />
        <circle className="geo-arrow draw-in" cx="15.5" cy="610.4" r="1.5vw" />
        <circle className="geo-arrow item-to bounce-2" cx="15.5" cy="640.44" r="1.5vw" />
        <g className="item-to bounce-2">
          <path className="geo-arrow draw-in" d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552" />
        </g>
      </g>
    </svg>
  </div>
);

const HeaderAnimation = () => (
  <div className="Header">
    <svg className="Header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43" preserveAspectRatio="xMidYMid meet">
      <path className="Header__shape bigSquare" fill="#16d5d1" d="M546.519 349.271l86.383-56.098 56.097 86.383-86.383 56.098z"/>
      <path className="Header__shape triangle" fill="none" stroke="#ff4676" strokeWidth="8" d="M372.15 462.17L321 434.58l-4.88 56.16z"/>
      <circle className="Header__shape bigCircle" fill="#ff4676" cx="1076.52" cy="262.17" r="3.5vw"/>
      <path className="Header__shape littleSquare" fill="#ffe430" d="M285.523 262.61l12.372-53.59 53.59 12.372-12.372 53.59z"/>
      <circle className="Header__shape hoop" fill="none" stroke="#ffe430" strokeWidth="13" cx="905.52" cy="447.17" r="2.5vw"/>
      <circle className="Header__shape littleCircle" fill="#0f1c70" cx="1036.52" cy="203.17" r="1.5vw"/>
    </svg>
  </div>
);

const FooterAnimation = () => (
  <div className="Footer">
    <svg className="Footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43" preserveAspectRatio="xMidYMid meet">
      <path className="Footer__shape bigSquare" fill="#16d5d1" d="M546.519 600.271l86.383-56.098 56.097 86.383-86.383 56.098z"/>
      <path className="Footer__shape triangle" fill="none" stroke="#ff4676" strokeWidth="8" d="M372.15 582.17L321 604.58l-4.88-56.16z"/>
      <circle className="Footer__shape bigCircle" fill="#ff4676" cx="1076.52" cy="500.17" r="3.5vw"/>
      <circle className="Footer__shape hoop" fill="none" stroke="#ffe430" strokeWidth="13" cx="905.52" cy="600.17" r="2.5vw"/>
    </svg>
  </div>
);


const MainContent = () => (
  <div className="main">
    <div className="main__text-wrapper">
      <h1 className="main__title">Digital Marketing</h1>
      <h2>Elevate Your Online Presence</h2>
      <p className="main__paragraph">
        Discover how innovative digital marketing techniques can transform your business. From SEO to social media campaigns, explore the tactics that can drive growth and engagement.
      </p>
      {/* Removed IconsAnimation component */}
    </div>
  </div>
);


// Main Component
const SvgHero = () => (
  <div className="svg-hero">
    <style>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

        .svg-hero {
          background: linear-gradient( #80BFFF , #003073);
          height: 100vh;
          font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          color: white;
          text-align: center;
          overflow: hidden;
          position: relative;
        }

        h1 {
          font-size: 3em;
          margin-bottom: 0.2em;
        }

        h2 {
          font-size: 2em;
        }

        .main {
          height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          justify-content: center;
          align-items: center;
        }

        .main__text-wrapper {
          position: relative;
          padding: 2em;
        }

        .main__paragraph {
          font-size: 1.2em;
          margin: 1em 0;
          text-align: left; /* Align to the left */
        }

        .arrow {
          z-index: 1000;
          opacity: 0.5;
          position: absolute;
        }

        .arrow--top {
          top: 0;
          left: -5em;
        }

        .arrow--bottom {
          bottom: 0;
          right: 3em;
        }

        .geo-arrow {
          fill: none;
          stroke: #fff;
          stroke-width: 2;
          stroke-miterlimit: 10;
        }

        .draw-in {
          stroke-dasharray: 1000;
          stroke-dashoffset: 10;
          animation: draw 15s ease-in-out alternate infinite;
        }

        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .item-to {
          animation-duration: 10s;
          animation-iteration-count: infinite;
          transform-origin: bottom;
        }

        .bounce-1 {
          animation-name: bounce-1;
          animation-timing-function: ease;
        }

        .bounce-2 {
          animation-name: bounce-2;
          animation-timing-function: ease;
        }

        .bounce-3 {
          animation-name: bounce-3;
          animation-timing-function: ease;
        }

        @keyframes bounce-1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(50px); }
          100% { transform: translateY(0); }
        }

        @keyframes bounce-2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }

        @keyframes bounce-3 {
          0% { transform: translateY(0); }
          50% { transform: translateY(30px); }
          100% { transform: translateY(0); }
        }

        .Header {
          position: relative;
          z-index: 1; /* Above background */
        }

        .Header__svg {
          position: absolute;
          width: 100%;
          height: auto;
          top: 50%;
          transform: translateY(-50%);
          z-index: -1;
          will-change: transform;
        }

        .Header__shape {
          animation-duration: 4s;
          animation-timing-function: cubic-bezier(.18, 1.17, .03, 1.46);
          animation-fill-mode: backwards;
          transform-origin: center;
          transform-box: fill-box;
        }

        .bigSquare {
          animation-name: bigSquare;
        }

        @keyframes bigSquare {
          from { transform: translateY(10%) rotate(-80deg) scale(0); }
          to { transform: translateY(0) rotate(0deg) scale(1); }
        }

        .littleSquare {
          animation-name: littleSquare;
        }

        @keyframes littleSquare {
          from { transform: translate(226%, 183%) rotate(140deg) scale(0); }
          to { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }

        .triangle {
          animation-name: triangle;
        }

        @keyframes triangle {
          from { transform: translate(226%, -90%) rotate(140deg) scale(0); }
          to { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }

        .bigCircle {
          animation-name: bigCircle;
        }

        @keyframes bigCircle {
          from { transform: translate(-90%, -50%) rotate(140deg) scale(0); }
          to { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }

        .hoop {
          animation-name: hoop;
        }

        @keyframes hoop {
          from { transform: translate(0%, 0%) scale(0); }
          to { transform: translate(0%, 0%) scale(1); }
        }

        .littleCircle {
          animation-name: littleCircle;
        }

        @keyframes littleCircle {
          from { transform: translate(0%, 100%) scale(0); }
          to { transform: translate(0%, 0%) scale(1); }
        }

         .Footer {
          position: relative;
          z-index: 1; /* Above background */
        }

        .Footer__svg {
          position: absolute;
          width: 100%;
          height: auto;
          bottom: 0; /* Align to bottom */
          transform: translateY(0%);
          z-index: -1;
          will-change: transform;
        }

        .Footer__shape {
          animation-duration: 4s;
          animation-timing-function: cubic-bezier(.18, 1.17, .03, 1.46);
          animation-fill-mode: backwards;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}
    </style>
    <ArrowAnimationTop />
    <ArrowAnimationBottom />
    <HeaderAnimation />
    <MainContent />
    <FooterAnimation /> {/* New Footer Animation */}
  </div>
);

export default SvgHero;
