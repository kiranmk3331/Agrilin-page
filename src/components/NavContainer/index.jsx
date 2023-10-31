import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const NavContainer = () => {
  return (
    <div className="w-full bg-white shadow flex flex-col md:flex-row justify-around items-center">
      <Logo />
      <Links />
    </div>
  );
};

export default NavContainer;
