import { useLocation } from 'react-router-dom';
import ratesHeader from '../assets/rate_header.jpg';

function QuoteSubmitted() {
    const location = useLocation();

    const { company_name, contact_name, email } = location.state || {};

    return (
<div className="flex flex-col max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
<img src={ratesHeader} alt="rates banner" className="mb-8 rounded-lg shadow-lg" />
        <div className="px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Thank you for your quote request, {contact_name || "John"} from {company_name || "Blank Company"}!</h1>
            <p className="text-xl text-gray-700 mb-4">We have received your request and will get back to you at {email || "blank@email.com"} as soon as possible.</p>
            <p className="text-xl text-gray-700">Thank you for considering our services.</p>
            <p className="text-xl text-gray-700 mt-6">
                Best regards,
                <br />
                <span className="font-bold">TAA Logistics</span>
            </p>
        </div>
    </div>



    )
}

export default QuoteSubmitted