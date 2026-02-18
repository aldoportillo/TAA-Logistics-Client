import PropTypes from "prop-types";
import { states } from "../../data/states";

EmploymentRecordForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function EmploymentRecordForm({ formData, handleChange, setFormSection }) {
  const employers = [1, 2, 3];
  const gaps = [1, 2, 3];

  const isFormValid = () => {
    return (
      formData.employer_1_name.length > 0 &&
      formData.employer_1_street.length > 0 &&
      formData.employer_1_city.length > 0 &&
      formData.employer_1_state.length > 0 &&
      formData.employer_1_phone.length > 0 &&
      formData.employer_1_position.length > 0 &&
      formData.employer_1_from.length > 0 &&
      formData.employer_1_to.length > 0
    );
  };

  const getEmployerLabel = (num) => {
    if (num === 1) return "Last Employer";
    if (num === 2) return "Second Employer";
    return "Third Employer";
  };

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Employment Record</legend>
        <p className="text-sm text-gray-600 mb-4">
          Applicants that desire to drive in intrastate/interstate commerce must provide the following information on all employers during the previous 3 years. You must give the same information for all employers you have driven a commercial motor vehicle for the 7 years prior to the initial 3 years (total of 10 years employment record).
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Must list the complete mailing address: street number and name, city, state, and zip code.
        </p>

        <div className="space-y-4 sm:space-y-8">
          {employers.map((num) => (
            <div
              key={num}
              className="border border-gray-200 rounded-md p-4 bg-gray-50 sm:bg-transparent sm:border-0 sm:rounded-none sm:p-0 sm:border-t sm:pt-6 first:sm:border-t-0 first:sm:pt-0"
            >
              <h3 className="font-medium text-gray-800 mb-4">
                {getEmployerLabel(num)} {num === 1 && "*"}
              </h3>

              {/* Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor={`employer_${num}_name`} className="block text-sm">
                    Company Name {num === 1 && "*"}
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_name`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_name`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`employer_${num}_phone`} className="block text-sm">
                    Phone {num === 1 && "*"}
                  </label>
                  <input
                    type="tel"
                    id={`employer_${num}_phone`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_phone`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <div className="sm:col-span-2">
                  <label htmlFor={`employer_${num}_street`} className="block text-sm">
                    Street Address {num === 1 && "*"}
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_street`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_street`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`employer_${num}_city`} className="block text-sm">
                    City {num === 1 && "*"}
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_city`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_city`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`employer_${num}_state`} className="block text-sm">
                    State {num === 1 && "*"}
                  </label>
                  <select
                    id={`employer_${num}_state`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_state`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Zip, Position, Salary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor={`employer_${num}_zip`} className="block text-sm">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_zip`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_zip`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`employer_${num}_position`} className="block text-sm">
                    Position Held {num === 1 && "*"}
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_position`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_position`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`employer_${num}_salary`} className="block text-sm">
                    Salary
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_salary`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_salary`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Dates and Reason */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <div>
                  <label htmlFor={`employer_${num}_from`} className="block text-sm">
                    From {num === 1 && "*"}
                  </label>
                  <input
                    type="date"
                    id={`employer_${num}_from`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_from`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor={`employer_${num}_to`} className="block text-sm">
                    To {num === 1 && "*"}
                  </label>
                  <input
                    type="date"
                    id={`employer_${num}_to`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_to`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`employer_${num}_reason_for_leaving`} className="block text-sm">
                    Reason for Leaving
                  </label>
                  <input
                    type="text"
                    id={`employer_${num}_reason_for_leaving`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_reason_for_leaving`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* FMCSR Questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`employer_${num}_subject_to_fmcsa`} className="block text-sm">
                    Were you subject to the Federal Motor Carrier Safety Regulations (FMCSRs) while employed by this employer?
                  </label>
                  <select
                    id={`employer_${num}_subject_to_fmcsa`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_subject_to_fmcsa`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={`employer_${num}_safety_sensitive`} className="block text-sm">
                    Was this job position designated as a safety sensitive function in any DOT regulated mode, subject to alcohol and controlled substance testing requirements as required by 49 CFR Part 40?
                  </label>
                  <select
                    id={`employer_${num}_safety_sensitive`}
                    onChange={handleChange}
                    value={formData[`employer_${num}_safety_sensitive`]}
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

      {/* Gap Explanation Section */}
      <fieldset className="border p-4 rounded mt-6">
        <legend className="font-semibold text-lg">Employment Gaps</legend>
        <p className="text-sm text-gray-600 mb-4">
          Any gaps in employment and/or unemployment must be explained. Include dates (month/year) and reason.
        </p>

        {/* Header row — hidden on mobile, visible on sm+ */}
        <div className="hidden sm:grid sm:grid-cols-5 gap-4 px-2 pb-1 border-b border-gray-200 bg-gray-50">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">From</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">To</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider sm:col-span-3">Reason</span>
        </div>

        <div className="space-y-4 sm:space-y-2">
          {gaps.map((num) => (
            <div
              key={num}
              className="border sm:border-0 border-gray-200 rounded-md sm:rounded-none p-3 sm:p-0 bg-gray-50 sm:bg-transparent sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-b sm:border-gray-100 sm:py-2"
            >
              <p className="text-sm font-medium text-gray-700 mb-3 sm:hidden">Gap {num}</p>
              <div className="sm:contents">
                <div className="grid grid-cols-2 gap-3 mb-3 sm:mb-0 sm:contents">
                  <div>
                    <label htmlFor={`gap_${num}_from`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                      From
                    </label>
                    <input
                      type="date"
                      id={`gap_${num}_from`}
                      onChange={handleChange}
                      value={formData[`gap_${num}_from`]}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor={`gap_${num}_to`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                      To
                    </label>
                    <input
                      type="date"
                      id={`gap_${num}_to`}
                      onChange={handleChange}
                      value={formData[`gap_${num}_to`]}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor={`gap_${num}_reason`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">
                    Reason
                  </label>
                  <input
                    type="text"
                    id={`gap_${num}_reason`}
                    onChange={handleChange}
                    value={formData[`gap_${num}_reason`]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
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
          type="button"
          disabled={!isFormValid()}
          className={`bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isFormValid() ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          onClick={() => setFormSection((prevValue) => prevValue + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default EmploymentRecordForm;
