import React from 'react';

const CollectionSection = () => (
  <div className="collection-section">
    <style>
      {`
        .section-heading {
          font-size: 2.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          text-align: center;
          color: #6a0dad; /* Light purple color */
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
          gap: 1rem;
          padding: 1rem;
        }

        .cutout-card {
          width: 100%;
          height: 350px;
          background-color: #dcd4e0; /* Light grey for card */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
        }

        .cutout-card:hover {
          transform: scale(1.05);
        }

        .cutout-card:hover .cutout-card__text {
          margin-top: -100%;
        }

        .cutout-card:hover .cutout-card__secondary {
          top: 0%;
        }

        .cutout-card__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-size: cover !important;
          background-position: center !important;
        }

        .cutout-card__text {
          position: absolute;
          padding: 5px;
          z-index: 1;
          text-align: center;
          min-width: 60%;
          height: 60px;
          border-radius: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(255, 255, 255, 0.8);
          color: #6a0dad; /* Light purple text */
          font-family: 'Bungee shade', cursive;
          font-weight: bold;
          line-height: 60px;
          font-size: 30px;
          mix-blend-mode: screen;
          transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        .cutout-card__text:before, .cutout-card__text:after {
          position: absolute;
          content: '';
          background-color: rgba(255, 255, 255, 0.8);
          width: 5px;
          height: 60%;
          left: 50%;
        }

        .cutout-card__text:before {
          top: -100%;
        }

        .cutout-card__text:after {
          top: 130%;
        }

        .cutout-card__secondary {
          overflow-y: scroll;
          cursor: pointer;
          padding: 5px;
          position: absolute;
          z-index: 3;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
          font-family: 'Permanent Marker', cursive;
          font-size: 15px;
          transition: all 0.5s;
        }

        .cutout-card__secondary::-webkit-scrollbar-thumb {
          background-color: #6a0dad; /* Light purple scrollbar */
        }

        .cutout-card__secondary p {
          background: url('image/deep-space-background.jpg');
          background-repeat: repeat;
          background-position: -30px;
        }

        .cutout-card.--space { background: url('image/deep-space-background.jpg'); }
        .cutout-card.--time { background: url('image/time.jpg'); }
        .cutout-card.--energy { background: url('image/energy.jpg'); }
      `}
    </style>

    <div className="section-heading">Our Collection</div>
    <div className="card-container">
      <div className="cutout-card --space">
        <div className="cutout-card__background" style={{ backgroundImage: 'url("image/deep-space-background.jpg")' }}></div>
        <div className="cutout-card__text">Ad</div>
        <div className="cutout-card__secondary">
          <p>Explore the vast expanse of space with our curated collection.</p>
        </div>
      </div>
      <div className="cutout-card --time">
        <div className="cutout-card__background" style={{ backgroundImage: 'url("image/time.jpg")' }}></div>
        <div className="cutout-card__text">Time</div>
        <div className="cutout-card__secondary">
          <p>Discover the mysteries of time through our unique collection.</p>
        </div>
      </div>
      <div className="cutout-card --energy">
        <div className="cutout-card__background" style={{ backgroundImage: 'url("image/energy.jpg")' }}></div>
        <div className="cutout-card__text">Energy</div>
        <div className="cutout-card__secondary">
          <p>Uncover the power of energy in our exclusive collection.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CollectionSection;