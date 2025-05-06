import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div
        className="bg-black hover:scale-105 ease-in-out bg-opacity-30 backdrop-blur-sm rounded-lg p-6 
                border border-gray-800 hover:border-blue-400 transition-all 
                duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
      >
        <div className="flex justify-center mb-4">
          <Image
            src={service.icon}
            alt={service.title}
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">
          {service.title}
        </h3>
        <p className="text-gray-300 text-center mb-4">{service.description}</p>
        <div className="text-center">
          <Link
            href="/"
            className="text-blue-400 underline hover:text-blue-300 inline-flex items-center transition-colors duration-300 font-medium"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
