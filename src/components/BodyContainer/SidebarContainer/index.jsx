import React from "react";
import MainMenu from "./MainMenu";

const SidebarContainer = () => {
  return (
    <div className="hidden md:flex bg-white mt-1 shadow-sm flex-col pl-8">
      <MainMenu />
    </div>
  );
};

export default SidebarContainer;
