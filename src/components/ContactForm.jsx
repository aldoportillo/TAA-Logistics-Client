import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CsrfTokenContext } from '../context/CsrfTokenContext.jsx';

/*#bf2121*/
function ContactForm() {

  const navigate = useNavigate();
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/inquiries.json' : 'https://taa-logistics-server.onrender.com/inquiries.json';
  const csrfToken = useContext(CsrfTokenContext);

  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email_address: '',
    message: '',
  });

  console.log(csrfToken);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(url);
    console.log(csrfToken);
  
    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        withCredentials: true
      })
      .then((response) => {
        console.log(response);
        navigate("/contact-submitted", { state: { name: formData.name, email_address: formData.email_address } });
      })
      .catch((error) => {
        console.error(error);
        if (error.response && error.response.status === 422) {
          const errors = error.response.data.errors || ["Please check your input."];
          alert(errors.join("\n"));
        } else {
          alert("An error occurred. Please try again.");
        }
      });
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Contact Us</legend>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phone_number"
          id="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email_address"
          name="email_address"
          id="email_address"
          value={formData.email_address}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          rows="4"
        ></textarea>
      </div>
      </fieldset>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
      
    </form>
  );
}

export default ContactForm;
