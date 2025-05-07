import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavButton from "./NavButton";

const Header = () => {
  return (
    <>
      <div className="z-50 sticky top-0 bg-black backdrop-blur-md shadow-lg">
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
