"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
// import Image from 'next/image';

 const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200',
      alt: 'Telecommunications towers',
      title: 'Energy Solutions',
      description: 'Powering the future with innovative energy infrastructure'
    },
    {
      url: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200',
      alt: 'Industrial facility',
      title: 'Engineering Excellence',
      description: 'World-class engineering services for industrial growth'
    },
    {
      url: 'https://images.unsplash.com/photo-1504197885-34998477d9bc?w=1200',
      alt: 'Energy infrastructure',
      title: 'Infrastructure Development',
      description: 'Building tomorrow\'s infrastructure today'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="space-y-8 md:space-y-16">
      {/* Carousel */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* <Image
              src={image.url}
              alt={image.alt}
              width={24}
              height={24}
              className="w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
            
            {/* Carousel Text Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                    {image.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6 sm:w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center space-y-4 sm:space-y-6 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">WELCOME!</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We provide World-Class Energy, Engineering & Infrastructural Services to the Public and Private Industry related Sectors. We strive to become the leading Energy, Engineering and Infrastructure company in Nigeria and beyond with Competent skills and Motivated Workforce to succeed across the value chain.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">VISION</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our Vision is to be a pre-eminent company, a catalyst for sustainable long-term growth and development in countries we operate in while providing significant return for our stakeholders.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-3 sm:mb-4">MISSION</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our mission is to provide unique expertise in developing and executing projects in the energy and infrastructure sectors in Nigeria and other African countries, thereby developing efforts that serve as a backbone for growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;