import React from 'react';

const CollectionSection = () => (
  <div className="px-8 md:px-16">  {/* Add padding here */}
  <div className="collection-section">
    <style>
      {`
        .section-heading {
          font-size: 2.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          text-align: center;
          color: #FFC80E; /* Yellow color */
          font-family: 'Roboto', sans-serif; /* Added Roboto font */
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
          gap: 1rem;
   
        }

        .cutout-card {
          width: 100%;
          height: 350px;
          background-color: #01224F; /* Light grey for card */
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
          background-color: rgba(255, 255, 255, 0.9); /* Slightly more opaque background */
          color: #000000; /* Black text for better visibility */
          font-family: 'Bungee shade', cursive;
          font-weight: bold; /* Make text bolder */
          line-height: 60px;
          font-size: 30px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6); /* Added text shadow for better contrast */
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
        <div className="cutout-card__background" style={{ backgroundImage: 'url("journey/events.png")' }}></div>
        <div className="cutout-card__text">Events</div>
        <div className="cutout-card__secondary">
          <p>
            Explore the vast expanse of space with our curated collection. Our events are designed to inspire and educate, offering a unique experience for all attendees. Each event features expert speakers, interactive sessions, and opportunities to connect with like-minded individuals. 
          </p>
          <p>
            Join us as we dive into discussions about current topics, innovations in science, and more. Whether you’re a student, a professional, or simply a curious mind, our events cater to everyone. Don’t miss out on the chance to engage with the community and expand your knowledge.
          </p>
        </div>
      </div>
      <div className="cutout-card --time">
        <div className="cutout-card__background" style={{ backgroundImage: 'url("journey/guest.jpg")' }}></div>
        <div className="cutout-card__text">Guest Lectures</div>
        <div className="cutout-card__secondary">
          <p>
            Discover the mysteries of time through our unique collection of guest lectures. We invite renowned speakers from various fields to share their insights and research, providing a platform for knowledge exchange. Each lecture is an opportunity to learn about groundbreaking discoveries and innovative ideas.
          </p>
          <p>
            Our guest lectures are not just informative; they are designed to spark curiosity and encourage critical thinking. Engage in thought-provoking discussions and ask questions that matter. Expand your horizons and connect with experts who are passionate about their subjects.
          </p>
        </div>
      </div>
      <div className="cutout-card --energy">
        <div className="cutout-card__background" style={{ backgroundImage: 'url("journey/admission.jpg")' }}></div>
        <div className="cutout-card__text">Admission</div>
        <div className="cutout-card__secondary">
          <p>
            Uncover the power of energy in our exclusive collection on admission. Here, you will find everything you need to know about the admission process, including requirements, deadlines, and tips for a successful application. Our goal is to provide clear and concise information to guide you through this important step.
          </p>
          <p>
            We understand that the admission journey can be overwhelming, which is why we offer support at every stage. Attend our information sessions, meet with advisors, and get your questions answered. Together, we can help you achieve your academic and professional goals.
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default CollectionSection;
