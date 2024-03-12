import React from 'react'

function AccidentRecordForm({handleChange, formData}) {
  return (
    <>
    <fieldset className="border p-4 rounded">
  <legend className="font-semibold text-lg">
    Accident Record (Past 3 Years)
  </legend>
  <div className="space-y-4">
    <div className="grid grid-cols-5 gap-4">
      <div>
        <label htmlFor="accident_date_1" className="block">
          Date
        </label>
        <input
          type="date"
          id="accident_date_1"
          onChange={handleChange}
          value={formData["accident_date_1"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_nature_1" className="block">
          Nature of Accident
        </label>
        <input
          type="text"
          id="accident_nature_1"
          onChange={handleChange}
          value={formData["accident_nature_1"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_fatalities_1" className="block">
          Fatalities
        </label>
        <input
          type="number"
          id="accident_fatalities_1"
          onChange={handleChange}
          value={formData["accident_fatalities_1"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_injuries_1" className="block">
          Injuries
        </label>
        <input
          type="number"
          id="accident_injuries_1"
          onChange={handleChange}
          value={formData["accident_injuries_1"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_spill_1" className="block">
          Chemical Spill
        </label>
        <select
          id="accident_spill_1"
          onChange={handleChange}
          value={formData["accident_spill_1"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-4">
      <div>
        <label htmlFor="accident_date_2" className="block">
          Date
        </label>
        <input
          type="date"
          id="accident_date_2"
          onChange={handleChange}
          value={formData["accident_date_2"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_nature_2" className="block">
          Nature of Accident
        </label>
        <input
          type="text"
          id="accident_nature_2"
          onChange={handleChange}
          value={formData["accident_nature_2"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_fatalities_2" className="block">
          Fatalities
        </label>
        <input
          type="number"
          id="accident_fatalities_2"
          onChange={handleChange}
          value={formData["accident_fatalities_2"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_injuries_2" className="block">
          Injuries
        </label>
        <input
          type="number"
          id="accident_injuries_2"
          onChange={handleChange}
          value={formData["accident_injuries_2"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_spill_2" className="block">
          Chemical Spill
        </label>
        <select
          id="accident_spill_2"
          onChange={handleChange}
          value={formData["accident_spill_2"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
    <div className="grid grid-cols-5 gap-4">
      <div>
        <label htmlFor="accident_date_3" className="block">
          Date
        </label>
        <input
          type="date"
          id="accident_date_3"
          onChange={handleChange}
          value={formData["accident_date_3"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_nature_3" className="block">
          Nature of Accident
        </label>
        <input
          type="text"
          id="accident_nature_3"
          onChange={handleChange}
          value={formData["accident_nature_3"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_fatalities_3" className="block">
          Fatalities
        </label>
        <input
          type="number"
          id="accident_fatalities_3"
          onChange={handleChange}
          value={formData["accident_fatalities_3"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_injuries_3" className="block">
          Injuries
        </label>
        <input
          type="number"
          id="accident_injuries_3"
          onChange={handleChange}
          value={formData["accident_injuries_3"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accident_spill_3" className="block">
          Chemical Spill
        </label>
        <select
          id="accident_spill_3"
          onChange={handleChange}
          value={formData["accident_spill_3"]}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  </div>
</fieldset>

<button
        type="submit"
        className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button></>
  )
}

export default AccidentRecordForm