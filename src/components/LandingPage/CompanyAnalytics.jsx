"use client"
import React from "react";
import CountUp from "react-countup";
import analyticsmob_one from "../../../public/assets/logos/analytics_mob1.svg";
import analyticsmob_two from "../../../public/assets/logos/analytics_mob2.svg";
import analyticsmob_three from "../../../public/assets/logos/analytics_mob3.svg";
import Image from "next/image";

const CompanyAnalytics = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-blue-100 to-white py-16 md:py-16">
        <div className="container mx-auto md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Stats Column */}
            <div className="space-y-12 font-montserrat">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Years of Experience */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl text-[#0D0D0D] font-bold">
                    <CountUp end={6} duration={10} suffix="+ Years" />
                  </h3>
                  <p className="text-sm text-[#4E4E4E] border-t border-black pt-2">
                    of market experience
                  </p>
                </div>

                {/* Satisfied Clients */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl text-[#0D0D0D] font-bold">
                    <CountUp end={100} duration={10} suffix="+" />
                  </h3>
                  <p className="text-sm text-[#4E4E4E] border-t border-black pt-2">
                    Satisfied Clients
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Tasks Organized */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl text-[#0D0D0D] font-bold">
                    <CountUp end={12} duration={10} suffix="M+" />
                  </h3>
                  <p className="text-sm text-[#4E4E4E] border-t border-black pt-2">
                    Tasks Organized
                  </p>
                </div>

                {/* Pro Users */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl text-[#0D0D0D] font-bold">
                    <CountUp end={76} duration={10} suffix="%" />
                  </h3>
                  <p className="text-sm text-[#4E4E4E] border-t border-black pt-2">
                    Pro Users
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Team Members */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl text-[#0D0D0D] font-bold">
                    <CountUp end={600} duration={10} suffix="+" />
                  </h3>
                  <p className="text-sm text-[#4E4E4E] border-t border-black pt-2">
                    Team Members
                  </p>
                </div>
              </div>
            </div>

            {/* App Screenshots Column */}
            <div className="flex justify-center items-center gap-6">
              <Image
                src={analyticsmob_one}
                alt="App screenshot 1"
                width={220}
                height={450}
                className="rounded-3xl shadow-lg"
              />
              <Image
                src={analyticsmob_two}
                alt="App screenshot 2"
                width={220}
                height={450}
                className="rounded-3xl shadow-lg"
              />
              <Image
                src={analyticsmob_three}
                alt="App screenshot 3"
                width={220}
                height={450}
                className="rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyAnalytics;
