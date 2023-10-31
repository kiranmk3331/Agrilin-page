import React from "react";
import NotificationIcon from "./assets/additional/messagenotifnotification.svg";
import SettingsIcon from "./assets/additional/setting3.svg";
import CallIcon from "./assets/additional/callcalling.svg";
import AdditionalList from "./AdditionalList";

const Additional = () => {
  const additionalData = [
    { name: "Notifications", icon: NotificationIcon, showArrow: false },
    { name: "Settings", icon: SettingsIcon, showArrow: true },
    { name: "Call Support", icon: CallIcon, showArrow: false },
  ];
  return (
    <div className="p-2 mt-2">
      <h2 className="font-medium">Additional</h2>
      <ul className="flex flex-col gap-9 pt-4">
        {additionalData.map((contents, index) => (
          <AdditionalList key={index} additional={contents} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Additional;
