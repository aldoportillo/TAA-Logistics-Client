import React from 'react'
import {states} from "../../data/states"

function LicenseInformationForm({handleChange, formData}) {
  return (
    <fieldset className="border p-4 rounded">
            <legend className="font-semibold text-lg">License Information</legend>
            <p className="text-sm mb-4">
              Section 383.21 FMCSR states "No person who operates a commercial motor
              vehicle shall at any time have more than one driver's license". I
              certify that I do not have more then one motor vehicle license, the
              information for which is listed below.
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label htmlFor="license_state" className="block">
                  State
                </label>
                <select
                  id="license_state"
                  required
                  onChange={handleChange}
                  value={formData["license_state"]}
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
                <label htmlFor="license_number" className="block">
                  License Number
                </label>
                <input
                  type="text"
                  id="license_number"
                  onChange={handleChange}
                  value={formData["license_number"]}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="license_type" className="block">
                  Type
                </label>
                <input
                  type="text"
                  id="license_type"
                  onChange={handleChange}
                  value={formData["license_type"]}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="license_expiration_date" className="block">
                  Expiration Date
                </label>
                <input
                  type="date"
                  id="license_expiration_date"
                  onChange={handleChange}
                  value={formData["license_expiration_date"]}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </fieldset>
  )
}

export default LicenseInformationForm