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
        <div className="space-y-4">
          {accidents.map((num) => (
            <div key={num} className="grid grid-cols-5 gap-4">
              <div>
                <label htmlFor={`accident_${num}_date`} className="block">
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
              <div>
                <label htmlFor={`accident_${num}_nature`} className="block">
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
              <div>
                <label htmlFor={`accident_${num}_fatalities`} className="block">
                  Number of Fatalities
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
                <label htmlFor={`accident_${num}_injuries`} className="block">
                  Number of Injuries
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
              <div>
                <label htmlFor={`accident_${num}_chemical_spill`} className="block">
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
