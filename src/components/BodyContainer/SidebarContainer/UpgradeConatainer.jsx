import React from "react";
import RightArrow from "./assets/right.svg";

const UpgradeConatainer = () => {
  return (
    <div className="mt-4 flex flex-col items-center bg-[#d5eacd] gap-3 p-4 rounded-md w-[70%] mx-auto relative right-8">
      <p className="font-medium text-sm">Upgrade your plan</p>
      <div className="flex justify-around w-full">
        <p className="text-sm">
          Go to <span className="font-medium">PRO</span>
        </p>
        <div className="border rounded-md flex items-center p-1 border-[#00A86B]">
          <img src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpgradeConatainer;
