"use client";

import React from "react";
import Link from "next/link";
import TrustedPartners from "./TrustedPartners";
import SocialVerticalBar from "./SocialVerticalBar";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-black text-white font-montserrat overflow-hidden py-20 sm:py-32 md:py-48">
      <SocialVerticalBar />
      <div className="container mx-auto px-4 z-20 relative text-center flex flex-col items-center">
        <h1 className="uppercase text-center font-montserrat font-black text-3xl sm:text-5xl md:text-[56px] leading-tight sm:leading-[140%] md:leading-[160%] tracking-[0px] align-middle" style={{ fontWeight: 1000 }}>
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <span className="relative z-20">
                <span className="relative inline-block">
                  {/* Blue ellipse SVG - positioned around YOUR */}
                  <svg
                    width="240"
                    height="105"
                    viewBox="0 0 240 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-1/2 -translate-y-[85%] z-10"
                    style={{ 
                      transform: 'rotate(-25deg) scale(1.08)',
                      marginLeft: '-85px',   // moved more left
                      marginTop: '-60px'     // moved more down
                    }}
                  >
                    <ellipse
                      cx="120"
                      cy="52.5"
                      rx="105"
                      ry="39"
                      stroke="#3498ff"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                  <span className="relative z-20">YOUR</span>
                </span>
                <span className="ml-3">VISION, OUR CREATIVITY</span>
              </span>
            </div>
            <div>
              <span className="relative z-20">DELIVERING CUSTOM SOLUTIONS</span>
            </div>
          </div>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 sm:mt-8 mb-6 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto font-normal tracking-wide text-center">
          We are extensive experience and a strong team.&nbsp;We deliver creative branding, web design, and UI/UX solutions to make the most impact.
        </p>

        {/* Downward arrow */}
        <div className="mt-2 mb-6 flex flex-col items-center">
          <button
            className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center border-2 border-blue-400 hover:bg-blue-400/10 transition"
            onClick={scrollToBottom}
            aria-label="Scroll Down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-row gap-6 justify-center mb-12">
          <Link href="#projects" className="text-blue-400 underline font-semibold hover:text-blue-300 transition">View Projects</Link>
          <span className="text-gray-400">or</span>
          <Link href="#about" className="text-blue-400 underline font-semibold hover:text-blue-300 transition">Read About Us</Link>
        </div>
      </div>
      
      {/* Trusted Partners Section */}
      <TrustedPartners />
    </section>
  );
};

export default Hero;
