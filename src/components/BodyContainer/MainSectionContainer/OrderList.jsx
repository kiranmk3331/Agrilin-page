import React from "react";
import ThreeDot from "./assets/threedot.svg";

const OrderList = ({ order }) => {
  return (
    <li className="bg-white first:bg-[#F7FFF4] py-4 shadow flex flex-col items-center rounded-md w-full">
      <div className="flex justify-end w-full pr-2">
        <img src={ThreeDot} alt="" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <img src={order.icon} alt="" className="w-10 h-10" />
        <p
          style={{ color: order.color }}
          className="font-lexend font-medium uppercase text-xs mt-2"
        >
          {order.name}
        </p>
        <h1 className="text-2xl font-bold font-lexend">{order.value}</h1>
      </div>
    </li>
  );
};

export default OrderList;
