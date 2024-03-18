import { useLocation } from 'react-router-dom';

function QuoteSubmitted() {
    const location = useLocation();

    const { company_name, contact_name, email } = location.state || {};

    return (
        <div className="flex flex-col items-center h-screen">
            <img src="https://taalogistics.com/images/rate_header.jpg" alt="rates banner" />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Thank you for your quote request, {contact_name} from {company_name}!</h1>
                <p className="text-lg mb-4">We have received your request and will get back to you at {email} as soon as possible.</p>
                <p className="text-lg">Thank you for considering our services.</p>
                <p className="text-lg mt-4">
                Best regards,
                <br />
                TAA Logistics
            </p>
            </div>
        </div>
    )
}

export default QuoteSubmitted