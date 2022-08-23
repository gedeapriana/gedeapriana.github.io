import React from "react";
import { Moon, BrightnessLow } from "react-bootstrap-icons";

function Darktoggle() {
  const toggleListener = () => {
    document.querySelector("html").classList.toggle("dark");
    document.querySelector(".toggle").classList.toggle("left-0");
    document.querySelector(".toggle").classList.toggle("left-auto");
    document.querySelector(".toggle").classList.toggle("right-0");
    document.querySelector(".toggle").classList.toggle("right-auto");
    document.querySelector(".darkToggleRoot").classList.toggle("bg-slate-700");
  };

  return (
    <div
      onClick={toggleListener}
      className="darktoggle-root w-14 h-6 bg-slate-50 ml-auto md:ml-4 mx-4 rounded-full relative flex justify-between items-center px-1 cursor-pointer transition duration-500"
    >
      <div className="toggle absolute h-4 w-4 rounded-full bg-violet-400 top-0 left-0 bottom-0 right-auto my-auto mx-1 transition duration-500"></div>
      <div className="moon">
        <Moon className="block text-slate-50" />
      </div>
      <div className="sun">
        <BrightnessLow className="block text-1xl text-yellow-300" />
      </div>
    </div>
  );
}

export default Darktoggle;
