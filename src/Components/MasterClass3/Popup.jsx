import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlobButton from "./BlobButton";

const calculateTimeLeft = () => {
  const targetDate = new Date("2025-05-31T00:00:00");
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const PopupBanner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!showPopup || !timeLeft) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
        .glow {
          text-shadow: 0 0 5px #00a59f77, 0 0 10px #00a59f55;
        }
      `}</style>

      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        {/* Relative wrapper for positioning */}
        <div className="relative w-[90%] sm:w-[480px] md:w-[550px]">

          {/* Close Button - Positioned Outside Popup */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute -top-2 -right-2 z-50 text-gray-600 hover:text-gray-900 text-xl font-bold rounded-full bg-white shadow-md w-6 h-6 flex items-center justify-center"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Popup Box */}
          <div className="bg-white backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl animate-fade-in overflow-hidden flex flex-col sm:flex-row">
            
            {/* Left Content */}
            <div className="flex-1 px-4 py-5 sm:px-6 sm:py-8 text-center flex flex-col justify-center items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#00A59F] mb-2 drop-shadow-sm">
                Masterclass 3.0
              </h2>
              <p className="text-sm sm:text-base mb-2 font-medium text-gray-800">
                The Trident Traverse: Training. Hiring. Transformation.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-snug mb-4 sm:mb-6">
                A powerful confluence of decision-makers, industry leaders, and academic visionaries.
              </p>
              <div className="w-full flex justify-center">
                <BlobButton onClick={() => navigate("/masterclass3")} />
              </div>
            </div>

            {/* Countdown */}
            <div className="bg-white/90 px-3 py-4 sm:px-4 sm:py-6 flex flex-row sm:flex-col justify-around sm:justify-center items-center text-[#00A59F] font-bold text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-gray-200">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="flex flex-col items-center mx-1 sm:mx-0 sm:mb-3 last:mb-0">
                  <span className="text-xl sm:text-3xl glow">{timeLeft[unit]}</span>
                  <span className="text-[10px] uppercase tracking-wide text-gray-600">{unit}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PopupBanner;
