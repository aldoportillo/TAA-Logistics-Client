import { states } from "../../data/states";
import PropTypes from "prop-types";

TrafficConvictionsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function TrafficConvictionsForm({ formData, handleChange, setFormSection }) {
  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Traffic Convictions and Forfeitures for the Past 3 Years
        </legend>
        <p className="text-sm text-gray-600 mb-4">(Other than parking violations)</p>
        <div className="space-y-4">
          {/* Conviction 1 */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction_1_date" className="block">
                Date Convicted
              </label>
              <input
                type="date"
                id="conviction_1_date"
                onChange={handleChange}
                value={formData.conviction_1_date}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_1_violation" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction_1_violation"
                onChange={handleChange}
                value={formData.conviction_1_violation}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_1_state" className="block">
                State of Violation
              </label>
              <select
                id="conviction_1_state"
                onChange={handleChange}
                value={formData.conviction_1_state}
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
              <label htmlFor="conviction_1_penalty" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction_1_penalty"
                onChange={handleChange}
                value={formData.conviction_1_penalty}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Conviction 2 */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction_2_date" className="block">
                Date Convicted
              </label>
              <input
                type="date"
                id="conviction_2_date"
                onChange={handleChange}
                value={formData.conviction_2_date}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_2_violation" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction_2_violation"
                onChange={handleChange}
                value={formData.conviction_2_violation}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_2_state" className="block">
                State of Violation
              </label>
              <select
                id="conviction_2_state"
                onChange={handleChange}
                value={formData.conviction_2_state}
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
              <label htmlFor="conviction_2_penalty" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction_2_penalty"
                onChange={handleChange}
                value={formData.conviction_2_penalty}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Conviction 3 */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction_3_date" className="block">
                Date Convicted
              </label>
              <input
                type="date"
                id="conviction_3_date"
                onChange={handleChange}
                value={formData.conviction_3_date}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_3_violation" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction_3_violation"
                onChange={handleChange}
                value={formData.conviction_3_violation}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_3_state" className="block">
                State of Violation
              </label>
              <select
                id="conviction_3_state"
                onChange={handleChange}
                value={formData.conviction_3_state}
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
              <label htmlFor="conviction_3_penalty" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction_3_penalty"
                onChange={handleChange}
                value={formData.conviction_3_penalty}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
          className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TrafficConvictionsForm;
