import { useLocation } from 'react-router-dom';

const ApplicationSubmitted = () => {
  const location = useLocation();
  const { first_name, last_name } = location.state || {};


    return (
        <div className="flex flex-col items-center h-screen">
            <img src="https://taalogistics.com/images/employment_header.png" alt="employment banner" />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg mb-4">
                    Dear {first_name} {last_name},
                </p>
                <p className="text-lg mb-4">
                    We are thrilled to receive your application for TAA Logistics.
                </p>
                <p className="text-lg mb-4">
                    Your interest and qualifications are highly appreciated.
                </p>
                <p className="text-lg">
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