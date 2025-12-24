import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import contactus from "@/public/contactus.jpg";

const Contact = () => {
  return (
    <div className="space-y-6 sm:space-y-8 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Get in touch with our team
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  Address
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  5 Kribi Street, Wuse Zone 2, Abuja, F.C.T
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full ">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  Email
                </h3>
                <p className="text-gray-600 text-sm sm:text-base break-all">
                  alheri.ochoche@apexeng.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                  Phone
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  +234 (0) 8065334947
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={contactus}
            alt="contact us"
            width={224}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
