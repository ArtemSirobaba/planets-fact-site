import React from "react";

const PlanetTab = ({ setOpenTab, list, number, color }) => {
  return (
    <div
      className={`w-full border-2 p-2 mb-3 border-gray-700 rounded-sm cursor-pointer ${color}`}
      onClick={(e) => {
        e.preventDefault();
        setOpenTab();
      }}
    >
      <div className="flex" data-toggle="tab" href="#link1" role="tablist">
        <p className=" text-gray-400 pl-4 pr-4">{number}</p>
        <h6 className="uppercase">{list}</h6>
      </div>
    </div>
  );
};

export default PlanetTab;
