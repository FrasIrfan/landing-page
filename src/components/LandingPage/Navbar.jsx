"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center w-full">
      <div className="w-[320px] sm:w-[400px] md:w-[487px] h-[48px] md:h-[60px] rounded-[80px] md:rounded-[160px] border border-[#FFFDF94D]/30 p-[6px] md:p-[10px] flex items-center justify-center max-w-full overflow-x-auto bg-transparent">
        <Link
          href="/"
          className="font-montserrat font-normal text-[10px] md:text-[12px] leading-[20px] md:leading-[24px] tracking-[-0.1px] uppercase align-middle text-white mx-2 md:mx-4 whitespace-nowrap"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="font-montserrat font-normal text-[10px] md:text-[12px] leading-[20px] md:leading-[24px] tracking-[-0.1px] uppercase align-middle text-white mx-2 md:mx-4 whitespace-nowrap"
        >
          ABOUT
        </Link>
        <Link
          href="/services"
          className="font-montserrat font-normal text-[10px] md:text-[12px] leading-[20px] md:leading-[24px] tracking-[-0.1px] uppercase align-middle text-white mx-2 md:mx-4 whitespace-nowrap"
        >
          SERVICES
        </Link>
        <Link
          href="/projects"
          className="font-montserrat font-normal text-[10px] md:text-[12px] leading-[20px] md:leading-[24px] tracking-[-0.1px] uppercase align-middle text-white mx-2 md:mx-4 whitespace-nowrap"
        >
          PROJECTS
        </Link>
        <Link
          href="/contact"
          className="font-montserrat font-normal text-[10px] md:text-[12px] leading-[20px] md:leading-[24px] tracking-[-0.1px] uppercase align-middle text-white mx-2 md:mx-4 whitespace-nowrap"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
