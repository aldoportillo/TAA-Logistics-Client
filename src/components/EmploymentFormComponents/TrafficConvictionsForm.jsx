import React from 'react'
import {states} from "../../data/states"

function TrafficConvictionsForm({formData, handleChange, setFormSection}) {
  return (
    <>
    <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Traffic Convictions (Past 3 Years)
        </legend>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction_date_1" className="block">
                Date
              </label>
              <input
                type="date"
                id="conviction_date_1"
                onChange={handleChange}
                value={formData["conviction_date_1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_violation_1" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction_violation_1"
                onChange={handleChange}
                value={formData["conviction_violation_1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_state_1" className="block">
                State
              </label>
              <select
                id="conviction_state_1"
                required
                onChange={handleChange}
                value={formData["conviction_state_1"]}
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
              <label htmlFor="conviction_penalty_1" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction_penalty_1"
                onChange={handleChange}
                value={formData["conviction_penalty_1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction_date_2" className="block">
                Date
              </label>
              <input
                type="date"
                id="conviction_date_2"
                onChange={handleChange}
                value={formData["conviction_date_2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_violation_2" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction_violation_2"
                onChange={handleChange}
                value={formData["conviction_violation_2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_state_2" className="block">
                State
              </label>
              <select
                id="conviction_state_2"
                onChange={handleChange}
                value={formData["conviction_state_2"]}
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
              <label htmlFor="conviction_penalty_2" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction_penalty_2"
                onChange={handleChange}
                value={formData["conviction_penalty_2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction_date_3" className="block">
                Date
              </label>
              <input
                type="date"
                id="conviction_date_3"
                onChange={handleChange}
                value={formData["conviction_date_3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_violation_3" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction_violation_3"
                onChange={handleChange}
                value={formData["conviction_violation_3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction_state_3" className="block">
                State
              </label>
              <select
                id="conviction_state_3"
                required
                onChange={handleChange}
                value={formData["conviction_state_3"]}
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
              <label htmlFor="conviction_penalty_3" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction_penalty_3"
                onChange={handleChange}
                value={formData["conviction_penalty_3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <button
      className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={(e) => setFormSection((prevValue) => prevValue + 1)}
    >
      Next
    </button>
      </>
  )
}

export default TrafficConvictionsForm