import Card from '../components/Card';
import clmt from '../assets/clmt.jpg';
import poweronlydivision from '../assets/poweronlydivision.jpeg';
import maintence from '../assets/maint_gold.jpg';
import intermodal from '../assets/intermodal.jpeg';
import dryvan from '../assets/dryvan.jpeg';
import isotank from '../assets/isotank.jpeg';
import secureyard from '../assets/secure_yard.jpg';
import transloading from '../assets/transloading.jpg';
import hazmat from '../assets/hazmat.jpeg';

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

function Services() {
  return (
    <div className="flex flex-col items-center my-10 mx-auto w-auto">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <p className="text-xl mb-8">TAA Logistics Currently Offers:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {service_data.services.map((service) => (
          <Card key={service.id} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </div>
  );
}

export default Services;
