import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInformationForm from "./EmploymentFormComponents/PersonalInformationForm";
import ResidencyHistoryForm from "./EmploymentFormComponents/ResidencyHistoryForm";
import LicenseInformationForm from "./EmploymentFormComponents/LicenseInformationForm";
import TrafficConvictionsForm from "./EmploymentFormComponents/TrafficConvictionsForm";
import AccidentRecordForm from "./EmploymentFormComponents/AccidentRecordForm";
import DrivingExperienceForm from "./EmploymentFormComponents/DrivingExperienceForm";
import FMCSRForm from "./EmploymentFormComponents/FMCSRForm";
import EmploymentRecordForm from "./EmploymentFormComponents/EmploymentRecordForm";
import SignatureForm from "./EmploymentFormComponents/SignatureForm";
import Intro from "./EmploymentFormComponents/Intro";
import Requirements from "./EmploymentFormComponents/Requirements";

function EmploymentForm() {
  const [formSection, setFormSection] = useState(0);
  const [formData, setFormData] = React.useState({
    // Personal Information
    first_name: "",
    middle_name: "",
    last_name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    date_of_birth: "",
    ssn: "",
    phone: "",
    email: "",
    // Residency History (3 entries with duration)
    residence_1_street: "",
    residence_1_city: "",
    residence_1_state: "",
    residence_1_zip: "",
    residence_1_duration: "",
    residence_2_street: "",
    residence_2_city: "",
    residence_2_state: "",
    residence_2_zip: "",
    residence_2_duration: "",
    residence_3_street: "",
    residence_3_city: "",
    residence_3_state: "",
    residence_3_zip: "",
    residence_3_duration: "",
    // License Information
    license_state: "",
    license_number: "",
    license_type: "",
    license_expiration_date: "",
    // Traffic Convictions (3 entries)
    conviction_1_date: "",
    conviction_1_violation: "",
    conviction_1_state: "",
    conviction_1_penalty: "",
    conviction_2_date: "",
    conviction_2_violation: "",
    conviction_2_state: "",
    conviction_2_penalty: "",
    conviction_3_date: "",
    conviction_3_violation: "",
    conviction_3_state: "",
    conviction_3_penalty: "",
    // Driving Experience (by equipment type)
    straight_truck_type: "",
    straight_truck_from: "",
    straight_truck_to: "",
    straight_truck_miles: "",
    tractor_semi_type: "",
    tractor_semi_from: "",
    tractor_semi_to: "",
    tractor_semi_miles: "",
    tractor_two_trailers_type: "",
    tractor_two_trailers_from: "",
    tractor_two_trailers_to: "",
    tractor_two_trailers_miles: "",
    other_equipment_type: "",
    other_equipment_from: "",
    other_equipment_to: "",
    other_equipment_miles: "",
    // Accident Record (3 entries)
    accident_1_date: "",
    accident_1_nature: "",
    accident_1_fatalities: "",
    accident_1_injuries: "",
    accident_1_chemical_spill: "",
    accident_2_date: "",
    accident_2_nature: "",
    accident_2_fatalities: "",
    accident_2_injuries: "",
    accident_2_chemical_spill: "",
    accident_3_date: "",
    accident_3_nature: "",
    accident_3_fatalities: "",
    accident_3_injuries: "",
    accident_3_chemical_spill: "",
    // FMCSR Questions (individual boolean fields)
    currently_disqualified: "",
    license_suspended: "",
    license_denied: "",
    positive_drug_test_last_2_years: "",
    bac_over_point04: "",
    dui: "",
    refused_testing: "",
    controlled_substance_violation: "",
    drug_transport_possession: "",
    left_scene_of_accident: "",
    // Employment Record (3 employers)
    employer_1_name: "",
    employer_1_street: "",
    employer_1_city: "",
    employer_1_state: "",
    employer_1_zip: "",
    employer_1_phone: "",
    employer_1_position: "",
    employer_1_salary: "",
    employer_1_from: "",
    employer_1_to: "",
    employer_1_reason_for_leaving: "",
    employer_1_subject_to_fmcsa: "",
    employer_1_safety_sensitive: "",
    employer_2_name: "",
    employer_2_street: "",
    employer_2_city: "",
    employer_2_state: "",
    employer_2_zip: "",
    employer_2_phone: "",
    employer_2_position: "",
    employer_2_salary: "",
    employer_2_from: "",
    employer_2_to: "",
    employer_2_reason_for_leaving: "",
    employer_2_subject_to_fmcsa: "",
    employer_2_safety_sensitive: "",
    employer_3_name: "",
    employer_3_street: "",
    employer_3_city: "",
    employer_3_state: "",
    employer_3_zip: "",
    employer_3_phone: "",
    employer_3_position: "",
    employer_3_salary: "",
    employer_3_from: "",
    employer_3_to: "",
    employer_3_reason_for_leaving: "",
    employer_3_subject_to_fmcsa: "",
    employer_3_safety_sensitive: "",
    // Gap Explanation (3 gaps)
    gap_1_from: "",
    gap_1_to: "",
    gap_1_reason: "",
    gap_2_from: "",
    gap_2_to: "",
    gap_2_reason: "",
    gap_3_from: "",
    gap_3_to: "",
    gap_3_reason: "",
    // E-Signature
    esign_consent: false,
    signature_full_name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_SERVER_URI}/applications.json`, { application: formData })
      .then((response) => {
        console.log(response);
        // Add logic for sending email
        navigate("/application-submitted", {state: { first_name: formData.first_name, last_name: formData.last_name}});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formComponents = [
    <Intro formData={formData} handleChange={handleChange} setFormSection={setFormSection} key={0}/>,
    <Requirements formData={formData} handleChange={handleChange} setFormSection={setFormSection} key={1}/>,
    <PersonalInformationForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={2}
    />,
    <ResidencyHistoryForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={3}
    />,
    <LicenseInformationForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={4}
    />,
    <TrafficConvictionsForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={5}
    />,
    <DrivingExperienceForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={6}
    />,
    <AccidentRecordForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={7}
    />,
    <FMCSRForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={8}
    />,
    <EmploymentRecordForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={9}
    />,
    <SignatureForm
      formData={formData}
      setFormData={setFormData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={10}
    />
  ];

  const progressPercentage = (formSection / (formComponents.length - 1)) * 100;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
      {formComponents[formSection]}
    </form>
  );
}

export default EmploymentForm;
