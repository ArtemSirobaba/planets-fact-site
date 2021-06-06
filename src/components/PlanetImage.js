import React from "react";

const PlanetImage = ({ openTab, planetInfo }) => {
  return (
    <div className="h-1/2 w-full sm:w-2/3 relative flex justify-center p-10">
      <img
        className="w-full h-full md:h-[30rem]"
        src={
          openTab !== 2
            ? process.env.PUBLIC_URL + planetInfo.images.planet
            : process.env.PUBLIC_URL + planetInfo.images.internal
        }
        alt="planet"
      />

      {openTab === 3 ? (
        <div className="absolute top-[45%] left-[20%] md:bottom-[10px] sm:right-1/2  md:left-[28%]">
          <img
            className="w-1/2 sm:w-[12rem]"
            src={process.env.PUBLIC_URL + planetInfo.images.geology}
            alt="planet"
          />
        </div>
      ) : null}
    </div>
  );
};

export default PlanetImage;
