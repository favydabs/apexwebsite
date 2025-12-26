"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import infrastructure from "@/public/infrastructure.jpg";
import energysolution from "@/public/energysolution.jpg";
import ourservices from "@/public/ourservices.jpg";
import greenenergy1 from "@/public/greenenergy1.jpeg";
import greenenergy2 from "@/public/greenenergy2.jpeg";
import greenenergy3 from "@/public/greenenergy3.jpeg";
import greenenergy4 from "@/public/greenenergy4.jpeg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      img: energysolution,
      alt: "Telecommunications towers",
      title: "Energy Solutions",
      description: "Powering the future with innovative energy infrastructure",
    },
    {
      img: ourservices,
      alt: "Industrial facility",
      title: "Engineering Excellence",
      description: "World-class engineering services for industrial growth",
    },
    {
      img: infrastructure,
      alt: "Energy infrastructure",
      title: "Infrastructure Development",
      description: "Building tomorrow's infrastructure today",
    },
    {
      img: greenenergy1,
      alt: "Solar energy",
      title: "Solar Power",
      description:
        "Harnessing sunlight to generate clean and renewable energy.",
    },
    {
      img: greenenergy2,
      alt: "Wind energy",
      title: "Wind Energy",
      description:
        "Using wind power to produce sustainable electricity with zero emissions.",
    },
    {
      img: greenenergy3,
      alt: "Hydro energy",
      title: "Hydro Power",
      description:
        "Generating energy from water to support a greener environment.",
    },
    {
      img: greenenergy4,
      alt: "Green infrastructure",
      title: "Sustainable Solutions",
      description:
        "Innovative green technologies for a cleaner and healthier future.",
    },
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
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="space-y-8 md:space-y-16">
      {/* Carousel */}
      <div className="relative h-[300px]  md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.img}
              alt={image.alt}
              width={624}
              height={24}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent" />

            {/* Carousel Text Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
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
          className=" cursor-pointer absolute left-2 sm:left-4 top-1/3 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="cursor-pointer absolute right-2 sm:right-4 top-1/3 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-6 sm:w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center space-y-4 sm:space-y-6 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-grey-900">
          WELCOME!
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We provide World-Class Energy, Engineering & Infrastructural Services
          to the Public and Private Industry related Sectors. We strive to
          become the leading Energy, Engineering and Infrastructure company in
          Nigeria and beyond with Competent skills and Motivated Workforce to
          succeed across the value chain.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-grey-900 mb-3 sm:mb-4">
            VISION
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our Vision is to be a pre-eminent company, a catalyst for
            sustainable long-term growth and development in countries we operate
            in while providing significant return for our stakeholders.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-grey-900 mb-3 sm:mb-4">
            MISSION
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our mission is to provide unique expertise in developing and
            executing projects in the energy and infrastructure sectors in
            Nigeria and other African countries, thereby developing efforts that
            serve as a backbone for growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
