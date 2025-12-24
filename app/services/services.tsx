// import Image from "next/image";

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

      <div className="relative h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mb-8 sm:mb-12">
        {/* <Image
          src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200"
          alt="Industrial facility"
          width={24}
          height={24}
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600"
          >
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
