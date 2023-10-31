import React from "react";
import EyeIcon from "./assets/Iconeyr.svg";
import EditIcon from "./assets/IconEdit-icon.svg";
import CrossIcon from "./assets/Iconcross-icon.svg";
import CancelledIcon from "./assets/Shape.svg";
import DisputeIcon from "./assets/Iconbox-icon.svg";
import OrderList from "./OrderList";

const OrderCard = () => {
  const orderStatusData = [
    { name: "Pending", icon: EyeIcon, value: "12,840", color: "00A86B" },
    { name: "Open", icon: EditIcon, value: "12,840", color: "38B000" },
    { name: "Closed", icon: CrossIcon, value: "12,840", color: "E84A4D" },
    {
      name: "Cancelled",
      icon: CancelledIcon,
      value: "12,840",
      color: "FD6A3C",
    },
    { name: "Dispute", icon: DisputeIcon, value: "12,840", color: "FFB600" },
  ];
  return (
    <ul className="mt-4 grid grid-cols-5 gap-8">
      {orderStatusData.map((order, index) => (
        <OrderList key={index} order={order} />
      ))}
    </ul>
  );
};

export default OrderCard;
