import React, { useState } from "react";
import Tab from "./header/Tab";
import data from "./data/data.json";
import Planet from "./Planet";
import BurgerMenu from "./header/BurgerMenu";

const PlanetPages = () => {
  const [openTab, setOpenTab] = useState(1);
  const [overFlow, setOverFlow] = useState(false);
  return (
    <div
      className={`flex flex-wrap min-h-screen text-white ${
        overFlow ? "overflow-hidden h-screen" : ""
      }`}
    >
      <div className="sm:justify-center sm:flex sm:flex-col md:flex-row md:justify-between flex items-center justify-between w-full h-20 border-b-2 border-gray-600">
        <div className="flex ml-3">
          <h1 className="text-2xl font-bold uppercase">The Planets</h1>
        </div>
        <div className="sm:flex hidden list-none" role="tablist">
          {data.map((item, index) => (
            <Tab
              key={item.name}
              setOpenTab={() => setOpenTab(index + 1)}
              planetName={item.name}
            />
          ))}
        </div>

        <BurgerMenu
          data={data}
          setOpenTab={(value) => setOpenTab(value)}
          setOverFlow={() => setOverFlow(!overFlow)}
        />
      </div>
      {data.map((planet, index) => (
        <div
          className={`w-full ${openTab === index + 1 ? "block" : "hidden"}`}
          key={planet.name}
        >
          <Planet planetInfo={planet} />
        </div>
      ))}
    </div>
  );
};

export default PlanetPages;
