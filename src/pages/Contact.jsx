import contactBanner from '../assets/contactBanner.jpeg';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <img src={contactBanner} alt="contact banner" className="mb-8 rounded-lg shadow-lg" />
      <ContactForm />
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div>
            <a className="text-lg text-gray-700" href='https://maps.app.goo.gl/LhQe6UWda3zp2ZQ68' target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">Address:</span><br />
              18949 Wolf Rd,<br />
              Mokena, IL 60448
            </a>
            <p className="text-lg mt-4 text-gray-700">
              <span className="font-semibold">Phone:</span><br />
              <a href="tel:7085675424" className="text-blue-500 hover:text-blue-600">(708) 567-5424</a>
            </p>
            <p className="text-lg mt-4 text-gray-700">
              <span className="font-semibold">Email:</span><br />
              <a href="mailto:ed@taalogistics.com" className="text-blue-500 hover:text-blue-600">ed@taalogistics.com</a>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.1214519286877!2d-87.88962200000002!3d41.5449675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e6afcf0a1ebc5%3A0xa232c094d1131c3d!2s18949%20Wolf%20Rd%2C%20Mokena%2C%20IL%2060448!5e0!3m2!1sen!2sus!4v1710967354664!5m2!1sen!2sus"
            className="w-full md:w-96 h-64 rounded-lg shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
