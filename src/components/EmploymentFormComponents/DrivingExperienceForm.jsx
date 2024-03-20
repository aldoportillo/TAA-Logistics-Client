import PropTypes from 'prop-types';

ExperienceForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function ExperienceForm({ formData, handleChange, setFormSection }) {
  const experiences = [1, 2, 3]

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Experience</legend>
        {experiences.map((num) => (
          <div key={num} className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor={`experience_class_${num}`} className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id={`experience_class_${num}`}
                value={formData[`experience_class_${num}`]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor={`experience_type_${num}`} className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id={`experience_type_${num}`}
                value={formData[`experience_type_${num}`]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor={`experience_miles_${num}`} className="block">
                Approx. Miles
              </label>
              <input
                type="text"
                id={`experience_miles_${num}`}
                value={formData[`experience_miles_${num}`]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="col-span-3">
              <label htmlFor={`experience_start_date_${num}`} className="block">
                Start Date
              </label>
              <input
                type="date"
                id={`experience_start_date_${num}`}
                value={formData[`experience_start_date_${num}`]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="col-span-3">
              <label htmlFor={`experience_end_date_${num}`} className="block">
                End Date
              </label>
              <input
                type="date"
                id={`experience_end_date_${num}`}
                value={formData[`experience_end_date_${num}`]}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        ))}
      </fieldset>

      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ExperienceForm;
