import Image from "next/image";
import about from "@/public/about.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <h1 className="flex justify-center text-grey-900 text-2xl md:text-3xl font-bold">About Us</h1>
      {/* Hero Section with Image and Who We Are */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image - Left Side */}
              <div className="w-full h-full">
                <Image
                  src={about}
                  alt="About Apex Energy Engineering & Infrastructures Ltd"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Who We Are - Right Side */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Apex Energy Engineering & Infrastructures Ltd is a
                  full-spectrum Engineering, Procurement, Construction, and
                  Installation (EPCI) company delivering integrated solutions
                  across the green energy sector, power, infrastructure,
                  telecommunications, oil & gas, and project management &
                  consultancy services.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We specialize in the end-to-end execution of complex projects,
                  providing clients with single-point responsibility from
                  conceptual design through commissioning and final handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Certifications & Registration */}
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl  p-6 sm:p-8 lg:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Certifications & Registrations
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2F7876] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Duly registered with the{" "}
                  <span className="font-semibold">
                    Corporate Affairs Commission (CAC)
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2F7876] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Professionally certified with the{" "}
                  <span className="font-semibold">
                    Council for the Regulation of Engineering in Nigeria (COREN)
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#2F7876] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Registered with the{" "}
                  <span className="font-semibold">
                    Nigerian Electricity Management Services Agency (NEMSA)
                  </span>
                  , authorizing us to undertake electrical installation,
                  inspection, testing, and certification works in compliance
                  with national regulatory requirements
                </p>
              </div>
            </div>
          </div>

          {/* Technical Capabilities */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Our Technical Capabilities
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Our technical capability spans a comprehensive range of services:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Front-End Engineering Design (FEED)",
                "Detailed Engineering",
                "Equipment Specification",
                "Procurement and Vendor Management",
                "Construction Supervision",
                "Installation",
                "Testing & Commissioning",
                "As-Built Documentation",
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#2F7876] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-[#2F7876] text-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-white/90 leading-relaxed text-lg">
              By combining engineering excellence with disciplined project
              management and strict adherence to health, safety, quality, and
              environmental (HSQE) standards, we ensure projects are delivered
              safely, on schedule, within budget, and in alignment with
              applicable international and local standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
