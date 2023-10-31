import React from "react";
import DownArrow from "./assets/Caret down.svg";
import Header from "./Header";
import HeaderValue from "./HeaderValue";

const StatusSummary = () => {
  return (
    <div className="bg-white border border-[#CBDDA1] shadow p-6 mt-6 rounded-md items-center w-full">
      <div className="flex justify-between">
        <h1 className="text-[#242731] font-medium">Order Status Summary</h1>
        <div className="flex gap-2 items-center">
          <p className="text-sm text-[#283D36]">For all period 0 - 04</p>
          <img src={DownArrow} alt="" className="w-2 h-2" />
        </div>
      </div>
      <Header />
      <HeaderValue />
    </div>
  );
};

export default StatusSummary;
