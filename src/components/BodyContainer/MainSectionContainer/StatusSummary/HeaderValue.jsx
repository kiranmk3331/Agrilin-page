import React from "react";
import Tick from "./assets/IconTick.svg";
import Doc from "./assets/Framedoc.svg";
import RightArrow from "./assets/Iconright.svg";

const HeaderValue = () => {
  return (
    <div className="bg-[#d4e8d9] rounded-md flex justify-between mt-4  p-4">
      <div className="">
        <p className="text-[#242426] text-sm">01.02.2021</p>
        <p className="text-[#6D7D78] text-xs">ID 0001894</p>
      </div>
      <div className="ml-6">
        <p className="text-[#242426] text-sm">Cumin Seeds (Whole Jeera)</p>
        <p className="text-[#6D7D78] text-xs">Volume : 70 kG . Price INR 66</p>
      </div>

      <div className="flex gap-2 items-center">
        <img src={Tick} alt="" />
        <p className="text-[#6D7D78] text-sm">Active</p>
      </div>
      <div className="flex gap-2 items-center">
        <img src={Doc} alt="" className="w-6 h-6" />
        <p className="text-[#6D7D78] text-sm">Download PDF</p>
      </div>
      <div className="flex gap-2  items-center">
        <p className="text-[#85A69B] text-sm">VIEW ORDER</p>
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
};

export default HeaderValue;
