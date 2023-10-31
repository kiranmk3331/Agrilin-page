import React from "react";
import RightArrow from "./assets/ic_Chevronright-arrow.svg";

const MenuList = ({ menu }) => {
  return (
    <li className="flex gap-4 first:text-[#007965] justify-between first:mt-2">
      <div className="flex gap-4 items-center">
        <img src={menu.icon} alt="" />
        <p>{menu.name}</p>
      </div>
      {menu.showArrow ? <img src={RightArrow} alt="" className="mr-6" /> : ""}
    </li>
  );
};

export default MenuList;
