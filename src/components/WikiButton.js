import React from "react";

const WikiButton = ({ source }) => {
  return (
    <div className="flex justify-center sm:justify-start sm:items-center">
      <p className="text-gray-400 pr-2">Source:</p>
      <a className="underline text-[18px]" rel="noreferrer" target="_blank" href={source}>
        Wikipedia
      </a>
    </div>
  );
};

export default WikiButton;
