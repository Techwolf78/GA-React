import React from 'react';
// You can use React Icons or any other library for icons.
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaPinterest, FaSnapchat, FaTiktok, FaGithub, FaReddit, FaTumblr, FaWhatsapp, FaSkype, FaVimeo, FaBehance, FaDribbble } from 'react-icons/fa';

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
    <path className="Header__shape bigSquare" fill="#16d5d1" d="M546.519 399.271l86.383-56.098 56.097 86.383-86.383 56.098z"/>
    <path className="Header__shape triangle" fill="none" stroke="#ff4676" strokeWidth="8" d="M372.15 462.17L321 434.58l-4.88 56.16z"/>
    <circle className="Header__shape hoop" fill="none" stroke="#ffe430" strokeWidth="13" cx="905.52" cy="447.17" r="2.5vw"/>
  </svg>
</div>

);
const FooterAnimation = () => (
  <div className="Footer">
    <svg className="Footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43" preserveAspectRatio="xMidYMid meet">
      {/* No need for shapes, we're focusing on the icons here */}
    </svg>
    <div className="footer-icons">
      {/* Show only 5 icons on mobile or small screens */}
      <div className="footer-icon-box icon-1">
        <a className="footer-icon footer-icon-left">
          <FaInstagram className="footer-icon-image" style={{ color: '#E4405F' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-2">
        <a className="footer-icon">
          <FaLinkedin className="footer-icon-image" style={{ color: '#0077B5' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-3">
        <a className="footer-icon">
          <FaTwitter className="footer-icon-image" style={{ color: '#1DA1F2' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-4">
        <a className="footer-icon">
          <FaFacebook className="footer-icon-image" style={{ color: '#1877F2' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-5">
        <a className="footer-icon">
          <FaYoutube className="footer-icon-image" style={{ color: '#FF0000' }} />
        </a>
      </div>

      {/* Only show these icons on larger screens */}
      <div className="footer-icon-box icon-6">
        <a className="footer-icon">
          <FaPinterest className="footer-icon-image" style={{ color: '#E60023' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-7">
        <a className="footer-icon">
          <FaSnapchat className="footer-icon-image" style={{ color: '#FFFC00' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-8">
        <a className="footer-icon">
          <FaTiktok className="footer-icon-image" style={{ color: '#000000' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-9">
        <a className="footer-icon">
          <FaGithub className="footer-icon-image" style={{ color: '#ffffff' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-10">
        <a className="footer-icon">
          <FaReddit className="footer-icon-image" style={{ color: '#FF4500' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-11">
        <a className="footer-icon">
          <FaWhatsapp className="footer-icon-image" style={{ color: '#25D366' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-12">
        <a className="footer-icon">
          <FaSkype className="footer-icon-image" style={{ color: '#00AFF0' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-13">
        <a className="footer-icon">
          <FaVimeo className="footer-icon-image" style={{ color: '#1AB7EA' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-14">
        <a className="footer-icon">
          <FaBehance className="footer-icon-image" style={{ color: '#1769FF' }} />
        </a>
      </div>

      <div className="footer-icon-box icon-15">
        <a className="footer-icon">
          <FaDribbble className="footer-icon-image" style={{ color: '#EA4C89' }} />
        </a>
      </div>
    </div>
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
    </div>
  </div>
);

// Main Component
const SvgHero = () => (
  <div className="svg-hero mt-6 px-8 md:px-16">
    <style>
      {`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

.svg-hero {
  background: linear-gradient(#80BFFF, #003073);
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
  box-sizing: border-box;
}

.main__text-wrapper {
  position: relative;
  box-sizing: border-box;
}

.main__paragraph {
  font-size: 1.2em;
  margin: 1em 0;
  text-align: left;
  box-sizing: border-box;
}

.arrow {
  z-index: 1000;
  opacity: 0.5;
  position: absolute;
  box-sizing: border-box;
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
  z-index: 1;
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

@keyframes floatUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.footer-icons {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  box-sizing: border-box;
}

.footer-icon-box {
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  display: none;
}

/* Alternating up and down animation for footer icons */
@keyframes bounce-up {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px); /* "Up" */
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes bounce-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px); /* "Down" */
  }
  100% {
    transform: translateY(0);
  }
}

/* Apply animations to icons with alternate delays */
.footer-icon-box.icon-1 {
  animation-name: bounce-up;
  animation-delay: 0s;
}

.footer-icon-box.icon-2 {
  animation-name: bounce-down;
  animation-delay: 0.2s;
}

.footer-icon-box.icon-3 {
  animation-name: bounce-up;
  animation-delay: 0.4s;
}

.footer-icon-box.icon-4 {
  animation-name: bounce-down;
  animation-delay: 0.6s;
}

.footer-icon-box.icon-5 {
  animation-name: bounce-up;
  animation-delay: 0.8s;
}

.footer-icon-box.icon-6 {
  animation-name: bounce-down;
  animation-delay: 1s;
}

.footer-icon-box.icon-7 {
  animation-name: bounce-up;
  animation-delay: 1.2s;
}

.footer-icon-box.icon-8 {
  animation-name: bounce-down;
  animation-delay: 1.4s;
}

.footer-icon-box.icon-9 {
  animation-name: bounce-up;
  animation-delay: 1.6s;
}

.footer-icon-box.icon-10 {
  animation-name: bounce-down;
  animation-delay: 1.8s;
}

.footer-icon-box.icon-11 {
  animation-name: bounce-up;
  animation-delay: 2s;
}

.footer-icon-box.icon-12 {
  animation-name: bounce-down;
  animation-delay: 2.2s;
}

.footer-icon-box.icon-13 {
  animation-name: bounce-up;
  animation-delay: 2.4s;
}

.footer-icon-box.icon-14 {
  animation-name: bounce-down;
  animation-delay: 2.6s;
}

.footer-icon-box.icon-15 {
  animation-name: bounce-up;
  animation-delay: 2.8s;
}

/* Show icons 1-5 on small screens */
.footer-icon-box.icon-1,
.footer-icon-box.icon-2,
.footer-icon-box.icon-3,
.footer-icon-box.icon-4,
.footer-icon-box.icon-5 {
  display: block;
}

/* Show icons 1-7 on medium screens */
@media screen and (min-width: 768px) {
  .footer-icon-box.icon-1,
  .footer-icon-box.icon-2,
  .footer-icon-box.icon-3,
  .footer-icon-box.icon-4,
  .footer-icon-box.icon-5,
  .footer-icon-box.icon-6,
  .footer-icon-box.icon-7 {
    display: block;
  }
}

/* Show all icons on large screens */
@media screen and (min-width: 1024px) {
  .footer-icon-box {
    display: block;
  }
}

.footer-icon-image {
  font-size: 2.5rem;
  transition: transform 0.3s ease;
}

.footer-icon:hover .footer-icon-image {
  transform: scale(1.2);
}

/* Smaller icon size for mobile */
@media (max-width: 767px) {
  .footer-icon-image {
    font-size: 1.5rem;
  }
}

/* Medium size icons for tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  .footer-icon-image {
    font-size: 2rem;
  }
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
