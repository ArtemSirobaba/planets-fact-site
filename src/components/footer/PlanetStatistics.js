import React from "react";

const PlanetStatistics = ({ info, text }) => {
  return (
    <div className="md:flex-wrap h-12 sm:h-auto sm:w-56 sm:flex-col flex items-center justify-between w-full p-4 m-2 uppercase border-2 border-gray-500 rounded-sm">
      <p className="text-[15px] text-gray-500">{text}</p>
      <h5 className="text-2xl font-bold">{info}</h5>
    </div>
  );
};

export default PlanetStatistics;
