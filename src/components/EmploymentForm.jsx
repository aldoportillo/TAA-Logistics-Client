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
  return (
    <form className="space-y-6">
      {/* Personal Information */}
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Personal Information</legend>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName" className="block">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="middleInitial" className="block">
              Middle Initial *
            </label>
            <input
              type="text"
              id="middleInitial"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              required
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="state" className="block">
              State
            </label>
            <select id="state" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="ssn" className="block">
              SSN
            </label>
            <input type="text" id="ssn" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              required
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </fieldset>

      {/* Residency History */}
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">
          Residency History (Past 3 Years)
        </legend>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residencyAddress1" className="block">
                Address
              </label>
              <input
                type="text"
                id="residencyAddress1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residencyCity1" className="block">
                City
              </label>
              <input
                type="text"
                id="residencyCity1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residencyState1" className="block">
                State
              </label>

<select id="residencyState1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="residencyZip1" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residencyZip1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residencyAddress2" className="block">
                Address
              </label>
              <input
                type="text"
                id="residencyAddress2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residencyCity2" className="block">
                City
              </label>
              <input
                type="text"
                id="residencyCity2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residencyState2" className="block">
                State
              </label>

<select id="residencyState2" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="residencyZip2" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residencyZip2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="residencyAddress3" className="block">
                Address
              </label>
              <input
                type="text"
                id="residencyAddress3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residencyCity3" className="block">
                City
              </label>
              <input
                type="text"
                id="residencyCity3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="residencyState3" className="block">
                State
              </label>
              <select id="residencyState3" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="residencyZip3" className="block">
                Zip
              </label>
              <input
                type="text"
                id="residencyZip3"
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
            <label htmlFor="licenseState" className="block">
              State
            </label>
            <select id="licenseState" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="licenseNumber" className="block">
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="licenseType" className="block">
              Type
            </label>
            <input
              type="text"
              id="licenseType"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="licenseExpirationDate" className="block">
              Expiration Date
            </label>
            <input
              type="date"
              id="licenseExpirationDate"
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
              <label htmlFor="convictionDate1" className="block">
                Date
              </label>
              <input
                type="date"
                id="convictionDate1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="convictionViolation1" className="block">
                Violation
              </label>
              <input
                type="text"
                id="convictionViolation1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="convictionState1" className="block">
                State
              </label>
              <select id="convictionState1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="convictionPenalty1" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="convictionPenalty1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="convictionDate2" className="block">
                Date
              </label>
              <input
                type="date"
                id="convictionDate2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="convictionViolation2" className="block">
                Violation
              </label>
              <input
                type="text"
                id="convictionViolation2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="convictionState2" className="block">
                State
              </label>
              <select id="convictionState2" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="convictionPenalty2" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="convictionPenalty2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label htmlFor="convictionDate3" className="block">
                Date
              </label>
              <input
                type="date"
                id="convictionDate3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="convictionViolation3" className="block">
                Violation
              </label>
              <input
                type="text"
                id="convictionViolation3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="convictionState3" className="block">
                State
              </label>
              <select id="convictionState3" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div>
              <label htmlFor="convictionPenalty3" className="block">
                Penalty
              </label>
              <input
                type="text"
                id="convictionPenalty3"
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
              <label htmlFor="experienceClass1" className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id="experienceClass1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceType1" className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id="experienceType1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceStartDate1" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="experienceStartDate1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceEndDate1" className="block">
                End Date
              </label>
              <input
                type="date"
                id="experienceEndDate1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceMiles1" className="block">
                Approx. Miles
              </label>
              <input
                type="number"
                id="experienceMiles1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="experienceClass2" className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id="experienceClass2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceType2" className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id="experienceType2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceStartDate2" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="experienceStartDate2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceEndDate2" className="block">
                End Date
              </label>
              <input
                type="date"
                id="experienceEndDate2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceMiles2" className="block">
                Approx. Miles
              </label>
              <input
                type="number"
                id="experienceMiles2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="experienceClass3" className="block">
                Class of Equipment
              </label>
              <input
                type="text"
                id="experienceClass3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceType3" className="block">
                Type of Equipment
              </label>
              <input
                type="text"
                id="experienceType3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceStartDate3" className="block">
                Start Date
              </label>
              <input
                type="date"
                id="experienceStartDate3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceEndDate3" className="block">
                End Date
              </label>
              <input
                type="date"
                id="experienceEndDate3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="experienceMiles3" className="block">
                Approx. Miles
              </label>
              <input
                type="number"
                id="experienceMiles3"
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
              <label htmlFor="accidentDate1" className="block">
                Date
              </label>
              <input
                type="date"
                id="accidentDate1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentNature1" className="block">
                Nature of Accident
              </label>
              <input
                type="text"
                id="accidentNature1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentFatalities1" className="block">
                Fatalities
              </label>
              <input
                type="number"
                id="accidentFatalities1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentInjuries1" className="block">
                Injuries
              </label>
              <input
                type="number"
                id="accidentInjuries1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentSpill1" className="block">
                Chemical Spill
              </label>
              <select id="accidentSpill1" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="accidentDate2" className="block">
                Date
              </label>
              <input
                type="date"
                id="accidentDate2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentNature2" className="block">
                Nature of Accident
              </label>
              <input
                type="text"
                id="accidentNature2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentFatalities2" className="block">
                Fatalities
              </label>
              <input
                type="number"
                id="accidentFatalities2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentInjuries2" className="block">
                Injuries
              </label>
              <input
                type="number"
                id="accidentInjuries2"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentSpill2" className="block">
                Chemical Spill
              </label>
              <select id="accidentSpill2" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <label htmlFor="accidentDate3" className="block">
                Date
              </label>
              <input
                type="date"
                id="accidentDate3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentNature3" className="block">
                Nature of Accident
              </label>
              <input
                type="text"
                id="accidentNature3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentFatalities3" className="block">
                Fatalities
              </label>
              <input
                type="number"
                id="accidentFatalities3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentInjuries3" className="block">
                Injuries
              </label>
              <input
                type="number"
                id="accidentInjuries3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accidentSpill3" className="block">
                Chemical Spill
              </label>
              <select id="accidentSpill3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
