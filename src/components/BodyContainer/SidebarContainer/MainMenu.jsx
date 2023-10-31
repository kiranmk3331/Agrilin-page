import React from "react";
import DashboardIcon from "./assets/mainmenu/ic_Dashboard.svg";
import MarketIcon from "./assets/mainmenu/iconoir_shopping-bag-remove.svg";
import BuyIcon from "./assets/mainmenu/Buy.svg";
import DocumentIcon from "./assets/mainmenu/Document.svg";
import CreateIcon from "./assets/mainmenu/Edit Square.svg";
import ProfileIcon from "./assets/mainmenu/profiletick.svg";
import MenuList from "./MenuList";

const MainMenu = () => {
  const menuContents = [
    { name: "Dashboard", icon: DashboardIcon, showArrow: false },
    { name: "Market Place", icon: MarketIcon, showArrow: true },
    { name: "Service", icon: BuyIcon, showArrow: true },
    { name: "My Order", icon: DocumentIcon, showArrow: true },
    { name: "Create trade", icon: CreateIcon, showArrow: true },
    { name: "Profile info", icon: ProfileIcon, showArrow: false },
  ];

  return (
    <div className="p-2">
      <h2 className="font-poppins">Main Menu</h2>
      <ul className="flex flex-col gap-9 pt-4">
        {menuContents.map((contents, index) => (
          <MenuList key={index} menu={contents} />
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
