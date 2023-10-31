import React from "react";
import Document from "./assets/insight/archivebook.svg";

const Insight = () => {
  return (
    <div className="p-2 mt-2">
      <h2 className="font-poppins">Insight</h2>
      <div className="flex flex-col gap-9 pt-4">
        <div className="flex gap-4 justify-between first:mt-2">
          <div className="flex gap-4 items-center">
            <img src={Document} alt="" />
            <p>Knowledge Hub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;
