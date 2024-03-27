import { states } from "../../data/states";
import PropTypes from "prop-types";

LicenseInformationForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    license_state: PropTypes.string.isRequired,
    license_number: PropTypes.string.isRequired,
    license_type: PropTypes.string.isRequired,
    license_expiration_date: PropTypes.string.isRequired,
  }).isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function LicenseInformationForm({ handleChange, formData, setFormSection }) {
  
  const isFormValid = () => {
    return (
      formData.license_state.length > 0 &&
      formData.license_number.length > 0 &&
      formData.license_type.length > 0 &&
      formData.license_expiration_date.length > 0
    );
  }
  
  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">License Information</legend>
        <p className="text-sm mb-4">
          Section 383.21 FMCSR states &quot;No person who operates a commercial motor
          vehicle shall at any time have more than one driver&apos;s license&quot;. I
          certify that I do not have more then one motor vehicle license, the
          information for which is listed below.
        </p>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label htmlFor="license_state" className="block">
              State *
            </label>
            <select
              id="license_state"
              required
              onChange={handleChange}
              value={formData["license_state"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="license_number" className="block">
              License Number *
            </label>
            <input
              type="text"
              id="license_number"
              onChange={handleChange}
              value={formData["license_number"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="license_type" className="block">
              Type *
            </label>
            <input
              type="text"
              id="license_type"
              onChange={handleChange}
              value={formData["license_type"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="license_expiration_date" className="block">
              Expiration Date *
            </label>
            <input
              type="date"
              id="license_expiration_date"
              onChange={handleChange}
              value={formData["license_expiration_date"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </fieldset>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          className={`bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          onClick={() => setFormSection((prevValue) => prevValue + 1)}
          disabled={!isFormValid()}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default LicenseInformationForm;
