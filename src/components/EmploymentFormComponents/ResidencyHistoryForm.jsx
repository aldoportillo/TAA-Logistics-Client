import React from 'react'
import {states} from "../../data/states"

function ResidencyHistoryForm({formData, handleChange}) {
  return (
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
                  <option key={state} value={state}>
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
  )
}

export default ResidencyHistoryForm