import React from "react";

const Tab = ({ setOpenTab, planetName }) => {
  return (
    <li className="list-none">
      <a
        className="p-2 uppercase"
        onClick={(e) => {
          e.preventDefault();
          setOpenTab();
        }}
        data-toggle="tab"
        href={planetName}
        role="tablist"
      >
        {planetName}
      </a>
    </li>
  );
};

export default Tab;
