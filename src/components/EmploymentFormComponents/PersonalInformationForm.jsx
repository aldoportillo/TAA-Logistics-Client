import React from 'react'
import {states} from "../../data/states"


function PersonalInformationForm({formData, handleChange}) {
  return (
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
          <div>
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
  )
}

export default PersonalInformationForm