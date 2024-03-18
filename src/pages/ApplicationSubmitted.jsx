import { useLocation } from 'react-router-dom';

const ApplicationSubmitted = () => {
  const location = useLocation();
  const { first_name, last_name } = location.state || {};


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg mb-4">
                Thank you, {first_name} {last_name}, for applying to TAA Logistics.
            </p>
            <p className="text-lg">
                We appreciate your interest and will review your application shortly.
            </p>
        </div>
    );
};

export default ApplicationSubmitted;