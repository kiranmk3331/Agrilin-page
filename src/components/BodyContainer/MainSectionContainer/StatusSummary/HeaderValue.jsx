import React from "react";
import Tick from "./assets/IconTick.svg";
import Doc from "./assets/Framedoc.svg";
import RightArrow from "./assets/Iconright.svg";

const HeaderValue = () => {
  return (
    <div className="bg-[#d4e8d9] rounded-md flex justify-between mt-4 p-4 ml-2 items-center gap-4">
      <div className="flex gap-10">
        <div className="">
          <p className="text-[#242426]">01.02.2021</p>
          <p className="text-[#6D7D78] text-xs">ID 0001894</p>
        </div>
        <div className="ml-6">
          <p className="text-[#242426]">Cumin Seeds (Whole Jeera)</p>
          <p className="text-[#6D7D78] text-xs">
            Volume : 70 kG . Price INR 66
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-2 w-40 items-center">
          <img src={Tick} alt="" />
          <p className="text-[#6D7D78]">Active</p>
        </div>
        <div className="mr-10 gap-2 flex">
          <img src={Doc} alt="" />
          <p className="text-[#6D7D78]">Download PDF</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#85A69B]">VIEW ORDER</p>
          <img src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderValue;
