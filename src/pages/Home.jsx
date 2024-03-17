import React from "react";
import samsara from "../assets/samsara_home.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            TAA Logistics, Inc.
          </h1>
          <p className="mt-4 text-gray-600">
            TAA Logistics, Inc. is a rapidly expanding transportation company based in the Midwest, with a team of skilled drivers experienced in intermodal transport operating our fleet of modern power units. Our fleet consists of over 30 fuel-efficient trucks, all equipped with the latest electronic logging devices (ELDs) and tracking software. Additionally, our team of certified mechanics ensures the ongoing maintenance of our trucks and company-owned chassis.
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
            controls={false}
            loop
            />

        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600">
          As a family-owned and operated transportation business, we are deeply committed to the future of our industry. Since our inception in 1995, we have expanded our operations across two countries. With a collective experience of over 5 million miles, we have established ourselves as leaders in the transportation sector. TAA Logistics is proudly driven by its three original drivers, who are also the owners of the company.
        </p>
      </div>
    </div>
  );
};

export default Home;
