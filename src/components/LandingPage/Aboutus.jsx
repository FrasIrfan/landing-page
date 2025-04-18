import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="w-full py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h3 className="text-lg font-medium mb-8 text-black ml-8">
              • WHO WE ARE?
            </h3>
            <div className="flex flex-col items-center">
              <Image 
                width={500}
                height={500}
                src="/assets/logos/Aglivologo.png" 
                alt="Aglivo Logo" 
                className="max-w-[240px] mb-4"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <h4 className="text-lg font-medium tracking-wide text-black">
                A g l i v o{' '}&nbsp; S t o r y
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-black">
                From Upwork Developers to Industry Innovators
              </h2>
            </div>
            <div className="text-lg leading-relaxed text-gray-800 mb-10">
              Aglivo was founded by two passionate entrepreneurs who began their
              journey as developers on Upwork in 2019. Over time, they grew their
              vision and established the company with a mission to revolutionize the
              industry, creating innovative solutions and redefining what's possible.
            </div>
            
            <button className="bg-gray-700 hover:bg-gray-800 text-white rounded-full px-6 py-3 inline-flex items-center transition-colors">
              About US 
              <span className="ml-2">👋</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
