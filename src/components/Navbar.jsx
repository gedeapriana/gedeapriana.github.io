import React from "react";
import "./css/navbar.css";
import "./css/fonts.css";
import "./css/classes.css";
import "./css/dark-toggle.css";
import { List } from "react-bootstrap-icons";
import Darktoggle from "./Darktoggle";

const Navbar = () => {

  window.addEventListener('scroll', function () {
    let scrollY = this.scrollY;
    if(scrollY > 0) {
      document.querySelector('.navbar-root').classList.add("bg-slate-900");
      document.querySelector('.navbar-root').classList.add("border-b");
      document.querySelector('.navbar-root').classList.add("border-slate-400");
      document.querySelector('.navbar-root').classList.add("dark:border-slate-700");
      document.querySelector('.navbar-root').classList.add("bg-opacity-25");
      document.querySelector('.navbar-root').classList.add("backdrop-blur-lg");
    } else {
      document.querySelector('.navbar-root').classList.remove("bg-slate-900");
      document.querySelector('.navbar-root').classList.remove("border-b");
      document.querySelector('.navbar-root').classList.remove("border-slate-400");
      document.querySelector('.navbar-root').classList.remove("dark:border-slate-700");
      document.querySelector('.navbar-root').classList.remove("bg-opacity-25");
      document.querySelector('.navbar-root').classList.remove("backdrop-blur-lg");
    }
  })

  return (
    <div className="navbar-root fixed z-10 w-full h-20 local-primary-font">
      <div className="navbar-wrapper h-full w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-brand">
          <a
            href={"#link"}
            className="text-white text-2xl local-primary-font font-bold"
          >
            GedeApriana
          </a>
        </div>
        <div className="navbar-list w-[380px] hidden md:inline-block ml-auto">
          <ul className="w-full flex justify-between items-center">
            <li>
              <a
                className="local-primary-font text-slate-200 font-semibold active:text-slate-50"
                href={"#link"}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="local-primary-font text-slate-300 font-medium hover:text-slate-50"
                href={"#link"}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="local-primary-font text-slate-300 font-medium hover:text-slate-50"
                href={"#link"}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="local-primary-font text-slate-300 font-medium hover:text-slate-50"
                href={"#link"}
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="text-slate-50 local-primary-font active:text-slate-50 inline-block bg-violet-500 hover:bg-blue-300 transition-all py-2 px-4 rounded-md mx-1 font-semibold"
                href={"#link"}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <Darktoggle />

        <div className="hamburger-menu md:hidden border border-slate-700 rounded-lg p-1">
          <List className="text-white text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
