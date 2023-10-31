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
    { name: "Dashboard", icon: DashboardIcon },
    { name: "Market Place", icon: MarketIcon },
    { name: "Service", icon: BuyIcon },
    { name: "My Order", icon: DocumentIcon },
    { name: "Create trade", icon: CreateIcon },
    { name: "Profile info", icon: ProfileIcon },
  ];

  return (
    <div className="p-2">
      <h2 className="font-poppins">Main Menu</h2>
      <ul className="flex flex-col gap-4 pt-4">
        {menuContents.map((contents, index) => (
          <MenuList key={index} menu={contents} />
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
