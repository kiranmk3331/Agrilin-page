import React from "react";
import DownArrow from "./assets/Caret down.svg";
import TwoArrow from "./assets/Icontwoarrow.svg";

const Header = () => {
  return (
    <div className="overflow-x-scroll md:overflow-x-auto flex justify-between mt-4 items-center">
      <div className="flex gap-6 items-center min-w-[200px] md:min-w-fit">
        <img src={TwoArrow} alt="" />
        <p>Date and ID</p>
      </div>
      <div className="relative right-12  min-w-[200px]  md:min-w-fit">
        <p>Product Detail</p>
      </div>

      <div className="flex gap-2 items-center relative right-2  min-w-[200px]  md:min-w-fit">
        <p>Status</p>
        <img src={DownArrow} alt="" />
      </div>
      <div className="relative right-12  min-w-[200px]  md:min-w-fit">
        <p>Contract PDF File</p>
      </div>
      <div className="relative right-20  min-w-[200px]  md:min-w-fit">
        <p>Actions</p>
      </div>
    </div>
  );
};

export default Header;
