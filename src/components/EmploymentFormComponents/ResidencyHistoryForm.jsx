import React from "react";
import { states } from "../../data/states";

function ResidencyHistoryForm({ formData, handleChange, setFormSection }) {

  //Make sure residency_address_1, residency_city_1, residency_state_1, residency_zip_1, residency_address_2, residency_city_2, residency_state_2, residency_zip_2, residency_address_3, residency_city_3, residency_state_3, and residency_zip_3 are filled in
  const isFormValid = () => {
    return (
      formData.residency_address_1.length > 0 &&
      formData.residency_city_1.length > 0 &&
      formData.residency_state_1.length > 0 &&
      formData.residency_zip_1.length > 0
    );
  }

  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Residency History (Past 3 Years)
        </legend>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residency_address_1" className="block">
                Address
              </label>
              <input
                type="text"
                id="residency_address_1"
                onChange={handleChange}
                value={formData.residency_address_1}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency_city_1" className="block">
                City
              </label>
              <input
                type="text"
                id="residency_city_1"
                onChange={handleChange}
                value={formData.residency_city_1}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency_state_1" className="block">
                State
              </label>
              <select
                id="residency_state_1"
                required
                onChange={handleChange}
                value={formData.residency_state_1}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                {states.map((state) => (
                  <option key={state} value={state} default={null}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="residency_zip_1" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residency_zip_1"
                onChange={handleChange}
                value={formData.residency_zip_1}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residency_address_2" className="block">
                Address
              </label>
              <input
                type="text"
                id="residency_address_2"
                onChange={handleChange}
                value={formData.residency_address_2}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency_city_2" className="block">
                City
              </label>
              <input
                type="text"
                id="residency_city_2"
                onChange={handleChange}
                value={formData.residency_city_2}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency_state_2" className="block">
                State
              </label>
              <select
                id="residency_state_2"
                onChange={handleChange}
                value={formData.residency_state_2}
                required
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
              <label htmlFor="residency_zip_2" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residency_zip_2"
                onChange={handleChange}
                value={formData.residency_zip_2}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residency_address_3" className="block">
                Address
              </label>
              <input
                type="text"
                id="residency_address_3"
                onChange={handleChange}
                value={formData["residency_address_3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency_city_3" className="block">
                City
              </label>
              <input
                type="text"
                id="residency_city_3"
                onChange={handleChange}
                value={formData["residency_city_3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency_state_3" className="block">
                State
              </label>
              <select
                id="residency_state_3"
                onChange={handleChange}
                value={formData["residency_state_3"]}
                required
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
              <label htmlFor="residency_zip_3" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residency_zip_3"
                onChange={handleChange}
                value={formData["residency_zip_3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={(e) => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={(e) => setFormSection((prevValue) => prevValue + 1)}
          disabled={!isFormValid()}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ResidencyHistoryForm;
