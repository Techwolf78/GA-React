import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SynergySphere2 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Custom Navbar States
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCrossBrandDropdownOpen, setCrossBrandDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const crossBrandDropdownRef = useRef(null);

  // Calculate time remaining until June 27, 2026
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const targetDate = new Date("June 27, 2026 09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Dropdown Click-outside hook
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        crossBrandDropdownRef.current &&
        !crossBrandDropdownRef.current.contains(event.target)
      ) {
        setCrossBrandDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#030712] text-white overflow-x-hidden font-sans flex flex-col justify-between select-none">
      {/* Self-contained styling for text outlines, animations, scrollbars, and floating blobs */}
      <style>{`
        .text-outline-fire {
          color: transparent;
          -webkit-text-stroke: 1.5px #ff5100;
          text-shadow: 0 0 20px rgba(255, 81, 0, 0.15);
        }
        .text-outline-white {
          color: transparent;
          -webkit-text-stroke: 1.5px #ffffff;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }
        .text-ice {
          color: #00f0ff;
          text-shadow: 0 0 20px rgba(0, 240, 255, 0.25);
        }
        @keyframes blob-float-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes blob-float-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.05); }
        }
        @keyframes blob-float-3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40% { transform: translate(50px, 30px) scale(0.9); }
        }
        .animate-blob-1 {
          animation: blob-float-1 16s ease-in-out infinite;
        }
        .animate-blob-2 {
          animation: blob-float-2 20s ease-in-out infinite;
        }
        .animate-blob-3 {
          animation: blob-float-3 18s ease-in-out infinite;
        }
        @keyframes rotate-dotted {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate-dotted {
          animation: rotate-dotted 15s linear infinite;
        }
      `}</style>

      {/* Floating Animated Color Blobs (Cloud Fog Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#00f0ff] opacity-15 blur-[100px] animate-blob-1"></div>
        <div className="absolute top-[30%] left-[35%] w-[400px] h-[400px] rounded-full bg-[#8b5cf6] opacity-10 blur-[120px] animate-blob-2"></div>
        <div className="absolute bottom-[25%] right-[10%] w-[380px] h-[380px] rounded-full bg-[#ff5100] opacity-15 blur-[100px] animate-blob-3"></div>
      </div>

      {/* CUSTOM NAV BAR (THEMED) */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 py-3 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
        <a className="flex items-center" href="/">
          <img
            src="../../ga-hori.png"
            alt="Company logo"
            className="w-36 md:w-48 h-auto"
          />
        </a>

        <nav className="hidden lg:flex space-x-2 text-xs font-mono tracking-wider font-semibold">
          <a
            href="/"
            className="hover:text-[#00f0ff] hover:bg-white/5 py-2 px-4 transition-all duration-300 rounded"
          >
            Home
          </a>

          {/* L&D Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            ref={dropdownRef}
          >
            <button className="hover:text-[#00f0ff] hover:bg-white/5 py-2 px-4 flex items-center gap-1 transition-all duration-300 rounded focus:outline-none">
              Learning & Development
              <i className="fas fa-chevron-down text-[8px] ml-0.5"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 bg-[#080d1a] border border-white/10 text-white shadow-xl z-50 rounded-lg overflow-hidden whitespace-nowrap py-1">
                <a
                  href="/collegeTraining"
                  className="block px-4 py-2 text-xs hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] transition-all"
                >
                  Industry Readiness Program
                </a>
                <a
                  href="/corporateTraining"
                  className="block px-4 py-2 text-xs hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] transition-all"
                >
                  Corporate Training
                </a>
                <a
                  href="/facultyTraining"
                  className="block px-4 py-2 text-xs hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] transition-all"
                >
                  Faculty Training
                </a>
              </div>
            )}
          </div>

          {/* Events Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setCrossBrandDropdownOpen(true)}
            onMouseLeave={() => setCrossBrandDropdownOpen(false)}
            ref={crossBrandDropdownRef}
          >
            <button className="hover:text-[#ff5100] hover:bg-white/5 py-2 px-4 flex items-center gap-1 transition-all duration-300 rounded focus:outline-none">
              Synergy Sphere 2024
              <i className="fas fa-chevron-down text-[8px] ml-0.5"></i>
            </button>
            {isCrossBrandDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 bg-[#080d1a] border border-white/10 text-white shadow-xl z-50 rounded-lg overflow-hidden whitespace-nowrap py-1">
                <a
                  href="/events"
                  className="block px-4 py-2 text-xs hover:bg-[#ff5100]/10 hover:text-[#ff5100] transition-all"
                >
                  Synergy Sphere 2024
                </a>
                <a
                  href="/brandPositioning"
                  className="block px-4 py-2 text-xs hover:bg-[#ff5100]/10 hover:text-[#ff5100] transition-all"
                >
                  Cross Brand Positioning
                </a>
              </div>
            )}
          </div>

          <a
            href="/placement"
            className="hover:text-[#00f0ff] hover:bg-white/5 py-2 px-4 transition-all duration-300 rounded"
          >
            Campus Placement
          </a>
          <a
            href="/blogs"
            className="hover:text-[#00f0ff] hover:bg-white/5 py-2 px-4 transition-all duration-300 rounded"
          >
            Blogs
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Custom Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-[#030712] border-r border-white/10 z-50 overflow-y-auto transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full w-0"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <img
              src="../../ga-hori.png"
              alt="Company logo"
              className="w-32 h-auto"
            />
            <button
              className="text-white text-xl focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-4 text-sm font-mono tracking-wider">
            <a href="/" className="hover:text-[#00f0ff] transition-all">
              Home
            </a>
            <div className="border-t border-white/5 pt-2">
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block mb-2">
                Learning & Dev
              </span>
              <a
                href="/collegeTraining"
                className="block pl-4 py-1.5 hover:text-[#00f0ff] transition-all text-xs"
              >
                Industry Readiness
              </a>
              <a
                href="/corporateTraining"
                className="block pl-4 py-1.5 hover:text-[#00f0ff] transition-all text-xs"
              >
                Corporate Training
              </a>
              <a
                href="/facultyTraining"
                className="block pl-4 py-1.5 hover:text-[#00f0ff] transition-all text-xs"
              >
                Faculty Training
              </a>
            </div>
            <div className="border-t border-white/5 pt-2">
              <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block mb-2">
                Events
              </span>
              <a
                href="/events"
                className="block pl-4 py-1.5 hover:text-[#ff5100] transition-all text-xs"
              >
                Synergy Sphere 2024
              </a>
              <a
                href="/brandPositioning"
                className="block pl-4 py-1.5 hover:text-[#ff5100] transition-all text-xs"
              >
                Cross Brand Positioning
              </a>
            </div>
            <a
              href="/placement"
              className="hover:text-[#00f0ff] transition-all border-t border-white/5 pt-2"
            >
              Placement
            </a>
            <a
              href="/blogs"
              className="hover:text-[#00f0ff] transition-all border-t border-white/5 pt-2"
            >
              Blogs
            </a>
          </div>
        </div>
      </header>

      {/* Middle Hero Section */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-8 max-w-7xl w-full px-6 md:px-16 mx-auto pt-24 pb-12 text-center animate-fade-in">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-serif tracking-tight font-normal leading-none text-white select-none">
            {/* Mobile Vertical Layout - Side-by-side vertical columns */}
            <div className="flex sm:hidden flex-row items-start justify-center gap-8 py-8 relative">
              {/* Mysterious Floating Fog Blobs */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0dd3c5]/10 to-[#ff5100]/10 filter blur-[35px] pointer-events-none"></div>
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[#0dd3c5]/20 to-[#ff5100]/20 blur-[50px] opacity-70 pointer-events-none animate-pulse"></div>

              {/* COMING Column */}
              <div className="flex flex-col items-center gap-1 font-serif text-5xl font-normal text-white relative z-10">
                {"COMING".split("").map((char, idx) => (
                  <span key={idx} className="leading-none">
                    {char}
                  </span>
                ))}
              </div>
              {/* SOON Column - Offset higher and straight */}
              <div className="flex flex-col items-center gap-1 font-serif text-5xl font-normal text-outline-white mt-[9.75rem] relative z-10">
                {"SOON".split("").map((char, idx) => (
                  <span key={idx} className="leading-none">
                    {char}
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop / Tablet Horizontal Layout */}
            <div className="hidden sm:block">
              Coming <span className="text-outline-white">Soon</span>
            </div>
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] lg:whitespace-nowrap font-serif tracking-tight font-normal leading-tight mt-2">
            <span className="text-[#0dd3c5]">Master Class 3.0</span>{" "}
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#ff007f] to-[#ffc700] bg-clip-text text-transparent font-normal drop-shadow-[0_2px_15px_rgba(255,0,127,0.15)]">
              × Synergy Sphere 2.0
            </span>
          </h1>
        </div>

        {/* Minimalist Countdown Display */}
        <div className="w-full max-w-lg mt-4 border-b border-white/40 pb-3 flex items-end justify-between font-mono">
          <span className="text-xs sm:text-sm tracking-wider uppercase text-white/80">
            Launch Countdown
          </span>
          <div className="text-sm sm:text-base tracking-widest text-white font-bold flex gap-1 sm:gap-2">
            <span>{String(timeLeft.days).padStart(2, "0")}d</span>
            <span className="text-white/40">:</span>
            <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
            <span className="text-white/40">:</span>
            <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
            <span className="text-white/40">:</span>
            <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>
        </div>
      </main>

      {/* Agenda Section */}
      <section className="relative z-10 max-w-7xl w-full px-6 md:px-16 py-24 mx-auto border-t border-white/10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
              Event <span className="text-outline-white">Agenda</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-white/50">
              *Preliminary Schedule — Subject to Autonomous Mutation
            </p>
          </div>

          <div className="w-full overflow-x-auto mt-6">
            <table className="w-full text-left font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-xs text-white/40 uppercase tracking-widest pb-4">
                  <th className="py-4 font-semibold w-1/4">Time / Slot</th>
                  <th className="py-4 font-semibold w-1/2">Session & Track</th>
                  <th className="py-4 font-semibold w-1/4 text-right">
                    Host / Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {[
                  {
                    time: "03:00 PM - 04:00 PM",
                    title: "Networking",
                    track: "Inaugural Track",
                    speakers: [],
                    status: "Coming Soon",
                  },
                  {
                    time: "04:06 PM - 04:10 PM",
                    title: "Welcome Note & Introduction",
                    track: "Introductory Track",
                    speakers: [
                      {
                        name: "Mr. Ummeaiman Ansari",
                        role: "Co-Founder - Gryphon Academy",
                      },
                    ],
                    status: "Coming Soon",
                  },
                  {
                    time: "04:10 PM - 05:00 PM",
                    title: "Key Addressal – Academia",
                    track: "Academic Keynote",
                    speakers: [
                      {
                        name: "Dr. Pandit Mali",
                        role: "Chief Executive Officer - Indira Group of Institutes",
                      },
                      {
                        name: "Dr. Manish Kothari",
                        role: "Managing Director - ISBR Business School",
                      },
                      {
                        name: "Mr. Amit Kolhe",
                        role: "Managing Trustee - Sanjivani University",
                      },
                    ],
                    status: "Coming Soon",
                  },
                  {
                    time: "05:15 PM - 05:35 PM",
                    title: "Key Addressal – Industry",
                    track: "Industry Keynote",
                    speakers: [
                      {
                        name: "Mr. Tushar Desai",
                        role: "Senior Director - Talent Acquisition India & Philippines - FIS",
                      },
                      {
                        name: "Mr. S.N Rao",
                        role: "Lead Early Careers Talent India - Philips",
                      },
                    ],
                    status: "Coming Soon",
                  },
                  {
                    time: "05:35 PM - 06:30 PM",
                    title: "The Skill Gap Dilemma: Between Industry & Academia",
                    track: "Panel Discussion",
                    speakers: [
                      {
                        name: "Prof. Chetan Wakalkar",
                        role: "Academic Advisor - IGI",
                      },
                      {
                        name: "Mr. Andrews Simon",
                        role: "Head - Talent Acquisition - eClerx",
                      },
                      {
                        name: "Mr. Ramchandra Honap",
                        role: "Head HR - Coca Cola",
                      },
                      {
                        name: "Ms. Aanchal Tandon",
                        role: "India Lead HR - HCLTech",
                      },
                      {
                        name: "Mr. Urvish Pandey",
                        role: "Director - Talent Acquisition - Mastercard",
                      },
                      {
                        name: "Mr. Hemant Sethia",
                        role: "TA India Lead - M & G Global Services",
                      },
                      {
                        name: "Dr. Manish Kothari",
                        role: "Managing Director - ISBR Business School",
                      },
                    ],
                    status: "Coming Soon",
                  },
                  {
                    time: "06:45 PM - 07:15 PM",
                    title: "Celebrating HR Excellence",
                    track: "Recognition Track",
                    speakers: [],
                    status: "Coming Soon",
                  },
                  {
                    time: "07:15 PM - 07:30 PM",
                    title: "Closing Note",
                    track: "Closing Track",
                    speakers: [
                      {
                        name: "Mr. Shashi Bhat",
                        role: "Founder - Gryphon Academy",
                      },
                    ],
                    status: "Coming Soon",
                  },
                  {
                    time: "07:30 PM Onwards",
                    title: "Ghazal Night",
                    track: "Cultural Event",
                    speakers: [{ name: "Jazim Sharma", role: "Artist/Singer" }],
                    status: "Coming Soon",
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className="group hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-6 pr-4 text-xs font-bold text-white/60 group-hover:text-white transition-colors">
                      {item.time}
                    </td>
                    <td className="py-6 pr-4">
                      <div className="transition-all duration-500 blur-[7px] group-hover:blur-[2px] select-none">
                        <div className="text-base sm:text-lg font-serif text-white group-hover:text-[#0dd3c5] transition-colors leading-snug">
                          {item.title}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">
                          {item.track}
                        </div>
                        {item.speakers.length > 0 && (
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-2 border-t border-white/5">
                            {item.speakers.map((speaker, sIdx) => (
                              <div key={sIdx} className="text-xs">
                                <span className="font-bold text-white/90 block">
                                  {speaker.name}
                                </span>
                                <span className="text-[10px] text-white/40 block leading-tight">
                                  {speaker.role}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-6 text-right text-xs uppercase tracking-wider font-semibold text-[#ff5100]">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Academic Partners Section */}
      <section className="relative z-10 max-w-7xl w-full px-6 md:px-16 py-24 mx-auto border-t border-white/10">
        <div className="flex flex-col gap-12 items-center text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
              Academic <span className="text-outline-white">Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-6">
            {[
              {
                logoUrl:
                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&h=150&q=80",
                fullName: "Indira Group of Institutes",
                color: "hover:border-purple-500/30",
                glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]",
                gradient: "from-purple-600/20 to-indigo-600/20",
                accent: "border-purple-500/40 group-hover:border-purple-400",
                borderColor: "border-purple-500",
                badgeBorder: "border-purple-500/40 text-purple-200",
              },
              {
                logoUrl:
                  "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=150&h=150&q=80",
                fullName: "ISBR Business School",
                color: "hover:border-[#0dd3c5]/30",
                glow: "hover:shadow-[0_0_50px_rgba(13,211,197,0.15)]",
                gradient: "from-[#0dd3c5]/20 to-blue-600/20",
                accent: "border-[#0dd3c5]/40 group-hover:border-[#0dd3c5]",
                borderColor: "border-[#0dd3c5]",
                badgeBorder: "border-[#0dd3c5]/40 text-[#0dd3c5]",
              },
              {
                logoUrl:
                  "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=150&h=150&q=80",
                fullName: "Sanjivani University",
                color: "hover:border-[#ff5100]/30",
                glow: "hover:shadow-[0_0_50px_rgba(255,81,0,0.15)]",
                gradient: "from-[#ff5100]/20 to-red-600/20",
                accent: "border-[#ff5100]/40 group-hover:border-[#ff5100]",
                borderColor: "border-[#ff5100]",
                badgeBorder: "border-[#ff5100]/40 text-[#ff5100]",
              },
            ].map((partner, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-[#070c18]/40 border border-white/5 rounded-3xl p-10 flex flex-col items-center justify-center min-h-[260px] transition-all duration-700 ease-out hover:scale-[1.03] hover:-translate-y-1.5 hover:bg-[#0b1326]/50 ${partner.color} ${partner.glow}`}
              >
                {/* Neon Mesh Background Glow */}
                <div
                  className={`absolute -inset-10 bg-gradient-to-tr ${partner.gradient} rounded-full filter blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                ></div>

                {/* Cyberpunk Tech Corner Accents */}
                <div
                  className={`absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/10 ${partner.accent} transition-colors duration-500`}
                ></div>
                <div
                  className={`absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/10 ${partner.accent} transition-colors duration-500`}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/10 ${partner.accent} transition-colors duration-500`}
                ></div>
                <div
                  className={`absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/10 ${partner.accent} transition-colors duration-500`}
                ></div>

                {/* Rotating Dotted Graphic Outer Frame */}
                <div className="relative w-28 h-28 flex items-center justify-center mb-4">
                  {/* Outer rotating dashed border */}
                  <div
                    className={`absolute inset-0 rounded-full border border-dashed ${partner.borderColor} opacity-10 group-hover:opacity-40 group-hover:animate-rotate-dotted transition-all duration-700`}
                  ></div>
                  {/* Inner glowing ring */}
                  <div
                    className={`absolute inset-2 rounded-full bg-gradient-to-tr ${partner.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-700`}
                  ></div>
                  {/* Image container */}
                  <div className="relative w-20 h-20 rounded-full overflow-hidden filter blur-[24px] group-hover:blur-[11px] transform scale-90 group-hover:scale-100 transition-all duration-700 ease-out select-none border border-white/10">
                    <img
                      src={partner.logoUrl}
                      alt="Academic partner logo teaser"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Hype Text section */}
                <div className="mt-2 flex flex-col items-center gap-2 relative z-10">
                  <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 uppercase mb-1 block">
                    Partner 0{idx + 1}
                  </span>
                  <p className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/50 group-hover:text-white transition-all duration-700 blur-[12px] group-hover:blur-[7.5px] select-none text-center leading-relaxed max-w-[220px]">
                    {partner.fullName}
                  </p>
                  <div className="relative mt-2">
                    {/* Glow behind badge */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-700`}
                    ></div>
                    <span
                      className={`relative inline-block text-[8px] font-mono tracking-[0.2em] border ${partner.badgeBorder} px-3 py-1 rounded-full uppercase bg-[#030712]/80 backdrop-blur-sm`}
                    >
                      Revealing Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiential Highlights (Bento Grid) */}
      <section className="relative z-10 max-w-7xl w-full px-6 md:px-16 py-24 mx-auto border-t border-white/10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
              Confluence <span className="text-outline-white">Chronicles</span>
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-white/50">
              Capturing the synergy of academia & industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px] mt-6">
            {[
              {
                src: "Event/h5.avif",
                title: "Event Highlight",
                span: "md:col-span-2",
                glow: "group-hover:shadow-[0_0_40px_rgba(13,211,197,0.15)]",
                accent: "border-[#0dd3c5]/30 group-hover:border-[#0dd3c5]",
                gradient: "from-[#0dd3c5]/20 to-[#0dd3c5]/5",
                textColor: "text-[#0dd3c5]",
              },
              {
                src: "Event/h1.avif",
                title: "Ground Zero Session",
                span: "md:col-span-1",
                glow: "group-hover:shadow-[0_0_40px_rgba(255,81,0,0.15)]",
                accent: "border-[#ff5100]/30 group-hover:border-[#ff5100]",
                gradient: "from-[#ff5100]/20 to-[#ff5100]/5",
                textColor: "text-[#ff5100]",
              },
              {
                src: "Event/h3.avif",
                title: "Celebrating HR Excellence",
                span: "md:col-span-1",
                glow: "group-hover:shadow-[0_0_40px_rgba(13,211,197,0.15)]",
                accent: "border-[#0dd3c5]/30 group-hover:border-[#0dd3c5]",
                gradient: "from-[#0dd3c5]/20 to-[#0dd3c5]/5",
                textColor: "text-[#0dd3c5]",
              },
              {
                src: "Event/h4.avif",
                title: "Welcome Note",
                span: "md:col-span-1",
                glow: "group-hover:shadow-[0_0_40px_rgba(255,81,0,0.15)]",
                accent: "border-[#ff5100]/30 group-hover:border-[#ff5100]",
                gradient: "from-[#ff5100]/20 to-[#ff5100]/5",
                textColor: "text-[#ff5100]",
              },
              {
                src: "Event/h2.avif",
                title: "Panel Discussion",
                span: "md:col-span-1",
                glow: "group-hover:shadow-[0_0_40px_rgba(13,211,197,0.15)]",
                accent: "border-[#0dd3c5]/30 group-hover:border-[#0dd3c5]",
                gradient: "from-[#0dd3c5]/20 to-[#0dd3c5]/5",
                textColor: "text-[#0dd3c5]",
              },
              {
                src: "Event/h7.avif",
                title: "Academic Addressal",
                span: "md:col-span-2",
                glow: "group-hover:shadow-[0_0_40px_rgba(255,81,0,0.15)]",
                accent: "border-[#ff5100]/30 group-hover:border-[#ff5100]",
                gradient: "from-[#ff5100]/20 to-[#ff5100]/5",
                textColor: "text-[#ff5100]",
              },
              {
                src: "Event/h6.avif",
                title: "Closing Note",
                span: "md:col-span-2",
                glow: "group-hover:shadow-[0_0_40px_rgba(13,211,197,0.15)]",
                accent: "border-[#0dd3c5]/30 group-hover:border-[#0dd3c5]",
                gradient: "from-[#0dd3c5]/20 to-[#0dd3c5]/5",
                textColor: "text-[#0dd3c5]",
                objectPosition: "object-top",
              },
              {
                src: "Event/h8.avif",
                title: "Networking",
                span: "md:col-span-2",
                glow: "group-hover:shadow-[0_0_50px_rgba(13,211,197,0.2)]",
                accent: "border-[#0dd3c5]/30 group-hover:border-[#ff5100]",
                gradient: "from-[#0dd3c5]/20 to-[#ff5100]/20",
                textColor: "text-white",
              },
            ].map((img, idx) => (
              <div
                key={idx}
                className={`relative group rounded-3xl border border-white/10 bg-[#070c18] overflow-hidden flex flex-col justify-end p-6 transition-all duration-500 ${img.span} ${img.glow}`}
              >
                {/* Cyberpunk corner accents for Bento cards */}
                <div className={`absolute top-4 left-4 w-3 h-3 border-t border-l ${img.accent} transition-colors duration-500`}></div>
                <div className={`absolute top-4 right-4 w-3 h-3 border-t border-r ${img.accent} transition-colors duration-500`}></div>
                <div className={`absolute bottom-4 left-4 w-3 h-3 border-b border-l ${img.accent} transition-colors duration-500`}></div>
                <div className={`absolute bottom-4 right-4 w-3 h-3 border-b border-r ${img.accent} transition-colors duration-500`}></div>

                {/* Ambient Soft Mesh Background Glow (triggered on hover) */}
                <div className={`absolute -inset-10 bg-gradient-to-tr ${img.gradient} rounded-full filter blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={`/${img.src}`}
                    alt={img.title}
                    className={`w-full h-full object-cover ${img.objectPosition || "object-center"} opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out`}
                  />
                  {/* Glassmorphic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent"></div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col gap-1">
                  <h3 className={`text-sm font-mono uppercase tracking-widest ${img.textColor} group-hover:text-white transition-colors`}>
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM FOOTER (THEMED) */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-[#020617]/40 py-12 px-6 md:px-16 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 font-mono">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://res.cloudinary.com/dcjmaapvi/image/upload/v1732608342/NewLogo_glaelo.webp"
              alt="Gryphon Academy Logo"
              className="w-48 md:w-56"
            />
            {/* <p className="text-[10px] text-white/40 mt-4 max-w-xs text-center md:text-left">
              Hi. We are Gryphon Academy. We are busy building our new online page for Master Class 3.0 X Synergy Sphere 2.0 - The Adventurous Intelligence (AI). June 27, 2026.
            </p> */}
          </div>

          {/* Useful Links Column */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#0dd3c5]">
              Useful Links
            </h2>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Contact Us", path: "/contact" },
                { name: "About Us", path: "/about-us" },
                { name: "Learning & Development", path: "/training" },
                { name: "Campus Placement", path: "/placement" },
                { name: "Blogs", path: "/blogs" },
                { name: "Privacy Policy", path: "/privacy-policy" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition duration-300 border-b border-transparent hover:border-[#0dd3c5]/60"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#ff5100]">
              Contact Us
            </h2>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="leading-relaxed">
                <a
                  href="https://maps.app.goo.gl/LbkaqWULoGY2k7bq8"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  9th Floor, Olympia Business House, Mumbai - Bangalore Highway,
                  Pune - 411045
                </a>
              </li>
              <li>
                <a
                  href="tel:+918956444509"
                  className="hover:text-white transition-colors"
                >
                  +91 8956444509
                </a>
              </li>
              <li>
                <a
                  href="mailto:connect@gryphonacademy.co.in"
                  className="hover:text-white transition-colors"
                >
                  connect@gryphonacademy.co.in
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us & Socials Column */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-4 text-white">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                href="https://www.facebook.com/gryphonnacademy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/LandingImage/social-fb.svg"
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-80 transition duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/gryphon_academy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/LandingImage/social-ig.svg"
                  alt="Instagram"
                  className="w-6 h-6 hover:opacity-80 transition duration-300"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/gryphonacademy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/LandingImage/social-in.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-80 transition duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCVn2uVWEHg8cMFd8ht3CQBw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/LandingImage/youtube.png"
                  alt="YouTube"
                  className="w-6 h-6 hover:opacity-80 transition duration-300"
                />
              </a>
            </div>
            <div className="text-[10px] text-white/30 mt-2">
              Copyright &copy; {new Date().getFullYear()} Gryphon Academy Pvt.
              Ltd.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SynergySphere2;
