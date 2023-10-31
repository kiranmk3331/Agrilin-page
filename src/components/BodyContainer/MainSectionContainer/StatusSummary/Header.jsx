import React from "react";
import DownArrow from "./assets/Caret down.svg";
import TwoArrow from "./assets/Icontwoarrow.svg";

const Header = () => {
  return (
    <div className="flex justify-between mt-4 p-4 items-center gap-4">
      <div className="flex">
        <div className="flex gap-6 w-40 items-center">
          <img src={TwoArrow} alt="" />
          <p>Date and ID</p>
        </div>
        <div>
          <p>Product Detail</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 ">
        <div className="flex gap-2 w-40 items-center">
          <p>Status</p>
          <img src={DownArrow} alt="" />
        </div>
        <div className="mr-14">
          <p>Contract PDF File</p>
        </div>
        <div>
          <p>Actions</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
