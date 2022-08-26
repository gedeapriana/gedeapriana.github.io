import React from "react";
import "./css/skills.css";
import "./css/fonts.css";
import "./css/classes.css";
import {CaretUp} from "react-bootstrap-icons";

const Totop = () => {

  window.addEventListener('scroll', function () {
    let scrollY = this.scrollY;
    if(scrollY > 0) {
      document.querySelector(".totop-root").classList.remove("translate-x-28")
    } else {
      document.querySelector(".totop-root").classList.add("translate-x-28")
    }
  })
  return (
    <div className={"totop-root translate-x-28 transition-all duration-500 fixed right-0 z-10 bottom-0 md:w-16 md:h-16 w-12 h-12 bg-red-500 flex items-center justify-center rounded-full overflow-hidden md:m-8 m-4"}>
      <a href={"#home-root"} className={"w-full h-full text-slate-50 block md:text-3xl text-lg bg-violet-500 items-center flex justify-center"}><CaretUp /></a>
    </div>
  );
};

export default Totop;