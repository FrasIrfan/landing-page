import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedPartners() {
  const logos = [
    {
      src: "/assets/logos/goalAs1.png",
      alt: "Goal CSL",
      w: 200,
      h: 130,
      tw: "w-[200px] h-[130px] sm:w-[170px] sm:h-[110px] md:w-[200px] md:h-[130px]",
    },
    {
      src: "/assets/logos/spectrasolar.png",
      alt: "Spectra Solar",
      w: 240,
      h: 140,
      tw: "w-[240px] h-[140px] sm:w-[200px] sm:h-[120px] md:w-[240px] md:h-[140px]",
    },
    {
      src: "/assets/logos/dillion.png",
      alt: "Dillion",
      w: 220,
      h: 160,
      tw: "w-[220px] h-[160px] sm:w-[180px] sm:h-[130px] md:w-[220px] md:h-[160px]",
    },
    {
      src: "/assets/logos/c17f6aae179ca0fd5a6bff40fa4cea85 1.png",
      alt: "Operita Solar",
      w: 160,
      h: 180,
      tw: "w-[160px] h-[180px] sm:w-[140px] sm:h-[160px] md:w-[160px] md:h-[180px]",
    },
    {
      src: "/assets/logos/LuminaryHealth.png",
      alt: "Luminary Health",
      w: 400,
      h: 110,
      tw: "w-[400px] h-[110px] sm:w-[280px] sm:h-[70px] md:w-[350px] md:h-[90px]",
    },
    {
      src: "/assets/logos/Liberty.png",
      alt: "Liberty",
      w: 420,
      h: 80,
      tw: "w-[420px] h-[80px] sm:w-[280px] sm:h-[50px] md:w-[350px] md:h-[70px]",
    },
  ];

  return (
    <section className="w-full bg-black flex justify-center">
      <div className="w-full flex items-center justify-center px-4 sm:px-8">
        {/* Parallax effect with Framer Motion */}
        <motion.div
          className="flex items-center justify-start gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 w-full"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 18, // Smooth duration
              ease: "easeInOut", // Better easing for natural movement
            },
          }}
        >
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center ${logo.tw} group`}
              style={{ transition: "transform 0.3s ease-out" }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }} // Hover effect for logos
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
