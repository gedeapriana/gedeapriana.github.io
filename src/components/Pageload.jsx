import React from "react";
import "./css/fonts.css";
import "./css/classes.css";
import gif from './assets/page-load/giphy.gif'

const Pageload = () => {
  // window.addEventListener('load', function () {
  //   document.querySelector('.pageload-root').classList.add('hidden')
  // })

  setTimeout(() => {
    document.querySelector('.pageload-root').classList.add("hidden");
  }, 3000)

  return <div className={"w-full pageload-root h-full bg-slate-900 fixed z-50 flex items-center flex-col justify-center select-none gap-5"}>
    <img src={gif} alt="Kucing Terbang" className={"animate-bounce"}/>
    <div className="md:text-4xl text-lg transition animate-pulse local-primary-font text-white text-center font-semibold local-bit-font">Sabar ya anjing,<br/>Page nya masih di load...</div>
  </div>
}

export default Pageload;
