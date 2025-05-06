"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Card({
  index,
  title,
  description,
  logoPath,
  isHovered,
  isDimmed,
  setHovered,
}) {
  const outerVariants = {
    default: { scale: 1 },
    hovered: { scale: 1.03 }, // reduced scale on hover
    dimmed: { scale: 0.97 },  // slightly less scale on dim
  };

  const variant = isHovered ? "hovered" : isDimmed ? "dimmed" : "default";

  return (
    <motion.div
      className="relative max-w-[372px] rounded-[12px] p-5 flex flex-col cursor-pointer mx-auto"
      variants={outerVariants}
      animate={variant}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="relative">
        <div className="w-[40px] h-[40px] mb-4">
          <Image
            src={logoPath}
            alt={`${title} Logo`}
            width={30}
            height={30}
            className="brightness-[1000]" // ensures white logos are very bright
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="font-montserrat font-normal text-[24px] leading-[100%] text-white -mt-5">
          {title}
        </div>
        <div
          className="font-montserrat font-normal text-[16px]  mt-4 text-[#FFFDF9] opacity-50"
          style={{ paddingBottom: "2.25px" }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
}
