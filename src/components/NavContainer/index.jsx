import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const NavContainer = () => {
  return (
    <div className="w-full bg-white shadow grid grid-cols-2 items-center">
      <Logo />
      <Links />
    </div>
  );
};

export default NavContainer;
