import background2 from "../assets/background2.webm";
import samsara from "../assets/samsara_home.mp4";
import { Link } from "react-router-dom";

const Home = () => {
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
                {/* <p className="text-sm text-gray-500">CEO, Acme Inc.</p> */}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
              &quot;Always a pleasure doing business with Ed. He goes above and beyond to provide exceptional service and is very responsive to emails. Thank you Ed! &quot;
              </p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Cynthia Rosado</h4>
                {/* <p className="text-sm text-gray-500">
                  Logistics Manager, XYZ Corp.
                </p> */}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
              &quot;The level of service TAA provides is unparalleled in the logistics industry! Definitely top notch! &quot;
              </p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Cynthia Alderson</h4>
                {/* <p className="text-sm text-gray-500">
                  Operations Director, Global Solutions
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
