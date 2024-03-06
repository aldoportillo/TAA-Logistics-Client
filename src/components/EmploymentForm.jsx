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
    first_name: "",
    middle_initial: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    birthday: "",
    ssn: "",
    phone_number: "",
    email: "",
    residency_address_1: "",
    residency_city_1: "",
    residency_state_1: "",
    residency_zip_1: "",
    residency_address_2: "",
    residency_city_2: "",
    residency_state_2: "",
    residency_zip_2: "",
    residency_address_3: "",
    residency_city_3: "",
    residency_state_3: "",
    residency_zip_3: "",
    license_state: "",
    license_number: "",
    license_type: "",
    license_expiration_date: "",
    conviction_date_1: "",
    conviction_violation_1: "",
    conviction_state_1: "",
    conviction_penalty_1: "",
    conviction_date_2: "",
    conviction_violation_2: "",
    conviction_state_2: "",
    conviction_penalty_2: "",
    conviction_date_3: "",
    conviction_violation_3: "",
    conviction_state_3: "",
    conviction_penalty_3: "",
    experience_class_1: "",
    experience_type_1: "",
    experience_start_date_1: "",
    experience_end_date_1: "",
    experience_miles_1: "",
    experience_class_2: "",
    experience_type_2: "",
    experience_start_date_2: "",
    experience_end_date_2: "",
    experience_miles_2: "",
    experience_class_3: "",
    experience_type_3: "",
    experience_start_date_3: "",
    experience_end_date_3: "",
    experience_miles_3: "",
    accident_date_1: "",
    accident_nature_1: "",
    accident_fatalities_1: "",
    accident_injuries_1: "",
    accident_spill_1: "",
    accident_date_2: "",
    accident_nature_2: "",
    accident_fatalities_2: "",
    accident_injuries_2: "",
    accident_spill_2: "",
    accident_date_3: "",
    accident_nature_3: "",
    accident_fatalities_3: "",
    accident_injuries_3: "",
    accident_spill_3: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:3000/applications.json", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
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

      {/* Traffic Convictions */}
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
      {/* Accident Record */}

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
      </button>
    </form>
  );
}

export default EmploymentForm;
