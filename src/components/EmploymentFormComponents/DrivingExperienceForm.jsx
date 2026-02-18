import PropTypes from 'prop-types';

DrivingExperienceForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function DrivingExperienceForm({ formData, handleChange, setFormSection }) {
  const equipmentTypes = [
    { key: 'straight_truck', label: 'Straight Truck' },
    { key: 'tractor_semi', label: 'Tractor & Semi-Trailer' },
    { key: 'tractor_two_trailers', label: 'Tractor-Two Trailers' },
    { key: 'other_equipment', label: 'Other' },
  ];

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Driving Experience</legend>
        {/* Header row — hidden on mobile, visible on sm+ */}
        <div className="hidden sm:grid sm:grid-cols-5 gap-2 px-2 pb-1 border-b border-gray-200 bg-gray-50">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Class of Equipment</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Type of Equipment</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">From</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">To</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Approx. Miles (Total)</span>
        </div>

        <div className="space-y-4 sm:space-y-2">
          {equipmentTypes.map(({ key, label }) => (
            <div key={key} className="border sm:border-0 border-gray-200 rounded-md sm:rounded-none p-3 sm:p-0 bg-gray-50 sm:bg-transparent sm:grid sm:grid-cols-5 sm:gap-2 sm:items-center sm:border-b sm:border-gray-100 sm:py-2">
              <p className="text-sm font-medium text-gray-900 mb-3 sm:mb-0">{label}</p>
              <div className="sm:contents">
                <div className="mb-2 sm:mb-0">
                  <label htmlFor={`${key}_type`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">Type of Equipment</label>
                  <input
                    type="text"
                    id={`${key}_type`}
                    value={formData[`${key}_type`]}
                    onChange={handleChange}
                    placeholder="e.g., Van, Flatbed, Tanker"
                    className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 sm:mb-0 sm:contents">
                  <div>
                    <label htmlFor={`${key}_from`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">From</label>
                    <input
                      type="date"
                      id={`${key}_from`}
                      value={formData[`${key}_from`]}
                      onChange={handleChange}
                      className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor={`${key}_to`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">To</label>
                    <input
                      type="date"
                      id={`${key}_to`}
                      value={formData[`${key}_to`]}
                      onChange={handleChange}
                      className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={`${key}_miles`} className="block text-xs text-gray-500 uppercase mb-1 sm:hidden">Approx. No. of Miles (Total)</label>
                  <input
                    type="number"
                    id={`${key}_miles`}
                    value={formData[`${key}_miles`]}
                    onChange={handleChange}
                    placeholder="Total miles"
                    className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
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

export default DrivingExperienceForm;
