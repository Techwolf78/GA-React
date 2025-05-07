import { useEffect, useState } from "react";
import bgImage from "../../../public/MasterClass/15.avif"; // Import background image

const calculateTimeLeft = () => {
  const targetDate = new Date("2025-05-31T00:00:00");
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) return null;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const PopupBanner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
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
      {/* Inline animation style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div
          className="text-white rounded-xl w-[90%] sm:w-[500px] md:w-[600px] relative shadow-xl animate-fade-in border-t-4 border-[#00A59F]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
<button
  onClick={() => setShowPopup(false)}
  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 text-white hover:text-gray-200 text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
  aria-label="Close"
>
  &times;
</button>


          <div className="p-4 sm:p-6 md:p-8">

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl z-0" />

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#00FFD1] mb-2">
                Masterclass 3.0
              </h2>

              <p className="text-lg sm:text-2xl mb-4">
                The Trident Traverse: Training. Hiring. Transformation.
              </p>

              <p className="text-base sm:text-lg mb-4">
                A powerful confluence of decision-makers, industry leaders, and academic visionaries.
              </p>

              {/* Countdown */}
              <div className="flex justify-center gap-3 text-[#D2F1F0] font-semibold text-lg sm:text-2xl">
                <div className="flex flex-col items-center">
                  <span>{timeLeft.days}</span>
                  <span className="text-xs uppercase">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{timeLeft.hours}</span>
                  <span className="text-xs uppercase">Hrs</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{timeLeft.minutes}</span>
                  <span className="text-xs uppercase">Min</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{timeLeft.seconds}</span>
                  <span className="text-xs uppercase">Sec</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  window.location.href = "/masterclass3";
                }}
                className="mt-6 bg-[#00FFD1] text-black px-4 py-2 rounded-full text-sm sm:text-base hover:bg-[#00bfa6] transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupBanner;
