import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const conversionKey =
      "conversion_tracked_AW-17187277283/Yb_sCIu1pOkaEOOTxINA";

    if (window.gtag && !sessionStorage.getItem(conversionKey)) {
      sessionStorage.setItem(conversionKey, "true");
      window.gtag("event", "conversion", {
        send_to: "AW-17187277283/Yb_sCIu1pOkaEOOTxINA",
        event_callback: function () {
          console.log("ThankYou page conversion tracked!");
        },
      });
    }

    const timer = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className=" bg-gray-50 flex flex-col items-center justify-center p-6 md:p-8 min-h-screen">
        {/* Main Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full mt-12 max-w-md bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Header with subtle gradient */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 sm:p-8 text-center ">
            <motion.div
              className="inline-block"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <div className="bg-white/20 p-3 rounded-full inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-4">
              Thank You!
            </h1>
            <p className="text-blue-100/90 mt-2 text-sm sm:text-base">
              <span>We&apos;ve received your message!</span>
            </p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900">
                We appreciate your interest in Gryphon Academy
              </h2>
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                Our team will review your information and respond within 24
                hours. You'll receive a confirmation email shortly.
              </p>
            </div>

            {/* Progress bar showing auto-redirect */}
            <div className="mt-6">
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-blue-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Redirecting in 5 seconds...
              </p>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/")}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Return to Homepage
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>

              <button
                onClick={() =>
                  (window.location.href = "mailto:connect@gryphonacademy.co.in")
                }
                className="w-full py-2.5 px-4 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-all duration-200"
              >
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer with contact info */}
        <div className="mt-8 text-center max-w-md">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-xs">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Need immediate assistance?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm">
              <a
                href="tel:+917875895160"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 78758 95160
              </a>
              <a
                href="mailto:connect@gryphonacademy.co.in"
                className="text-blue-600 hover:text-blue-700 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                connect@gryphonacademy.co.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
