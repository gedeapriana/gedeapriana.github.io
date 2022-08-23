import React from "react";
import { Moon, BrightnessLow } from "react-bootstrap-icons";

const Darktoggle = () => {
  return (
    <div className="darktoggle-root w-16 h-8 bg-slate-50 ml-auto md:ml-4 mx-4 rounded-full relative flex justify-between items-center px-1">
      <div className="toggle absolute h-6 w-6 rounded-full bg-red-400 top-0 left-0 bottom-0 right-0 m-auto"></div>
      <div className="moon">
        <Moon className="block" />
      </div>
      <div className="sun">
        <BrightnessLow className="block text-2xl" />
      </div>
    </div>
  );
};

export default Darktoggle;
