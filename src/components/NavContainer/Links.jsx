import React from "react";
import EditIcon from "./assets/ic_Write_messageEdit-svg.svg";
import EmailIcon from "./assets/Group 1000001816mail.svg";
import ProfileIcon from "./assets/avatarprofile-pic.svg";
import DownArrow from "./assets/Caret down.svg";

const Links = () => {
  return (
    <div className="flex w-full  md:justify-end justify-around font-lexend">
      <div className="flex gap-8 items-center p-4 justify-around md:justify-end">
        <div className="flex items bg-[#00A86B] rounded-md p-2 items-center gap-2">
          <img src={EditIcon} alt="" className="w-4 h-4" />
          <p className="text-[#FAFAFB]">Talk to our Sales team</p>
        </div>
        <img src={EmailIcon} alt="" />
        <div className="flex items-center gap-4">
          <img src={ProfileIcon} alt="" />
          <div>
            <p className="text-sm font-medium">Austin Robertson</p>
            <p className="text-sm text-[#92929D]">Spice Brands</p>
          </div>
          <img src={DownArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Links;
