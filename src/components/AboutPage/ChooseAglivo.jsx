"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import digital_icon from "../../../public/assets/Icons/digital_marketing_icon.png";
import uiux_icon from "../../../public/assets/Icons/ui_ux_icon.png";
import software_icon from "../../../public/assets/Icons/software_dev_icon.png";
import consult_icon from "../../../public/assets/Icons/consult_icon.png";
import seo_icon from "../../../public/assets/Icons/seo_icon.png";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ChooseAglivo = () => {
  const services = [
    {
      icon: digital_icon,
      title: "Digital Marketing",
      description:
        "Maximize your brand's reach with our result-driven digital marketing strategies. From social media management...",
    },
    {
      icon: uiux_icon,
      title: "UI/UX Designing",
      description:
        "We create seamless, user-focused digital experiences with intuitive interfaces and attractive visuals.",
    },
    {
      icon: software_icon,
      title: "Software Development",
      description:
        "We build reliable, scalable, and custom software solutions tailored to your business needs. From...",
    },
    {
      icon: consult_icon,
      title: "Consultation",
      description:
        "Get expert guidance to turn your ideas into actionable strategies. Whether it's tech, design, or business direction...",
    },
    {
      icon: seo_icon,
      title: "SEO",
      description:
        "Improve your website's visibility and rank higher on search engines with our proven SEO strategies.",
    },
  ];

  return (
    <div className="bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto font-montserrat">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Aglivo
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            From design to development and strategy, we offer everything you
            need to thrive in the digital world.
          </p>
        </motion.div>

        {/* Services Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeUp}
            >
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="brightness-0"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm mb-3">{service.description}</p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Services Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:max-w-2xl md:mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeUp}
            >
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="brightness-0"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm mb-3">{service.description}</p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseAglivo;
