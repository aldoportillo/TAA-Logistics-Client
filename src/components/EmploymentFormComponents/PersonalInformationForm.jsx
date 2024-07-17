import PropTypes from "prop-types";

PersonalInformationForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function PersonalInformationForm({ formData, handleChange, setFormSection }) {


  const isFormValid = () => {
    return (
      formData.first_name.length > 0 &&
      formData.last_name.length > 0 &&
      formData.phone_number.length > 0 &&
      formData.birthday.length > 0 &&
      formData.email.length > 0
    );
  }


  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Personal Information</legend>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="first_name" className="block">
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              required
              value={formData.first_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="middle_initial" className="block">
              Middle Initial 
            </label>
            <input
              type="text"
              id="middle_initial"
              value={formData.middle_initial}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block">
              Last Name *
            </label>
            <input
              type="text"
              id="last_name"
              required
              onChange={handleChange}
              value={formData.last_name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="birthday" className="block">
              Birthday *
            </label>
            <input
              type="date"
              id="birthday"
              required
              onChange={handleChange}
              value={formData.birthday}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="ssn" className="block">
              SSN
            </label>
            <input
              type="text"
              id="ssn"
              onChange={handleChange}
              value={formData.ssn}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone_number"
              required
              onChange={handleChange}
              value={formData.phone_number}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="col-span-3">
            <label htmlFor="email" className="block">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              onChange={handleChange}
              value={formData.email}
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

export default PersonalInformationForm;

