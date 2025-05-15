import PropTypes from "prop-types";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import ReCAPTCHA from "react-google-recaptcha";

const BrochureFormModal = ({
  formState,
  setFormState,
  isSubmitting,
  isFormSubmitted,
  handleSubmit,
  onClose,
  recaptchaRef
}) => {
  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  const onRecaptchaChange = (value) => {
    setFormState((prev) => ({ ...prev, recaptchaToken: value }));
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-form-title"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-9/10 md:w-1/3 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          aria-label="Close form"
          className="text-4xl absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <h3 id="brochure-form-title" className="text-lg font-bold mb-4">
          Please provide your details:
        </h3>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formState.phone}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
          <SelectField
            label="Category"
            name="category"
            value={formState.category}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, category: e.target.value }))
            }
          />
          <TextareaField
            label="Inquiry"
            name="message"
            placeholder="Your Inquiry"
            value={formState.message}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, message: e.target.value }))
            }
          />

          {/* reCAPTCHA */}
          <div className="mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={onRecaptchaChange}
            />
          </div>

          <button
            type="submit"
            disabled={
              isSubmitting || isFormSubmitted || !formState.recaptchaToken
            }
            className={`bg-yellow-400 text-gray-800 py-2 rounded-lg font-bold transition-colors w-full ${
              isSubmitting || isFormSubmitted || !formState.recaptchaToken
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:bg-yellow-300"
            }`}
          >
            {isSubmitting
              ? "Submitting..."
              : isFormSubmitted
              ? "Already Submitted"
              : "Send Details"}
          </button>
        </form>
      </div>
    </div>
  );
};

BrochureFormModal.propTypes = {
  formState: PropTypes.object.isRequired,
  setFormState: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isFormSubmitted: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  recaptchaRef: PropTypes.object.isRequired,
};

export default BrochureFormModal;
