"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavButton from "./NavButton";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only make transparent if scrolling up and not at the very top
      if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`z-50 transition-all duration-500 ease-in-out ${
          isTransparent
            ? "bg-black/30 backdrop-blur-lg shadow-none"
            : "bg-black backdrop-blur-md shadow-lg"
        }`}
        style={{
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex items-center justify-between w-full px-0 py-4">
          <div className="pl-12 md:pl-20">
            <Logo />
          </div>
          <div className="flex-1 flex justify-center">
            <Navbar />
          </div>
          <div className="pr-12 md:pr-20">
            <NavButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
