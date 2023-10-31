import React from "react";
import ThreeDot from "./assets/threedot.svg";

const OrderList = ({ order }) => {
  return (
    <li className="bg-white first:bg-[#E3FFD8] py-4 shadow col-span-1 flex flex-col items-center rounded-md">
      <div className="flex justify-end w-full pr-2">
        <img src={ThreeDot} alt="" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src={order.icon} alt="" className="w-10 h-10" />
        <p className={`text-[#${order.color}]`}>{order.name}</p>
        <h1 className="text-2xl font-bold">{order.value}</h1>
      </div>
    </li>
  );
};

export default OrderList;
