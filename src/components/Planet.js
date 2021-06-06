import React, { useState } from "react";
import PlanetTab from "./PlanetTab";
import PlanetStatistics from "./footer/PlanetStatistics";
import WikiButton from "./WikiButton";
import PlanetImage from "./PlanetImage";

const Planet = ({ planetInfo }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="h-full">
      <div className="sm:items-center sm:flex sm:flex-col md:flex-row">
        <PlanetImage openTab={openTab} planetInfo={planetInfo}/>

        <div className="flex flex-col text-center sm:flex-row sm:items-center md:w-[30%] md:flex-col">
          <div className="sm:flex sm:flex-col sm:text-left sm:ml-3 sm:w-[60%] md:w-full">
            <h1 className="pb-6 text-5xl">{planetInfo.name}</h1>
            <div
              className={`pb-6 ${openTab === 1 ? "block" : "hidden"}`}
              id="link1"
            >
              <p className="sm:m-0 pb-6 m-2">{planetInfo.overview.content}</p>
              <WikiButton source={planetInfo.overview.source} />
            </div>
            <div
              className={`pb-6 ${openTab === 2 ? "block" : "hidden"}`}
              id="link1"
            >
              <p className="sm:m-0 pb-6 m-2">{planetInfo.structure.content}</p>
              <WikiButton source={planetInfo.structure.source} />
            </div>
            <div
              className={`pb-6 ${openTab === 3 ? "block" : "hidden"}`}
              id="link1"
            >
              <p className="sm:m-0 pb-6 m-2">{planetInfo.geology.content}</p>
              <WikiButton source={planetInfo.geology.source} />
            </div>
          </div>

          <div className="sm:w-1/2 md:w-full m-2" role="tablist">
            <PlanetTab
              number={"01"}
              setOpenTab={() => setOpenTab(1)}
              list="Overview"
              color={openTab === 1 ? "bg-[#6D2ED5]" : ""}
            />
            <PlanetTab
              number={"02"}
              setOpenTab={() => setOpenTab(2)}
              list="internal structure"
              color={openTab === 2 ? "bg-[#6D2ED5]" : ""}
            />
            <PlanetTab
              number={"03"}
              setOpenTab={() => setOpenTab(3)}
              list="surface geology"
              color={openTab === 3 ? "bg-[#6D2ED5]" : ""}
            />
          </div>
        </div>
      </div>
      <div className="md:flex-row flex flex-wrap justify-around pt-8">
        <PlanetStatistics info={planetInfo.rotation} text="rotation time" />
        <PlanetStatistics info={planetInfo.revolution} text="revolution time" />
        <PlanetStatistics info={planetInfo.radius} text="radius" />
        <PlanetStatistics info={planetInfo.temperature} text="average temp" />
      </div>
    </div>
  );
};

export default Planet;
