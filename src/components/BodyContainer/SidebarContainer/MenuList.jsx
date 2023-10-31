import React from "react";

const MenuList = ({ menu }) => {
  return (
    <li className="flex gap-4 first:text-[#007965]">
      <img src={menu.icon} alt="" />
      <p>{menu.name}</p>
    </li>
  );
};

export default MenuList;
