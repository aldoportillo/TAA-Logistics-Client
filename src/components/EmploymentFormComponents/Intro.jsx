import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Intro.propTypes = {
  setFormSection: PropTypes.func.isRequired,
};

function Intro({ setFormSection }) {
  return (
    <>
      <fieldset className="border p-6 rounded-lg shadow-sm">
        <legend className="font-semibold text-xl mb-4">Intro</legend>
        <div className="space-y-4">
          <p>Thank you for your interest in TAA Logistics Inc. To apply for a driving position, please complete our online application for employment.</p>
          <p>Incomplete information will delay the processing of your application or prevent it from being submitted.</p>
          <p>
            In compliance with Federal and State equal employment opportunity laws, qualified applicants are considered for all positions without regard to race, color, religion, sex, national origin, age, marital status, veteran status, non-job related disability, or any other protected group status.
          </p>
          <p>To fill out this form, you will need to know the following:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Social Security Number</li>
            <li>Home address history for the past 3 years</li>
            <li>Current driver license number and driver license history for the past 3 years</li>
            <li>Employment history up to 10 years</li>
            <li>History of traffic accidents, violations and/or convictions from the last 3 years (including DUI or reckless driving conviction and license suspension)</li>
          </ul>
          <p>
            Required entry fields are followed by <span className="text-red-500">*</span>, meaning you must provide the requested information to continue. If you encounter any errors during this process and cannot continue, please contact us via our <Link
             to="/contact" className="text-blue-600">Contact Form</Link>.
          </p>
        </div>
      </fieldset>

      <button
        className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-6"
        onClick={() => setFormSection((prevValue) => prevValue + 1)}
      >
        Next
      </button>
    </>
  );
}

export default Intro;
