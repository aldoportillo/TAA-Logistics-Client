import PropTypes from "prop-types";
import { states } from "../../data/states";

ResidencyHistoryForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function ResidencyHistoryForm({ formData, handleChange, setFormSection }) {
  const residences = [
    { num: 1, label: "Residence 1", required: true },
    { num: 2, label: "Residence 2", required: false },
    { num: 3, label: "Residence 3", required: false },
  ];

  const isFormValid = () => {
    return (
      formData.residence_1_street.length > 0 &&
      formData.residence_1_city.length > 0 &&
      formData.residence_1_state.length > 0 &&
      formData.residence_1_zip.length > 0 &&
      formData.residence_1_duration.length > 0
    );
  };

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Previous Three Years Residency
        </legend>

        <div className="space-y-4">
          {residences.map(({ num, label, required }) => (
            <div
              key={num}
              className="border border-gray-200 rounded-md p-4 bg-gray-50 sm:bg-transparent sm:border-0 sm:rounded-none sm:p-0 sm:border-t sm:pt-4 first:sm:border-t-0 first:sm:pt-0"
            >
              <h3 className="font-medium text-gray-700 mb-3">
                {label} {required && "*"}
              </h3>

              {/* Address fields */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                <div className="sm:col-span-2">
                  <label htmlFor={`residence_${num}_street`} className="block text-sm">
                    Street Address {required && "*"}
                  </label>
                  <input
                    type="text"
                    id={`residence_${num}_street`}
                    onChange={handleChange}
                    value={formData[`residence_${num}_street`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`residence_${num}_city`} className="block text-sm">
                    City {required && "*"}
                  </label>
                  <input
                    type="text"
                    id={`residence_${num}_city`}
                    onChange={handleChange}
                    value={formData[`residence_${num}_city`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`residence_${num}_state`} className="block text-sm">
                    State {required && "*"}
                  </label>
                  <select
                    id={`residence_${num}_state`}
                    onChange={handleChange}
                    value={formData[`residence_${num}_state`]}
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
                  <label htmlFor={`residence_${num}_zip`} className="block text-sm">
                    Zip {required && "*"}
                  </label>
                  <input
                    type="text"
                    id={`residence_${num}_zip`}
                    onChange={handleChange}
                    value={formData[`residence_${num}_zip`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor={`residence_${num}_duration`} className="block text-sm">
                  How Long? {required && "*"}
                </label>
                <input
                  type="text"
                  id={`residence_${num}_duration`}
                  onChange={handleChange}
                  value={formData[`residence_${num}_duration`]}
                  placeholder="e.g., 2 years, 6 months"
                  className="mt-1 block w-full sm:w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
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
          className={`bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isFormValid() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
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
