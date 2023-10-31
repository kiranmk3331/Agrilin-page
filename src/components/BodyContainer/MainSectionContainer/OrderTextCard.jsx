import React from "react";
import Fire from "./assets/Fire.svg";

const OrderTextCard = () => {
  return (
    <div className="bg-white shadow p-2 flex rounded-md gap-2 mt-4 items-center">
      <img src={Fire} alt="" />
      <p className="font-lexend">Order Status</p>
    </div>
  );
};

export default OrderTextCard;
