import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RatesForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    fax: '',
    commodity: '',
    commodity_temp: '',
    commodity_gross_weight: '',
    from: '',
    delivery_date: '',
    delivery_zip_code: '',
    shipping_date: '',
    shipping_zip_code: '',
    CS: '',
    container_size: '',
    pallets: '',
    equipment_type: '',
    rail_destination: '',
    questions_or_notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return formData.company_name.length > 0 &&
    formData.contact_name.length > 0 &&
    formData.email.length > 0 &&
    formData.phone.length > 0 &&
    formData.from.length > 0 &&
    formData.delivery_zip_code.length > 0 &&
    formData.shipping_zip_code.length > 0;
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${import.meta.env.VITE_SERVER_URI}/quotes.json`, formData)
      .then((response) => {
        console.log(response);
        navigate("/quote-submitted", {state: { company_name: formData.company_name, contact_name: formData.contact_name, email: formData.email}}); 
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Get a Quote</legend>
      <div className="flex flex-col">
        <label htmlFor="company_name" className="mb-1">Company Name*</label>
        <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="contact_name" className="mb-1">Contact Name*</label>
        <input type="text" id="contact_name" name="contact_name" value={formData.contact_name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1">Email*</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1">Phone*</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="fax" className="mb-1">Fax</label>
        <input type="text" id="fax" name="fax" value={formData.fax} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="commodity" className="mb-1">Commodity</label>
        <input type="text" id="commodity" name="commodity" value={formData.commodity} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="commodity_temp" className="mb-1">Commodity Temp</label>
        <input type="text" id="commodity_temp" name="commodity_temp" value={formData.commodity_temp} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="commodity_gross_weight" className="mb-1">Commodity Gross Weight</label>
        <input type="text" id="commodity_gross_weight" name="commodity_gross_weight" value={formData.commodity_gross_weight} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="from" className="mb-1">From*</label>
        <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="delivery_date" className="mb-1">Delivery Date</label>
        <input type="date" id="delivery_date" name="delivery_date" value={formData.delivery_date} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="delivery_zip_code" className="mb-1">Delivery Zip Code*</label>
        <input type="text" id="delivery_zip_code" name="delivery_zip_code" value={formData.delivery_zip_code} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="shipping_date" className="mb-1">Shipping Date</label>
        <input type="date" id="shipping_date" name="shipping_date" value={formData.shipping_date} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="shipping_zip_code" className="mb-1">Shipping Zip Code*</label>
        <input type="text" id="shipping_zip_code" name="shipping_zip_code" value={formData.shipping_zip_code} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="CS" className="mb-1">CS 1-100</label>
        <input type="number" id="CS" name="CS" value={formData.CS} onChange={handleChange} min="1" max="100" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="container_size" className="mb-1">Container Size</label>
        <input type="text" id="container_size" name="container_size" value={formData.container_size} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="pallets" className="mb-1">Pallets 0-100</label>
        <input type="number" id="pallets" name="pallets" value={formData.pallets} onChange={handleChange} min="0" max="100" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="equipment_type" className="mb-1">Equipment Type</label>
        <select id="equipment_type" name="equipment_type" value={formData.equipment_type} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option value="">Select Equipment Type</option>
          <option value="20ft">20ft</option>
          <option value="40ST">40ST</option>
          <option value="40hc">40hc</option>
          <option value="45ST">45ST</option>
          <option value="53ST">53ST</option>
          <option value="40RF">40RF</option>
          <option value="53RF">53RF</option>
          <option value="ISO Tank">ISO Tank</option>
          <option value="Dry Van">Dry Van</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="rail_destination" className="mb-1">Rail Destination</label>
        <select id="rail_destination" name="rail_destination" value={formData.rail_destination} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option value="0">---SELECT DESTINATION---</option>
          <option value="1">BNSF - Cicero J791</option>
          <option value="2">BNSF - Corwith I145</option>
          <option value="3">BNSF - LogistiCS Park H572</option>
          <option value="4">BNSF - Willow Springs</option>
          <option value="5">CN - Harvey I092</option>
          <option value="6">CN - Joliet</option>
          <option value="7">CPR - Bensenville J830</option>
          <option value="8">CPR - Schiller Park I217</option>
          <option value="9">CSX - 59th Street J054</option>
          <option value="10">CSX - Bedford Park J470</option>
          <option value="11">IAIS - Blue Island</option>
          <option value="12">NS - 47th Street I104</option>
          <option value="13">NS - 63rd St./Englewood I104</option>
          <option value="14">NS - Calumet I104</option>
          <option value="15">NS - Landers 79th I104</option>
          <option value="16">UP - Global II - G2 I372</option>
          <option value="17">UP - Global III - G3 [Rochelle] J323</option>
          <option value="18">UP - Global IV (JIT) - G4 I206</option>
          <option value="19">UP - Yard Center K097</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="questions_or_notes" className="mb-1">Questions or questions_or_notes</label>
        <textarea id="questions_or_notes" name="questions_or_notes" value={formData.questions_or_notes} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3"></textarea>
      </div>
    </fieldset>
      <button type="submit" 
      className={`bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
        isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      disabled={!isFormValid()}
      >Submit</button>
    </form>
  );
};

export default RatesForm;
