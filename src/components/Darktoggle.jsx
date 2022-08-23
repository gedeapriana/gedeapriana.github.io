import React from "react";
import { Moon, BrightnessLow } from "react-bootstrap-icons";
import $ from "jquery";

const Darktoggle = () => {
  // $(".darktoggle-root").on("click", function () {
  //   $(".toggle").toggleClass("left-0");
  //   $(".toggle").toggleClass("right-auto");
  // });

  // const toggleRoot = document.querySelector(".darktoggle-root");

  // toggleRoot.addEventListener("click", function () {
  //   console.log("OK");
  // });

  const toggleListener = () => {
    $(".toggle").toggleClass("left-0");
    $(".toggle").toggleClass("left-auto");
    $(".toggle").toggleClass("right-0");
    $(".toggle").toggleClass("right-auto");
    $(".darktoggle-root").toggleClass("bg-slate-700");
  };

  return (
    <div
      onClick={toggleListener}
      className="darktoggle-root w-16 h-8 bg-slate-50 ml-auto md:ml-4 mx-4 rounded-full relative flex justify-between items-center px-1 cursor-pointer transition duration-500"
    >
      <div className="toggle absolute h-6 w-6 rounded-full bg-red-400 top-0 left-0 bottom-0 right-auto my-auto mx-1 transition duration-500"></div>
      <div className="moon">
        <Moon className="block text-slate-50" />
      </div>
      <div className="sun">
        <BrightnessLow className="block text-2xl text-yellow-300" />
      </div>
    </div>
  );
};

export default Darktoggle;
