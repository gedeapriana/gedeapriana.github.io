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

  const html = document.querySelector("html");
  const toggle = document.querySelector(".toggle");
  const darkToggleRoot = document.querySelector(".darktoggle-root");

  const toggleListener = () => {
    // $("html").toggleClass("dark");
    // $(".toggle").toggleClass("left-0");
    // $(".toggle").toggleClass("left-auto");
    // $(".toggle").toggleClass("right-0");
    // $(".toggle").toggleClass("right-auto");
    // $(".darktoggle-root").toggleClass("bg-slate-700");
    html.classList.toggle("dark");
    toggle.classList.toggle("left-0");
    toggle.classList.toggle("left-auto");
    toggle.classList.toggle("right-0");
    toggle.classList.toggle("right-auto");
    darkToggleRoot.classList.toggle("bg-slate-700");
    // console.log("OK");
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
        <BrightnessLow className="block text-2xl text-yellow-300" />
      </div>
    </div>
  );
};

export default Darktoggle;
