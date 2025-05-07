"use client"
import React from "react";
import alvigostorylogo from "../../../public/assets/logos/AlvigoStory.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const AglivoStory = () => {
  return (
    <>
      <motion.div
        className="w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="px-14 font-montserrat flex flex-col md:flex-row items-center">
          {/* Left content section */}
          <motion.div
            className="w-full md:w-1/2 md:pr-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Title section */}
            <p className="text-black tracking-widest font-semibold text-lg mb-1">
              A g l i v o <span className="ml-3">S t o r y</span>
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h1>

            {/* Main paragraph */}
            <p className="text-gray-700 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            {/* Blockquote section */}
            <blockquote className="border-l-4 border-black py-2 ml-6">
              <p className="text-gray-700 ml-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a
              </p>
            </blockquote>
          </motion.div>

          {/* Right image section - hidden on mobile */}
          <motion.div
            className="hidden md:block md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={alvigostorylogo}
              alt="Business professional"
              className="w-full rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AglivoStory;
