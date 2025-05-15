import { useState, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DownloadBrochureButton from './brochure/DownloadBrochureButton';
import BrochureFormModal from './brochure/BrochureFormModal';

const vectorImage = './Training Page/BrochureBook.png';
const brochurePDF = './Training Page/Gryphon-Academy-Brochure.pdf';

const BrochureSection = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    hiddenField: "",
    recaptchaToken: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const recaptchaRef = useRef(null); // Ref for reCAPTCHA

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
      hiddenField: "",
      recaptchaToken: ""
    });
    recaptchaRef.current?.reset();
    setIsSubmitting(false);
    setIsFormSubmitted(false);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = brochurePDF;
    link.download = 'Gryphon-Academy-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadBrochure = () => {
    setFormVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormSubmitted) return;
    setIsSubmitting(true);

    const formData = new FormData();
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("source", "Brochure");
    formData.append("brochure", "Brochure");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzD2p4mf2qIUGsFQn0kyIfd9RelTaFbzJXaWAzp7TQ03Bd9IELeBA4y4Nl-dv_KbSznlg/exec", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.dismiss();
        toast.success("Form successfully submitted! Downloading brochure...", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => {
            resetForm();
            setFormVisible(false);
          }
        });

        setIsFormSubmitted(true);
        setTimeout(downloadPDF, 1000);
      } else {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message || 'Submission failed.'}`);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4">
      <style>
        {`
          .bg-brochure {
            background-image: url('./Training Page/BrochureBg.png');
            background-size: cover;
            background-position: center;
          }
          .bg-brochure-small {
            background-image: url('./Training Page/BrochureBgSmall.png');
            background-size: cover;
            background-position: center;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 1.5rem;
          }
        `}
      </style>

      {/* Desktop View */}
      <div className="bg-brochure hidden md:flex flex-col md:flex-row items-center justify-center h-full w-full rounded-3xl shadow-3xl p-6 relative">
        <div className="overlay" />
        <div className="flex-none w-full md:w-1/4 flex justify-center mb-4 md:mb-0 relative z-10">
          <img src={vectorImage} alt="Vector" className="h-20 max-h-20" />
        </div>
        <div className="flex-none w-full md:w-2/4 flex flex-col items-center text-white text-center md:text-left relative z-10">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#FFD700]">
            Download Brochure for More Information
          </h2>
        </div>
        <div className="flex-none w-full md:w-1/4 flex justify-center md:justify-end relative z-10">
          <DownloadBrochureButton onClick={handleDownloadBrochure} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-brochure-small flex md:hidden flex-col items-center justify-center h-full w-full rounded-3xl shadow-3xl p-6 relative">
        <div className="overlay" />
        <div className="flex-none w-full flex justify-center mb-4 relative z-10">
          <img src={vectorImage} alt="Vector" className="h-20 max-h-20" />
        </div>
        <div className="flex-none w-full flex flex-col items-center text-white relative z-10">
          <h2 className="text-xl font-bold mb-2">Download Brochure for More Information</h2>
          <DownloadBrochureButton onClick={handleDownloadBrochure} />
        </div>
      </div>

      {formVisible && (
        <BrochureFormModal
          formState={formState}
          setFormState={setFormState}
          isSubmitting={isSubmitting}
          isFormSubmitted={isFormSubmitted}
          handleSubmit={handleSubmit}
          onClose={() => {
            resetForm();
            setFormVisible(false);
          }}
          recaptchaRef={recaptchaRef}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        closeOnClick={true}
        draggable={true}
        theme="light"
      />
    </div>
  );
};

export default BrochureSection;
