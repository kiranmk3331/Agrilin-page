import React from "react";
import MainMenu from "./MainMenu";
import Additional from "./Additional";
import Insight from "./Insight";
import UpgradeConatainer from "./UpgradeConatainer";

const SidebarContainer = () => {
  return (
    <div className="hidden md:flex bg-white mt-1 shadow-sm flex-col pl-8 h-[100%]">
      <MainMenu />
      <Additional />
      <Insight />
      <UpgradeConatainer />
    </div>
  );
};

export default SidebarContainer;
