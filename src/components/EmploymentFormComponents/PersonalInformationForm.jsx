import React, { useEffect } from "react";
import { states } from "../../data/states";

function PersonalInformationForm({ formData, handleChange, setFormSection }) {


  //Make sure first_name, middle_initial, last_name, address, city, state, zip, birthday, phone_number, and email are filled in

  const isFormValid = () => {
    return (
      formData.first_name.length > 0 &&
      formData.middle_initial.length > 0 &&
      formData.last_name.length > 0 &&
      formData.address.length > 0 &&
      formData.city.length > 0 &&
      formData.zip.length > 0 &&
      formData.birthday.length > 0 &&
      formData.phone_number.length > 0 &&
      formData.email.length > 0
    );
  }


  useEffect(() => {
    console.log(isFormValid())
    console.log(formData)
  })
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
              Middle Initial *
            </label>
            <input
              type="text"
              id="middle_initial"
              required
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
          <div className="col-span-3">
            <label htmlFor="address" className="block">
              Address *
            </label>
            <input
              type="text"
              id="address"
              required
              onChange={handleChange}
              value={formData.address}
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
              State
            </label>
            <select
              id="state"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {states.map((state) => (
                <option
                  key={state}
                  value={formData.state}
                  onChange={handleChange}
                >
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="zip" className="block">
              Zip *
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

      <button
        className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={(e) => setFormSection((prevValue) => prevValue + 1)}
        disabled={!isFormValid()}
      >
        Next
      </button>
    </>
  );
}

export default PersonalInformationForm;

