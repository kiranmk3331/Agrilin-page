import React from "react";
import RightArrow from "./assets/ic_Chevronright-arrow.svg";

const AdditionalList = ({ additional, index }) => {
  return (
    <li className="flex gap-4 justify-between first:mt-2">
      <div className="flex gap-4 items-center">
        <img src={additional.icon} alt="" />
        <p>{additional.name}</p>
      </div>
      <div>
        {index === 0 ? (
          <div className="bg-[#FC6C6C] text-white p-1 rounded-md text-xs mr-4">
            218
          </div>
        ) : (
          ""
        )}
      </div>

      {additional.showArrow ? (
        <img src={RightArrow} alt="" className="mr-6" />
      ) : (
        ""
      )}
    </li>
  );
};

export default AdditionalList;
