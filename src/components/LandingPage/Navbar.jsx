"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-8 w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-16 max-w-[1440px]">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/assets/logos/Aglivo Logo(large).png"
              alt="Aglivo Logo"
              className="h-12 md:h-16 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-white text-xl md:text-2xl font-bold hidden">AGLIVO</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6 md:space-x-12 items-center">
          <Link href="/" className="text-white hover:text-gray-300 nav-link uppercase text-sm md:text-base tracking-wider">HOME</Link>
          <Link href="/about" className="text-white hover:text-gray-300 nav-link uppercase text-sm md:text-base tracking-wider">ABOUT</Link>
          <Link href="/services" className="text-white hover:text-gray-300 nav-link uppercase text-sm md:text-base tracking-wider">SERVICES</Link>
          <Link href="/projects" className="text-white hover:text-gray-300 nav-link uppercase text-sm md:text-base tracking-wider">PROJECTS</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 nav-link uppercase text-sm md:text-base tracking-wider">CONTACT</Link>
        </div>
        
        <button className="bg-white text-black hover:bg-gray-200 rounded-full border border-gray-500 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
