import Image from "next/image";
import ourservices from "@/public/ourservices.jpg";

const Services = () => {
  const services = [
    "Electrical Installation Services",
    "Supplies of Electrical Equipment, Materials & Spare Parts",
    "Power Transformer Repairs and Installation",
    "Supplies of Diesel, AGO, LPFO & DPK",
    "Rehabilitation & Renewal of Existing ailing power plant, Sub-station, Transmission and Distribution Network",
    "EPC Housing & Infra structural Facilities",
    "General Contracts",
    "Contract Planning",
    "Solar Power Installation",
    "Optic Fiber Installation, Connectivity, FTTH",
    "Road Construction & Maintenance",
    "Rail Line Construction & Maintenance",
    "Cost Estimating",
    "Engineering, Procurement & Construction Management (EPCM)",
    "Preliminary Engineering (FEED)",
    "Project Management & Control (PMC)",
    "Portfolio Delivery",
    "Business Model Development",
    "Greenfield & Brownfield Projects",
    "Feasibility Studies",
    "Conceptual Design",
  ];

  return (
    <div className="space-y-6 sm:space-y-8 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Our Services
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Comprehensive energy and infrastructure solutions
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl  mb-8 sm:mb-12">
        <Image
          src={ourservices}
          alt="Industrial facility"
          width={624}
          height={24}
          className="w-full h-full md:h-120 object-cover"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-900"
          >
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-900 rounded-full flex items-center justify-center shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                {service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
