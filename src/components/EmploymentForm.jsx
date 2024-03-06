import axios from "axios";
import React from "react";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function EmploymentForm() {

  const [formData, setFormData] = React.useState({
    "first-name": "",
    "middle-initial": "",
    "last-name": "",
    "address": "",
    "city": "",
    "state": "",
    "zip": "",
    "birthday": "",
    "ssn": "",
    "phone-number": "",
    "email": "",
    "residency-address-1": "",
    "residency-city-1": "",
    "residency-state-1": "",
    "residency-zip-1": "",
    "residency-address-2": "",
    "residency-city-2": "",
    "residency-state-2": "",
    "residency-zip-2": "",
    "residency-address-3": "",
    "residency-city-3": "",
    "residency-state-3": "",
    "residency-zip-3": "",
    "license-state": "",
    "license-number": "",
    "license-type": "",
    "license-expiration-date": "",
    "conviction-date-1": "",
    "conviction-violation-1": "",
    "conviction-state-1": "",
    "conviction-penalty-1": "",
    "conviction-date-2": "",
    "conviction-violation-2": "",
    "conviction-state-2": "",
    "conviction-penalty-2": "",
    "conviction-date-3": "",
    "conviction-violation-3": "",
    "conviction-state-3": "",
    "conviction-penalty-3": "",
    "experience-class-1": "",
    "experience-type-1": "",
    "experience-start-date-1": "",
    "experience-end-date-1": "",
    "experience-miles-1": "",
    "experience-class-2": "",
    "experience-type-2": "",
    "experience-start-date-2": "",
    "experience-end-date-2": "",
    "experience-miles-2": "",
    "experience-class-3": "",
    "experience-type-3": "",
    "experience-start-date-3": "",
    "experience-end-date-3": "",
    "experience-miles-3": "",
    "accident-date-1": "",
    "accident-nature-1": "",
    "accident-fatalities-1": "",
    "accident-injuries-1": "",
    "accident-spill-1": "",
    "accident-date-2": "",
    "accident-nature-2": "",
    "accident-fatalities-2": "",
    "accident-injuries-2": "",
    "accident-spill-2": "",
    "accident-date-3": "",
    "accident-nature-3": "",
    "accident-fatalities-3": "",
    "accident-injuries-3": "",
    "accident-spill-3": "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/employment", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    };


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Personal Information</legend>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="first-name" className="block">
              First Name *
            </label>
            <input
              type="text"
              id="first-name"
              required
              value={formData["first-name"]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="middle-initial" className="block">
              Middle Initial *
            </label>
            <input
              type="text"
              id="middle-initial"
              required
              value={formData["middle-initial"]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block">
              Last Name *
            </label>
            <input
              type="text"
              id="last-name"
              required
              onChange={handleChange}
              value={formData["last-name"]}
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
              value={formData["address"]}
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
              value={formData["city"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="state" className="block">
              State
            </label>
            <select id="state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={formData["state"]} onChange={handleChange}>
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
              value={formData["zip"]}
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
              value={formData["birthday"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="ssn" className="block">
              SSN
            </label>
            <input type="text" id="ssn" onChange={handleChange} value={formData["ssn"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="phone-number" className="block">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone-number"
              required
              onChange={handleChange}
              value={formData["phone-number"]}
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
              value={formData["email"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Residency History (Past 3 Years)
        </legend>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residency-address-1" className="block">
                Address
              </label>
              <input
                type="text"
                id="residency-address-1"
                onChange={handleChange}
                value={formData["residency-address-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency-city-1" className="block">
                City
              </label>
              <input
                type="text"
                id="residency-city-1"
                onChange={handleChange}
                value={formData["residency-city-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency-state-1" className="block">
                State
              </label>
              <select id="residency-state-1" required onChange={handleChange} value={formData["residency-state-1"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="residency-zip-1" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residency-zip-1"
                onChange={handleChange}
                value={formData["residency-zip-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residency-address-2" className="block">
                Address
              </label>
              <input
                type="text"
                id="residency-address-2"
                onChange={handleChange}
                value={formData["residency-address-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency-city-2" className="block">
                City
              </label>
              <input
                type="text"
                id="residency-city-2"
                onChange={handleChange}
                value={formData["residency-city-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency-state-2" className="block">
                State
              </label>
              <select id="residency-state-2" onChange={handleChange} value={formData["residency-state-2"]} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="residency-zip-2" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residency-zip-2"
                onChange={handleChange}
                value={formData["residency-zip-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residency-address-3" className="block">
                Address
              </label>
              <input
                type="text"
                id="residency-address-3"
                onChange={handleChange}
                value={formData["residency-address-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency-city-3" className="block">
                City
              </label>
              <input
                type="text"
                id="residency-city-3"
                onChange={handleChange}
                value={formData["residency-city-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residency-state-3" className="block">
                State
              </label>
              <select id="residency-state-3" onChange={handleChange} value={formData["residency-state-3"]} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="residency-zip-3" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residency-zip-3"
                onChange={handleChange}
                value={formData["residency-zip-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* License Information */}
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
            <label htmlFor="license-state" className="block">
              State
            </label>
            <select id="license-state" required onChange={handleChange} value={formData["license-state"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="license-number" className="block">
              License Number
            </label>
            <input
              type="text"
              id="license-number"
              onChange={handleChange}
              value={formData["license-number"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="license-type" className="block">
              Type
            </label>
            <input
              type="text"
              id="license-type"
              onChange={handleChange}
              value={formData["license-type"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="license-expiration-date" className="block">
              Expiration Date
            </label>
            <input
              type="date"
              id="license-expiration-date"
              onChange={handleChange}
              value={formData["license-expiration-date"]}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </fieldset>

      {/* Traffic Convictions */}
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Traffic Convictions (Past 3 Years)
        </legend>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction-date-1" className="block">
                Date
              </label>
              <input
                type="date"
                id="conviction-date-1"
                onChange={handleChange}
                value={formData["conviction-date-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction-violation-1" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction-violation-1"
                onChange={handleChange}
                value={formData["conviction-violation-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction-state-1" className="block">
                State
              </label>
              <select id="conviction-state-1" required onChange={handleChange} value={formData["conviction-state-1"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="conviction-penalty-1" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction-penalty-1"
                onChange={handleChange}
                value={formData["conviction-penalty-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction-date-2" className="block">
                Date
              </label>
              <input
                type="date"
                id="conviction-date-2"
                onChange={handleChange}
                value={formData["conviction-date-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction-violation-2" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction-violation-2"
                onChange={handleChange}
                value={formData["conviction-violation-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction-state-2" className="block">
                State
              </label>
              <select id="conviction-state-2" onChange={handleChange} value={formData["conviction-state-2"]} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="conviction-penalty-2" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction-penalty-2"
                onChange={handleChange}
                value={formData["conviction-penalty-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="conviction-date-3" className="block">
                Date
              </label>
              <input
                type="date"
                id="conviction-date-3"
                onChange={handleChange}
                value={formData["conviction-date-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction-violation-3" className="block">
                Violation
              </label>
              <input
                type="text"
                id="conviction-violation-3"
                onChange={handleChange}
                value={formData["conviction-violation-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="conviction-state-3" className="block">
                State
              </label>
              <select id="conviction-state-3" required onChange={handleChange} value={formData["conviction-state-3"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="conviction-penalty-3" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="conviction-penalty-3"
                onChange={handleChange}
                value={formData["conviction-penalty-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Driving Experience */}
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Driving Experience</legend>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="experience-class-1" className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id="experience-class-1"
                onChange={handleChange}
                value={formData["experience-class-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-type-1" className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id="experience-type-1"
                onChange={handleChange}
                value={formData["experience-type-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-start-date-1" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="experience-start-date-1"
                onChange={handleChange}
                value={formData["experience-start-date-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-end-date-1" className="block">
                End Date
              </label>
              <input
                type="date"
                id="experience-end-date-1"
                onChange={handleChange}
                value={formData["experience-end-date-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-miles-1" className="block">
                Approx. Miles
              </label>
              <input
                type="number"
                id="experience-miles-1"
                onChange={handleChange}
                value={formData["experience-miles-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="experience-class-2" className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id="experience-class-2"
                onChange={handleChange}
                value={formData["experience-class-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-type-2" className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id="experience-type-2"
                onChange={handleChange}
                value={formData["experience-type-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-start-date-2" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="experience-start-date-2"
                onChange={handleChange}
                value={formData["experience-start-date-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-end-date-2" className="block">
                End Date
              </label>
              <input
                type="date"
                id="experience-end-date-2"
                onChange={handleChange}
                value={formData["experience-end-date-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-miles-2" className="block">
                Approx. Miles
              </label>
              <input
                type="number"
                id="experience-miles-2"
                onChange={handleChange}
                value={formData["experience-miles-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="experience-class-3" className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id="experience-class-3"
                onChange={handleChange}
                value={formData["experience-class-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-type-3" className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id="experience-type-3"
                onChange={handleChange}
                value={formData["experience-type-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-start-date-3" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="experience-start-date-3"
                onChange={handleChange}
                value={formData["experience-start-date-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-end-date-3" className="block">
                End Date
              </label>
              <input
                type="date"
                id="experience-end-date-3"
                onChange={handleChange}
                value={formData["experience-end-date-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experience-miles-3" className="block">
                Approx. Miles
              </label>
              <input
                type="number"
                id="experience-miles-3"
                onChange={handleChange}
                value={formData["experience-miles-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Accident Record */}

      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Accident Record (Past 3 Years)
        </legend>
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="accident-date-1" className="block">
                Date
              </label>
              <input
                type="date"
                id="accident-date-1"
                onChange={handleChange}
                value={formData["accident-date-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-nature-1" className="block">
                Nature of Accident
              </label>
              <input
                type="text"
                id="accident-nature-1"
                onChange={handleChange}
                value={formData["accident-nature-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-fatalities-1" className="block">
                Fatalities
              </label>
              <input
                type="number"
                id="accident-fatalities-1"
                onChange={handleChange}
                value={formData["accident-fatalities-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-injuries-1" className="block">
                Injuries
              </label>
              <input
                type="number"
                id="accident-injuries-1"
                onChange={handleChange}
                value={formData["accident-injuries-1"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-spill-1" className="block">
                Chemical Spill
              </label>
              <select id="accident-spill-1" onChange={handleChange} value={formData["accident-spill-1"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="accident-date-2" className="block">
                Date
              </label>
              <input
                type="date"
                id="accident-date-2"
                onChange={handleChange}
                value={formData["accident-date-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-nature-2" className="block">
                Nature of Accident
              </label>
              <input
                type="text"
                id="accident-nature-2"
                onChange={handleChange}
                value={formData["accident-nature-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-fatalities-2" className="block">
                Fatalities
              </label>
              <input
                type="number"
                id="accident-fatalities-2"
                onChange={handleChange}
                value={formData["accident-fatalities-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-injuries-2" className="block">
                Injuries
              </label>
              <input
                type="number"
                id="accident-injuries-2"
                onChange={handleChange}
                value={formData["accident-injuries-2"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-spill-2" className="block">
                Chemical Spill
              </label>
              <select id="accident-spill-2" onChange={handleChange} value={formData["accident-spill-2"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="accident-date-3" className="block">
                Date
              </label>
              <input
                type="date"
                id="accident-date-3"
                onChange={handleChange}
                value={formData["accident-date-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-nature-3" className="block">
                Nature of Accident
              </label>
              <input
                type="text"
                id="accident-nature-3"
                onChange={handleChange}
                value={formData["accident-nature-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-fatalities-3" className="block">
                Fatalities
              </label>
              <input
                type="number"
                id="accident-fatalities-3"
                onChange={handleChange}
                value={formData["accident-fatalities-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-injuries-3" className="block">
                Injuries
              </label>
              <input
                type="number"
                id="accident-injuries-3"
                onChange={handleChange}
                value={formData["accident-injuries-3"]}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accident-spill-3" className="block">
                Chemical Spill
              </label>
              <select id="accident-spill-3" onChange={handleChange} value={formData["accident-spill-3"]} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
      </button>
    </form>
  );
}

export default EmploymentForm;