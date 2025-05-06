import React from "react";
// import { Monitor, Layout, Code, PieChart, Search } from "lucide-react";
import digital_icon from "../../../public/assets/Icons/digital_marketing_icon.png";
import uiux_icon from "../../../public/assets/Icons/ui_ux_icon.png";
import software_icon from "../../../public/assets/Icons/software_dev_icon.png";
import consult_icon from "../../../public/assets/Icons/consult_icon.png";
import seo_icon from "../../../public/assets/Icons/seo_icon.png";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: digital_icon,
      title: "Digital Marketing",
      description:
        "Maximize your brand's reach with our result-driven digital marketing strategies. From social media management to comprehensive campaigns.",
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
        "We build reliable, scalable, and custom software solutions tailored to your business needs. From concept to deployment.",
    },
    {
      icon: consult_icon,
      title: "Consultation",
      description:
        "Get expert guidance to turn your ideas into actionable strategies. Whether it's tech, design, or business direction.",
    },
    {
      icon: seo_icon,
      title: "SEO",
      description:
        "Improve your website's visibility and rank higher on search engines with our proven SEO strategies.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#0b1825] via-[#121829] to-[#280a1e] text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto font-montserrat">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions Tailored for Your Success
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From design to development and strategy, we offer everything you
            need to thrive in the digital world.
          </p>
        </div>

        {/* Top Row - 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom Row - 2 services (center-aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
