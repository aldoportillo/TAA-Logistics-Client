import employmentHeader from '../assets/employment_header.png'
import EmploymentForm from '../components/EmploymentForm';

function Employment() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <img src={employmentHeader} alt="employment banner" className="mb-8 rounded-lg shadow-lg" />
      <EmploymentForm />
    </div>
  );
}

export default Employment;
