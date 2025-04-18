'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Card({index, title, description, logoPath, isHovered, isDimmed, setHovered,}) {
  const outerVariants = {
    default: { scale: 1 },
    hovered: { scale: 1.1 },
    dimmed: { scale: 0.95 },
  };

  const variant = isHovered ? 'hovered' : isDimmed ? 'dimmed' : 'default';

  return (
    <motion.div
      className="relative max-w-[372px] border border-[#4E4E4E] rounded-[12px] p-5 flex flex-col cursor-pointer mx-auto"
      variants={outerVariants}
      animate={variant}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {isHovered ? (
        <div className="relative" style={{ transform: 'scale(0.9091)' }}>
          <div className="w-[40px] h-[40px] mb-4">
            <Image
              src={logoPath}
              alt={`${title} Logo`}
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="font-montserrat font-normal text-[24px] leading-[100%] text-black -mt-5">
            {title}
          </div>
          <div
            className="font-montserrat font-normal text-[16px] leading-[100%] mt-4 text-black opacity-50 capitalize"
            style={{ paddingBottom: '2.25px' }}
          >
            {description}
          </div>
        </div>
      ) : (
        <>
          <div className="w-[40px] h-[40px] mb-4">
            <Image
              src={logoPath}
              alt={`${title} Logo`}
              width={30}
              height={30}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="font-montserrat font-normal text-[24px] leading-[100%] text-black -mt-5">
            {title}
          </div>
          <div
            className="font-montserrat font-normal text-[16px] leading-[100%] mt-4 text-black opacity-50 capitalize"
            style={{ paddingBottom: '2.25px' }}
          >
            {description}
          </div>
        </>
      )}
    </motion.div>
  );
}
