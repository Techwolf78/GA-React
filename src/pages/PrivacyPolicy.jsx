import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FiShield,
  FiMail,
  FiDatabase,
  FiClock,
  FiKey,
  FiAlertCircle,
  FiCheckCircle,
  FiUser,
  FiSettings,
  FiPieChart
} from "react-icons/fi";

const PrivacyPolicy = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#01224F]">
      <div className="mx-auto px-4 md:px-16 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100/20 rounded-full mb-4">
            <FiShield className="w-8 h-8 text-[#FFC700]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We respect your privacy and are committed to protecting your
            personal data.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-300 mb-8">
                At Gryphon Academy, your privacy is important to us. This
                Privacy Policy explains how we collect, use, store, and protect
                your personal data when you interact with our website and
                services.
              </p>

              <div className="space-y-10">
                {/* Section 1 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100/20 p-3 rounded-lg mr-4">
                      <FiDatabase className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        1. Information We Collect
                      </h2>
                      <p className="text-gray-300 mb-3">
                        We collect personal information that you voluntarily
                        share with us when you:
                      </p>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-3">
                        <li>Visit or browse our website</li>
                        <li>Register for our training programs or services</li>
                        <li>Subscribe to updates or contact us</li>
                      </ul>
                      <p className="text-gray-300">
                        This may include your name, email address, contact
                        number, academic details, and any other data relevant to
                        your inquiry or registration.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100/20 p-3 rounded-lg mr-4">
                      <FiSettings className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        2. How We Use Your Information
                      </h2>
                      <p className="text-gray-300 mb-3">
                        Your data is used solely for purposes such as:
                      </p>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-3">
                        <li>Providing and personalizing our services</li>
                        <li>Communicating important updates and promotions</li>
                        <li>Improving our website, content, and offerings</li>
                      </ul>
                      <p className="text-gray-300">
                        We do not sell or rent your personal data to third
                        parties.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100/20 p-3 rounded-lg mr-4">
                      <FiKey className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        3. Data Protection & Security
                      </h2>
                      <p className="text-gray-300">
                        We implement robust physical, digital, and managerial
                        safeguards to protect your personal information against
                        unauthorized access, misuse, or alteration. Only
                        authorized personnel have access to your data under
                        strict confidentiality.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-100/20 p-3 rounded-lg mr-4">
                      <FiPieChart className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        4. Cookies & Tracking Technologies
                      </h2>
                      <p className="text-gray-300">
                        Our website may use cookies or similar tracking tools to
                        enhance your browsing experience and gather analytics.
                        You may manage your cookie preferences via your browser
                        settings. Disabling cookies, however, may affect certain
                        website functions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100/20 p-3 rounded-lg mr-4">
                      <FiClock className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        5. Data Retention
                      </h2>
                      <p className="text-gray-300">
                        We retain your data only for as long as it serves the
                        purpose for which it was collected, or as required by
                        law. Once it is no longer needed, it is securely deleted
                        or anonymized.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-red-100/20 p-3 rounded-lg mr-4">
                      <FiUser className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        6. Your Rights
                      </h2>
                      <p className="text-gray-300 mb-3">
                        You reserve the right to:
                      </p>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-3">
                        <li>Access the data we hold about you</li>
                        <li>Request corrections or updates</li>
                        <li>
                          Withdraw consent or request deletion of your data
                        </li>
                      </ul>
                      <p className="text-gray-300">
                        To exercise any of these rights, please contact us at:{" "}
                        <a
                          href="mailto:connect@gryphonacademy.co.in"
                          className="text-[#FFC700] hover:underline font-medium"
                        >
                          connect@gryphonacademy.co.in
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section className="border-b border-white/10 pb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gray-100/20 p-3 rounded-lg mr-4">
                      <FiAlertCircle className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        7. Policy Updates
                      </h2>
                      <p className="text-gray-300">
                        Gryphon Academy may revise this Privacy Policy
                        periodically. Any changes will be updated on this page
                        and take effect immediately upon posting. We encourage
                        you to review this policy regularly to stay informed.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100/20 p-3 rounded-lg mr-4">
                      <FiCheckCircle className="w-5 h-5 text-[#FFC700]" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-4">
                        8. Consent
                      </h2>
                      <p className="text-gray-300">
                        By using our website and submitting your information,
                        you consent to the practices described in this policy.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white/5 px-8 py-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-gray-400 text-sm mb-2 md:mb-0">
                Last updated: Junly 8, 2025
              </p>
              <a
                href="mailto:connect@gryphonacademy.co.in"
                className="inline-flex items-center text-[#FFC700] hover:text-yellow-400 font-medium"
              >
                <FiMail className="mr-2" />
                Contact our Privacy Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;