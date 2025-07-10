import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isOnCooldown, setIsOnCooldown] = useState(false);

  const categoryOptions = [
    { value: "student", label: "Student" },
    { value: "company", label: "Company" },
    { value: "college", label: "College" },
  ];

const handleSubmit = (e) => {
    e.preventDefault();

    // Rate-limiting check (if the form is on cooldown, prevent submitting)
    if (isOnCooldown) {
      toast.error("Please wait before submitting again.");
      return;
    }

    // Check reCAPTCHA token
    if (!recaptchaToken) {
      toast.error("Please verify that you're not a robot.");
      return;
    }

    const formData = new FormData(e.target);

    // 🛡️ Honeypot spam check
    if (formData.get("botcheck")) {
      toast.error("Spam detected. Submission blocked.");
      return;
    }

    // ✅ Manual required check for category
    if (!category) {
      toast.error("Please select a category.");
      return;
    }

    // Start the rate-limiting cooldown
    setIsOnCooldown(true);

    // Set cooldown timeout (30 seconds)
    setTimeout(() => {
      setIsOnCooldown(false); // Reset cooldown after 30 seconds
    }, 30000);

    setIsSubmitting(true);

    formData.append("source", "Contact Form");
    formData.append("category", category.value);
    formData.append("recaptchaToken", recaptchaToken); // Add reCAPTCHA token to form data

    // Send form data to server (Google Sheets API)
    fetch(
      "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Form successfully submitted!");
          setIsFormSubmitted(true);
          setTimeout(() => {
            e.target.reset();
            setCategory(null);
            setIsSubmitting(false);
          }, 2000);
        } else {
          toast.error(`Error: ${data.message}`);
          setIsSubmitting(false);
        }
      })
      .catch(() => {
        toast.error("Error submitting form. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

      <section className="py-16 bg-[#01224F] mx-auto mt-6 mb-6 px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-7xl font-bold text-[#ffffff] text-center">
              Let&apos;s <span className="text-[#ffffff]">Bridge</span> <br />
              <span className="text-[#FFC80E] text-center">the Gap</span>
            </h1>
          </div>

          <div>
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="botcheck"
                style={{ display: "none" }}
                autoComplete="off"
                tabIndex="-1"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-[#ffffff]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-[#ffffff]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 font-medium text-[#ffffff]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block mb-1 font-medium text-[#ffffff]"
                >
                  Category
                </label>
                <Select
                  id="category"
                  name="category"
                  value={category}
                  onChange={setCategory}
                  options={categoryOptions}
                  placeholder="Select Category"
                  isSearchable={false}
                  styles={{
                    control: (styles) => ({
                      ...styles,
                      borderColor: "#2e4d80",
                      borderRadius: "8px",
                      padding: "2px",
                      minHeight: "40px",
                    }),
                    placeholder: (styles) => ({ ...styles, color: "#a3a0a0" }),
                    singleValue: (styles) => ({ ...styles, color: "#091327" }),
                    option: (styles) => ({ ...styles, color: "#091327" }),
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-medium text-[#ffffff]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full border border-[#2e4d80] rounded-lg p-2 focus:ring focus:ring-[#FFC80E] focus:border-[#FFC80E]"
                ></textarea>
              </div>

              <ReCAPTCHA
                sitekey="6LclNjkrAAAAACgSlm5lRuUtzi2H9EIIdi62NPCb"
                onChange={(token) => setRecaptchaToken(token)}
                theme="light" // or "dark"
                className="my-4"
              />

              {/* Submit Button */}
<button
  type="submit"
  disabled={isSubmitting || isOnCooldown || isFormSubmitted}
  className={`w-full text-[#091327] py-3 rounded-lg font-bold transition-all duration-300 ${
    isSubmitting || isOnCooldown || isFormSubmitted
      ? "bg-gradient-to-r from-[#FFC80E] to-[#e0a800] opacity-50 cursor-not-allowed"
      : "bg-gradient-to-r from-[#FFC80E] to-[#ffab00] hover:scale-105 hover:from-[#ff9a00] hover:to-[#f4a261]"
  }`}
>
  {isSubmitting ? "Submitting..." : isFormSubmitted ? "Submitted" : "Send Message"}
</button>

            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <div className="py-12 bg-[#01224F] px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="p-6 text-center bg-[#1e3a8a] rounded-lg shadow-lg transition-transform hover:scale-105">
            <i className="bx bx-location-plus text-4xl text-[#FFC80E] mb-4"></i>
            <h4 className="text-xl font-bold text-[#FFC80E] mb-2">Address</h4>
            <p className="text-[#ffffff]">
              9th Floor, Olympia Business House (Achalare), Next to Supreme HQ,
              Mumbai - Banglore, Highway Baner, Pune Maharashtra - 411045
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 text-center bg-[#1e3a8a] rounded-lg shadow-lg transition-transform hover:scale-105">
            <i className="bx bx-phone text-4xl text-[#FFC80E] mb-4"></i>
            <h4 className="text-xl font-bold text-[#FFC80E] mb-2">Phone</h4>
            <p className="text-[#ffffff]">+91 89836 14509 / 8983339099</p>
            {/* <p className="text-[#ffffff]">+91 78758 95160</p> */}
          </div>

          {/* Email */}
          <div className="p-6 text-center bg-[#1e3a8a] rounded-lg shadow-lg transition-transform hover:scale-105">
            <i className="bx bx-envelope text-4xl text-[#FFC80E] mb-4"></i>
            <h4 className="text-xl font-bold text-[#FFC80E] mb-2">Email</h4>
            <p className="text-[#ffffff] break-all overflow-wrap-break-word">
              connect@gryphonacademy.co.in
            </p>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <section className="py-24 bg-[#01224F] px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4536495747366!2d73.76831887436869!3d18.553575668166875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab4cb7fb73c5c4ff%3A0x14e62cad775d447b!2sGryphon%20Academy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1724220761014!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <h1 className="text-7xl font-bold text-[#ffffff] text-center md:text-center">
            Get <span className="text-[#ffffff]">in</span> <br />
            <span className="text-[#FFC80E]">Touch</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Contact;
