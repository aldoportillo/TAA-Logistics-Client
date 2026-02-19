import PropTypes from "prop-types";

SignatureForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function SignatureForm({ formData, setFormData, handleChange, setFormSection }) {
  const isFormValid = () => {
    return (
      formData.esign_consent === true &&
      formData.signature_full_name.length > 0
    );
  };

  const handleConsentChange = (e) => {
    setFormData({ ...formData, esign_consent: e.target.checked });
  };

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Authorization and Certification</legend>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-4 mb-6">
          <p>
            I authorize you to make such investigations and inquiries of my personal, employment, financial or medical history and other related matters as may be necessary in arriving at an employment decision. (Generally, inquiries regarding medical history will be made only if and after a conditional offer of employment has been extended.) I hereby release employers, schools, health care providers and other persons from all liability in responding to inquiries and releasing information in connection with my application.
          </p>

          <p>
            In the event of employment, I understand that false or misleading information given in my application or interview(s) may result in discharge. I understand, also, that I am required to abide by all rules and regulations of the Company. I understand that information I provide regarding current and/or previous employers may be used, and those employer(s) will be contacted, for the purpose of investigating my safety performance history as required by 49 CFR 391.23(d) and (e).
          </p>

          <p className="font-medium">I understand I have the right to:</p>
          <ol className="list-decimal ml-6">
            <li>Review information provided by previous employers;</li>
            <li>Have errors in the information corrected by previous employers and for those previous employers to re-send the corrected information to the prospective employer;</li>
            <li>Have a rebuttal statement attached to the alleged erroneous information if the previous employer(s) and I cannot agree on the accuracy of the information.</li>
          </ol>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="esign_consent"
                type="checkbox"
                checked={formData.esign_consent}
                onChange={handleConsentChange}
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="esign_consent" className="font-medium text-gray-700">
                I agree to sign this document electronically *
              </label>
              <p className="text-gray-500">
                By checking this box, I consent to use an electronic signature in lieu of an original signature on this application.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="text-sm font-medium text-gray-700 mb-4">
            This certifies that I completed this application, and that all entries on it and information in it are true and complete to the best of my knowledge.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="signature_full_name" className="block text-sm font-medium text-gray-700">
                Full Legal Name (Electronic Signature) *
              </label>
              <input
                type="text"
                id="signature_full_name"
                onChange={handleChange}
                value={formData.signature_full_name}
                placeholder="Type your full legal name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">
                By typing your name above, you are signing this application electronically.
              </p>
            </div>
          </div>
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          type="button"
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isFormValid() ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          Submit Application
        </button>
      </div>
    </>
  );
}

export default SignatureForm;
