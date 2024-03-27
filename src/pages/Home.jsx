import background2 from "../assets/background2.webm";
import samsara from "../assets/samsara_home.mp4";
import { Link } from "react-router-dom";
import clmt from '../assets/clmt.jpg';
import poweronlydivision from '../assets/poweronlydivision.jpeg';
import maintence from '../assets/maint_gold.jpg';
import intermodal from '../assets/intermodal.jpeg';
import dryvan from '../assets/dryvan.jpeg';
import isotank from '../assets/isotank.jpeg';
import secureyard from '../assets/secure_yard.jpg';
import transloading from '../assets/transloading.jpg';
import hazmat from '../assets/hazmat.jpeg';
import lovesGas from '../assets/lovesGas.jpeg';

const service_data = {
  services: [
    {
      id: 1,
      title: "Clean, Late Model Tractors",
      description: "Our drivers are equipped with late model equipment to meet FMCSA and DOT requirements and eliminate delivery delays due to breakdowns and \"Out Of Service\" issues.",
      image: clmt
    },
    {
      id: 2,
      title: "Power Only Division",
      description: "We will haul your trailers to their final destinations, safely!",
      image: poweronlydivision
    },
    {
      id: 3,
      title: "Maintenance & Repair",
      description: "Full time mechanics trained to keep our fleet of trucks and chassis DOT compliant and on the road delivering your products on time.",
      image: maintence,
    },
    {
      id: 4,
      title: "Intermodal",
      description: "Our drivers are trained and cleared to pull from and deliver to 90% of the Chicagoland ramps!",
      image: intermodal,
    },
    {
      id: 5,
      title: "Dry Van",
      description: "Our late model Great Dane and Wabash 53' dry vans are food grade ready with large carbon composite plates for reinforced decks.",
      image: dryvan,
    },
    {
      id: 6,
      title: "ISO Tank",
      description: "We have dedicated CDL Tanker endorsed drivers at the ready to transport your bulk products to market.",
      image: isotank,
    },
    {
      id: 7,
      title: "Secure Yard",
      description: "Our gated yard has over 100 secure parking spaces for storage of your goods until it is ready for delivery.",
      image: secureyard,
    },
    {
      id: 8,
      title: "Transloading",
      description: "Our access to containers, dry van trailers, and a trans-dock allows us to assist in getting your specific product needs to and from multiple locations.",
      image: transloading,
    },
    {
      id: 9,
      title: "HazMat",
      description: "Our CDL DOT HazMat certified and endorsed drivers are here ready to pull your placarded frac and ISO tanks to their final destinations.",
      image: hazmat,
    },
  ]
};

function Home() {

  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            TAA Logistics Inc.
          </h1>
          <p className="mt-4 text-gray-600">
            TAA Logistics, Inc. is a rapidly expanding transportation company
            based in the Midwest, with a team of skilled drivers experienced in
            intermodal transport operating our fleet of modern power units. Our
            fleet consists of over 30 fuel-efficient trucks, all equipped with
            the latest electronic logging devices (ELDs) and tracking software.
            Additionally, our team of certified mechanics ensures the ongoing
            maintenance of our trucks and company-owned chassis.
          </p>
          <div className="mt-6">
            <Link
              to="/rates"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mr-4"
            >
              Get Quote
            </Link>
            <Link
              to="/employment"
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <video
            src={samsara}
            className="rounded-lg shadow-lg"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className="mt-12">
        <div className="relative">
          <video
            src={background2}
            className="rounded-lg shadow-lg w-full h-96 object-cover"
            autoPlay
            controls={false}
            loop
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-3/4">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4">
              As a family-owned transportation company, we&apos;re committed to
              our industry&apos;s future. Since 1995, we&apos;ve operated in two
              countries and amassed over 5 million miles of experience, making
              us leaders in the transport sector. Our founders, who are also our
              original drivers, own TAA Logistics.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service_data.services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-black">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-gray-800 text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                &quot;Refreshing To See Outstanding Professionalism From This Team Here.
Above & Beyond Expectations.
Appreciate All Of The Help, Thank You.&quot;
              </p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Brian Haggerty</h4>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
             
              &quot;Always a pleasure doing business with Ed. He goes above and beyond to provide exceptional service and is very responsive to emails. Thank you Ed! &quot;
              </p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Cynthia Rosado</h4>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                &quot;The level of service TAA provides is unparalleled in the logistics industry! Definitely top notch! &quot;
              </p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Cynthia Alderson</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
            src={lovesGas}
            className="w-full h-60 object-cover rounded-t-lg mb-4"
          />
            <h3 className="text-2xl font-semibold mb-2 text-black">Routing Efficiency</h3>
            <p className="text-lg text-gray-600">
              Our routing efficiency plan includes pre-fueling in our primary yard and our drivers are equipped with fuel cards for over-the-road refueling if needed. We are proud of our 10-year 96% on-time delivery record. It is supported by a 24-hour logistical staff to provide the best communication to our shippers and customers.
            </p>          
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
          <video
            src={samsara}
            className="w-full h-60 object-cover rounded-t-lg mb-4"
            autoPlay
            loop
            muted
          />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Track Your Shipment</h3>
            <p className="text-lg text-gray-600">
              With the use of SAMSARA, you can track your shipments on our trucks in real-time. This allows you to track your shipment and know when they will arrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
