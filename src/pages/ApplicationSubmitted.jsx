import { useLocation } from 'react-router-dom';
import employmentHeader from '../assets/employment_header.png';

const ApplicationSubmitted = () => {
  const location = useLocation();
  const { first_name, last_name } = location.state || {};


    return (
<div className="flex flex-col max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <img src={employmentHeader} alt="employment banner" className="mb-8 rounded-lg shadow-lg" />
        <div className="px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg mb-4">
                Dear {first_name || "blank"} {last_name || "name"},
            </p>
            <p className="text-lg mb-4">
                We are thrilled to receive your application for TAA Logistics.
            </p>
            <p className="text-lg mb-4">
                Your interest and qualifications are highly appreciated.
            </p>
            <p className="text-lg mb-4">
                Our team will carefully review your application and get back to you shortly.
            </p>
            <p className="text-lg mt-4">
                Best regards,
                <br />
                TAA Logistics
            </p>
        </div>
</div>



    );
};

export default ApplicationSubmitted;