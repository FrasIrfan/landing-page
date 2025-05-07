"use client";

import React from "react";
import Link from "next/link";
import TrustedPartners from "./TrustedPartners";
import SocialVerticalBar from "./SocialVerticalBar";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const Hero = ({ span1text, span2text, description }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-black text-white font-montserrat overflow-hidden py-20 sm:py-32 md:py-48">
      <SocialVerticalBar />

      <div className="container mx-auto px-4 z-20 relative text-center flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          className="uppercase font-black text-3xl sm:text-5xl md:text-[56px] leading-tight tracking-[0px] text-center"
          style={{ fontWeight: 1000 }}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <span className="relative z-20">
                <span className="relative inline-block">
                  {/* Blue ellipse SVG */}
                  <svg
                    width="240"
                    height="105"
                    viewBox="0 0 240 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-1/2 -translate-y-[85%] z-10"
                    style={{
                      transform: "rotate(-25deg) scale(1.08)",
                      marginLeft: "-85px",
                      marginTop: "-60px",
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
                  <span className="relative z-20">{span1text}</span>
                </span>
              </span>
            </div>
            <div>
              <span className="relative z-20">{span2text}</span>
            </div>
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 sm:mt-8 mb-6 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto font-normal tracking-wide text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {description}
        </motion.p>

        {/* Downward Arrow */}
        <motion.div
          className="mt-2 mb-6 flex flex-col items-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4, duration: 0.8 }}
        >
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
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex flex-row gap-6 justify-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="#projects"
            className="text-blue-400 underline font-semibold hover:text-blue-300 transition"
          >
            View Projects
          </Link>
          <span className="text-gray-400">or</span>
          <Link
            href="#about"
            className="text-blue-400 underline font-semibold hover:text-blue-300 transition"
          >
            Read About Us
          </Link>
        </motion.div>
      </div>

      {/* Trusted Partners Section */}
      <TrustedPartners />
    </section>
  );
};

export default Hero;
