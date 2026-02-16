import PropTypes from "prop-types";
import { states } from "../../data/states";

ResidencyHistoryForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function ResidencyHistoryForm({ formData, handleChange, setFormSection }) {

  const isFormValid = () => {
    return (
      formData.residence_1_street.length > 0 &&
      formData.residence_1_city.length > 0 &&
      formData.residence_1_state.length > 0 &&
      formData.residence_1_zip.length > 0 &&
      formData.residence_1_duration.length > 0
    );
  }

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Previous Three Years Residency
        </legend>
        <div className="space-y-6">
          {/* Residence 1 */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Residence 1 *</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2">
                <label htmlFor="residence_1_street" className="block text-sm">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="residence_1_street"
                  onChange={handleChange}
                  value={formData.residence_1_street}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="residence_1_city" className="block text-sm">
                  City *
                </label>
                <input
                  type="text"
                  id="residence_1_city"
                  onChange={handleChange}
                  value={formData.residence_1_city}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="residence_1_state" className="block text-sm">
                  State *
                </label>
                <select
                  id="residence_1_state"
                  onChange={handleChange}
                  value={formData.residence_1_state}
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
                <label htmlFor="residence_1_zip" className="block text-sm">
                  Zip *
                </label>
                <input
                  type="text"
                  id="residence_1_zip"
                  onChange={handleChange}
                  value={formData.residence_1_zip}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="residence_1_duration" className="block text-sm">
                How Long? *
              </label>
              <input
                type="text"
                id="residence_1_duration"
                onChange={handleChange}
                value={formData.residence_1_duration}
                placeholder="e.g., 2 years, 6 months"
                className="mt-1 block w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Residence 2 */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Residence 2</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2">
                <label htmlFor="residence_2_street" className="block text-sm">
                  Street Address
                </label>
                <input
                  type="text"
                  id="residence_2_street"
                  onChange={handleChange}
                  value={formData.residence_2_street}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="residence_2_city" className="block text-sm">
                  City
                </label>
                <input
                  type="text"
                  id="residence_2_city"
                  onChange={handleChange}
                  value={formData.residence_2_city}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="residence_2_state" className="block text-sm">
                  State
                </label>
                <select
                  id="residence_2_state"
                  onChange={handleChange}
                  value={formData.residence_2_state}
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
                <label htmlFor="residence_2_zip" className="block text-sm">
                  Zip
                </label>
                <input
                  type="text"
                  id="residence_2_zip"
                  onChange={handleChange}
                  value={formData.residence_2_zip}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="residence_2_duration" className="block text-sm">
                How Long?
              </label>
              <input
                type="text"
                id="residence_2_duration"
                onChange={handleChange}
                value={formData.residence_2_duration}
                placeholder="e.g., 2 years, 6 months"
                className="mt-1 block w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Residence 3 */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Residence 3</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2">
                <label htmlFor="residence_3_street" className="block text-sm">
                  Street Address
                </label>
                <input
                  type="text"
                  id="residence_3_street"
                  onChange={handleChange}
                  value={formData.residence_3_street}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="residence_3_city" className="block text-sm">
                  City
                </label>
                <input
                  type="text"
                  id="residence_3_city"
                  onChange={handleChange}
                  value={formData.residence_3_city}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="residence_3_state" className="block text-sm">
                  State
                </label>
                <select
                  id="residence_3_state"
                  onChange={handleChange}
                  value={formData.residence_3_state}
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
                <label htmlFor="residence_3_zip" className="block text-sm">
                  Zip
                </label>
                <input
                  type="text"
                  id="residence_3_zip"
                  onChange={handleChange}
                  value={formData.residence_3_zip}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="residence_3_duration" className="block text-sm">
                How Long?
              </label>
              <input
                type="text"
                id="residence_3_duration"
                onChange={handleChange}
                value={formData.residence_3_duration}
                placeholder="e.g., 2 years, 6 months"
                className="mt-1 block w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          type="button"
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

export default ResidencyHistoryForm;
