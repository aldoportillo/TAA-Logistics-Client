import PropTypes from "prop-types";
import { states } from "../../data/states";

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
      formData.phone.length > 0 &&
      formData.date_of_birth.length > 0 &&
      formData.email.length > 0 &&
      formData.street.length > 0 &&
      formData.city.length > 0 &&
      formData.state.length > 0 &&
      formData.zip.length > 0
    );
  }

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Personal Information</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <label htmlFor="middle_name" className="block">
              Middle Name
            </label>
            <input
              type="text"
              id="middle_name"
              value={formData.middle_name}
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
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="col-span-2">
            <label htmlFor="street" className="block">
              Street Address *
            </label>
            <input
              type="text"
              id="street"
              required
              onChange={handleChange}
              value={formData.street}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="city" className="block">
              City *
            </label>
            <input
              type="text"
              id="city"
              required
              onChange={handleChange}
              value={formData.city}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="state" className="block">
              State *
            </label>
            <select
              id="state"
              required
              onChange={handleChange}
              value={formData.state}
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div>
            <label htmlFor="zip" className="block">
              Zip Code *
            </label>
            <input
              type="text"
              id="zip"
              required
              onChange={handleChange}
              value={formData.zip}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="date_of_birth" className="block">
              Date of Birth *
            </label>
            <input
              type="date"
              id="date_of_birth"
              required
              onChange={handleChange}
              value={formData.date_of_birth}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="ssn" className="block">
              Social Security Number
            </label>
            <input
              type="text"
              id="ssn"
              onChange={handleChange}
              value={formData.ssn}
              placeholder="XXX-XX-XXXX"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              onChange={handleChange}
              value={formData.phone}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block">
            Email Address *
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

export default PersonalInformationForm;
