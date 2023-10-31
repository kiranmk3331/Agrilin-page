import React from "react";
import DownArrow from "./assets/Caret down.svg";
import TwoArrow from "./assets/Icontwoarrow.svg";

const Header = () => {
  return (
    <div className="flex justify-between mt-4 items-center">
      <div className="flex gap-6 items-center">
        <img src={TwoArrow} alt="" />
        <p>Date and ID</p>
      </div>
      <div className="relative right-12">
        <p>Product Detail</p>
      </div>

      <div className="flex gap-2 items-center relative right-2">
        <p>Status</p>
        <img src={DownArrow} alt="" />
      </div>
      <div className="relative right-12">
        <p>Contract PDF File</p>
      </div>
      <div className="relative right-20">
        <p>Actions</p>
      </div>
    </div>
  );
};

export default Header;
