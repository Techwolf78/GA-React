import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const calculateTimeLeft = () => {
  const targetDate = new Date("2026-06-27T00:00:00");
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

const SynergySpherePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate();

  useEffect(() => {
    const closed = sessionStorage.getItem("synergy_popup_closed");
    if (!closed) {
      const timer = setTimeout(() => setShowPopup(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("synergy_popup_closed", "true");
  };

  const handleKnowMore = () => {
    handleClose();
    window.scrollTo({ top: 0 });
    navigate("/synergysphere2");
  };

  if (!showPopup || !timeLeft) return null;

  return (
    <>
      <style>{`
        @keyframes popupReveal {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popup-reveal {
          animation: popupReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .text-outline-popup {
          color: transparent;
          -webkit-text-stroke: 1.5px #ffffff;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="fixed inset-0 bg-[#020617]/90 backdrop-blur-md flex justify-center items-center z-[9999] px-4">
        {/* Main Popup Modal Card */}
        <div className="relative w-full max-w-2xl bg-[#070c18] border border-white/10 rounded-3xl p-3 sm:p-6 shadow-[0_0_80px_rgba(13,211,197,0.1)] animate-popup-reveal overflow-hidden flex flex-col items-center text-center">
          {/* Subtle Grid Texture Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40"></div>

          {/* Decorative Corner Accents (Fire & Ice) */}
          <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-[#0dd3c5]/50"></div>
          <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-[#ff5100]/50"></div>
          <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-[#ff5100]/50"></div>
          <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-[#0dd3c5]/50"></div>

          {/* Background Ambient Glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#0dd3c5]/15 filter blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#ff5100]/15 filter blur-[100px] pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-full w-7 h-7 flex items-center justify-center bg-white/5 backdrop-blur-md transition-all z-20 hover:scale-110"
            aria-label="Close Popup"
          >
            &times;
          </button>

          {/* Header Tag */}
          <div className="flex items-center gap-4 mb-6 z-10">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#0dd3c5]"></div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">
              Exclusive <span className="text-[#0dd3c5]">Invite</span>
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#ff5100]"></div>
          </div>

          {/* Event Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white mb-3 leading-tight z-10">
            Master Class 3.0{" "}
            <span className="text-outline-popup text-xl mx-2">×</span> Synergy
            Sphere 2.0
          </h2>

          {/* Event Theme */}
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#ff5100] mb-10 z-10">
            The Adventurous Intelligence (AI)
          </p>

          {/* Bento-style Countdown Grid */}
          <div className="grid grid-cols-4 gap-3 sm:gap-5 w-full max-w-md mb-10 z-10">
            {[
              {
                label: "Days",
                val: timeLeft.days,
                bg: "bg-white/5",
                border: "border-white/10",
              },
              {
                label: "Hours",
                val: timeLeft.hours,
                bg: "bg-white/5",
                border: "border-white/10",
              },
              {
                label: "Mins",
                val: timeLeft.minutes,
                bg: "bg-white/5",
                border: "border-white/10",
              },
              {
                label: "Secs",
                val: timeLeft.seconds,
                bg: "bg-white/5",
                border: "border-white/10",
              },
            ].map((unit, idx) => (
              <div
                key={idx}
                className={`group flex flex-col items-center justify-center py-5 rounded-2xl border ${unit.border} ${unit.bg} backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                <span className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-widest relative z-10 mb-1">
                  {String(unit.val).padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white/50 relative z-10">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm mb-10 font-sans z-10">
            Join the grand confluence of corporate leaders, academic
            visionaries, and industry giants on{" "}
            <span className="text-[#0dd3c5] font-medium border-b border-[#0dd3c5]/30 pb-0.5">
              June 27, 2026
            </span>
            .
          </p>

          {/* Dynamic Action Button */}
          <button
            onClick={handleKnowMore}
            className="relative group overflow-hidden px-10 py-4 rounded-full text-xs font-mono uppercase tracking-[0.25em] font-bold text-white border border-white/10 bg-white/5 hover:border-transparent transition-all duration-300 z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0dd3c5] to-[#ff5100] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Discover More
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SynergySpherePopup;
