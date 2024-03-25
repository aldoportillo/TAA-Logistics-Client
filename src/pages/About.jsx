import aboutHeader from '../assets/aboutheader.jpg';

function About() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <img src={aboutHeader} alt="about banner" className="mb-8 rounded-lg shadow-lg" />

      <p className="py-4 text-lg leading-relaxed">As a proud family-owned and operated transportation company, we are deeply committed to the future of our industry. Since our inception in 1995, we have been a driving force in the trucking sector, operating across two countries and amassing over 5,000,000 miles of experience. This journey has propelled us to the forefront of transportation.</p>

      <p className="py-4 text-lg leading-relaxed">At the heart of TAA Logistics are our original drivers, the three owners who laid the foundation for our success. As we&apos;ve grown, so has our dedication to hiring passionate drivers who are not only committed to their families and communities but also to excellence in their profession. We believe in the importance of providing a good living for our team, which is why we ensure they drive clean, late-model equipment.</p>

      <p className="py-4 text-lg leading-relaxed">We strive to inspire our team to be industry leaders, embodying the professional values and culture of TAA Logistics, Inc. Our employees thrive in a trusting and empowering atmosphere, fostering a strong, healthy, and enjoyable work environment.</p>

      <p className="py-4 text-lg leading-relaxed">Welcome to TAA Logistics, where we&apos;re confident you&apos;ll find happiness and fulfillment.</p>
    </div>
  );
}

export default About;

