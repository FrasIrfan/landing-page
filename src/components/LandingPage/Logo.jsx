"use client";

import React from "react";
import Link from "next/link";

const Logo = () => (
  <div className="flex items-center">
    <Link href="/" className="flex items-center">
      <img 
        src="/assets/logos/Aglivo Logo(large).png"
        alt="Aglivo Logo"
        className="h-12 md:h-16 w-auto object-contain"
      />
    </Link>
  </div>
);

export default Logo;