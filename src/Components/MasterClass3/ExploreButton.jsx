// ExploreButton.js


const ExploreButton = () => {
  return (
    <a href="#overview" data-aos="fade-up" data-aos-delay="150">
      <button className="explore-btn">
        Explore More
      </button>
      <style>{`
        .explore-btn {
          display: flex;
          width: 150px;
          height: 40px;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;
          line-height: 35px;
          border: 1px solid #000; /* Changed to black */
          border-radius: 4px;
          text-align: center;
          font-size: 16px;
          color: #000; /* Changed to black */
          text-decoration: none;
          transition: all 0.35s;
          box-sizing: border-box;
          background-color: transparent;
          position: relative;
          overflow: hidden;
        }

        .explore-btn:hover {
          color: #fff;
          transition-delay: 0.2s;
          animation: ani500 0.6s forwards;
          background: 
            radial-gradient(circle, #027093 0.2em, transparent 0.3em) 6em 6em/1em 1em,
            radial-gradient(circle, #027093 0.2em, transparent 0.3em) 0 0/1em 1em;
        }

        @keyframes ani500 {
          100% {
            background-size: 2.375em 2.375em, 0.1em 0.1em;
          }
        }
      `}</style>
    </a>
  );
};

export default ExploreButton;
