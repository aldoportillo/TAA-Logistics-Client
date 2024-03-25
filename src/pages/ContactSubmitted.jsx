import { useLocation } from "react-router-dom";
import contactBanner from "../assets/contactBanner.jpeg";

function ContactSubmitted() {
  const location = useLocation();
  const { name, email_address} = location.state || {};

return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="max-w-4xl w-full">
            <img
                src={contactBanner}
                alt="contact banner"
                className="w-full"
            />
            <div className="px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-lg mb-4">
                    Dear {name},
                </p>
                <p className="text-lg mb-4">
                    We are thrilled to receive your message through our contact form.
                </p>
                <p className="text-lg mb-4">
                    Our team will carefully review your message and get back to you
                    shortly at {email_address}.
                </p>
                <p className="text-lg mt-4">
                    Best regards,
                    <br />
                    TAA Logistics
                </p>
            </div>
        </div>
    </div>
);
}

export default ContactSubmitted;
