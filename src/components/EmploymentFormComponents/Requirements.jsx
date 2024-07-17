import PropTypes from "prop-types";

Requirements.propTypes = {
  setFormSection: PropTypes.func.isRequired,
};

function Requirements({ setFormSection }) {
  return (
    <>
      <fieldset className="border p-6 rounded-lg shadow-sm">
        <legend className="font-semibold text-xl mb-4">Requirements</legend>
        <div className="space-y-4">
          <p>Requirements</p>
          <p>To qualify with TAA LOGISTICS INC, you must meet the following criteria:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Must be 23 years of age or older</li>
            <li>Must meet all DOT requirements and qualifications</li>
            <li>Must have a valid Class A CDL</li>
            <li>Must have two (2) years of verifiable OTR experience</li>
            <li>Must have acceptable driving record as reflected on MVR and PSP</li>
            <li>Must have valid DOT physical</li>
            <li>Must pass required pre-employment drug test</li>
            <li>Must pass company driving test (if required)</li>
            <li>Must have stable work history</li>
            <li>No more than 3 preventable accidents in 5 years, at company discretion</li>
            <li>No DUI or DWI convictions in the past 5 years, at company discretion</li>
            <li>No positive or refused drug screens in the past 5 years, at company discretion</li>
          </ul>
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Requirements;
