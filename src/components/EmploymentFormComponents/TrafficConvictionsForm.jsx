import { states } from "../../data/states";
import PropTypes from "prop-types";

TrafficConvictionsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function TrafficConvictionsForm({ formData, handleChange, setFormSection }) {
  const convictions = [1, 2, 3];

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Traffic Convictions and Forfeitures for the Past 3 Years
        </legend>
        <p className="text-sm text-gray-600 mb-4">(Other than parking violations)</p>

        {/* Header row — hidden on mobile, visible on sm+ */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-4 px-2 pb-1 border-b border-gray-200 bg-gray-50">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date Convicted</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Violation</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">State of Violation</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Penalty</span>
        </div>

        <div className="space-y-4 sm:space-y-2">
          {convictions.map((num) => (
            <div
              key={num}
              className="border sm:border-0 border-gray-200 rounded-md sm:rounded-none p-3 sm:p-0 bg-gray-50 sm:bg-transparent sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-b sm:border-gray-100 sm:py-2"
            >
              <p className="text-sm font-medium text-gray-700 mb-3 sm:hidden">Conviction {num}</p>
              <div className="sm:contents">
                <div className="mb-3 sm:mb-0">
                  <label htmlFor={`conviction_${num}_date`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Date Convicted
                  </label>
                  <input
                    type="date"
                    id={`conviction_${num}_date`}
                    onChange={handleChange}
                    value={formData[`conviction_${num}_date`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mb-3 sm:mb-0">
                  <label htmlFor={`conviction_${num}_violation`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Violation
                  </label>
                  <input
                    type="text"
                    id={`conviction_${num}_violation`}
                    onChange={handleChange}
                    value={formData[`conviction_${num}_violation`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mb-3 sm:mb-0">
                  <label htmlFor={`conviction_${num}_state`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    State of Violation
                  </label>
                  <select
                    id={`conviction_${num}_state`}
                    onChange={handleChange}
                    value={formData[`conviction_${num}_state`]}
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
                  <label htmlFor={`conviction_${num}_penalty`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Penalty
                  </label>
                  <input
                    type="text"
                    id={`conviction_${num}_penalty`}
                    onChange={handleChange}
                    value={formData[`conviction_${num}_penalty`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
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
