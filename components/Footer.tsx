import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import whatsapp from "@/public/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-[#2F7876] text-white mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Company Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center sm:gap-4">
            <div>
              <Image
                src={logo}
                alt="Apex Logo"
                width={294}
                height={88}
                className="h-10 sm:h-12 md:h-16 w-auto"
                priority
              />
            </div>
            <div className="text-left">
              <h2 className="text-lg sm:text-lg md:text-xl font-semibold">
                APEX ENERGY ENGINEERING & INFRASTRUCTURES LTD
              </h2>
              <p className="text-xs sm:text-sm italic mt-1">{`"...let's make it happen"`}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content - Centered */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 sm:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-teal-200 transition-colors text-sm sm:text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-teal-200 transition-colors text-sm sm:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-teal-200 transition-colors text-sm sm:text-base"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-teal-200 transition-colors text-sm sm:text-base"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-teal-200 transition-colors text-sm sm:text-base"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3 sm:mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm sm:text-base font-medium block mb-1">
                      Address:
                    </span>
                    <span className="text-sm sm:text-base">
                      5 Kribi Street, Wuse Zone 2, Abuja, F.C.T
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm sm:text-base font-medium block mb-1">
                      Email:
                    </span>
                    <a
                      href="mailto:info@apexenergyeng.com"
                      className="text-sm sm:text-base hover:text-teal-200 transition-colors break-all"
                    >
                      info@apexenergyeng.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm sm:text-base font-medium block mb-1">
                      Phone:
                    </span>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+2348065334947"
                        className="text-sm sm:text-base hover:text-teal-200 transition-colors"
                      >
                        +234 (0) 8065334947
                      </a>
                      <a
                        href="tel:+2348072224440"
                        className="text-sm sm:text-base hover:text-teal-200 transition-colors"
                      >
                        +234 (0) 8072224440
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Image
                    src={whatsapp}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="text-sm sm:text-base font-medium block mb-1">
                      WhatsApp:
                    </span>
                    <a
                      href="https://wa.me/2349078461028"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base hover:text-teal-200 transition-colors"
                    >
                      +234 (0) 9078461028
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 sm:pt-6 border-t border-teal-600 text-center">
          <p className="text-xs sm:text-sm text-white">
            © {new Date().getFullYear()} Apex Energy Engineering Infrastructure
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
