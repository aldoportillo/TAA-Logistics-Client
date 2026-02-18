import PropTypes from "prop-types";

AccidentRecordForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function AccidentRecordForm({ handleChange, setFormSection, formData }) {
  const accidents = [1, 2, 3];

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Accident Record for the Past 3 Years or More
        </legend>

        {/* Header row — hidden on mobile, visible on sm+ */}
        <div className="hidden sm:grid sm:grid-cols-5 gap-4 px-2 pb-1 border-b border-gray-200 bg-gray-50">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Nature of Accident</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Fatalities</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Injuries</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Chemical Spill</span>
        </div>

        <div className="space-y-4 sm:space-y-2">
          {accidents.map((num) => (
            <div
              key={num}
              className="border sm:border-0 border-gray-200 rounded-md sm:rounded-none p-3 sm:p-0 bg-gray-50 sm:bg-transparent sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-b sm:border-gray-100 sm:py-2"
            >
              <p className="text-sm font-medium text-gray-700 mb-3 sm:hidden">Accident {num}</p>
              <div className="sm:contents">
                <div className="mb-3 sm:mb-0">
                  <label htmlFor={`accident_${num}_date`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Date
                  </label>
                  <input
                    type="date"
                    id={`accident_${num}_date`}
                    onChange={handleChange}
                    value={formData[`accident_${num}_date`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="mb-3 sm:mb-0">
                  <label htmlFor={`accident_${num}_nature`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Nature of Accident
                  </label>
                  <input
                    type="text"
                    id={`accident_${num}_nature`}
                    onChange={handleChange}
                    value={formData[`accident_${num}_nature`]}
                    placeholder="Head-on, Rear-end, etc."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3 sm:mb-0 sm:contents">
                  <div>
                    <label htmlFor={`accident_${num}_fatalities`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                      Fatalities
                    </label>
                    <input
                      type="number"
                      id={`accident_${num}_fatalities`}
                      onChange={handleChange}
                      value={formData[`accident_${num}_fatalities`]}
                      min="0"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor={`accident_${num}_injuries`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                      Injuries
                    </label>
                    <input
                      type="number"
                      id={`accident_${num}_injuries`}
                      onChange={handleChange}
                      value={formData[`accident_${num}_injuries`]}
                      min="0"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={`accident_${num}_chemical_spill`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Chemical Spill
                  </label>
                  <select
                    id={`accident_${num}_chemical_spill`}
                    onChange={handleChange}
                    value={formData[`accident_${num}_chemical_spill`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
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

export default AccidentRecordForm;
