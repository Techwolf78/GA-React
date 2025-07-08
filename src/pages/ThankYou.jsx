import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  const navigate = useNavigate();

useEffect(() => {
  const conversionKey = 'conversion_tracked_AW-17187277283/Yb_sCIu1pOkaEOOTxINA';
  
  if (window.gtag && !sessionStorage.getItem(conversionKey)) {
    sessionStorage.setItem(conversionKey, 'true');
    gtag('event', 'conversion', {
      'send_to': 'AW-17187277283/Yb_sCIu1pOkaEOOTxINA',
      'event_callback': function() {
        console.log('ThankYou page conversion tracked!');
      }
    });
  }

  const timer = setTimeout(() => navigate("/"), 5000);
  return () => clearTimeout(timer);
}, [navigate]);

  return (
    <>
      <Helmet>
        <title>Thank You - Gryphon Academy</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 mx-auto text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">🎉 Thank You!</h1>
            <p className="text-blue-100 mt-2">Please check your email. We have received your enquiry.</p>
          </div>

          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              We appreciate your interest in Gryphon Academy
            </h2>
            <p className="mt-4 text-gray-600">
              Our team will review your information and respond within 24 hours.
              You'll receive a confirmation email shortly.
            </p>
            
            <div className="mt-10">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Need immediate assistance?</p>
          <p className="mt-1">
            Call us at <a href="tel:+919999999999" className="text-blue-600 hover:underline">+91 78758 95160</a> or email {' '}
            <a href="mailto:info@gryphonacademy.com" className="text-blue-600 hover:underline">connect@gryphonacademy.co.in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYou;