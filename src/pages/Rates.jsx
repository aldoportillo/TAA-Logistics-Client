import ratesHeader from '../assets/rate_header.jpg';
import RatesForm from '../components/RatesForm';

function Rates() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <img src={ratesHeader} alt="rates banner" className="mb-8 rounded-lg shadow-lg" />
      <RatesForm />
    </div>
  );
}

export default Rates;
