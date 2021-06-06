import React, { useState } from "react";
import Tab from "./Tab";

const BurgerMenu = ({ data, setOpenTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden relative flex items-center justify-between">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none relative w-10 h-10 mr-2 text-white bg-transparent z-50"
      >
        <div className="left-1/2 top-1/2 absolute block w-5 transform -translate-x-1/2 -translate-y-1/2">
          <span
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isOpen ? " rotate-45" : " -translate-y-1.5"
            } `}
          ></span>
          <span
            className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
              isOpen ? " opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ranslate-y-1.5 ${
              isOpen ? " -rotate-45" : " translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      <div
        className={`fixed top-0 left-0 z-40 w-full bg-[#070625] h-full duration-700 transform ${
          !isOpen ? "-translate-x-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center flex-1 mt-16 text-3xl">
          {data.map((item, index) => (
            <div onClick={() => setIsOpen(!isOpen)}>
              <Tab
                key={item.name}
                setOpenTab={() => setOpenTab(index + 1)}
                planetName={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;
