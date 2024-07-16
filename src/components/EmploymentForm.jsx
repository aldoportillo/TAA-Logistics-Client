import axios from "axios";
import React, { useState } from "react";
import PersonalInformationForm from "./EmploymentFormComponents/PersonalInformationForm";
import ResidencyHistoryForm from "./EmploymentFormComponents/ResidencyHistoryForm";
import LicenseInformationForm from "./EmploymentFormComponents/LicenseInformationForm";
import TrafficConvictionsForm from "./EmploymentFormComponents/TrafficConvictionsForm";
import AccidentRecordForm from "./EmploymentFormComponents/AccidentRecordForm";
import { useNavigate } from "react-router-dom";
import DrivingExperienceForm from "./EmploymentFormComponents/DrivingExperienceForm";
import FMCSRForm from "./EmploymentFormComponents/FMCSRForm";

function EmploymentForm() {
  const [formSection, setFormSection] = useState(0);
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
    disqualified: "",
    suspended: "",
    denied: "",
    tested_positive: "",
    convicted_offenses: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_SERVER_URI}/applications.json`, formData)
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
    <PersonalInformationForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={0}
    />,
    <ResidencyHistoryForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={1}
    />,
    <LicenseInformationForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={2}
    />,
    <TrafficConvictionsForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={3}
    />,
    <DrivingExperienceForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={4}
    />,
    <AccidentRecordForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={5}
    />,
    <FMCSRForm
      formData={formData}
      setFormSection={setFormSection}
      handleChange={handleChange}
      key={6}
    />
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formComponents[formSection]}
    </form>
  );
}

export default EmploymentForm;
