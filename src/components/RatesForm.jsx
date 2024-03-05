import React, { useState } from 'react';

const RatesForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    fax: '',
    commodity: '',
    commodityTemp: '',
    commodityGrossWeight: '',
    from: '',
    deliveryDate: '',
    deliveryZipCode: '',
    shippingDate: '',
    shippingZipCode: '',
    cs: '',
    containerSize: '',
    pallets: '',
    equipmentType: '',
    railDestination: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <fieldset className="border p-4 rounded">
        <legend className="font-semibold text-lg">Get a Quote</legend>
      <div className="flex flex-col">
        <label htmlFor="companyName" className="mb-1">Company Name*</label>
        <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="contactName" className="mb-1">Contact Name*</label>
        <input type="text" id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
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
        <label htmlFor="commodityTemp" className="mb-1">Commodity Temp</label>
        <input type="text" id="commodityTemp" name="commodityTemp" value={formData.commodityTemp} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="commodityGrossWeight" className="mb-1">Commodity Gross Weight</label>
        <input type="text" id="commodityGrossWeight" name="commodityGrossWeight" value={formData.commodityGrossWeight} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="from" className="mb-1">From*</label>
        <input type="text" id="from" name="from" value={formData.from} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="deliveryDate" className="mb-1">Delivery Date</label>
        <input type="date" id="deliveryDate" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="deliveryZipCode" className="mb-1">Delivery Zip Code*</label>
        <input type="text" id="deliveryZipCode" name="deliveryZipCode" value={formData.deliveryZipCode} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="shippingDate" className="mb-1">Shipping Date</label>
        <input type="date" id="shippingDate" name="shippingDate" value={formData.shippingDate} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="shippingZipCode" className="mb-1">Shipping Zip Code*</label>
        <input type="text" id="shippingZipCode" name="shippingZipCode" value={formData.shippingZipCode} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cs" className="mb-1">CS 1-100</label>
        <input type="number" id="cs" name="cs" value={formData.cs} onChange={handleChange} min="1" max="100" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="containerSize" className="mb-1">Container Size</label>
        <input type="text" id="containerSize" name="containerSize" value={formData.containerSize} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="pallets" className="mb-1">Pallets 0-100</label>
        <input type="number" id="pallets" name="pallets" value={formData.pallets} onChange={handleChange} min="0" max="100" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="equipmentType" className="mb-1">Equipment Type</label>
        <select id="equipmentType" name="equipmentType" value={formData.equipmentType} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
        <label htmlFor="railDestination" className="mb-1">Rail Destination</label>
        <select id="railDestination" name="railDestination" value={formData.railDestination} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option value="0">---SELECT DESTINATION---</option>
          <option value="1">BNSF - Cicero J791</option>
          <option value="2">BNSF - Corwith I145</option>
          <option value="3">BNSF - Logistics Park H572</option>
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
        <label htmlFor="notes" className="mb-1">Questions or Notes</label>
        <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
    </fieldset>
    </form>
  );
};

export default RatesForm;
