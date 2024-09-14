import React from "react";
import HeroCorporate from "./HeroCorporate"; // Adjust the import path as needed
import CorporateChallenge from "./CorporateChallenge"; // Adjust the import path as needed
import CorporateAppoarch from "./CorporateAppoarch";



const CorporateTraining = () => {
  return (
    <div>

        <HeroCorporate />
<CorporateChallenge />
<CorporateAppoarch />

     {/* New Section with Neon Contact Us Button */}
     <div className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-purple-700 mb-4 underline">Get in Touch</h1>
          <p className="text-2xl text-black mb-8">
            We would love to hear from you. Feel free to reach out with any questions or inquiries.
          </p>
          <a
            href="/contact"
            className="neon-button relative inline-block text-white font-bold py-3 px-6 rounded-lg"
          >
            Contact Us
            <style jsx>{`
              .neon-button {
                position: relative;
                display: inline-block;
                padding: 10px 20px;
                font-size: 1.2rem;
                text-align: center;
                color: #ffffff;
                background-color: #a457ff; /* light purple */
                border: 2px solid #e9d8fd;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(233, 216, 253, 0.6),
                            0 0 16px rgba(233, 216, 253, 0.6),
                            0 0 24px rgba(233, 216, 253, 0.6);
                transition: all 0.3s ease-in-out;
                text-transform: uppercase;
                letter-spacing: 1px;
              }

              .neon-button:hover {
                background-color: #840cf5;
                color: #ffffff;
                box-shadow: 0 0 20px rgba(233, 216, 253, 0.8),
                            0 0 30px rgba(233, 216, 253, 0.8),
                            0 0 40px rgba(233, 216, 253, 0.8),
                            0 0 50px rgba(233, 216, 253, 0.5);
                transform: scale(1.1);
                animation: neon-blink 1.5s infinite alternate;
              }

              @keyframes neon-blink {
                0% {
                  text-shadow: 0 0 10px rgba(233, 216, 253, 0.6),
                               0 0 20px rgba(233, 216, 253, 0.6),
                               0 0 30px rgba(233, 216, 253, 0.6);
                }
                100% {
                  text-shadow: 0 0 15px rgba(233, 216, 253, 1),
                               0 0 30px rgba(233, 216, 253, 1),
                               0 0 45px rgba(233, 216, 253, 1),
                               0 0 60px rgba(233, 216, 253, 0.5);
                }
              }
            `}</style>
          </a>
        </div>
      </div>

    </div>
  );
};

export default CorporateTraining;
