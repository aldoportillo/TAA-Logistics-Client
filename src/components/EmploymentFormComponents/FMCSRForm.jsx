import PropTypes from "prop-types";

FMCSRForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFormSection: PropTypes.func.isRequired,
};

function FMCSRForm({ formData, handleChange, setFormSection }) {

    const isFormValid = () => {
    return (
      formData.disqualified === "false" &&
      formData.suspended === "false" &&
      formData.denied === "false" &&
      formData.tested_positive === "false" &&
      formData.convicted_offenses === "false"
    );
    }
  return (
    <>
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">FMCSR</legend>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="disqualified" className="block">
              Under FMCSR 391.15, are you currently disqualified from driving a commercial motor vehicle? [49 CFR 391.15] *
            </label>
            <select
              id="disqualified"
              value={formData.disqualified}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div>
            <label htmlFor="suspended" className="block">
              Has your license, permit, or privilege to drive ever been suspended or revoked for any reason? [49 CFR 391.21(b)(9)] *
            </label>
            <select
              id="suspended"
              value={formData.suspended}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div>
            <label htmlFor="denied" className="block">
              Have you ever been denied a license, permit, or privilege to operate a motor vehicle? [49 CFR 391.21(b)(9)] *
            </label>
            <select
              id="denied"
              value={formData.denied}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div>
            <label htmlFor="tested_positive" className="block">
              Within the past two years, have you tested positive, or refused to test, on a pre-employment drug or alcohol test by an employer to whom you applied, but did not obtain, safety-sensitive transportation work covered by DOT agency drug and alcohol testing rules? [49 CFR 40.25(j)] *
            </label>
            <select
              id="tested_positive"
              value={formData.tested_positive}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div>
            <label htmlFor="convicted_offenses" className="block">
              In the past three (3) years, have you ever been convicted of any of the following offenses committed during on-duty time [49 C.F.R. 391.15 and 49 C.F.R. 395.2]: *
              <ul className="list-disc ml-4">
                <li>Driving a commercial motor vehicle with a blood alcohol concentration (&quot;BAC&quot;) of .04 percent or more</li>
                <li>Driving under the influence of alcohol, as prescribed by state law</li>
                <li>Refusal to undergo drug and alcohol testing as required by any jurisdiction for the enforcement of Federal Motor Carrier Safety Act regulations</li>
                <li>Driving a commercial motor vehicle under the influence of any 21 C.F.R. 1308.11 Schedule I identified controlled substance, an amphetamine, a narcotic drug, a formulation of an amphetamine, or a derivative of a narcotic drug</li>
                <li>Transportation, possession, or unlawful use of a 21 C.F.R. 1308.11 Schedule I identified controlled substance, amphetamines, narcotic drugs, formulations of an amphetamine, or derivatives of narcotic drugs while you were on duty driving for a motor carrier</li>
                <li>Leaving the scene of an accident while operating a commercial motor vehicle</li>
                <li>Or any other felony involving the use of a commercial motor vehicle</li>
              </ul>
            </label>
            <select
              id="convicted_offenses"
              value={formData.convicted_offenses}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select...</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          type="button"
          className="bg-gray-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setFormSection((prevValue) => prevValue - 1)}
        >
          Previous
        </button>
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default FMCSRForm;
