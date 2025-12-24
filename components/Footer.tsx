import {  Facebook, Twitter, Linkedin, Instagram, Building2, Zap, Construction } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-12 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Company Header */}
        <div className="text-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-blue-800">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-900 font-bold text-lg sm:text-xl">APEX</span>
            </div>
            <div className="text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                APEX ENERGY ENGINEERING & INFRASTRUCTURES LTD
              </h2>
              <p className="text-xs sm:text-sm text-red-400 italic mt-1">{`"...let's make it happen"`}</p>
            </div>
          </div> 
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3 sm:mb-4">
              <div className="bg-blue-800 p-2 sm:p-3 rounded-lg">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg">ENERGY SOLUTIONS</h3>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm">World-class energy and infrastructure services</p>
          </div>
          
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3 sm:mb-4">
              <div className="bg-blue-800 p-2 sm:p-3 rounded-lg">
                <Construction className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg">ENGINEERING & CONSTRUCTION</h3>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm">Expert engineering and construction solutions</p>
          </div>
          
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3 sm:mb-4">
              <div className="bg-blue-800 p-2 sm:p-3 rounded-lg">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-base sm:text-lg">INFRASTRUCTURES</h3>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm">Comprehensive infrastructure development</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors">
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors">
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors">
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-blue-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-blue-200 mb-3 sm:mb-4">
            © {new Date().getFullYear()} Apex Energy Engineering Infrastructure Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <button className="text-blue-200 hover:text-white transition-colors">Privacy Statement</button>
            <span className="text-blue-700">|</span>
            <button className="text-blue-200 hover:text-white transition-colors">Disclaimer</button>
            <span className="text-blue-700">|</span>
            <button className="text-blue-200 hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};export default Footer;
