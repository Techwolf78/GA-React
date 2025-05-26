import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const InquiryFormModal = ({ onClose, onSuccess }) => {
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const recaptchaRef = useRef(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    source: "MBA Brochure",
    recaptchaToken: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptcha = (value) => {
    setFormState((prev) => ({ ...prev, recaptchaToken: value }));
  };

  const downloadPDF = () => {
    const url = "Course/MBA - Training Module New 2.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "mba-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.recaptchaToken) {
      toast.error("Please verify you are not a robot.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Form submitted! Downloading brochure...");
        setTimeout(downloadPDF, 500);
        recaptchaRef.current.reset(); // reset the captcha after success
        onSuccess();
        onClose();
      } else throw new Error("Submission failed.");
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">Download MBA Brochure</h2>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full mb-3 p-2 border rounded"
        />
        <select
          name="category"
          value={formState.category}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="college">College</option>
          <option value="corporate">Corporate</option>
          <option value="university">University</option>
        </select>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
          required
          className="w-full mb-4 p-2 border rounded"
        />

        {/* reCAPTCHA */}
        <div className="mb-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleRecaptcha}
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || !formState.recaptchaToken}
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
              (!formState.recaptchaToken || isSubmitting) &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit & Download"}
          </button>
        </div>
      </form>
    </div>
  );
};

InquiryFormModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default InquiryFormModal;
